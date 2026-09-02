import s from 'sin'
import Dropdown, { AlertDialog, Button, CustomSelect, Dialog, SplitPanel } from 'sinewy/theme'
import { mockAiQuery } from './mock-ai.js'
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
  min-height 0
  height 100%
  display flex
  flex-direction column
  overflow hidden
  p { margin 6px 0 0; color #7b7b84; font-size 12; line-height 1.6 }
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
  margin-bottom 10
  flex-shrink 0
`
const Name = s`input
  min-width 0
  width 0
  flex 1
  height 30
  padding 0 9
  border 1px solid transparent
  border-radius 6
  background transparent
  font-size 12
  font-weight 600
  color #35353d
  &:hover { border-color #dedee5; background white }
  &:focus { outline 2px solid #afa7ee; outline-offset 1 }
`
const NameField = s`div
  display flex
  align-items center
  flex 1
  min-width 130
`
const Unsaved = s`span
  width 6
  height 6
  flex-shrink 0
  margin 0 6px
  border-radius 50%
  background #a4946b
`
const Actionbar = s`div
  display flex
  align-items center
  flex-wrap nowrap
  min-width 0
  overflow-x auto
  gap 6
  padding 3px 2px 12px
  margin-bottom 12
  border-bottom 1px solid #e6e6eb
  flex-shrink 0
  > button { flex-shrink 0; white-space nowrap }
`
const Prompt = s`textarea
  display block
  width 100%
  min-height 110
  max-height 210
  resize vertical
  margin 8px 0 12px
  padding 12
  border 1px solid #d9d5e9
  border-radius 8
  background #fcfbff
  color #35313f
  font inherit
  font-size 14
  line-height 1.6
  &:focus { outline 2px solid #afa7ee; outline-offset 1px }
`
const SqlPreview = s`pre
  max-height 230
  overflow auto
  margin 10px 0 16px
  padding 14
  border 1px solid #e4e0ef
  border-radius 8
  background #f7f5fc
  color #51417b
  font-size 12
  line-height 1.7
  white-space pre
`
const EditorLayout = s`div
  flex 1
  min-height 0
  display grid
  grid-template-columns minmax(0, 1fr) 180px
  grid-template-rows minmax(0, 1fr)
  gap 16
  @media (max-width: 1150px) { grid-template-columns minmax(0, 1fr) 130px; gap 10 }
`
const EditorBox = s`div
  min-width 0
  min-height 0
  display flex
  flex-direction column
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
  flex-shrink 0
  padding 0 12
  border-bottom 1px solid #eeeeF2
  color #87878f
  font-size 10
  strong { font-weight 650; letter-spacing 1px }
`
const EditorHost = s`div
  flex 1
  min-height 0
  overflow hidden
`
const Schema = s`aside
  min-height 0
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
  margin 0 0 8px
  flex-shrink 0
  font-size 11
  color #83838c
  strong { font-size 11; font-weight 650; letter-spacing .7px; text-transform uppercase; color #61616b }
`
const GridHost = s`div
  width 100%
  min-width 0
  min-height 0
  flex 1
  overflow hidden
`
const Status = s`p
  min-height 20
  flex-shrink 0
  margin-bottom 10px !important
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
  let editor, grid, editorElement, gridElement, nameElement
  let runtimeReady = false, disposed = false, busy = false, timer
  let error = '', notice = '', storageFailed = false, confirmation = null
  let aiOpen = false, aiPrompt = '', aiBusy = false, aiResult = null, aiTimer
  let resultSql = workspace.lastSql
  const dirty = () =>
    workspace.name !== workspace.baseline.name || workspace.sql !== workspace.baseline.sql
  const redraw = () => !disposed && context.redraw()
  context.onremove(i18n.preferences.observe(redraw))
  context.onremove(() => {
    disposed = true
    clearTimeout(timer)
    clearTimeout(aiTimer)
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

  function applySql(sql, message = '') {
    const apply = () => {
      editor?.setValue(sql)
      notice = message
      editor?.focus()
      redraw()
    }
    if (dirty()) confirmation = { kind: 'discard', action: apply }
    else apply()
    redraw()
  }

  function changePrompt(value) {
    clearTimeout(aiTimer)
    aiBusy = false
    aiResult = null
    aiPrompt = value
  }

  function generateSql() {
    if (aiBusy || !aiPrompt.trim()) return
    const prompt = aiPrompt
    aiResult = null
    aiBusy = true
    aiTimer = setTimeout(() => {
      if (disposed || !aiOpen) return
      aiResult = mockAiQuery(prompt)
      aiBusy = false
      redraw()
    }, 850)
    redraw()
  }

  function aiDialog() {
    return Dialog(
      {
        id: 'query-ai',
        open: aiOpen,
        onopenchange: (open) => {
          aiOpen = open
          if (!open) {
            clearTimeout(aiTimer)
            aiBusy = false
          }
        },
      },
      Dialog.Trigger(
        {
          'aria-label': t('queryAi'),
          size: '1',
          variant: 'soft',
          color: 'indigo',
          disabled: !editor,
          style: { marginLeft: 'auto' },
        },
        s`span`({ 'aria-hidden': 'true' }, '✦'),
        t('queryAi'),
      ),
      Dialog.Content(
        { size: '2', style: { width: '620px', maxWidth: 'calc(100vw - 32px)' } },
        Badge(t('queryAiBadge')),
        Dialog.Title(t('queryAiTitle')),
        Dialog.Description(t('queryAiDescription')),
        s`label`(
          { for: 'query-ai-prompt', style: { fontSize: '12px', fontWeight: '600' } },
          t('queryAiPrompt'),
        ),
        Prompt({
          id: 'query-ai-prompt',
          autofocus: true,
          maxLength: 2000,
          value: aiPrompt,
          placeholder: t('queryAiPlaceholder'),
          oninput: (event) => changePrompt(event.target.value),
          onkeydown: (event) => {
            if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
              event.preventDefault()
              event.stopPropagation()
              generateSql()
            }
          },
        }),
        Toolbar(['queryAiExpenses', 'queryAiIncome', 'queryAiAccounts'].map((key) =>
          Button({
            size: '1',
            variant: 'soft',
            color: 'gray',
            onclick: () => changePrompt(t(key)),
          }, t(key))
        )),
        s`p`({ style: { fontSize: '11px', marginBottom: '16px' } }, t('queryAiDisclaimer')),
        s`div`(
          { role: 'status', 'aria-live': 'polite', style: { fontSize: '12px', color: '#756c8f' } },
          aiBusy
            ? [Busy({ 'aria-hidden': 'true' }), ' ', t('queryAiGenerating')]
            : aiResult
            ? t(aiResult.topic === 'fallback' ? 'queryAiFallback' : 'queryAiReady')
            : '',
        ),
        aiResult && SqlPreview({ 'aria-label': t('queryAiReady') }, s`code`(aiResult.sql)),
        Toolbar(
          { style: { justifyContent: 'flex-end', marginTop: '16px', marginBottom: '0' } },
          Dialog.Close({ size: '1' }, t('cancel')),
          Button({
            size: '1',
            variant: 'soft',
            color: 'indigo',
            disabled: aiBusy || !aiPrompt.trim(),
            onclick: generateSql,
          }, t('queryAiGenerate')),
          Button({
            size: '1',
            variant: 'solid',
            color: 'indigo',
            disabled: !aiResult || !editor || aiBusy,
            onclick: () => {
              const sql = aiResult.sql
              aiOpen = false
              redraw()
              applySql(sql, 'queryAiInserted')
            },
          }, t('queryAiInsert')),
        ),
      ),
    )
  }

  const action = (attrs, text) =>
    Button({ size: '1', color: 'gray', variant: 'outline', ...attrs }, text)
  return () =>
    Page(
      {
        'aria-label': t('query'),
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
      Actionbar(
        { role: 'group', 'aria-label': t('queryActions'), data: { queryToolbar: true } },
        CustomSelect({
          'aria-label': t('querySavedQueries'),
          placeholder: t('querySavedQueries'),
          value: workspace.id,
          size: '1',
          color: 'gray',
          style: { width: 'clamp(130px, 16vw, 180px)', flexShrink: '0' },
          onvaluechange: (id) => choose(saved.find((q) => q.id === id)),
        }, saved.map((q) => CustomSelect.Option({ key: q.id, value: q.id }, q.name))),
        NameField(
          Name({
            'aria-label': t('queryName'),
            placeholder: t('queryName'),
            maxLength: 80,
            value: workspace.name,
            dom: (element) => {
              nameElement = element
            },
            oninput: (event) => {
              workspace.name = event.target.value
              notice = ''
            },
          }),
          dirty() &&
            Unsaved({ role: 'img', 'aria-label': t('queryUnsaved'), title: t('queryUnsaved') }),
        ),
        Button(
          {
            size: '1',
            color: 'gray',
            variant: 'solid',
            highContrast: true,
            disabled: busy || !grid || !workspace.sql.trim(),
            title: '⌘ / Ctrl ↵',
            'aria-keyshortcuts': 'Meta+Enter Control+Enter',
            onclick: run,
          },
          busy && Busy({ 'aria-hidden': 'true' }),
          t(busy ? 'queryRunning' : 'queryRun'),
        ),
        action({ onclick: save, disabled: !workspace.sql.trim() || storageFailed }, t('querySave')),
        Dropdown(
          Dropdown.Trigger(
            { size: '1', variant: 'ghost', color: 'gray' },
            t('queryEdit'),
            Dropdown.TriggerIcon(),
          ),
          Dropdown.Content(
            { size: '1', color: 'gray', align: 'start' },
            Dropdown.Item(
              { disabled: !editor, onselect: () => editor?.focus() },
              t('queryEditSql'),
            ),
            Dropdown.Item({
              onselect: () => {
                nameElement?.focus()
                nameElement?.select()
              },
            }, t('queryRename')),
            Dropdown.Item({ onselect: () => choose(null) }, t('queryNew')),
            Dropdown.Separator(),
            Dropdown.Sub(
              Dropdown.SubTrigger(t('queryExamples')),
              Dropdown.SubContent(
                Object.entries({
                  ledger_entries: 'queryExampleLedger',
                  transactions: 'queryExampleTransactions',
                  accounts: 'queryExampleAccounts',
                  documents: 'queryExampleDocuments',
                }).map(([table, label]) =>
                  Dropdown.Item(
                    { disabled: !editor, onselect: () => applySql(examples[table]) },
                    t(label),
                  )
                ),
              ),
            ),
            Dropdown.Separator(),
            Dropdown.Item({
              color: 'red',
              disabled: !workspace.id || storageFailed,
              onselect: () => confirmation = { kind: 'delete', action: deleteSaved },
            }, t('queryDelete')),
          ),
        ),
        aiDialog(),
      ),
      (error || notice) && Status(
        { role: error ? 'alert' : 'status', data: { error: !!error } },
        t(error || notice),
      ),
      SplitPanel(
        {
          id: 'query-split',
          orientation: 'vertical',
          defaultPosition: workspace.splitPosition ?? 45,
          style: {
            flex: '1',
            minHeight: '0',
            '--min': '110px',
            '--max': 'calc(100% - 160px)',
            '--divider-width': '1px',
          },
          onreposition: ({ position }, event) => {
            workspace.splitPosition = position
            if (event) event.redraw = false
          },
        },
        SplitPanel.Start(
          {
            style: { display: 'flex', flexDirection: 'column', gap: '10px', paddingBottom: '10px' },
          },
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
                )
              ),
            ),
          ),
        ),
        SplitPanel.Divider({
          'aria-label': t('resizeQueryEditor'),
          style: { background: '#e0dfe7' },
        }),
        SplitPanel.End(
          { style: { display: 'flex', flexDirection: 'column', paddingTop: '10px' } },
          ResultHeading(
            s`strong`(t('queryResults')),
            s`span`({
              data: { queryDemo: true },
              title: t('queryMockExplanation'),
              'aria-label': t('queryMockExplanation'),
              style: { marginRight: 'auto', fontSize: '10px' },
            }, t('queryMockData')),
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
        ),
      ),
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
