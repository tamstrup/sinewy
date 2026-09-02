import s from 'sin'
import type { ThemeOptions } from './theme-options.js'
import type { ComboboxEventHandler } from './combobox.js'

export interface CustomSelectAttrs extends ThemeOptions {
  value?: string | null
  defaultValue?: string | null
  bind?: ReturnType<typeof s.live<string | null>>
  onvaluechange?: (value: string | null, event: Event) => unknown
  formatValue?: (value: string) => string
  placeholder?: string
  name?: string
  form?: string
  required?: boolean
  disabled?: boolean
  autocomplete?: string
  multiple?: never
  filter?: never
  variant?: never
}

export interface CustomSelectOptionAttrs {
  value: string
  textValue?: string
  disabled?: boolean
  onselect?: ComboboxEventHandler<MouseEvent>
}

export interface CustomSelectGroupAttrs {
  label: string
  disabled?: boolean
}

type TriggerAttrs = ReturnType<s.Component<HTMLButtonElement, {}, s.Children[]>>['attrs']

export type CustomSelect = s.Component<CustomSelectAttrs & Omit<TriggerAttrs, keyof CustomSelectAttrs>, s.Children[]> & {
  Option: s.Component<HTMLDivElement, CustomSelectOptionAttrs, s.Children[]>
  Group: s.Component<HTMLDivElement, CustomSelectGroupAttrs, s.Children[]>
}

declare const CustomSelect: CustomSelect
export { CustomSelect }
export default CustomSelect
