import s from 'sin'

export type ComboboxValue = string
export type ComboboxSelection<Multiple extends boolean = false> =
  Multiple extends true ? ComboboxValue[] : ComboboxValue | null
export type ComboboxBinding<Multiple extends boolean = false> =
  Multiple extends true
    ? s.Live<ComboboxValue[]>
    : ReturnType<typeof s.live<ComboboxValue | null>>
export type ComboboxDOMEvent<E extends Event = Event> = E & { redraw?: boolean }
export type ComboboxEventHandler<E extends Event = Event> = (
  event: ComboboxDOMEvent<E>,
  element?: HTMLElement,
  attrs?: Record<string, unknown>,
  context?: unknown
) => unknown

export interface ComboboxRootAttrs<Multiple extends boolean = false> {
  id?: string
  multiple?: Multiple
  value?: ComboboxSelection<Multiple>
  defaultValue?: ComboboxSelection<Multiple>
  bind?: ComboboxBinding<Multiple>
  dir?: 'ltr' | 'rtl'
  filter?: (textValue: string, query: string, value: ComboboxValue) => boolean
  formatValue?: (value: ComboboxValue) => string
  onvaluechange?: (
    value: ComboboxSelection<Multiple>,
    event: ComboboxDOMEvent<MouseEvent | KeyboardEvent>
  ) => unknown
}

export interface ComboboxControlAttrs {
}

export interface ComboboxPillsAttrs {
  removelabel?: (value: ComboboxValue, textValue: string) => string
}

export interface ComboboxInputAttrs {
}

export interface ComboboxContentAttrs {
}

export interface ComboboxItemAttrs {
  value: ComboboxValue
  textValue?: string
  disabled?: boolean
  onselect?: ComboboxEventHandler<MouseEvent>
}

export type Combobox = {
  <Multiple extends boolean = false>(
    attrs: ComboboxRootAttrs<Multiple>,
    ...children: s.Children[]
  ): ReturnType<s.Component<ComboboxRootAttrs<Multiple>, s.Children[]>>
  (...children: s.Children[]): ReturnType<s.Component<ComboboxRootAttrs, s.Children[]>>
  Control: s.Component<HTMLDivElement, ComboboxControlAttrs, s.Children[]>
  Pills: s.Component<HTMLSpanElement, ComboboxPillsAttrs, []>
  Input: s.Component<HTMLInputElement, ComboboxInputAttrs, []>
  Content: s.Component<HTMLDivElement, ComboboxContentAttrs, s.Children[]>
  Item: s.Component<HTMLDivElement, ComboboxItemAttrs, s.Children[]>
}

declare const Combobox: Combobox

export { Combobox }
export default Combobox
