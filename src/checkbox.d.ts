import s from 'sin'
import type { ThemeOptions } from './theme-options.js'

export type { ThemeColor, ThemeOptions, ThemeSize } from './theme-options.js'

export type CheckboxDOMEvent<E extends Event = Event> = E & { redraw?: boolean }
export type CheckboxBinding<T> = T extends unknown ? s.Live<T> : never

export interface CheckboxAttrs extends ThemeOptions {
  checked?: boolean
  defaultChecked?: boolean
  bind?: CheckboxBinding<boolean>
  oncheckedchange?: (checked: boolean, event: CheckboxDOMEvent<Event>) => unknown
  type?: never
  role?: never
  variant?: never
}

export interface CheckboxGroupAttrs extends ThemeOptions {
  value?: string[]
  defaultValue?: string[]
  bind?: CheckboxBinding<string[]>
  onvaluechange?: (value: string[], event: CheckboxDOMEvent<Event>) => unknown
  name?: string
  required?: never
  variant?: never
}

export type Checkbox = s.Component<HTMLInputElement, CheckboxAttrs> & {
  Group: s.Component<HTMLFieldSetElement, CheckboxGroupAttrs, s.Children[]>
}

declare const Checkbox: Checkbox

export { Checkbox }
export default Checkbox
