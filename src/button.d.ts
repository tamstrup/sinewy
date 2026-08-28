import s from 'sin'
import type { ControlThemeOptions } from './theme-options.js'

export type { ControlThemeOptions, ControlVariant, ThemeColor, ThemeSize } from './theme-options.js'

export interface ButtonAttrs extends ControlThemeOptions {
}

export type Button = s.Component<HTMLButtonElement, ButtonAttrs, s.Children[]>

declare const Button: Button

export { Button }
export default Button
