import s from 'sin'
import type { ThemeOptions } from './theme-options.js'

export type { ThemeColor, ThemeOptions, ThemeSize } from './theme-options.js'

export type SwitchDOMEvent<E extends Event = Event> = E & { redraw?: boolean }
export type SwitchBinding<T> = T extends unknown ? s.Live<T> : never

export interface SwitchAttrs extends ThemeOptions {
  checked?: boolean
  defaultChecked?: boolean
  bind?: SwitchBinding<boolean>
  oncheckedchange?: (checked: boolean, event: SwitchDOMEvent<Event>) => unknown
  variant?: never
  type?: never
  role?: never
}

export type Switch = s.Component<HTMLInputElement, SwitchAttrs>

declare const Switch: Switch

export { Switch }
export default Switch
