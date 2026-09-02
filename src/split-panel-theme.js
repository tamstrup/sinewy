import s from 'sin'
import Headless from './split-panel.js'
import { themeColorStyle } from './theme-colors.js'

const Divider = Headless.Divider`
  background $sinewy-neutral-6
  color $sinewy-neutral-10
  &:hover:not([aria-disabled='true']) { background $sinewy-accent-7 }
  &:focus-visible { outline 2px solid $sinewy-accent-9; outline-offset 1px; z-index 2 }
  &:active:not([aria-disabled='true']) { background $sinewy-accent-9 }
  @media (forced-colors: active) { background CanvasText; color CanvasText }
`
const SplitPanel = s(({ color = 'accent', style, ...attrs }, children) =>
  Headless({ ...attrs, style: themeColorStyle(color, style) }, children)
)
SplitPanel.Start = Headless.Start
SplitPanel.End = Headless.End
SplitPanel.Divider = s((attrs, children) => Divider(attrs, children))
export { SplitPanel }
export default SplitPanel
