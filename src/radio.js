import s from 'sin'
import { invokeHandler, readState, stateBinding, syncBinding, writeState } from './control-state.js'
import { FieldGroup } from './field-group.js'
import { themeColorStyle } from './theme-colors.js'
import { themedData } from './theme-options.js'

const $radioGroup = Symbol('sinewy-radio-group')
const $radioNames = Symbol('sinewy-radio-names')

const RadioControl = s`input
  width 18
  height 18
  display inline-grid
  place-content center
  flex 0 0 auto
  margin 0
  padding 0
  border 1px solid $sinewy-neutral-8
  border-radius 50%
  appearance none
  background $sinewy-panel
  color $sinewy-accent-contrast
  cursor pointer
  vertical-align middle
  transition background-color 80ms ease, border-color 80ms ease, box-shadow 80ms ease

  &::before {
    content ''
    width 8px
    height 8px
    border-radius 50%
    background currentColor
    opacity 0
    transform scale(0.6)
    transition opacity 80ms ease, transform 80ms ease
  }

  &[data-size='1'] {
    width 16
    height 16

    &::before {
      width 6px
      height 6px
    }
  }

  &[data-size='3'] {
    width 22
    height 22

    &::before {
      width 10px
      height 10px
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
    transform scale(1)
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

const Radio = s(({ defaultChecked = false }, [], context) => {
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
    const group = context[$radioGroup]
    const resolvedSize = size ?? group?.size ?? '2'
    const resolvedColor = color ?? group?.color ?? 'accent'
    const resolvedContrast = highContrast ?? group?.highContrast ?? false
    const normalizedItem = String(itemValue)
    state.bind = bind
    state.controlled = group ? undefined : checked
    !group && syncBinding(local, bind, context)
    const current = group
      ? group.renderValue === normalizedItem
      : !!readState(local, bind, checked)

    return RadioControl({
      ...attrs,
      type: 'radio',
      name: group?.name ?? attrs.name,
      value: normalizedItem,
      checked: current,
      required: group ? group.required || attrs.required : attrs.required,
      disabled,
      style: themeColorStyle(resolvedColor, style),
      data: themedData(data, {
        size: resolvedSize,
        color: resolvedColor,
        highContrast: resolvedContrast,
        state: current ? 'checked' : 'unchecked'
      }),
      dom: [element => mountRadio(state, group, element, context), ...array(dom)],
      onchange: (event, element, elementAttrs, elementContext) => {
        invokeHandler(onchange, event, element, elementAttrs, elementContext)
        const next = element.checked

        if (group && next) {
          writeState(group.local, group.bind, group.controlled, normalizedItem, group.context)
          oncheckedchange && oncheckedchange(true, event)
          group.onvaluechange && group.onvaluechange(normalizedItem, event)
          group.controlled !== undefined && restoreRadioGroup(group)
        } else if (!group) {
          writeState(local, bind, checked, next, context)
          oncheckedchange && oncheckedchange(next, event)
          checked !== undefined && (element.checked = current)
        }
      }
    })
  }
})

const RadioGroup = s(({ name, defaultValue }, [], context) => {
  const generatedName = name || nextRadioName(context)
  const initial = normalizeValue(defaultValue)
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
    name: generatedName,
    required: false,
    size: '2',
    color: 'accent',
    highContrast: false
  }
  const childContext = Object.create(context)
  childContext[$radioGroup] = state

  return ({
    value,
    defaultValue,
    bind,
    onvaluechange,
    name = generatedName,
    required = false,
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
    state.controlled = normalizeValue(value)
    state.context = context
    state.onvaluechange = onvaluechange
    state.name = name
    state.required = required
    state.size = size
    state.color = color
    state.highContrast = highContrast
    syncBinding(local, bind, context)
    state.renderValue = normalizeValue(readState(local, bind, state.controlled))

    return s({ context: childContext }, () => FieldGroup({
      ...attrs,
      disabled,
      style: themeColorStyle(color, style),
      data: themedData(data, { size, color, highContrast }),
      dom: [element => mountRadioGroup(state, element), ...array(dom)]
    }, children))
  }
})

Radio.Group = RadioGroup

function mountRadio(state, group, element, context) {
  element.defaultChecked = group
    ? group.defaultValue === element.value
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

function mountRadioGroup(state, element) {
  state.element = element
  const form = element.form
  if (!form)
    return

  const reset = () => queueMicrotask(() => {
    writeState(state.local, state.bind, state.controlled, state.defaultValue, state.context)
    state.context.redraw()
  })
  form.addEventListener('reset', reset)
  return () => form.removeEventListener('reset', reset)
}

function restoreRadioGroup(group) {
  group.element?.querySelectorAll('input[type="radio"]').forEach(input => {
    input.checked = input.value === group.renderValue
  })
  group.context.redraw()
}

function nextRadioName(context) {
  let owner = context
  while (owner && !Object.prototype.hasOwnProperty.call(owner, $radioNames))
    owner = Object.getPrototypeOf(owner)
  owner ||= context
  owner[$radioNames] = (owner[$radioNames] || 0) + 1
  return 'sinewy-radio-' + owner[$radioNames]
}

function normalizeValue(value) {
  return value == null ? undefined : String(value)
}

function array(value) {
  return value == null ? [] : Array.isArray(value) ? value : [value]
}

export { Radio }
export default Radio
