import s from 'sin'
import { invokeHandler, readState, stateBinding, syncBinding, writeState } from './control-state.js'
import { themeColorStyle } from './theme-colors.js'
import { themedData } from './theme-options.js'

const $select = Symbol('sinewy-select')

const SelectControl = s`select
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
    min-height 30
    padding-inline 8px
    border-radius 7
    font-size 12
  }

  &[data-size='3'] {
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

  @media (prefers-reduced-motion: reduce) {
    transition none
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
