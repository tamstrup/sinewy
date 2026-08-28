import s from 'sin'
import { invokeHandler, readState, stateBinding, syncBinding, writeState } from './control-state.js'
import { FieldGroup } from './field-group.js'
import { themeColorStyle } from './theme-colors.js'
import { themedData } from './theme-options.js'

const $checkboxGroup = Symbol('sinewy-checkbox-group')

const CheckboxControl = s`input
  width 18
  height 18
  display inline-grid
  place-content center
  flex 0 0 auto
  margin 0
  padding 0
  border 1px solid $sinewy-neutral-8
  border-radius 5
  appearance none
  background $sinewy-panel
  color $sinewy-accent-contrast
  cursor pointer
  vertical-align middle
  transition background-color 80ms ease, border-color 80ms ease, box-shadow 80ms ease

  &::before {
    content ''
    width 9px
    height 5px
    border-inline-start 2px solid currentColor
    border-block-end 2px solid currentColor
    opacity 0
    transform translateY(-1px) rotate(-45deg) scale(0.7)
    transition opacity 80ms ease, transform 80ms ease
  }

  &[data-size='1'] {
    width 16
    height 16
    border-radius 4
  }

  &[data-size='3'] {
    width 22
    height 22
    border-radius 6

    &::before {
      width 11px
      height 6px
    }
  }

  &:hover:not(:disabled) {
    border-color $sinewy-accent-8
    background $sinewy-accent-2
  }

  &:checked {
    border-color $sinewy-accent-9
    background $sinewy-accent-9
  }

  &:checked::before {
    opacity 1
    transform translateY(-1px) rotate(-45deg) scale(1)
  }

  &:checked:hover:not(:disabled) {
    border-color $sinewy-accent-10
    background $sinewy-accent-10
  }

  &[data-high-contrast]:checked,
  &[data-color='gray']:checked {
    border-color $sinewy-accent-12
    background $sinewy-accent-12
    color $sinewy-accent-1
  }

  &:active:not(:disabled) {
    transform scale(0.94)
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

const Checkbox = s(({ defaultChecked = false }, [], context) => {
  const local = stateBinding(!!defaultChecked, context)
  const state = { local, defaultChecked: !!defaultChecked, bind: undefined, controlled: undefined }

  return ({
    checked,
    defaultChecked,
    bind,
    oncheckedchange,
    onchange,
    dom,
    disabled = false,
    size,
    color,
    highContrast,
    type,
    role,
    value: itemValue = 'on',
    data,
    style,
    ...attrs
  }, [], context) => {
    const group = context[$checkboxGroup]
    const resolvedSize = size ?? group?.size ?? '2'
    const resolvedColor = color ?? group?.color ?? 'accent'
    const resolvedContrast = highContrast ?? group?.highContrast ?? false
    const normalizedItem = String(itemValue)
    const controlled = group ? undefined : checked
    state.bind = bind
    state.controlled = controlled
    !group && syncBinding(local, bind, context)
    const current = group
      ? group.renderValue.includes(normalizedItem)
      : !!readState(local, bind, checked)

    return CheckboxControl({
      ...attrs,
      type: 'checkbox',
      name: group?.name ?? attrs.name,
      value: normalizedItem,
      checked: current,
      disabled,
      style: themeColorStyle(resolvedColor, style),
      data: themedData(data, {
        size: resolvedSize,
        color: resolvedColor,
        highContrast: resolvedContrast,
        state: current ? 'checked' : 'unchecked'
      }),
      dom: [element => mountCheckbox(state, group, element, context), ...array(dom)],
      onchange: (event, element, elementAttrs, elementContext) => {
        invokeHandler(onchange, event, element, elementAttrs, elementContext)
        const next = element.checked

        if (group) {
          const values = next
            ? [...new Set([...group.renderValue, normalizedItem])]
            : group.renderValue.filter(value => value !== normalizedItem)
          writeState(group.local, group.bind, group.controlled, values, group.context)
          oncheckedchange && oncheckedchange(next, event)
          group.onvaluechange && group.onvaluechange(values, event)
          group.controlled !== undefined && restoreCheckboxGroup(group)
        } else {
          writeState(local, bind, checked, next, context)
          oncheckedchange && oncheckedchange(next, event)
          checked !== undefined && (element.checked = current)
        }
      }
    })
  }
})

const CheckboxGroup = s(({ defaultValue = [] }, [], context) => {
  const initial = normalizeValues(defaultValue)
  const local = stateBinding(initial, context)
  const state = {
    local,
    defaultValue: initial,
    bind: undefined,
    controlled: undefined,
    renderValue: initial,
    context,
    element: undefined,
    onvaluechange: undefined,
    name: undefined,
    size: '2',
    color: 'accent',
    highContrast: false
  }
  const childContext = Object.create(context)
  childContext[$checkboxGroup] = state

  return ({
    value,
    defaultValue,
    bind,
    onvaluechange,
    name,
    disabled = false,
    size = '2',
    color = 'accent',
    highContrast = false,
    dom,
    data,
    style,
    ...attrs
  }, children, context) => {
    state.bind = bind
    state.controlled = value === undefined ? undefined : normalizeValues(value)
    state.context = context
    state.onvaluechange = onvaluechange
    state.name = name
    state.size = size
    state.color = color
    state.highContrast = highContrast
    syncBinding(local, bind, context)
    state.renderValue = normalizeValues(readState(local, bind, state.controlled))

    return s({ context: childContext }, () => FieldGroup({
      ...attrs,
      disabled,
      style: themeColorStyle(color, style),
      data: themedData(data, { size, color, highContrast }),
      dom: [element => mountCheckboxGroup(state, element), ...array(dom)]
    }, children))
  }
})

Checkbox.Group = CheckboxGroup

function mountCheckbox(state, group, element, context) {
  element.defaultChecked = group
    ? group.defaultValue.includes(element.value)
    : state.defaultChecked
  if (group)
    return

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

function mountCheckboxGroup(state, element) {
  state.element = element
  const form = element.form
  if (!form)
    return

  const reset = () => queueMicrotask(() => {
    const next = [...state.defaultValue]
    writeState(state.local, state.bind, state.controlled, next, state.context)
    state.context.redraw()
  })
  form.addEventListener('reset', reset)
  return () => form.removeEventListener('reset', reset)
}

function restoreCheckboxGroup(group) {
  group.element?.querySelectorAll('input[type="checkbox"]').forEach(input => {
    input.checked = group.renderValue.includes(input.value)
  })
  group.context.redraw()
}

function normalizeValues(values) {
  return values == null ? [] : [...new Set([...values].map(String))]
}

function array(value) {
  return value == null ? [] : Array.isArray(value) ? value : [value]
}

export { Checkbox }
export default Checkbox
