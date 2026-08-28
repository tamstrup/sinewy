import s from 'sin'
import type { ControlThemeOptions, ThemeOptions } from './theme-options.js'

export type { ControlThemeOptions, ControlVariant, ThemeColor, ThemeOptions, ThemeSize } from './theme-options.js'

export type DialogDOMEvent<E extends Event = Event> = E & { redraw?: boolean }
export type DialogBinding<T> = T extends unknown ? s.Live<T> : never

export interface DialogRootAttrs {
  id?: string
  open?: boolean
  defaultOpen?: boolean
  bind?: DialogBinding<boolean>
  onopenchange?: (open: boolean, event: DialogDOMEvent) => unknown
}

export interface DialogTriggerAttrs extends ControlThemeOptions {
  disabled?: boolean
}

export interface DialogContentAttrs extends ThemeOptions {
}

export interface DialogCloseAttrs extends ControlThemeOptions {
  disabled?: boolean
}

export type Dialog = s.Component<DialogRootAttrs, s.Children[]> & {
  Trigger: s.Component<HTMLButtonElement, DialogTriggerAttrs, s.Children[]>
  Content: s.Component<HTMLDialogElement, DialogContentAttrs, s.Children[]>
  Title: s.Component<HTMLHeadingElement, {}, s.Children[]>
  Description: s.Component<HTMLParagraphElement, {}, s.Children[]>
  Close: s.Component<HTMLButtonElement, DialogCloseAttrs, s.Children[]>
}

declare const Dialog: Dialog

export { Dialog }
export default Dialog
