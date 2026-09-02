import { EditorState } from '@codemirror/state'
import {
  drawSelection,
  EditorView,
  highlightActiveLine,
  keymap,
  lineNumbers,
  placeholder,
} from '@codemirror/view'
import { defaultKeymap, history, historyKeymap, indentWithTab } from '@codemirror/commands'
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language'
import { autocompletion, completionKeymap } from '@codemirror/autocomplete'
import { PostgreSQL, sql } from '@codemirror/lang-sql'
import { tags } from '@lezer/highlight'
import {
  AG_GRID_LOCALE_DK,
  AG_GRID_LOCALE_EN,
  AllEnterpriseModule,
  createGrid,
  LicenseManager,
  ModuleRegistry,
  themeQuartz,
} from './grid-vendor.generated.js'
import { schemas } from './model.js'

ModuleRegistry.registerModules([AllEnterpriseModule])

export function createSqlEditor(element, { value, label, hint, onchange, onrun }) {
  const view = new EditorView({
    parent: element,
    state: EditorState.create({
      doc: value,
      extensions: [
        lineNumbers(),
        history(),
        drawSelection(),
        highlightActiveLine(),
        sql({ dialect: PostgreSQL, schema: schemas, upperCaseKeywords: true }),
        autocompletion(),
        syntaxHighlighting(HighlightStyle.define([
          { tag: tags.keyword, color: '#7255c5', fontWeight: '550' },
          { tag: tags.string, color: '#438267' },
          { tag: tags.number, color: '#a86b31' },
          { tag: tags.comment, color: '#919198', fontStyle: 'italic' },
          { tag: tags.operator, color: '#66667a' },
        ])),
        keymap.of([
          {
            key: 'Meta-Enter',
            run: () => {
              onrun()
              return true
            },
          },
          {
            key: 'Ctrl-Enter',
            run: () => {
              onrun()
              return true
            },
          },
          ...completionKeymap,
          ...defaultKeymap,
          ...historyKeymap,
          indentWithTab,
        ]),
        placeholder(hint),
        EditorView.contentAttributes.of({
          'aria-label': label,
          'aria-multiline': 'true',
          spellcheck: 'false',
        }),
        EditorView.updateListener.of((update) => {
          if (update.docChanged) onchange(update.state.doc.toString())
        }),
        EditorView.theme({
          '&': { height: '220px', fontSize: '13px', backgroundColor: '#fff', color: '#35353f' },
          '&.cm-focused': { outline: 'none' },
          '.cm-scroller': {
            overflow: 'auto',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
            lineHeight: '1.8',
          },
          '.cm-content': { padding: '14px 0', caretColor: '#655bd8' },
          '.cm-line': { padding: '0 14px' },
          '.cm-gutters': {
            backgroundColor: '#fcfcfd',
            color: '#aaaab2',
            borderRight: '1px solid #f0f0f3',
          },
          '.cm-gutterElement': { padding: '0 8px 0 14px' },
          '.cm-activeLine': { backgroundColor: '#f8f7fc' },
          '.cm-tooltip': {
            border: '1px solid #e1dfea',
            borderRadius: '6px',
            backgroundColor: 'white',
            boxShadow: '0 8px 24px #20203018',
          },
          '.cm-tooltip-autocomplete ul li[aria-selected]': {
            backgroundColor: '#edeafa',
            color: '#51479b',
          },
        }),
      ],
    }),
  })
  return {
    setValue(value) {
      if (value !== view.state.doc.toString()) {
        view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: value } })
      }
    },
    focus: () => view.focus(),
    destroy: () => view.destroy(),
  }
}

export function createResultsGrid(element, { i18n, result, state }) {
  // Supply a key valid for ENTX before mounting. No other application's key is bundled.
  const license = element.ownerDocument.defaultView.ENTX_AG_GRID_LICENSE_KEY
  if (license) LicenseManager.setLicenseKey(license)
  const theme = themeQuartz.withParams({
    accentColor: '#655bd8',
    backgroundColor: '#ffffff',
    foregroundColor: '#45454e',
    headerBackgroundColor: '#fafafa',
    headerTextColor: '#73737c',
    borderColor: '#e6e6eb',
    rowHoverColor: '#f7f6fc',
    selectedRowBackgroundColor: '#eeecfb',
    fontFamily: 'Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: 12,
    headerFontSize: 11,
    headerFontWeight: 600,
    rowHeight: 34,
    headerHeight: 36,
    spacing: 6,
    wrapperBorderRadius: 8,
  })
  const columns = (fields) =>
    fields.map((field) => ({
      field,
      colId: field,
      headerName: field,
      initialHide: field.endsWith('_id'),
      minWidth: field === 'description' || field === 'account' ? 210 : 130,
      flex: field === 'description' || field === 'account' ? 2 : 1,
      ...(['amount', 'balance', 'leg_count'].includes(field)
        ? {
          type: 'numericColumn',
          filter: 'agNumberColumnFilter',
          enableValue: true,
          aggFunc: 'sum',
          valueFormatter: ({ value }) =>
            value == null ? '' : field === 'leg_count' ? i18n.number(value) : i18n.amount(value),
        }
        : {}),
      ...(field === 'date' ? { valueFormatter: ({ value }) => value ? i18n.date(value) : '' } : {}),
    }))
  const api = createGrid(element, {
    theme,
    initialState: state || undefined,
    localeText: {
      ...(i18n.preferences().language === 'da' ? AG_GRID_LOCALE_DK : AG_GRID_LOCALE_EN),
      noRowsToShow: i18n.t('queryNoRows'),
    },
    defaultColDef: { sortable: true, filter: true, resizable: true, enableRowGroup: true },
    columnDefs: columns(result?.fields || schemas.ledger_entries),
    rowData: result?.rows || [],
    rowGroupPanelShow: 'always',
    groupDefaultExpanded: 1,
    suppressDragLeaveHidesColumns: true,
    autoGroupColumnDef: { minWidth: 240 },
    sideBar: { toolPanels: ['columns'], defaultToolPanel: '' },
    animateRows: false,
    loading: false,
    getRowId: ({ data }) =>
      data.entry_id || data.document_id || data.transaction_id ||
      `${data.account}/${data.commodity}`,
  })
  return {
    show(next) {
      api.setGridOption('columnDefs', columns(next?.fields || schemas.ledger_entries))
      api.setGridOption('rowData', next?.rows || [])
    },
    loading: (loading) => api.setGridOption('loading', loading),
    getState: () => api.getState(),
    destroy: () => api.destroy(),
  }
}
