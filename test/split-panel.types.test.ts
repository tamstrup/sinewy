import s from 'sin'
import { SplitPanel } from '../src/index.js'
import Split from '../src/split-panel.js'
import { SplitPanel as Themed } from '../src/theme.js'
const ratio = s.live(30)
SplitPanel({ bind: ratio, orientation: 'vertical', primary: 'end', snap: '50% 200px', onreposition(detail, event) {
  const value: number = detail.positionInPixels
  void value
  void event?.type
} }, SplitPanel.Start('Editor'), SplitPanel.Divider({ 'aria-label': 'Editor' }), SplitPanel.End('Results'))
Split({ positionInPixels: 250, snap: ({ positionInPixels }) => positionInPixels })
Themed({ color: 'indigo', defaultPosition: 40 }, Themed.Start('Start'), Themed.Divider(), Themed.End('End'))
const Styled = SplitPanel`height 400`
Styled({ disabled: true })
// @ts-expect-error orientation is explicit
SplitPanel({ orientation: 'diagonal' })
// @ts-expect-error percentage bindings are numeric
SplitPanel({ bind: s.live('50%') })
// @ts-expect-error no compatibility boolean
SplitPanel({ vertical: true })
// @ts-expect-error primitive is not themed
SplitPanel({ color: 'indigo' })
