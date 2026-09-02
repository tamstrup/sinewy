import s from 'sin'
import t from 'sin/test'
import { EditorView } from '@codemirror/view'
import { CompletionContext } from '@codemirror/autocomplete'
import { EditorState } from '@codemirror/state'
import { PostgreSQL, schemaCompletionSource, sql } from '@codemirror/lang-sql'
import App from '../src/app.js'
import { PREFERENCES_KEY } from '../src/i18n/format.js'
import { QUERY_STORAGE_KEY, schemas } from '../src/query/model.js'

t.timeout = 10000

t`query workspace`(
  t`loads directly with a real SQL editor, empty grid, schema and grouping panel`(() =>
    fixture((host) => {
      t.is('/query', location.pathname)
      t.is('page', host.querySelector('a[href="/query"]').getAttribute('aria-current'))
      t.is(0, host.querySelectorAll('.ag-row').length)
      t.is(true, !!host.querySelector('.ag-column-drop-horizontal'))
      t.is(4, host.querySelectorAll('details').length)
      t.is(true, button(host, 'Run query').disabled)
      t.is('', editor(host).state.doc.toString())
      t.is(true, host.textContent.includes('SQL is not executed'))
      return [true, !!host.querySelector('aside#accounts-sidebar')]
    })
  ),
  t`SQL autocomplete provides tables and qualified column names`(() => {
    const complete = schemaCompletionSource({ schema: schemas, dialect: PostgreSQL })
    const state = (doc) =>
      EditorState.create({
        doc,
        extensions: [sql({ dialect: PostgreSQL, schema: schemas })],
      })
    const tables = 'SELECT * FROM '
    const tableResult = complete(
      new CompletionContext(state(tables), tables.length, true),
    )
    for (const table of Object.keys(schemas)) {
      t.is(
        true,
        tableResult.options.some((x) => x.label === table),
      )
    }
    const columns = 'SELECT ledger_entries.'
    const result = complete(
      new CompletionContext(state(columns), columns.length, true),
    )
    return [true, result.options.some((x) => x.label === 'amount')]
  }),
  t`actual editor completes lowercase SQL without rewriting existing text`(() =>
    fixture(async (host) => {
      setSql(host, 'sel')
      await settle()
      const view = editor(host)
      const sources = view.state.languageDataAt('autocomplete', 3)
      const results = await Promise.all(
        sources.filter((x) => typeof x === 'function').map((source) =>
          source(new CompletionContext(view.state, 3, true))
        ),
      )
      const options = results.flatMap((x) => x?.options || [])
      t.is(true, options.some((x) => x.label === 'select'))
      t.is(false, options.some((x) => x.label === 'SELECT'))
      setSql(host, 'SELECT "MixedCase" FROM accounts;')
      await settle()
      return ['SELECT "MixedCase" FROM accounts;', view.state.doc.toString()]
    })
  ),
  t`nested split resizing preserves editor and grid, with internal scrolling only`(() =>
    fixture(async (host) => {
      // Give both panes resizing room independently of Chrome's tiny default test window.
      host.style.cssText =
        'position:fixed;top:0;left:0;width:1280px;height:720px;overflow:hidden;z-index:1000'
      host.firstElementChild.style.height = '720px'
      await settle()
      const view = editor(host)
      const grid = host.querySelector('.ag-root')
      const sidebar = host.querySelector('#entx-workspace > [data-split-divider]')
      const query = host.querySelector('#query-split > [data-split-divider]')
      const pane = host.querySelector('#query-split > [data-split-start]')
      const width = host.querySelector('#accounts-sidebar').getBoundingClientRect().width
      const height = pane.getBoundingClientRect().height
      sidebar.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true, cancelable: true }),
      )
      query.dispatchEvent(
        new KeyboardEvent('keydown', {
          key: 'ArrowDown',
          shiftKey: true,
          bubbles: true,
          cancelable: true,
        }),
      )
      await settle()
      check(
        host.querySelector('#accounts-sidebar').getBoundingClientRect().width < width,
        'sidebar shrinks',
      )
      check(pane.getBoundingClientRect().height > height, 'editor pane grows')
      t.is(view, editor(host))
      t.is(grid, host.querySelector('.ag-root'))
      setSql(host, 'select * from ledger_entries;\n' + '-- more SQL\n'.repeat(100))
      await settle()
      button(host, 'Run query').click()
      await until(() => host.querySelectorAll('.ag-row').length > 0)
      const main = host.querySelector('main')
      const scroller = host.querySelector('.cm-scroller')
      check(
        main.scrollHeight <= main.clientHeight + 1,
        `main overflow: ${main.scrollHeight}/${main.clientHeight}`,
      )
      check(scroller.scrollHeight > scroller.clientHeight, 'editor scrolls internally')
      check(
        host.querySelector('[data-query-grid]').getBoundingClientRect().bottom <=
          host.getBoundingClientRect().bottom,
        'grid fits workspace',
      )
      const resizedWidth = host.querySelector('#accounts-sidebar').getBoundingClientRect().width
      const mainWidth = main.getBoundingClientRect().width
      host.querySelector('[aria-label="Hide accounts sidebar"]').click()
      await settle()
      t.is(true, main.getBoundingClientRect().width > mainWidth)
      host.querySelector('[aria-label="Show accounts sidebar"]').click()
      await settle()
      t.is(
        true,
        Math.abs(
          resizedWidth - host.querySelector('#accounts-sidebar').getBoundingClientRect().width,
        ) < 1,
      )
      t.is(view, editor(host))
      return [grid, host.querySelector('.ag-root')]
    })
  ),
  ...['mouse', 'ctrl', 'meta'].map((method) =>
    t`runs mocked results with a loader using ${method}`(() =>
      fixture(async (host) => {
        setSql(host, 'SELECT * FROM ledger_entries;')
        await settle()
        if (method === 'mouse') button(host, 'Run query').click()
        else {host.querySelector('.cm-content').dispatchEvent(
            new KeyboardEvent('keydown', {
              key: 'Enter',
              code: 'Enter',
              bubbles: true,
              cancelable: true,
              ctrlKey: method === 'ctrl',
              metaKey: method === 'meta',
            }),
          )}
        await settle()
        t.is('true', host.querySelector('[data-query-grid]').getAttribute('aria-busy'))
        await until(() =>
          host.querySelector('[data-query-grid]').getAttribute('aria-busy') === 'false'
        )
        t.is(true, host.querySelectorAll('.ag-row').length > 0)
        t.is(true, host.textContent.includes('sample rows'))
        setSql(host, 'SELECT * FROM accounts;')
        await settle()
        return [true, host.textContent.includes('SQL has changed since this result')]
      })
    )
  ),
  t`save, rename, load, and delete preserve SQL and use Sinewy confirmations`(() =>
    fixture(async (host) => {
      setSql(host, 'SELECT * FROM accounts;')
      input(host.querySelector('[aria-label="Query name"]'), 'Balance report')
      await settle()
      button(host, 'Save').click()
      await settle()
      const id = JSON.parse(localStorage.getItem(QUERY_STORAGE_KEY))[0].id
      input(host.querySelector('[aria-label="Query name"]'), 'Renamed report')
      await settle()
      button(host, 'Save').click()
      await settle()
      t.is(id, JSON.parse(localStorage.getItem(QUERY_STORAGE_KEY))[0].id)
      t.is('Renamed report', JSON.parse(localStorage.getItem(QUERY_STORAGE_KEY))[0].name)
      button(host, 'New').click()
      await settle()
      t.is('', editor(host).state.doc.toString())
      host.querySelector('button[aria-label="Saved queries…"]').click()
      await settle()
      const option = [...host.querySelectorAll('[role="option"]')].find((x) =>
        x.dataset.textValue === 'Renamed report'
      )
      option.click()
      await settle()
      t.is('SELECT * FROM accounts;', editor(host).state.doc.toString())
      button(host, 'Delete').click()
      await settle()
      t.is(true, !!host.querySelector('dialog[open][role="alertdialog"]'))
      button(host.querySelector('dialog[open]'), 'Cancel').click()
      await settle()
      t.is(1, JSON.parse(localStorage.getItem(QUERY_STORAGE_KEY)).length)
      button(host, 'Delete').click()
      await settle()
      button(host.querySelector('dialog[open]'), 'Delete').click()
      await settle()
      t.is(0, JSON.parse(localStorage.getItem(QUERY_STORAGE_KEY)).length)
      return ['SELECT * FROM accounts;', editor(host).state.doc.toString()]
    })
  ),
  t`restores saved queries after a fresh app mount`(() =>
    fixture(
      async (host) => {
        host.querySelector('button[aria-label="Saved queries…"]').click()
        await settle()
        host.querySelector('[role="option"][data-value="saved-accounts"]').click()
        await settle()
        t.is('Accounts report', host.querySelector('[aria-label="Query name"]').value)
        t.is(0, host.querySelectorAll('.ag-row').length)
        return ['SELECT * FROM accounts;', editor(host).state.doc.toString()]
      },
      JSON.stringify([{
        id: 'saved-accounts',
        name: 'Accounts report',
        sql: 'SELECT * FROM accounts;',
      }]),
    )
  ),
  t`dragging a header to the grouping panel groups rows and retains grouping across navigation`(
    () =>
      fixture(async (host) => {
        host.style.cssText = 'position:fixed;inset:0;overflow:auto;z-index:1000'
        setSql(host, 'SELECT * FROM ledger_entries;')
        await settle()
        button(host, 'Run query').click()
        await until(() => host.querySelectorAll('.ag-row').length > 0)
        // Later columns can be virtualized in narrow headless viewports.
        const header = host.querySelector('.ag-header-cell[col-id="date"]')
        header.scrollIntoView({ block: 'center', inline: 'center' })
        await settle()
        const from = header.getBoundingClientRect()
        const drop = host.querySelector('.ag-column-drop-horizontal').getBoundingClientRect()
        const start = { x: from.x + from.width / 2, y: from.y + from.height / 2 }
        const finish = { x: drop.x + drop.width / 2, y: drop.y + drop.height / 2 }
        const mouse = (target, type, x, y) =>
          target.dispatchEvent(
            new MouseEvent(type, {
              bubbles: true,
              cancelable: true,
              clientX: x,
              clientY: y,
              button: 0,
              buttons: type === 'mouseup' ? 0 : 1,
              view: window,
            }),
          )
        mouse(header.querySelector('.ag-header-cell-label'), 'mousedown', start.x, start.y)
        for (let step = 1; step <= 12; step++) {
          mouse(
            document,
            'mousemove',
            start.x + (finish.x - start.x) * step / 12,
            start.y + (finish.y - start.y) * step / 12,
          )
          await settle()
        }
        mouse(document, 'mouseup', finish.x, finish.y)
        await settle()
        if (
          !host.querySelector('.ag-column-drop-horizontal').textContent.includes('date')
        ) {
          throw new Error('Drag did not add date to grouping panel')
        }
        await until(() => host.querySelector('.ag-group-value'))
        t.is(
          true,
          host.querySelector('.ag-column-drop-horizontal').textContent.includes('date'),
        )
        host.querySelector('a[href="/files"]').click()
        await settle()
        host.querySelector('a[href="/query"]').click()
        await until(() => host.querySelector('.ag-group-value'))
        return [
          true,
          host.querySelector('.ag-column-drop-horizontal').textContent.includes('date'),
        ]
      }),
  ),
  t`unsaved work requires confirmation before New and is retained across routes`(() =>
    fixture(async (host) => {
      setSql(host, 'SELECT * FROM transactions;')
      input(host.querySelector('[aria-label="Query name"]'), 'Unfinished')
      await settle()
      button(host, 'New').click()
      await settle()
      button(host.querySelector('dialog[open]'), 'Cancel').click()
      await settle()
      host.querySelector('a[href="/accounts"]').click()
      await settle()
      host.querySelector('a[href="/query"]').click()
      await until(() => host.querySelector('.cm-content') && host.querySelector('.ag-root'))
      t.is('SELECT * FROM transactions;', editor(host).state.doc.toString())
      t.is('Unfinished', host.querySelector('[aria-label="Query name"]').value)
      button(host, 'New').click()
      await settle()
      button(host.querySelector('dialog[open]'), 'Discard changes').click()
      await settle()
      return ['', editor(host).state.doc.toString()]
    })
  ),
  t`protects malformed storage while still allowing mock execution`(() =>
    fixture(async (host) => {
      t.is(true, button(host, 'Save').disabled)
      t.is(true, host.textContent.includes('Existing data was left untouched'))
      setSql(host, 'select * from documents')
      await settle()
      button(host, 'Run query').click()
      await until(() => host.textContent.includes('3 sample rows'))
      return ['{broken', localStorage.getItem(QUERY_STORAGE_KEY)]
    }, '{broken')
  ),
  t`unmounting during execution cancels it and destroys the editor and grid`(() =>
    fixture(async (host) => {
      setSql(host, 'select * from accounts')
      await settle()
      button(host, 'Run query').click()
      await settle()
      host.querySelector('a[href="/files"]').click()
      await settle()
      t.is(0, host.querySelectorAll('.cm-editor').length)
      t.is(0, host.querySelectorAll('.ag-root').length)
      host.querySelector('a[href="/query"]').click()
      await until(() => host.querySelector('.cm-content') && host.querySelector('.ag-root'))
      return [0, host.querySelectorAll('.ag-row').length]
    })
  ),
)

function button(host, name) {
  return [...host.querySelectorAll('button')].find((x) => x.textContent === name)
}
function check(value, message) {
  if (!value) throw new Error(message)
}
function input(element, value) {
  element.value = value
  element.dispatchEvent(new Event('input', { bubbles: true }))
}
function editor(host) {
  return EditorView.findFromDOM(host.querySelector('.cm-content'))
}
function setSql(host, value) {
  const view = editor(host)
  view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: value } })
}
function settle() {
  return new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))
}
async function until(condition) {
  const deadline = performance.now() + 6000
  while (!condition()) {
    if (performance.now() > deadline) throw new Error('Query UI did not settle')
    await settle()
  }
  await settle()
}
async function fixture(run, savedQueries = null) {
  const previousUrl = location.href
  const previousLang = document.documentElement.lang
  const keys = [PREFERENCES_KEY, QUERY_STORAGE_KEY, 'entx.transactions.tab']
  const previous = keys.map((key) => localStorage.getItem(key))
  localStorage.setItem(
    PREFERENCES_KEY,
    JSON.stringify({ language: 'en', locale: 'en-GB', commodity: 'DKK' }),
  )
  savedQueries === null
    ? localStorage.removeItem(QUERY_STORAGE_KEY)
    : localStorage.setItem(QUERY_STORAGE_KEY, savedQueries)
  history.replaceState(null, '', '/query')
  const host = document.createElement('div')
  document.body.append(host)
  const mounted = s.mount(host, App)
  try {
    await until(() => host.querySelector('.cm-content') && host.querySelector('.ag-root'))
    return await run(host)
  } finally {
    host.querySelectorAll('dialog[open]').forEach((dialog) => dialog.close())
    mounted.unmount()
    host.remove()
    history.replaceState(null, '', previousUrl)
    document.documentElement.lang = previousLang
    keys.forEach((key, i) =>
      previous[i] === null ? localStorage.removeItem(key) : localStorage.setItem(key, previous[i])
    )
  }
}
