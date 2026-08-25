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
  DropdownSubcontentAttrs,
  DropdownSubtriggerAttrs,
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
export type DropdownThemeSubcontentAttrs = DropdownSubcontentAttrs & DropdownThemeContentOptions

export interface DropdownThemeItemOptions extends DropdownThemeOptions {
  color?: DropdownThemeColor
  highContrast?: boolean
  shortcut?: s.Children
}

export type DropdownThemeItemAttrs = DropdownItemAttrs & DropdownThemeItemOptions
export type DropdownThemeCheckboxAttrs = DropdownCheckboxAttrs & DropdownThemeItemOptions
export type DropdownThemeRadioAttrs = DropdownRadioAttrs & DropdownThemeItemOptions
export type DropdownThemeSubtriggerAttrs = DropdownSubtriggerAttrs & DropdownThemeItemOptions

export type DropdownTheme = s.Component<DropdownRootAttrs, s.Children[]> & {
  trigger: s.Component<HTMLButtonElement, DropdownThemeTriggerAttrs, s.Children[]>
  content: s.Component<HTMLDivElement, DropdownThemeContentAttrs, s.Children[]>
  item: s.Component<HTMLButtonElement, DropdownThemeItemAttrs, s.Children[]>
  checkbox: s.Component<HTMLButtonElement, DropdownThemeCheckboxAttrs, s.Children[]>
  radioGroup: s.Component<HTMLDivElement, DropdownRadioGroupAttrs, s.Children[]>
  radio: s.Component<HTMLButtonElement, DropdownThemeRadioAttrs, s.Children[]>
  indicator: s.Component<HTMLElement, DropdownIndicatorAttrs, s.Children[]>
  group: s.Component<HTMLDivElement, DropdownGroupAttrs, s.Children[]>
  label: s.Component<HTMLDivElement, DropdownThemeOptions, s.Children[]>
  separator: s.Component<HTMLDivElement, {}, s.Children[]>
  sub: s.Component<DropdownSubAttrs, s.Children[]>
  subtrigger: s.Component<HTMLButtonElement, DropdownThemeSubtriggerAttrs, s.Children[]>
  subcontent: s.Component<HTMLDivElement, DropdownThemeSubcontentAttrs, s.Children[]>
  shortcut: s.Component<HTMLElement, {}, s.Children[]>
  triggerIcon: s.Component<Record<string, unknown>, s.Children[]>
}

declare const dropdown: DropdownTheme

export { dropdown }
export default dropdown
