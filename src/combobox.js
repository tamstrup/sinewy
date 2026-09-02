import s from 'sin'

const $combobox = Symbol('sinewy-combobox')
const $ids = Symbol('sinewy-combobox-ids')

const Combobox = s(({
  id,
  multiple = false,
  defaultValue = multiple ? [] : null
}, [], context) => {
  const base = id || nextId(context)
  const local = selectionState(defaultValue, context)
  const state = {
    name: 'Combobox',
    id: base,
    controlId: base + '-control',
    inputId: base + '-input',
    contentId: base + '-content',
    optionId: 0,
    control: undefined,
    input: undefined,
    content: undefined,
    items: [],
    labels: new Map(),
    local,
    multiple,
    dir: 'ltr',
    selected: normalizeSelection(defaultValue, multiple),
    controlled: undefined,
    bind: undefined,
    onvaluechange: undefined,
    filter: defaultFilter,
    formatValue: undefined,
    query: '',
    editing: false,
    open: false,
    activeId: undefined,
    activePill: undefined,
    context
  }
  const childContext = Object.create(context)
  childContext[$combobox] = state

  return ({
    multiple = false,
    value,
    bind,
    dir = 'ltr',
    filter = defaultFilter,
    formatValue,
    onvaluechange
  }, children, context) => {
    syncBinding(local, bind, context)
    state.multiple = multiple
    state.dir = dir
    state.controlled = value
    state.bind = bind
    state.onvaluechange = onvaluechange
    state.filter = filter
    state.formatValue = formatValue
    state.selected = normalizeSelection(readSelection(local, bind, value), multiple)

    if (!multiple && !state.editing)
      state.query = displayValue(state, state.selected)

    return s({ context: childContext }, () => children)
  }
})

Combobox.Control = s(({
  dom,
  onclick,
  onfocusout,
  ...attrs
}, children, context) => {
  const state = useCombobox(context, 'Control')

  return s`div`({
    ...attrs,
    id: attrs.id || state.controlId,
    data: {
      ...attrs.data,
      state: state.open ? 'open' : 'closed',
      multiple: state.multiple ? '' : null
    },
    dom: compact([
      element => state.control = element,
      ...array(dom)
    ]),
    onclick: (event, element, elementAttrs, elementContext) => {
      invokeHandler(onclick, event, element, elementAttrs, elementContext)
      if (!event.defaultPrevented && event.target === element)
        state.input && state.input.focus()
    },
    onfocusout: (event, element, elementAttrs, elementContext) => {
      invokeHandler(onfocusout, event, element, elementAttrs, elementContext)
      if (event.defaultPrevented)
        return

      queueMicrotask(() => {
        const focused = document.activeElement
        if (element.contains(focused) || state.content && state.content.contains(focused))
          return

        state.activePill = undefined
        close(state, true)
      })
    }
  }, children)
})

Combobox.Pills = s(({}, [], context) => {
  const state = useCombobox(context, 'Pills')

  return ({ removelabel, ...attrs }, [], context) => {
    if (!state.multiple)
      return null

    const values = state.selected
    return s`span`({
      ...attrs,
      data: {
        ...attrs.data,
        sinewyComboboxPills: ''
      },
      dom: array(attrs.dom)
    }, values.map((value, index) => s`button`({
      key: value,
      type: 'button',
      tabIndex: -1,
      'aria-label': removelabel
        ? removelabel(value, displayValue(state, value))
        : 'Remove ' + displayValue(state, value),
      data: {
        sinewyComboboxPill: '',
        selected: state.activePill === value ? '' : null,
        value
      },
      onfocus: () => {
        state.activePill = value
        context.redraw()
      },
      onclick: event => {
        event.preventDefault()
        removeValue(state, value, event)
        state.input && state.input.focus()
      },
      onkeydown: event => pillKeydown(state, event, index, value)
    }, displayValue(state, value))))
  }
})

Combobox.Input = s(({}, [], context) => {
  const state = useCombobox(context, 'Input')

  return (attrs, [], context) => s`input`({
    ...attrs,
    id: attrs.id || state.inputId,
    type: attrs.type || 'text',
    role: 'combobox',
    value: state.query,
    autocomplete: attrs.autocomplete || 'off',
    'aria-autocomplete': 'list',
    'aria-controls': state.contentId,
    'aria-expanded': String(state.open),
    'aria-activedescendant': state.open ? state.activeId : null,
    dom: compact([
      element => state.input = element,
      ...array(attrs.dom)
    ]),
    onfocus: (event, element, elementAttrs, elementContext) => {
      invokeHandler(attrs.onfocus, event, element, elementAttrs, elementContext)
      if (event.defaultPrevented)
        return

      state.editing = true
      state.open = true
      state.activePill = undefined
      if (!state.multiple)
        element.select()
    },
    oninput: (event, element, elementAttrs, elementContext) => {
      invokeHandler(attrs.oninput, event, element, elementAttrs, elementContext)
      if (event.defaultPrevented)
        return

      state.query = element.value
      state.editing = true
      state.open = true
      state.activeId = firstMatchingItem(state)?.id
    },
    onkeydown: (event, element, elementAttrs, elementContext) => {
      invokeHandler(attrs.onkeydown, event, element, elementAttrs, elementContext)
      if (!event.defaultPrevented)
        inputKeydown(state, event, element)
    },
    onblur: (event, element, elementAttrs, elementContext) =>
      invokeHandler(attrs.onblur, event, element, elementAttrs, elementContext)
  })
})

Combobox.Content = s(({
  dom,
  ...attrs
}, children, context) => {
  const state = useCombobox(context, 'Content')

  return s`div`({
    ...attrs,
    id: state.contentId,
    role: 'listbox',
    hidden: state.open ? null : true,
    'aria-multiselectable': state.multiple ? 'true' : null,
    data: {
      ...attrs.data,
      state: state.open ? 'open' : 'closed'
    },
    dom: compact([
      element => state.content = element,
      ...array(dom)
    ])
  }, children)
})

Combobox.Item = s(({ id }, [], context) => {
  const state = useCombobox(context, 'Item')
  const optionId = id || state.id + '-option-' + ++state.optionId

  return ({
    value,
    textValue = String(value),
    disabled = false,
    dom,
    onclick,
    onpointerdown,
    onpointermove,
    onselect,
    ...attrs
  }, children, context) => {
    if (typeof value !== 'string')
      throw new TypeError('Combobox.Item value must be a string')

    state.labels.set(value, textValue)
    const selected = includes(state, value)
    const visible = state.filter(textValue, state.query, value)

    return s`div`({
      ...attrs,
      id: optionId,
      role: 'option',
      tabIndex: -1,
      hidden: visible ? null : true,
      'aria-selected': String(selected),
      'aria-disabled': String(disabled),
      data: {
        ...attrs.data,
        value,
        textValue,
        selected: selected ? '' : null,
        disabled: disabled ? '' : null,
        highlighted: state.activeId === optionId ? '' : null
      },
      dom: compact([
        element => mountItem(state, element),
        ...array(dom)
      ]),
      onpointerdown: (event, element, elementAttrs, elementContext) => {
        invokeHandler(onpointerdown, event, element, elementAttrs, elementContext)
        if (!event.defaultPrevented)
          event.preventDefault()
      },
      onpointermove: (event, element, elementAttrs, elementContext) => {
        invokeHandler(onpointermove, event, element, elementAttrs, elementContext)
        if (event.defaultPrevented || disabled)
          return

        state.activeId = optionId
      },
      onclick: (event, element, elementAttrs, elementContext) => {
        invokeHandler(onclick, event, element, elementAttrs, elementContext)
        if (event.defaultPrevented || disabled)
          return

        invokeHandler(onselect, event, element, elementAttrs, elementContext)
        if (!event.defaultPrevented)
          selectValue(state, value, textValue, event)
      }
    }, children)
  }
})

function inputKeydown(state, event, input) {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault()
    state.open = true
    moveActive(state, event.key === 'ArrowDown' ? 1 : -1)
    return
  }

  if (event.key === 'Enter' && state.open && state.activeId) {
    const item = state.items.find(item => item.id === state.activeId)
    if (!item || !isEnabledVisible(item))
      return

    event.preventDefault()
    item.click()
    return
  }

  if (event.key === 'Escape' && state.open) {
    event.preventDefault()
    close(state, true)
    return
  }

  if (!state.multiple || input.selectionStart !== 0 || input.selectionEnd !== 0)
    return

  if (event.key === 'Backspace' || event.key === backKey(state)) {
    const pills = pillElements(state)
    if (!pills.length)
      return

    event.preventDefault()
    pills.at(-1).focus()
  }
}

function pillKeydown(state, event, index, value) {
  const pills = pillElements(state)
  if (event.key === 'Backspace' || event.key === 'Delete') {
    event.preventDefault()
    removeValue(state, value, event)
    queueMicrotask(() => {
      const remaining = pillElements(state)
      ;(remaining[Math.min(index, remaining.length - 1)] || state.input)?.focus()
    })
    return
  }

  if (event.key === backKey(state)) {
    event.preventDefault()
    pills[Math.max(0, index - 1)]?.focus()
    return
  }

  if (event.key === forwardKey(state)) {
    event.preventDefault()
    ;(pills[index + 1] || state.input)?.focus()
  }
}

function selectValue(state, value, textValue, event) {
  if (state.multiple) {
    const next = includes(state, value)
      ? state.selected.filter(selected => selected !== value)
      : [...state.selected, value]
    writeSelection(state, next, event)
    state.query = ''
    state.open = true
    state.activeId = undefined
  } else {
    writeSelection(state, value, event)
    state.query = textValue
    state.editing = false
    state.open = false
    state.activeId = undefined
  }

  state.input && state.input.focus()
}

function removeValue(state, value, event) {
  if (!state.multiple)
    return

  writeSelection(state, state.selected.filter(selected => selected !== value), event)
  state.activePill = undefined
}

function writeSelection(state, next, event) {
  if (isLive(state.bind)) {
    state.bind(next)
    state.selected = normalizeSelection(next, state.multiple)
  } else if (state.controlled === undefined) {
    state.local.value = next
    state.selected = normalizeSelection(next, state.multiple)
    state.context.redraw()
  }

  state.onvaluechange && state.onvaluechange(next, event)
}

function moveActive(state, direction) {
  const items = enabledItems(state)
  if (!items.length) {
    state.activeId = undefined
    return
  }

  const current = items.findIndex(item => item.id === state.activeId)
  const next = current === -1
    ? direction > 0 ? 0 : items.length - 1
    : (current + direction + items.length) % items.length
  const item = items[next]
  state.activeId = item.id
  item.scrollIntoView({ block: 'nearest' })
}

function close(state, restoreText) {
  state.open = false
  state.activeId = undefined
  state.editing = false
  if (restoreText && !state.multiple)
    state.query = displayValue(state, state.selected)
  state.context.redraw()
}

function enabledItems(state) {
  return state.items.filter(isEnabledVisible)
}

function firstEnabledItem(state) {
  return enabledItems(state)[0]
}

function firstMatchingItem(state) {
  return state.items.find(item =>
    item.getAttribute('aria-disabled') !== 'true'
    && state.filter(item.dataset.textValue, state.query, item.dataset.value)
  )
}

function isEnabledVisible(item) {
  return !item.hidden && item.getAttribute('aria-disabled') !== 'true'
}

function mountItem(state, element) {
  state.items.push(element)
  refreshSelectedLabel(state, element)
  return () => state.items = state.items.filter(item => item !== element)
}

function refreshSelectedLabel(state, item) {
  if (!includes(state, item.dataset.value))
    return

  if (!state.multiple && !state.editing && state.query !== item.dataset.textValue) {
    state.query = item.dataset.textValue
    queueMicrotask(state.context.redraw)
    return
  }

  if (state.multiple) {
    const pill = pillElements(state).find(pill => pill.dataset.value === item.dataset.value)
    if (pill && pill.textContent !== item.dataset.textValue)
      queueMicrotask(state.context.redraw)
  }
}

function pillElements(state) {
  return state.control
    ? Array.from(state.control.querySelectorAll('[data-sinewy-combobox-pill]'))
    : []
}

function displayValue(state, value) {
  if (value == null)
    return ''
  return state.formatValue
    ? state.formatValue(value)
    : state.labels.get(value) || String(value)
}

function includes(state, value) {
  return state.multiple
    ? state.selected.includes(value)
    : state.selected === value
}

function normalizeSelection(value, multiple) {
  if (multiple)
    return Array.isArray(value) ? [...new Set(value)] : value == null ? [] : [value]
  return Array.isArray(value) ? value[0] ?? null : value ?? null
}

function defaultFilter(textValue, query) {
  return textValue.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase())
}

function selectionState(value, context) {
  const state = { value, binding: undefined, unobserve: undefined }
  context.onremove(() => state.unobserve && state.unobserve())
  return state
}

function syncBinding(state, bind, context) {
  if (state.binding === bind)
    return
  state.unobserve && state.unobserve()
  state.binding = bind
  state.unobserve = isLive(bind) ? bind.observe(context.redraw) : undefined
}

function readSelection(state, bind, controlled) {
  return isLive(bind) ? bind() : controlled === undefined ? state.value : controlled
}

function isLive(value) {
  return typeof value === 'function' && typeof value.observe === 'function'
}

function backKey(state) {
  return state.dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft'
}

function forwardKey(state) {
  return state.dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight'
}

function useCombobox(context, part) {
  const state = context[$combobox]
  if (!state)
    throw new Error('Combobox.' + part + ' must be used inside Combobox')
  return state
}

function nextId(context) {
  let root = context
  let parent
  while ((parent = Object.getPrototypeOf(root)) && parent !== Object.prototype)
    root = parent
  const ids = root[$ids] || (root[$ids] = { value: 0 })
  return 'sinewy-combobox-' + ++ids.value
}

function compact(values) {
  return values.filter(Boolean)
}

function array(value) {
  return value == null ? [] : Array.isArray(value) ? value : [value]
}

function invokeHandler(handler, event, ...args) {
  array(handler).forEach(handler => handler && handler(event, ...args))
}

export { Combobox }
export default Combobox
