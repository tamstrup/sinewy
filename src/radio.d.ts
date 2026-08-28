import s from 'sin'
import type { ThemeOptions } from './theme-options.js'

export type { ThemeColor, ThemeOptions, ThemeSize } from './theme-options.js'

export type RadioDOMEvent<E extends Event = Event> = E & { redraw?: boolean }
export type RadioBinding<T> = T extends unknown ? s.Live<T> : never

export interface RadioAttrs extends ThemeOptions {
  checked?: boolean
  defaultChecked?: boolean
  bind?: RadioBinding<boolean>
  oncheckedchange?: (checked: boolean, event: RadioDOMEvent<Event>) => unknown
  type?: never
  role?: never
  variant?: never
}

export interface RadioGroupAttrs extends ThemeOptions {
  value?: string
  defaultValue?: string
  bind?: RadioBinding<string>
  onvaluechange?: (value: string, event: RadioDOMEvent<Event>) => unknown
  name: string
  required?: boolean
  variant?: never
}

export type Radio = s.Component<HTMLInputElement, RadioAttrs> & {
  Group: s.Component<HTMLFieldSetElement, RadioGroupAttrs, s.Children[]>
}

declare const Radio: Radio

export { Radio }
export default Radio
