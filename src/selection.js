import s from 'sin'
import { mountPopup, syncPopup } from './selection-popup.js'
import { invokeHandler, readState as readSelection, stateBinding as selectionState, syncBinding } from './control-state.js'
// Shared, internal selection foundation for searchable and select-only controls.

const $combobox = Symbol('sinewy-combobox')
const $ids = Symbol('sinewy-combobox-ids')
const $group = Symbol('sinewy-selection-group')

function createSelection({ name = 'Combobox', selectOnly = false } = {}) {
  const Combobox = s(({
    id,
    multiple = false,
    defaultValue = multiple ? [] : null
  }, [], context) => {
    const base = id || nextId(context, name)
    const local = selectionState(defaultValue, context)
    const state = {
      name,
      selectOnly,
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
      records: new Map(),
      defaultValue,
      disabled: false,
      required: false,
      invalid: false,
      typeahead: '',
      typedAt: 0,
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
      onvaluechange,
      disabled = false,
      required = false
    }, children, context) => {
      // Redraw through the owner so current attributes are retained on local updates.
      syncBinding(local, bind, { redraw: s.redraw })
      state.multiple = multiple
      state.dir = dir
      state.controlled = value
      state.bind = bind
      state.onvaluechange = onvaluechange
      state.filter = filter
      state.formatValue = formatValue
      state.disabled = disabled
      state.required = required
      state.selected = normalizeSelection(readSelection(local, bind, value), multiple)
      if (disabled)
        state.open = false

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
          s.redraw()
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
        if (!state.multiple) {
          state.query = ''
          element.select()
        }
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
    queueMicrotask(() => syncPopup(state))

    return s`div`({
      ...attrs,
      id: state.contentId,
      role: 'listbox',
      popover: 'auto',
      hidden: state.open ? null : true,
      'aria-multiselectable': state.multiple ? 'true' : null,
      data: {
        ...attrs.data,
        state: state.open ? 'open' : 'closed'
      },
      dom: compact([
        element => mountPopup(state, element),
        ...array(dom)
      ]),
      ontoggle: (event, ...args) => {
        invokeHandler(attrs.ontoggle, event, ...args)
        if (!state.content?.matches(':popover-open') && event.newState === 'closed' && state.open)
          close(state, true)
      }
    }, children)
  })

  Combobox.Item = s(({ id }, [], context) => {
    const state = useCombobox(context, 'Item')
    const optionId = id || state.id + '-option-' + ++state.optionId
    context.onremove(() => {
      state.records.delete(optionId)
      if (state.activeId === optionId)
        state.activeId = undefined
    })

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
      if (selectOnly && !value)
        throw new TypeError('CustomSelect.Option value must be a non-empty string')
      disabled ||= Boolean(context[$group]?.disabled)

      state.labels.set(value, textValue)
      const selected = includes(state, value)
      const visible = state.selectOnly || state.filter(textValue, state.query, value)
      state.records.set(optionId, { value, textValue, disabled, onselect })

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
          if (event.defaultPrevented || disabled || state.disabled)
            return

          state.activeId = optionId
        },
        onclick: (event, element, elementAttrs, elementContext) => {
          invokeHandler(onclick, event, element, elementAttrs, elementContext)
          if (event.defaultPrevented || disabled || state.disabled || state.input?.matches(':disabled'))
            return

          invokeHandler(onselect, event, element, elementAttrs, elementContext)
          if (!event.defaultPrevented)
            selectValue(state, value, textValue, state.keyboardEvent || event)
        }
      }, children)
    }
  })

  Combobox.Group = s(({ label, disabled = false, ...attrs }, children, context) => {
    const childContext = Object.create(context)
    childContext[$group] = { disabled }
    return s`div`({ ...attrs, role: 'group', 'aria-label': label },
      s`div`({ 'aria-hidden': 'true', data: { selectionGroupLabel: '' } }, label),
      s({ context: childContext }, () => children)
    )
  })

  Combobox.Trigger = s((attrs, children, context) => {
    const state = useCombobox(context, 'Trigger')
    const { placeholder = 'Choose an option', dom, ...rest } = attrs
    return s`button`({
      ...rest,
      id: attrs.id || state.inputId,
      type: 'button',
      role: 'combobox',
      disabled: state.disabled,
      'aria-haspopup': 'listbox',
      'aria-expanded': String(state.open),
      'aria-controls': state.contentId,
      'aria-activedescendant': state.open ? state.activeId : null,
      'aria-required': state.required ? 'true' : null,
      'aria-invalid': state.invalid && !state.selected ? 'true' : attrs['aria-invalid'],
      data: { ...attrs.data, state: state.open ? 'open' : 'closed', placeholder: state.selected == null ? '' : null },
      dom: compact([element => state.input = state.control = element, ...array(dom)]),
      onclick: (event, ...args) => {
        invokeHandler(attrs.onclick, event, ...args)
        if (event.defaultPrevented || state.disabled)
          return
        state.open ? close(state, true) : openSelect(state)
      },
      onkeydown: (event, ...args) => {
        invokeHandler(attrs.onkeydown, event, ...args)
        if (!event.defaultPrevented && !state.disabled)
          selectKeydown(state, event)
      },
      onblur: (event, ...args) => {
        invokeHandler(attrs.onblur, event, ...args)
        if (!event.defaultPrevented)
          close(state, true)
      }
    }, children.length ? children : displayValue(state, state.selected) || placeholder)
  })

  // A visually hidden native select supplies form association and constraint validation.
  // Invalid events focus the visible trigger; the proxy is excluded from the accessibility tree.
  Combobox.FormControl = s((attrs, [], context) => {
    const state = useCombobox(context, 'FormControl')
    return s`select
      position absolute
      width 1px
      height 1px
      padding 0
      border 0
      margin -1px
      overflow hidden
      clip-path inset(50%)
      white-space nowrap
    `({
      ...attrs,
      tabIndex: -1,
      'aria-hidden': 'true',
      required: state.required,
      disabled: state.disabled,
      value: state.selected ?? '',
      dom: element => {
        const onreset = event => {
          if (event.target !== element.form)
            return
          queueMicrotask(() => {
            if (event.defaultPrevented)
              return
            state.invalid = false
            writeSelection(state, state.defaultValue ?? null, event)
            close(state, true)
          })
        }
        element.ownerDocument.addEventListener('reset', onreset, true)
        return () => element.ownerDocument.removeEventListener('reset', onreset, true)
      },
      oninvalid: event => {
        event.preventDefault()
        state.invalid = true
        state.input?.focus()
        s.redraw()
      },
      onchange: event => {
        writeSelection(state, event.target.value || null, event)
        close(state, true)
      }
    },
    s`option`({ value: '', selected: state.selected == null }, ''),
    Array.from(state.records.values(), item => s`option`({
      value: item.value,
      disabled: item.disabled,
      selected: state.selected === item.value
    }, item.textValue)))
  })

  return Combobox
}

function openSelect(state) {
  state.open = true
  const items = enabledItems(state)
  state.activeId = (items.find(item => item.dataset.value === state.selected) || items[0])?.id
  s.redraw()
  state.items.find(item => item.id === state.activeId)?.scrollIntoView({ block: 'nearest' })
}

function selectKeydown(state, event) {
  const key = event.key
  if (key === 'Escape' && state.open) {
    event.preventDefault()
    close(state, true)
    return
  }
  if (key === 'Tab') {
    if (state.open)
      commitActive(state, event)
    close(state, true)
    return
  }
  if (key === 'Enter' || key === ' ') {
    event.preventDefault()
    state.open ? commitActive(state, event) : openSelect(state)
    return
  }
  if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(key)) {
    event.preventDefault()
    const wasOpen = state.open
    if (!wasOpen)
      openSelect(state)
    if (key === 'Home' || key === 'End') {
      const items = enabledItems(state)
      state.activeId = (key === 'Home' ? items[0] : items.at(-1))?.id
    } else if (wasOpen && !event.altKey) {
      moveActive(state, key === 'ArrowDown' ? 1 : -1)
    } else if (wasOpen && key === 'ArrowUp' && event.altKey) {
      commitActive(state, event)
    }
    state.items.find(item => item.id === state.activeId)?.scrollIntoView({ block: 'nearest' })
    return
  }
  if (key.length !== 1 || event.ctrlKey || event.metaKey || event.altKey || event.isComposing)
    return
  event.preventDefault()
  const now = Date.now()
  state.typeahead = now - state.typedAt > 700 ? key : state.typeahead + key
  state.typedAt = now
  const repeated = [...state.typeahead].every(char => char === key)
  const query = (repeated ? key : state.typeahead).toLocaleLowerCase()
  if (!state.open)
    openSelect(state)
  const items = enabledItems(state)
  const current = items.findIndex(item => item.id === state.activeId)
  const start = repeated ? current + 1 : Math.max(0, current)
  const ordered = items.slice(start).concat(items.slice(0, start))
  const match = ordered.find(item => item.dataset.textValue.toLocaleLowerCase().startsWith(query))
  if (match) {
    state.activeId = match.id
    match.scrollIntoView({ block: 'nearest' })
  }
}

function commitActive(state, event) {
  const item = enabledItems(state).find(item => item.id === state.activeId)
  if (!item)
    return
  state.keyboardEvent = event
  try {
    item.click()
  } finally {
    state.keyboardEvent = undefined
  }
}

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
    s.redraw().then(() => {
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
  if (event.key !== 'Tab')
    state.input && state.input.focus()
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

  state.invalid = false
  s.redraw()
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
    s.redraw()
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
    : state.selectOnly
      ? Math.max(0, Math.min(items.length - 1, current + direction))
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
  s.redraw()
}

function enabledItems(state) {
  return state.items.filter(isEnabledVisible).sort((a, b) =>
    a.compareDocumentPosition(b) & 4 ? -1 : a === b ? 0 : 1
  )
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
  if (state.selectOnly)
    return
  if (!includes(state, item.dataset.value))
    return

  if (!state.multiple && !state.editing && state.query !== item.dataset.textValue) {
    state.query = item.dataset.textValue
    queueMicrotask(s.redraw)
    return
  }

  if (state.multiple) {
    const pill = pillElements(state).find(pill => pill.dataset.value === item.dataset.value)
    if (pill && pill.textContent !== item.dataset.textValue)
      queueMicrotask(s.redraw)
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

function nextId(context, name) {
  let root = context
  let parent
  while ((parent = Object.getPrototypeOf(root)) && parent !== Object.prototype)
    root = parent
  const ids = root[$ids] || (root[$ids] = { value: 0 })
  return 'sinewy-' + (name === 'Combobox' ? 'combobox' : 'custom-select') + '-' + ++ids.value
}

function compact(values) {
  return values.filter(Boolean)
}

function array(value) {
  return value == null ? [] : Array.isArray(value) ? value : [value]
}

export { createSelection }
