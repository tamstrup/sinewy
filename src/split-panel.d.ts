import s from 'sin'

export interface SplitPanelPosition {
  position: number
  positionInPixels: number
  source: 'pointer' | 'keyboard' | 'resize'
}
export interface SplitPanelSnapContext {
  positionInPixels: number
  size: number
  snapThreshold: number
}
export interface SplitPanelAttrs {
  color?: never
  vertical?: never
  position?: number
  positionInPixels?: number
  defaultPosition?: number
  defaultPositionInPixels?: number
  bind?: s.Live<number>
  orientation?: 'horizontal' | 'vertical'
  primary?: 'start' | 'end'
  disabled?: boolean
  snap?: string | ((context: SplitPanelSnapContext) => number | null)
  snapThreshold?: number
  onreposition?: (position: SplitPanelPosition, event?: PointerEvent | KeyboardEvent) => unknown
}
export type SplitPanel = s.Component<HTMLDivElement, SplitPanelAttrs, s.Children[]> & {
  Start: s.Component<HTMLDivElement, {}, s.Children[]>
  End: s.Component<HTMLDivElement, {}, s.Children[]>
  Divider: s.Component<HTMLDivElement, {}, s.Children[]>
}
declare const SplitPanel: SplitPanel
export { SplitPanel }
export default SplitPanel
