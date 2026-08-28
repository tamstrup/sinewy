import s from 'sin'
import { controlTheme } from './control-theme.js'
import { themeColorStyle } from './theme-colors.js'
import { themedData } from './theme-options.js'

const ButtonControl = controlTheme(s`button`)

const Button = s(({
  size = '2',
  variant = 'solid',
  color = 'accent',
  highContrast = false,
  type = 'button',
  data,
  style,
  ...attrs
}, children) => ButtonControl({
  ...attrs,
  type,
  style: themeColorStyle(color, style),
  data: themedData(data, { size, variant, color, highContrast })
}, children))

export { Button }
export default Button
