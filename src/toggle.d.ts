import s from 'sin'
import type { ControlThemeOptions } from './theme-options.js'

export type { ControlThemeOptions, ControlVariant, ThemeColor, ThemeSize } from './theme-options.js'

export type ToggleDOMEvent<E extends Event = Event> = E & { redraw?: boolean }
export type ToggleBinding<T> = T extends unknown ? s.Live<T> : never

export interface ToggleAttrs extends ControlThemeOptions {
  pressed?: boolean
  defaultPressed?: boolean
  bind?: ToggleBinding<boolean>
  onpressedchange?: (pressed: boolean, event: ToggleDOMEvent<MouseEvent>) => unknown
}

export type Toggle = s.Component<HTMLButtonElement, ToggleAttrs, s.Children[]>

declare const Toggle: Toggle

export { Toggle }
export default Toggle
