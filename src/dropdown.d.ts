import s from 'sin'

export type DropdownDirection = 'ltr' | 'rtl'
export type DropdownSide = 'top' | 'right' | 'bottom' | 'left'
export type DropdownAlign = 'start' | 'center' | 'end'
export type DropdownCollisionStrategy = 'preferred' | 'most-space'
export type DropdownChecked = boolean | 'indeterminate'
export type DropdownBinding<T> = T extends unknown ? s.Live<T> : never
export type DropdownComponent = s.Component<any>
export type DropdownDOMEvent<E extends Event = Event> = E & { redraw?: boolean }
export type DropdownEventHandler<E extends Event = Event> = (
  event: DropdownDOMEvent<E>,
  element?: HTMLElement,
  attrs?: Record<string, unknown>,
  context?: unknown
) => unknown

export interface DropdownRootAttrs {
  id?: string
  defaultOpen?: boolean
  open?: boolean
  bind?: DropdownBinding<boolean>
  loop?: boolean
  dir?: DropdownDirection
  onbeforeopenchange?: (open: boolean, event: DropdownDOMEvent<ToggleEvent>) => unknown
  onopenchange?: (open: boolean, event: DropdownDOMEvent<ToggleEvent>) => unknown
}

export interface DropdownTriggerAttrs {
  as?: DropdownComponent
  disabled?: boolean
}

export interface DropdownContentAttrs {
  side?: DropdownSide
  align?: DropdownAlign
  offset?: number | string
  alignOffset?: number | string
  avoidCollisions?: boolean
  collisionStrategy?: DropdownCollisionStrategy
  loop?: boolean
}

export interface DropdownItemAttrs {
  as?: DropdownComponent
  disabled?: boolean
  textValue?: string
  onselect?: DropdownEventHandler
}

export interface DropdownCheckboxAttrs extends DropdownItemAttrs {
  checked?: DropdownChecked
  defaultChecked?: DropdownChecked
  bind?: DropdownBinding<DropdownChecked>
  oncheckedchange?: (checked: DropdownChecked, event: DropdownDOMEvent<MouseEvent>) => unknown
}

export interface DropdownRadioGroupAttrs<T = any> {
  value?: T
  defaultValue?: T
  bind?: DropdownBinding<T>
  onvaluechange?: (value: T, event: DropdownDOMEvent<MouseEvent>) => unknown
  ariaLabel?: string
}

export interface DropdownRadioAttrs extends DropdownItemAttrs {
  value: any
}

export interface DropdownIndicatorAttrs {
  forceMount?: boolean
}

export interface DropdownGroupAttrs {
  ariaLabel?: string
}

export interface DropdownSubAttrs extends DropdownRootAttrs {
  openDelay?: number
  closeDelay?: number
}

export interface DropdownSubTriggerAttrs extends DropdownItemAttrs {
}

export interface DropdownSubContentAttrs extends DropdownContentAttrs {
}

export type Dropdown = s.Component<DropdownRootAttrs, s.Children[]> & {
  Trigger: s.Component<HTMLButtonElement, DropdownTriggerAttrs, s.Children[]>
  Content: s.Component<HTMLDivElement, DropdownContentAttrs, s.Children[]>
  Item: s.Component<HTMLButtonElement, DropdownItemAttrs, s.Children[]>
  Checkbox: s.Component<HTMLButtonElement, DropdownCheckboxAttrs, s.Children[]>
  RadioGroup: s.Component<HTMLDivElement, DropdownRadioGroupAttrs, s.Children[]>
  Radio: s.Component<HTMLButtonElement, DropdownRadioAttrs, s.Children[]>
  Indicator: s.Component<HTMLElement, DropdownIndicatorAttrs, s.Children[]>
  Group: s.Component<HTMLDivElement, DropdownGroupAttrs, s.Children[]>
  Label: s.Component<HTMLDivElement, {}, s.Children[]>
  Separator: s.Component<HTMLDivElement, {}, s.Children[]>
  Sub: s.Component<DropdownSubAttrs, s.Children[]>
  SubTrigger: s.Component<HTMLButtonElement, DropdownSubTriggerAttrs, s.Children[]>
  SubContent: s.Component<HTMLDivElement, DropdownSubContentAttrs, s.Children[]>
}

declare const Dropdown: Dropdown

export { Dropdown }
export default Dropdown
