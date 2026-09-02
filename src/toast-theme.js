import s from 'sin'
import Headless from './toast.js'
import { themeColorStyle } from './theme-colors.js'

const Surface = Headless`
  display flex
  align-items center
  gap 12
  padding 12 14
  border 1px solid $sinewy-neutral-6
  border-radius 9
  background $sinewy-panel
  color $sinewy-neutral-12
  box-shadow 0 4px 20px rgb(0 0 0 / .09)
  font-family inherit
  font-size 13
  line-height 1.5
  overflow-wrap anywhere
  @media (forced-colors: active) { border-color CanvasText; background Canvas; color CanvasText }
`
const Close = Headless.Close`
  display inline-flex
  align-items center
  justify-content center
  flex-shrink 0
  width 26
  height 26
  margin-inline-start auto
  padding 0
  border 0
  border-radius 5
  background transparent
  color $sinewy-neutral-11
  font inherit
  font-size 20
  cursor pointer
  &:hover { background $sinewy-neutral-3 }
  &:focus-visible { outline 2px solid $sinewy-accent-9; outline-offset 2px }
  &:disabled { opacity .5; cursor default }
  @media (forced-colors: active) { color ButtonText }
`
const Toast = s(({ color = 'gray', style, ...attrs }, children) =>
  Surface({ ...attrs, style: themeColorStyle(color, style) }, children)
)
Toast.Viewport = Headless.Viewport
Toast.Close = s((attrs, children) => Close(attrs, children))
export { Toast }
export default Toast
