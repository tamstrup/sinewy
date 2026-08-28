import s from 'sin'
import { controlTheme } from './control-theme.js'
import { invokeHandler, readState, stateBinding, syncBinding, writeState } from './control-state.js'
import { themeColorStyle } from './theme-colors.js'
import { themedData } from './theme-options.js'

const ToggleControl = controlTheme(s`button`)

const Toggle = s(({ defaultPressed = false }, [], context) => {
  const local = stateBinding(!!defaultPressed, context)

  return ({
    pressed,
    defaultPressed,
    bind,
    onpressedchange,
    onclick,
    disabled = false,
    size = '2',
    variant = 'soft',
    color = 'accent',
    highContrast = false,
    type = 'button',
    data,
    style,
    ...attrs
  }, children, context) => {
    syncBinding(local, bind, context)
    const value = !!readState(local, bind, pressed)

    return ToggleControl({
      ...attrs,
      type,
      disabled,
      'aria-pressed': String(value),
      style: themeColorStyle(color, style),
      data: themedData(data, {
        size,
        variant,
        color,
        highContrast,
        state: value ? 'on' : 'off'
      }),
      onclick: (event, element, elementAttrs, elementContext) => {
        invokeHandler(onclick, event, element, elementAttrs, elementContext)
        if (event.defaultPrevented || disabled)
          return

        const next = !value
        writeState(local, bind, pressed, next, context)
        onpressedchange && onpressedchange(next, event)
      }
    }, children)
  }
})

export { Toggle }
export default Toggle
