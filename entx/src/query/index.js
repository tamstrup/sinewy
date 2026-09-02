import s from 'sin'
import { AlertDialog, Button, CustomSelect } from 'sinewy/theme'
import {
  createQueryWorkspace,
  examples,
  mockResult,
  persistQueries,
  readQueries,
  schemas,
  upsertQuery,
} from './model.js'

const Page = s`section
  min-width 0
  h1 { margin 0; font-size 22; font-weight 720; letter-spacing -.6px }
  p { margin 6px 0 0; color #7b7b84; font-size 12; line-height 1.6 }
`
const Header = s`header
  display flex
  align-items center
  justify-content space-between
  gap 16
  margin-bottom 20
`
const Badge = s`span
  color #766b9d
  background #eeebf7
  padding 5 8
  border-radius 5
  font-size 10
  font-weight 650
`
const Toolbar = s`div
  display flex
  align-items center
  flex-wrap wrap
  gap 8
  margin-bottom 14
`
const Name = s`input
  min-width 150
  flex 1
  height 34
  padding 0 9
  border 1px solid #dedee5
  border-radius 6
  background white
  font-size 12
  color #35353d
  &:focus { outline 2px solid #afa7ee; outline-offset 1 }
`
const EditorLayout = s`div
  display grid
  grid-template-columns minmax(0, 1fr) 230px
  gap 16
  margin-bottom 14
  @media (max-width: 1150px) { grid-template-columns minmax(0, 1fr) }
`
const EditorBox = s`div
  min-width 0
  overflow hidden
  border 1px solid #dfdfe6
  border-radius 8
  background white
  &:focus-within { border-color #aaa0df }
`
const EditorHeader = s`div
  display flex
  align-items center
  justify-content space-between
  height 34
  padding 0 12
  border-bottom 1px solid #eeeeF2
  color #87878f
  font-size 10
  strong { font-weight 650; letter-spacing 1px }
`
const EditorHost = s`div
  min-height 220
`
const Schema = s`aside
  height 255
  overflow auto
  padding 2px 0
  color #696973
  font-size 11
  h2 { margin 0 0 10; font-size 10; text-transform uppercase; letter-spacing 1px; color #95959d }
  details { margin 8px 0 }
  summary { cursor pointer; font-family ui-monospace, SFMono-Regular, Menlo, monospace; color #4f4c63 }
  code { display block; padding 3px 0 3px 15px; font-size 10; color #898991 }
`
const ResultHeading = s`div
  display flex
  justify-content space-between
  align-items center
  gap 12
  margin 22px 0 10px
  font-size 11
  color #83838c
  strong { font-size 11; font-weight 650; letter-spacing .7px; text-transform uppercase; color #61616b }
`
const GridHost = s`div
  width 100%
  min-width 0
  height max(340px, calc(100svh - 535px))
`
const Status = s`p
  min-height 20
  &[data-error='true'] { color #a23d47 }
`
const Busy = s`span
  display inline-block
  width 12
  height 12
  border 2px solid #d3cef2
  border-top-color #655bd8
  border-radius 50%
  animation query-spin 800ms linear infinite
  @keyframes query-spin { to { transform rotate(360deg) } }
  @media (prefers-reduced-motion: reduce) { animation none }
`

export default s((_attrs, _children, context) => {
  const { i18n } = context.entx
  const { t } = i18n
  const workspace = context.entx.query ||= createQueryWorkspace()
  let saved = []
  let editor, grid, editorElement, gridElement
  let runtimeReady = false, disposed = false, busy = false, timer
  let error = '', notice = '', storageFailed = false, confirmation = null
  let resultSql = workspace.lastSql
  const dirty = () =>
    workspace.name !== workspace.baseline.name || workspace.sql !== workspace.baseline.sql
  const redraw = () => !disposed && context.redraw()
  context.onremove(i18n.preferences.observe(redraw))
  context.onremove(() => {
    disposed = true
    clearTimeout(timer)
    if (grid) workspace.gridState = grid.getState()
    editor?.destroy()
    grid?.destroy()
  })

  async function mountRuntime() {
    if (!editorElement || !gridElement || runtimeReady) return
    runtimeReady = true
    try {
      const runtime = await import('./runtime.js')
      if (disposed) return
      editor = runtime.createSqlEditor(editorElement, {
        value: workspace.sql,
        label: t('queryEditor'),
        hint: t('queryEditorHint'),
        onchange: (value) => {
          workspace.sql = value
          notice = ''
          redraw()
        },
        onrun: run,
      })
      grid = runtime.createResultsGrid(gridElement, {
        i18n,
        result: workspace.result,
        state: workspace.gridState,
      })
      redraw()
    } catch (cause) {
      console.error('Query editor could not start', cause)
      error = 'queryLoadFailed'
      redraw()
    }
  }

  function run() {
    if (busy || !grid || !workspace.sql.trim()) return
    const sql = workspace.sql
    error = ''
    notice = ''
    busy = true
    grid.loading(true)
    redraw()
    timer = setTimeout(() => {
      try {
        workspace.result = mockResult(sql)
        resultSql = workspace.lastSql = sql
        grid.show(workspace.result)
      } catch (cause) {
        error = cause.message
      } finally {
        busy = false
        grid.loading(false)
        redraw()
      }
    }, 650)
  }

  function replaceQuery(next) {
    clearTimeout(timer)
    busy = false
    grid?.loading(false)
    Object.assign(workspace, {
      id: next?.id || null,
      name: next?.name || '',
      sql: next?.sql || '',
      baseline: { name: next?.name || '', sql: next?.sql || '' },
      result: null,
      lastSql: '',
      gridState: undefined,
    })
    resultSql = ''
    error = ''
    notice = ''
    editor?.setValue(workspace.sql)
    grid?.show(null)
    editor?.focus()
    redraw()
  }

  function choose(next) {
    if (dirty()) confirmation = { kind: 'discard', action: () => replaceQuery(next) }
    else replaceQuery(next)
    redraw()
  }

  function save() {
    try {
      if (storageFailed) throw new Error('queryStorageUnavailable')
      const id = workspace.id || crypto.randomUUID()
      const next = upsertQuery(saved, { id, name: workspace.name, sql: workspace.sql })
      persistQueries(localStorage, next)
      saved = next
      workspace.id = id
      workspace.name = saved.find((q) => q.id === id).name
      workspace.baseline = { name: workspace.name, sql: workspace.sql }
      error = ''
      notice = 'querySaved'
    } catch (cause) {
      error = cause.message.startsWith('query') ? cause.message : 'queryStorageUnavailable'
    }
    redraw()
  }

  function deleteSaved() {
    try {
      const next = saved.filter((q) => q.id !== workspace.id)
      persistQueries(localStorage, next)
      saved = next
      // Keep the SQL as an unsaved draft so deletion is recoverable by saving again.
      workspace.id = null
      workspace.baseline = { name: '', sql: '' }
      notice = 'queryDeleted'
      error = ''
    } catch {
      error = 'queryStorageUnavailable'
    }
    redraw()
  }

  const action = (attrs, text) =>
    Button({ size: '1', color: 'gray', variant: 'outline', ...attrs }, text)
  return () =>
    Page(
      {
        'aria-labelledby': 'query-title',
        dom: () => {
          try {
            saved = readQueries(localStorage)
          } catch {
            storageFailed = true
            error = 'queryStorageUnavailable'
          }
          redraw()
        },
        onkeydown: (event) => {
          if (
            !event.defaultPrevented && !event.target.closest('dialog') &&
            (event.metaKey || event.ctrlKey) && event.key === 'Enter'
          ) {
            event.preventDefault()
            event.stopPropagation()
            run()
          }
        },
      },
      Header(
        s`div`(s`h1#query-title`(t('query')), s`p`(t('querySubtitle'))),
        Badge(t('queryMockBadge')),
      ),
      Toolbar(
        CustomSelect({
          'aria-label': t('querySavedQueries'),
          placeholder: t('querySavedQueries'),
          value: workspace.id,
          size: '1',
          color: 'gray',
          style: { width: '220px' },
          onvaluechange: (id) => choose(saved.find((q) => q.id === id)),
        }, saved.map((q) => CustomSelect.Option({ key: q.id, value: q.id }, q.name))),
        Name({
          'aria-label': t('queryName'),
          placeholder: t('queryName'),
          maxLength: 80,
          value: workspace.name,
          oninput: (event) => {
            workspace.name = event.target.value
            notice = ''
          },
        }),
        action({ onclick: () => choose(null) }, t('queryNew')),
        action({ onclick: save, disabled: !workspace.sql.trim() || storageFailed }, t('querySave')),
        action({
          disabled: !workspace.id || storageFailed,
          onclick: () => confirmation = { kind: 'delete', action: deleteSaved },
        }, t('queryDelete')),
      ),
      EditorLayout(
        EditorBox(
          EditorHeader(s`strong`('SQL'), s`span`(t('queryCompletionHint'))),
          EditorHost({
            dom: (element) => {
              editorElement = element
              mountRuntime()
            },
          }),
        ),
        Schema(
          { 'aria-label': t('queryAvailableViews') },
          s`h2`(t('queryAvailableViews')),
          Object.entries(schemas).map(([table, fields]) =>
            s`details`(
              { key: table },
              s`summary`(table),
              fields.map((field) => s`code`(field)),
              Button({
                size: '1',
                color: 'gray',
                variant: 'ghost',
                onclick: () => {
                  const apply = () => {
                    editor?.setValue(examples[table])
                    editor?.focus()
                    redraw()
                  }
                  if (dirty()) confirmation = { kind: 'discard', action: apply }
                  else apply()
                },
              }, t('queryUseExample')),
            )
          ),
        ),
      ),
      Toolbar(
        Button(
          {
            size: '1',
            color: 'gray',
            variant: 'solid',
            highContrast: true,
            disabled: busy || !grid || !workspace.sql.trim(),
            onclick: run,
          },
          busy && Busy({ 'aria-hidden': 'true' }),
          t(busy ? 'queryRunning' : 'queryRun'),
        ),
        s`span
          color #93939c
          font-size 11
        `('⌘ / Ctrl ↵'),
        !workspace.sql &&
          Button({
            size: '1',
            color: 'indigo',
            variant: 'ghost',
            disabled: !editor,
            onclick: () => editor?.setValue(examples.ledger_entries),
          }, t('queryStartExample')),
        dirty() && s`span
          color #9b8d67
          font-size 11
        `(t('queryUnsaved')),
      ),
      Status(
        { role: error ? 'alert' : 'status', data: { error: !!error } },
        t(error || notice || 'queryMockExplanation'),
      ),
      ResultHeading(
        s`strong`(t('queryResults')),
        s`span`(
          busy
            ? t('queryRunning')
            : workspace.result
            ? t('queryRowCount', { count: workspace.result.rows.length })
            : t('queryNotRun'),
          resultSql && resultSql !== workspace.sql ? ` · ${t('queryStale')}` : '',
        ),
      ),
      GridHost({
        'aria-label': t('queryResults'),
        'aria-busy': String(busy),
        data: { queryGrid: true },
        dom: (element) => {
          gridElement = element
          mountRuntime()
        },
      }),
      s`p
        font-size 10
      `(t('queryGroupingHint')),
      AlertDialog(
        {
          id: 'query-confirm',
          open: !!confirmation,
          onopenchange: (open) => {
            if (!open) confirmation = null
          },
        },
        AlertDialog.Content(
          { size: '1' },
          AlertDialog.Title(
            t(confirmation?.kind === 'delete' ? 'queryDeleteTitle' : 'queryDiscardTitle'),
          ),
          AlertDialog.Description(t(
            confirmation?.kind === 'delete' ? 'queryDeleteDescription' : 'queryDiscardDescription',
          )),
          Toolbar(
            AlertDialog.Close({ autofocus: true, variant: 'soft', color: 'gray' }, t('cancel')),
            AlertDialog.Close({
              color: 'red',
              variant: 'solid',
              onclick: () => {
                const next = confirmation
                confirmation = null
                next?.action()
              },
            }, t(confirmation?.kind === 'delete' ? 'queryDelete' : 'queryDiscard')),
          ),
        ),
      ),
    )
})
