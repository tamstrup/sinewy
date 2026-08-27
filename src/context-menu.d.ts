import s from 'sin'
import type {
  DropdownCheckboxAttrs,
  DropdownComponent,
  DropdownContentAttrs,
  DropdownDOMEvent,
  DropdownGroupAttrs,
  DropdownIndicatorAttrs,
  DropdownItemAttrs,
  DropdownRadioAttrs,
  DropdownRadioGroupAttrs,
  DropdownSubAttrs,
  DropdownSubContentAttrs,
  DropdownSubTriggerAttrs
} from './dropdown.js'
import type { DropdownDirection } from './dropdown.js'

export interface ContextMenuRootAttrs {
  id?: string
  loop?: boolean
  dir?: DropdownDirection
  onbeforeopenchange?: (open: boolean, event: DropdownDOMEvent<ToggleEvent>) => unknown
  onopenchange?: (open: boolean, event: DropdownDOMEvent<ToggleEvent>) => unknown
}

export interface ContextMenuTriggerAttrs {
  as?: DropdownComponent
  disabled?: boolean
}

export type ContextMenuContentAttrs = DropdownContentAttrs
export type ContextMenuItemAttrs = DropdownItemAttrs
export type ContextMenuCheckboxAttrs = DropdownCheckboxAttrs
export type ContextMenuRadioGroupAttrs<T = any> = DropdownRadioGroupAttrs<T>
export type ContextMenuRadioAttrs = DropdownRadioAttrs
export type ContextMenuIndicatorAttrs = DropdownIndicatorAttrs
export type ContextMenuGroupAttrs = DropdownGroupAttrs
export type ContextMenuSubAttrs = DropdownSubAttrs
export type ContextMenuSubTriggerAttrs = DropdownSubTriggerAttrs
export type ContextMenuSubContentAttrs = DropdownSubContentAttrs

export type ContextMenu = s.Component<ContextMenuRootAttrs, s.Children[]> & {
  Trigger: s.Component<HTMLElement, ContextMenuTriggerAttrs, s.Children[]>
  Content: s.Component<HTMLDivElement, ContextMenuContentAttrs, s.Children[]>
  Item: s.Component<HTMLButtonElement, ContextMenuItemAttrs, s.Children[]>
  Checkbox: s.Component<HTMLButtonElement, ContextMenuCheckboxAttrs, s.Children[]>
  RadioGroup: s.Component<HTMLDivElement, ContextMenuRadioGroupAttrs, s.Children[]>
  Radio: s.Component<HTMLButtonElement, ContextMenuRadioAttrs, s.Children[]>
  Indicator: s.Component<HTMLElement, ContextMenuIndicatorAttrs, s.Children[]>
  Group: s.Component<HTMLDivElement, ContextMenuGroupAttrs, s.Children[]>
  Label: s.Component<HTMLDivElement, {}, s.Children[]>
  Separator: s.Component<HTMLDivElement, {}, s.Children[]>
  Sub: s.Component<ContextMenuSubAttrs, s.Children[]>
  SubTrigger: s.Component<HTMLButtonElement, ContextMenuSubTriggerAttrs, s.Children[]>
  SubContent: s.Component<HTMLDivElement, ContextMenuSubContentAttrs, s.Children[]>
}

declare const ContextMenu: ContextMenu

export { ContextMenu }
export default ContextMenu
