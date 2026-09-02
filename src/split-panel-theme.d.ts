import s from 'sin'
import type { SplitPanel as Primitive, SplitPanelAttrs } from './split-panel.js'
import type { ThemeColor } from './theme-options.js'
declare const SplitPanel: s.Component<HTMLDivElement, Omit<SplitPanelAttrs, 'color'> & { color?: ThemeColor }, s.Children[]> & {
  Start: Primitive['Start']
  End: Primitive['End']
  Divider: Primitive['Divider']
}
export { SplitPanel }
export default SplitPanel
