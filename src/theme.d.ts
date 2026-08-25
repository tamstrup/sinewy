import s from 'sin'
import type {
  DropdownCheckboxAttrs,
  DropdownContentAttrs,
  DropdownGroupAttrs,
  DropdownIndicatorAttrs,
  DropdownItemAttrs,
  DropdownRadioAttrs,
  DropdownRadioGroupAttrs,
  DropdownRootAttrs,
  DropdownSubAttrs,
  DropdownSubContentAttrs,
  DropdownSubTriggerAttrs,
  DropdownTriggerAttrs
} from './dropdown.js'

export type DropdownThemeSize = '1' | '2' | '3'
export type DropdownThemeColor =
  | 'gray'
  | 'accent'
  | 'red'
  | 'orange'
  | 'amber'
  | 'green'
  | 'teal'
  | 'cyan'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'
  | 'crimson'
export type DropdownThemeTriggerVariant = 'solid' | 'soft' | 'outline' | 'ghost'
export type DropdownThemeContentVariant = 'solid' | 'soft'
export type DropdownThemeVariant = DropdownThemeTriggerVariant

export interface DropdownThemeOptions {
  size?: DropdownThemeSize
}

export interface DropdownThemeTriggerAttrs extends DropdownTriggerAttrs, DropdownThemeOptions {
  variant?: DropdownThemeTriggerVariant
  color?: DropdownThemeColor
  highContrast?: boolean
}

export interface DropdownThemeContentOptions extends DropdownThemeOptions {
  variant?: DropdownThemeContentVariant
  color?: DropdownThemeColor
  highContrast?: boolean
}

export type DropdownThemeContentAttrs = DropdownContentAttrs & DropdownThemeContentOptions
export type DropdownThemeSubContentAttrs = DropdownSubContentAttrs & DropdownThemeContentOptions

export interface DropdownThemeItemOptions extends DropdownThemeOptions {
  color?: DropdownThemeColor
  highContrast?: boolean
  shortcut?: s.Children
}

export type DropdownThemeItemAttrs = DropdownItemAttrs & DropdownThemeItemOptions
export type DropdownThemeCheckboxAttrs = DropdownCheckboxAttrs & DropdownThemeItemOptions
export type DropdownThemeRadioAttrs = DropdownRadioAttrs & DropdownThemeItemOptions
export type DropdownThemeSubTriggerAttrs = DropdownSubTriggerAttrs & DropdownThemeItemOptions

export type DropdownTheme = s.Component<DropdownRootAttrs, s.Children[]> & {
  Trigger: s.Component<HTMLButtonElement, DropdownThemeTriggerAttrs, s.Children[]>
  Content: s.Component<HTMLDivElement, DropdownThemeContentAttrs, s.Children[]>
  Item: s.Component<HTMLButtonElement, DropdownThemeItemAttrs, s.Children[]>
  Checkbox: s.Component<HTMLButtonElement, DropdownThemeCheckboxAttrs, s.Children[]>
  RadioGroup: s.Component<HTMLDivElement, DropdownRadioGroupAttrs, s.Children[]>
  Radio: s.Component<HTMLButtonElement, DropdownThemeRadioAttrs, s.Children[]>
  Indicator: s.Component<HTMLElement, DropdownIndicatorAttrs, s.Children[]>
  Group: s.Component<HTMLDivElement, DropdownGroupAttrs, s.Children[]>
  Label: s.Component<HTMLDivElement, DropdownThemeOptions, s.Children[]>
  Separator: s.Component<HTMLDivElement, {}, s.Children[]>
  Sub: s.Component<DropdownSubAttrs, s.Children[]>
  SubTrigger: s.Component<HTMLButtonElement, DropdownThemeSubTriggerAttrs, s.Children[]>
  SubContent: s.Component<HTMLDivElement, DropdownThemeSubContentAttrs, s.Children[]>
  Shortcut: s.Component<HTMLElement, {}, s.Children[]>
  TriggerIcon: s.Component<Record<string, unknown>, s.Children[]>
}

declare const Dropdown: DropdownTheme

export { Dropdown }
export default Dropdown
