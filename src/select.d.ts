import s from 'sin'
import type { ThemeOptions } from './theme-options.js'

export type { ThemeColor, ThemeOptions, ThemeSize } from './theme-options.js'

export type SelectDOMEvent<E extends Event = Event> = E & { redraw?: boolean }
export type SelectBinding<T> = T extends unknown ? s.Live<T> : never

export interface SelectAttrs extends ThemeOptions {
  value?: string
  defaultValue?: string
  bind?: SelectBinding<string>
  onvaluechange?: (value: string, event: SelectDOMEvent<Event>) => unknown
  multiple?: never
  variant?: never
}

export type Select = s.Component<HTMLSelectElement, SelectAttrs, s.Children[]> & {
  Option: s.Component<HTMLOptionElement, {}, s.Children[]>
  Group: s.Component<HTMLOptGroupElement, {}, s.Children[]>
}

declare const Select: Select

export { Select }
export default Select
