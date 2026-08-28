import s from 'sin'
import type { Button as ButtonComponent } from './button.js'
import type { Toggle as ToggleComponent } from './toggle.js'
import type { Dialog as DialogComponent } from './dialog.js'
import type { AlertDialog as AlertDialogComponent } from './alert-dialog.js'
import type {
  ControlThemeOptions,
  ControlVariant,
  ThemeColor,
  ThemeOptions,
  ThemeSize
} from './theme-options.js'
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
import type {
  ContextMenuCheckboxAttrs,
  ContextMenuContentAttrs,
  ContextMenuGroupAttrs,
  ContextMenuIndicatorAttrs,
  ContextMenuItemAttrs,
  ContextMenuRadioAttrs,
  ContextMenuRadioGroupAttrs,
  ContextMenuRootAttrs,
  ContextMenuSubAttrs,
  ContextMenuSubContentAttrs,
  ContextMenuSubTriggerAttrs,
  ContextMenuTriggerAttrs
} from './context-menu.js'

export type { ControlThemeOptions, ControlVariant, ThemeColor, ThemeOptions, ThemeSize } from './theme-options.js'
export type { ButtonAttrs } from './button.js'
export type { ToggleAttrs } from './toggle.js'
export type {
  DialogCloseAttrs,
  DialogContentAttrs,
  DialogRootAttrs,
  DialogTriggerAttrs
} from './dialog.js'
export type {
  AlertDialogCloseAttrs,
  AlertDialogContentAttrs,
  AlertDialogRootAttrs,
  AlertDialogTriggerAttrs
} from './alert-dialog.js'

export type DropdownThemeSize = ThemeSize
export type DropdownThemeColor = ThemeColor
export type DropdownThemeTriggerVariant = ControlVariant
export type DropdownThemeContentVariant = 'solid' | 'soft'
export type DropdownThemeVariant = DropdownThemeTriggerVariant

export interface DropdownThemeOptions extends Pick<ThemeOptions, 'size'> {}

export interface DropdownThemeTriggerAttrs extends DropdownTriggerAttrs, ControlThemeOptions {}

export interface DropdownThemeContentOptions extends ThemeOptions {
  variant?: DropdownThemeContentVariant
}

export type DropdownThemeContentAttrs = DropdownContentAttrs & DropdownThemeContentOptions
export type DropdownThemeSubContentAttrs = DropdownSubContentAttrs & DropdownThemeContentOptions

export interface DropdownThemeItemOptions extends ThemeOptions {
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

export type ContextMenuThemeContentAttrs = ContextMenuContentAttrs & DropdownThemeContentOptions
export type ContextMenuThemeSubContentAttrs = ContextMenuSubContentAttrs & DropdownThemeContentOptions
export type ContextMenuThemeItemAttrs = ContextMenuItemAttrs & DropdownThemeItemOptions
export type ContextMenuThemeCheckboxAttrs = ContextMenuCheckboxAttrs & DropdownThemeItemOptions
export type ContextMenuThemeRadioAttrs = ContextMenuRadioAttrs & DropdownThemeItemOptions
export type ContextMenuThemeSubTriggerAttrs = ContextMenuSubTriggerAttrs & DropdownThemeItemOptions

export type ContextMenuTheme = s.Component<ContextMenuRootAttrs, s.Children[]> & {
  Trigger: s.Component<HTMLElement, ContextMenuTriggerAttrs, s.Children[]>
  Content: s.Component<HTMLDivElement, ContextMenuThemeContentAttrs, s.Children[]>
  Item: s.Component<HTMLButtonElement, ContextMenuThemeItemAttrs, s.Children[]>
  Checkbox: s.Component<HTMLButtonElement, ContextMenuThemeCheckboxAttrs, s.Children[]>
  RadioGroup: s.Component<HTMLDivElement, ContextMenuRadioGroupAttrs, s.Children[]>
  Radio: s.Component<HTMLButtonElement, ContextMenuThemeRadioAttrs, s.Children[]>
  Indicator: s.Component<HTMLElement, ContextMenuIndicatorAttrs, s.Children[]>
  Group: s.Component<HTMLDivElement, ContextMenuGroupAttrs, s.Children[]>
  Label: s.Component<HTMLDivElement, DropdownThemeOptions, s.Children[]>
  Separator: s.Component<HTMLDivElement, {}, s.Children[]>
  Sub: s.Component<ContextMenuSubAttrs, s.Children[]>
  SubTrigger: s.Component<HTMLButtonElement, ContextMenuThemeSubTriggerAttrs, s.Children[]>
  SubContent: s.Component<HTMLDivElement, ContextMenuThemeSubContentAttrs, s.Children[]>
  Shortcut: s.Component<HTMLElement, {}, s.Children[]>
}

declare const Dropdown: DropdownTheme
declare const ContextMenu: ContextMenuTheme
declare const Button: ButtonComponent
declare const Toggle: ToggleComponent
declare const Dialog: DialogComponent
declare const AlertDialog: AlertDialogComponent

export { AlertDialog, Button, ContextMenu, Dialog, Dropdown, Toggle }
export default Dropdown
