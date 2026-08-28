import s from 'sin'
import { invokeHandler, readState, stateBinding, syncBinding, writeState } from './control-state.js'
import { themeColorStyle } from './theme-colors.js'
import { themedData } from './theme-options.js'

const SwitchControl = s`input
  $sinewy-switch-thumb-size 18px
  $sinewy-switch-inset 2px
  width 36
  height 22
  display inline-block
  position relative
  flex 0 0 auto
  margin 0
  padding 0
  overflow hidden
  border 0
  border-radius 999px
  appearance none
  background $sinewy-neutral-6
  box-shadow inset 0 0 0 1px color-mix(in srgb, $sinewy-neutral-12 10%, transparent)
  cursor pointer
  vertical-align middle
  transition background-color 100ms ease, box-shadow 100ms ease

  &::before {
    content ''
    width $sinewy-switch-thumb-size
    height $sinewy-switch-thumb-size
    display block
    position absolute
    inset-block-start $sinewy-switch-inset
    inset-inline-start $sinewy-switch-inset
    border-radius 50%
    background $sinewy-panel
    box-shadow 0 1px 4px light-dark(rgb(25 23 19 / 0.34), rgb(0 0 0 / 0.72))
    transition inset-inline-start 120ms ease, transform 80ms ease
  }

  &[data-size='1'] {
    $sinewy-switch-thumb-size 14px
    width 30
    height 18
  }

  &[data-size='3'] {
    $sinewy-switch-thumb-size 22px
    width 44
    height 26
  }

  &:checked {
    background $sinewy-accent-9
    box-shadow inset 0 0 0 1px color-mix(in srgb, $sinewy-accent-12 14%, transparent)
  }

  &:checked::before {
    inset-inline-start calc(100% - $sinewy-switch-thumb-size - $sinewy-switch-inset)
  }

  &:hover:not(:disabled) {
    background $sinewy-neutral-7
  }

  &:checked:hover:not(:disabled) {
    background $sinewy-accent-10
  }

  &[data-high-contrast]:checked,
  &[data-color='gray']:checked {
    background $sinewy-accent-12
  }

  &[data-high-contrast]:checked:hover:not(:disabled),
  &[data-color='gray']:checked:hover:not(:disabled) {
    background $sinewy-extreme
  }

  &:active:not(:disabled)::before {
    transform scale(0.9)
  }

  &:focus-visible {
    outline 3px solid color-mix(in srgb, $sinewy-accent-8 42%, transparent)
    outline-offset 2px
  }

  &:disabled {
    cursor default
    opacity 0.48
  }

  @media (prefers-reduced-motion: reduce) {
    transition none

    &::before {
      transition none
    }
  }
`

const Switch = s(({ defaultChecked = false }, [], context) => {
  const local = stateBinding(!!defaultChecked, context)
  const state = {
    local,
    defaultChecked: !!defaultChecked,
    bind: undefined,
    controlled: undefined
  }

  return ({
    checked,
    defaultChecked,
    bind,
    oncheckedchange,
    onchange,
    dom,
    disabled = false,
    size = '2',
    color = 'accent',
    highContrast = false,
    type,
    role,
    data,
    style,
    ...attrs
  }, [], context) => {
    state.bind = bind
    state.controlled = checked
    syncBinding(local, bind, context)
    const value = !!readState(local, bind, checked)

    return SwitchControl({
      ...attrs,
      type: 'checkbox',
      role: 'switch',
      checked: value,
      disabled,
      style: themeColorStyle(color, style),
      data: themedData(data, {
        size,
        color,
        highContrast,
        state: value ? 'checked' : 'unchecked'
      }),
      dom: [element => mountSwitch(state, element, context), ...array(dom)],
      onchange: (event, element, elementAttrs, elementContext) => {
        invokeHandler(onchange, event, element, elementAttrs, elementContext)
        const next = element.checked
        writeState(local, bind, checked, next, context)
        oncheckedchange && oncheckedchange(next, event)

        if (checked !== undefined)
          element.checked = value
      }
    })
  }
})

function mountSwitch(state, element, context) {
  element.defaultChecked = state.defaultChecked
  const form = element.form
  if (!form)
    return

  const reset = () => queueMicrotask(() => {
    const next = element.checked
    writeState(state.local, state.bind, state.controlled, next, context)
    element.checked = !!readState(state.local, state.bind, state.controlled)
    context.redraw()
  })

  form.addEventListener('reset', reset)
  return () => form.removeEventListener('reset', reset)
}

function array(value) {
  return value == null ? [] : Array.isArray(value) ? value : [value]
}

export { Switch }
export default Switch
