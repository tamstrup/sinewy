import s from 'sin'
import { invokeHandler, readState, stateBinding, syncBinding, writeState } from './control-state.js'
import { themeColorStyle } from './theme-colors.js'
import { themedData } from './theme-options.js'

const $select = Symbol('sinewy-select')

const SelectControl = s`select
  $sinewy-select-indicator-width 16px
  $sinewy-select-indicator-start 9px
  $sinewy-select-indicator-font-size 12px
  min-width 0
  min-height 36
  margin 0
  padding 0 10px
  border 1px solid $sinewy-neutral-7
  border-radius 9
  appearance auto
  background $sinewy-panel
  color $sinewy-neutral-12
  cursor pointer
  font inherit
  font-size 13
  line-height 1.2
  transition background-color 80ms ease, border-color 80ms ease, box-shadow 80ms ease

  &[data-size='1'] {
    $sinewy-select-indicator-width 14px
    $sinewy-select-indicator-start 7px
    $sinewy-select-indicator-font-size 11px
    min-height 30
    padding-inline 8px
    border-radius 7
    font-size 12
  }

  &[data-size='3'] {
    $sinewy-select-indicator-width 18px
    $sinewy-select-indicator-start 11px
    $sinewy-select-indicator-font-size 13px
    min-height 42
    padding-inline 12px
    border-radius 11
    font-size 14
  }

  &:hover:not(:disabled) {
    border-color $sinewy-accent-8
    background $sinewy-accent-2
  }

  &[data-high-contrast] {
    border-color $sinewy-accent-8
  }

  &:focus-visible {
    border-color $sinewy-accent-8
    outline 3px solid color-mix(in srgb, $sinewy-accent-8 42%, transparent)
    outline-offset 2px
  }

  &:disabled {
    cursor default
    opacity 0.5
  }

  @supports (appearance: base-select) {
    align-items center
    gap 8
    appearance base-select

    &::picker(select) {
      min-width anchor-size(width)
      max-width min(340px, calc(100vw - 24px))
      max-height min(480px, calc(100vh - 24px))
      padding 6
      overflow auto
      border 1px solid $sinewy-neutral-6
      border-radius 13
      appearance base-select
      background color-mix(in srgb, $sinewy-panel 98%, transparent)
      color $sinewy-neutral-12
      box-shadow 0 22px 60px light-dark(rgb(35 31 24 / 0.18), rgb(0 0 0 / 0.5)), 0 3px 10px light-dark(rgb(35 31 24 / 0.08), rgb(0 0 0 / 0.28))
      opacity 0
      transform translateY(-4px) scale(0.985)
      transform-origin top
      transition opacity 120ms ease, transform 120ms ease, display 120ms allow-discrete, overlay 120ms allow-discrete
    }

    &:open::picker(select) {
      opacity 1
      transform translateY(0) scale(1)
    }

    @starting-style {
      &:open::picker(select) {
        opacity 0
        transform translateY(-4px) scale(0.985)
      }
    }

    &::picker-icon {
      margin-inline-start auto
      margin-inline-end 4px
      color $sinewy-accent-11
      transition transform 120ms ease
    }

    &:open::picker-icon {
      transform rotate(180deg)
    }

    & optgroup {
      margin 0
      padding 5px 0 0
      border 0
      color $sinewy-neutral-11
      font-size 11
      font-weight 750
      letter-spacing 0.08em
      text-transform uppercase
    }

    & optgroup + optgroup {
      margin-block-start 5px
      border-block-start 1px solid $sinewy-neutral-6
    }

    & option {
      min-height 36
      display flex
      position relative
      align-items center
      gap 10
      margin 0
      padding 7px 9px
      padding-inline-start 35px
      border 0
      border-radius 8
      background transparent
      color $sinewy-neutral-12
      cursor pointer
      font-size 14
      font-weight 500
      line-height 20px
      letter-spacing normal
      text-align start
      text-transform none
      user-select none
    }

    & optgroup > option:first-of-type {
      margin-block-start 4px
    }

    &[data-size='1']::picker(select) {
      max-width min(300px, calc(100vw - 20px))
      max-height min(400px, calc(100vh - 20px))
      padding 5
      border-radius 11
    }

    &[data-size='1'] optgroup {
      padding-block-start 4px
      font-size 10
    }

    &[data-size='1'] option {
      min-height 30
      gap 8
      padding 5px 7px
      padding-inline-start 29px
      border-radius 7
      font-size 12
      line-height 16px
    }

    &[data-size='1'] optgroup > option:first-of-type {
      margin-block-start 3px
    }

    &[data-size='3']::picker(select) {
      max-width min(380px, calc(100vw - 28px))
      max-height min(540px, calc(100vh - 28px))
      padding 7
      border-radius 15
    }

    &[data-size='3'] optgroup {
      padding-block-start 6px
      font-size 12
    }

    &[data-size='3'] option {
      min-height 42
      gap 12
      padding 9px 11px
      padding-inline-start 41px
      border-radius 10
      font-size 16
      line-height 24px
    }

    &[data-size='3'] optgroup > option:first-of-type {
      margin-block-start 5px
    }

    & option::checkmark {
      content '✓'
      width $sinewy-select-indicator-width
      display inline-grid
      place-items center
      position absolute
      inset-inline-start $sinewy-select-indicator-start
      color $sinewy-accent-11
      font-size $sinewy-select-indicator-font-size
      font-weight 900
    }

    & option:checked {
      background $sinewy-accent-3
      color $sinewy-accent-12
    }

    & option:hover:not(:disabled) {
      outline 0
      background $sinewy-accent-9
      color $sinewy-accent-contrast
    }

    & option:focus:not(:disabled) {
      outline 0
      background $sinewy-accent-9
      color $sinewy-accent-contrast
    }

    & option:hover:not(:disabled)::checkmark {
      color currentColor
    }

    & option:focus:not(:disabled)::checkmark {
      color currentColor
    }

    &[data-high-contrast] option:checked {
      background $sinewy-accent-12
      color $sinewy-accent-1
    }

    &[data-high-contrast] option:checked::checkmark {
      color currentColor
    }

    & option:disabled {
      cursor default
      color $sinewy-neutral-9
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition none

    &::picker(select) {
      transition none
      transform none
    }

    &::picker-icon {
      transition none
      transform none
    }
  }
`

const SelectOption = s(({ value = '', selected, ...attrs }, children, context) => {
  const state = context[$select]
  const normalized = String(value)
  return s`option`({
    ...attrs,
    value: normalized,
    selected: state?.renderValue === undefined ? selected : state.renderValue === normalized
  }, children)
})
const SelectGroup = s`optgroup`

const Select = s(({ defaultValue }, [], context) => {
  const initial = defaultValue == null ? undefined : String(defaultValue)
  const local = stateBinding(initial, context)
  const state = {
    local,
    defaultValue: initial,
    bind: undefined,
    controlled: undefined,
    renderValue: initial
  }
  const childContext = Object.create(context)
  childContext[$select] = state

  return ({
    value,
    defaultValue,
    bind,
    onvaluechange,
    onchange,
    dom,
    multiple,
    disabled = false,
    size = '2',
    color = 'accent',
    highContrast = false,
    data,
    style,
    ...attrs
  }, children, context) => {
    const controlled = value == null ? undefined : String(value)
    state.bind = bind
    state.controlled = controlled
    syncBinding(local, bind, context)
    const current = normalizeValue(readState(local, bind, controlled))
    state.renderValue = current

    return s({ context: childContext }, () => SelectControl({
      ...attrs,
      value: current,
      disabled,
      style: themeColorStyle(color, style),
      data: themedData(data, { size, color, highContrast }),
      dom: [element => mountSelect(state, element, context), ...array(dom)],
      onchange: (event, element, elementAttrs, elementContext) => {
        invokeHandler(onchange, event, element, elementAttrs, elementContext)
        const next = element.value
        writeState(local, bind, controlled, next, context)
        onvaluechange && onvaluechange(next, event)

        if (controlled !== undefined)
          element.value = current
      }
    }, children))
  }
})

Select.Option = SelectOption
Select.Group = SelectGroup

function mountSelect(state, element, context) {
  if (state.defaultValue !== undefined)
    for (const option of element.options)
      option.defaultSelected = option.value === state.defaultValue

  const form = element.form
  if (!form)
    return

  const reset = () => queueMicrotask(() => {
    const next = element.value
    writeState(state.local, state.bind, state.controlled, next, context)
    const current = normalizeValue(readState(state.local, state.bind, state.controlled))
    current !== undefined && (element.value = current)
    context.redraw()
  })

  form.addEventListener('reset', reset)
  return () => form.removeEventListener('reset', reset)
}

function normalizeValue(value) {
  return value == null ? undefined : String(value)
}

function array(value) {
  return value == null ? [] : Array.isArray(value) ? value : [value]
}

export { Select }
export default Select
