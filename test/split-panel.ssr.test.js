import s from 'sin'
import t from 'sin/test'
import ssr from 'sin/ssr'
import { SplitPanel } from '../src/index.js'
import { SplitPanel as Themed } from '../src/theme.js'

t`split panel ssr`(
  t`renders deterministic IDs and accessible structural layout without browser globals`(async() => {
    const render = async() => (await ssr(s.mount(() => SplitPanel({ defaultPosition: 30, orientation: 'vertical' },
      SplitPanel.Start('Editor'), SplitPanel.Divider({ 'aria-label': 'Editor' }), SplitPanel.End('Results')
    )), {})).html
    const html = await render()
    t.is(true, html.includes('role="separator"'))
    t.is(true, html.includes('aria-controls="sinewy-split-panel-1-start"'))
    t.is(true, html.includes('aria-orientation="horizontal"'))
    t.is(true, html.includes('aria-valuenow="30"'))
    return [html, await render()]
  }),
  t`themed export preserves disabled and primary-end semantics`(async() => {
    const result = await ssr(s.mount(() => Themed({ id: 'workspace', primary: 'end', disabled: true, defaultPositionInPixels: 200 },
      Themed.Start('Left'), Themed.Divider({ 'aria-label': 'Inspector' }), Themed.End('Right')
    )), {})
    t.is(true, result.html.includes('aria-controls="workspace-end"'))
    t.is(true, result.html.includes('tabindex="-1"'))
    return [true, result.html.includes('200px')]
  })
)
