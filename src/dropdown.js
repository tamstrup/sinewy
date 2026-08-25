import s from 'sin'

const $dropdown = Symbol('dropdown')
const $indicator = Symbol('dropdown-indicator')
const $radioGroup = Symbol('dropdown-radio-group')
const $ids = Symbol('sinewy-ids')
const fitBlockFallback = '--sinewy-dropdown-fit-block'
const fitInlineFallback = '--sinewy-dropdown-fit-inline'
const itemSelector = [
  '[role="menuitem"]',
  '[role="menuitemcheckbox"]',
  '[role="menuitemradio"]'
].join(',')

s.css([`
  @position-try ${ fitBlockFallback } {
    align-self: stretch;
    height: stretch;
  }

  @position-try ${ fitInlineFallback } {
    justify-self: stretch;
    width: stretch;
  }
`])

const Dropdown = s(({ id, defaultOpen = false }, [], context) => {
  const base = id || nextId(context)
  const openState = selectionState(defaultOpen, context)
  const state = {
    id: base,
    triggerId: base + '-trigger',
    contentId: base + '-content',
    anchorName: toAnchorName(base),
    trigger: undefined,
    content: undefined,
    open: false,
    renderOpen: defaultOpen,
    openState,
    openBind: undefined,
    controlledOpen: undefined,
    reconcileFrame: undefined,
    reconcileTo: undefined,
    loop: true,
    dir: 'ltr',
    openFocus: 'first',
    restoreFocus: true,
    search: '',
    searchTimer: undefined,
    pointerGrace: undefined,
    onbeforeopenchange: undefined,
    onopenchange: undefined
  }
  const childContext = Object.create(context)
  childContext[$dropdown] = state
  state.root = state

  context.onremove(() => {
    clearTimeout(state.searchTimer)
    cancelAnimationFrame(state.reconcileFrame)
  })

  return ({
    loop = true,
    dir = 'ltr',
    open,
    bind,
    onbeforeopenchange,
    onopenchange
  }, children, context) => {
    state.loop = loop
    state.dir = dir
    state.controlledOpen = open
    state.openBind = bind
    state.onbeforeopenchange = onbeforeopenchange
    state.onopenchange = onopenchange
    syncBinding(openState, bind, context)
    state.renderOpen = desiredOpen(state)
    reconcileOpen(state)

    return s({ context: childContext }, () => children)
  }
})

Dropdown.Trigger = s(({
  as,
  disabled = false,
  dom,
  onclick,
  onkeydown,
  ...attrs
}, children, context) => {
  const state = useDropdown(context, 'trigger')

  return renderPart(as, 'button', {
    ...attrs,
    id: state.triggerId,
    type: as ? attrs.type : attrs.type || 'button',
    disabled,
    popovertarget: state.contentId,
    popovertargetaction: 'toggle',
    'aria-haspopup': 'menu',
    'aria-controls': state.contentId,
    'aria-expanded': String(state.renderOpen),
    'aria-disabled': String(disabled),
    style: {
      'anchor-name': state.anchorName,
      ...attrs.style
    },
    data: {
      ...attrs.data,
      disabled: disabled ? '' : null,
      state: state.renderOpen ? 'open' : 'closed'
    },
    dom: compact([
      element => mountPart(state, 'trigger', element),
      ...array(dom)
    ]),
    onclick: (event, element, elementAttrs, elementContext) => {
      if (disabled) {
        event.preventDefault()
        return
      }

      const nativePopover = 'popoverTargetElement' in element
      invokeHandler(onclick, event, element, elementAttrs, elementContext)
      if (event.defaultPrevented || nativePopover) {
        nativePopover && !onclick && (event.redraw = false)
        return
      }

      event.preventDefault()
      state.content.matches(':popover-open')
        ? close(state)
        : state.content.showPopover({ source: element })
    },
    onkeydown: (event, element, elementAttrs, elementContext) => {
      if (disabled) {
        event.preventDefault()
        return
      }

      invokeHandler(onkeydown, event, element, elementAttrs, elementContext)
      if (event.defaultPrevented || !['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(event.key))
        return

      event.preventDefault()
      state.openFocus = event.key === 'ArrowUp' ? 'last' : 'first'

      if (state.content.matches(':popover-open')) {
        focusEdge(state, state.openFocus)
      } else {
        state.content.showPopover()
      }
    }
  }, children)
})

Dropdown.Content = s(({}, [], context) => {
  const state = useDropdown(context, 'content')

  return (attrs, children, context) => menuContent(state, attrs, children, context)
})

Dropdown.Item = s(({}, [], context) => {
  const state = useDropdown(context, 'item')
  return (attrs, children, context) => menuItem(state, attrs, children, context)
})

Dropdown.Checkbox = s(({ defaultChecked = false }, [], context) => {
  const dropdownState = useDropdown(context, 'checkbox')
  const local = selectionState(defaultChecked, context)
  const indicator = s.live(normalizeChecked(defaultChecked))

  return ({
    checked,
    defaultChecked,
    bind,
    oncheckedchange,
    ...attrs
  }, children, context) => {
    syncBinding(local, bind, context)
    const value = normalizeChecked(readSelection(local, bind, checked))
    indicator(value)
    const childContext = indicatorContext(context, indicator)

    return menuItem(dropdownState, {
      ...attrs,
      role: 'menuitemcheckbox',
      'aria-checked': value === 'indeterminate' ? 'mixed' : String(value),
      data: {
        ...attrs.data,
        state: checkedState(value)
      },
      onactivate: event => {
        const next = value === 'indeterminate' || !value
        writeSelection(local, bind, checked, next, context)
        oncheckedchange && oncheckedchange(next, event)
      }
    }, s({ context: childContext }, () => children), context)
  }
})

Dropdown.RadioGroup = s(({ defaultValue }, [], context) => {
  useDropdown(context, 'radioGroup')
  const local = selectionState(defaultValue, context)
  const group = {}
  const childContext = Object.create(context)
  childContext[$radioGroup] = group

  return ({
    value,
    defaultValue,
    bind,
    onvaluechange,
    ariaLabel,
    ...attrs
  }, children, context) => {
    syncBinding(local, bind, context)
    Object.assign(group, {
      local,
      bind,
      controlled: value,
      onvaluechange,
      context
    })

    return s`div`({
      ...attrs,
      role: 'group',
      'aria-label': attrs['aria-label'] || ariaLabel
    }, s({ context: childContext }, () => children))
  }
})

Dropdown.Radio = s(({}, [], context) => {
  const dropdownState = useDropdown(context, 'radio')
  const group = context[$radioGroup]
  const indicator = s.live(false)
  if (!group)
    throw new Error('Dropdown.Radio must be used inside Dropdown.RadioGroup')

  return ({ value, ...attrs }, children, context) => {
    const current = readSelection(group.local, group.bind, group.controlled)
    const checked = current === value
    indicator(checked)
    const childContext = indicatorContext(context, indicator)

    return menuItem(dropdownState, {
      ...attrs,
      role: 'menuitemradio',
      'aria-checked': String(checked),
      data: {
        ...attrs.data,
        state: checkedState(checked)
      },
      onactivate: event => {
        if (checked)
          return

        writeSelection(group.local, group.bind, group.controlled, value, group.context)
        group.onvaluechange && group.onvaluechange(value, event)
      }
    }, s({ context: childContext }, () => children), context)
  }
})

Dropdown.Sub = s(({ id, defaultOpen = false }, [], context) => {
  const parent = useDropdown(context, 'sub')
  const base = id || nextId(context)
  const openState = selectionState(defaultOpen, context)
  const state = {
    id: base,
    triggerId: base + '-trigger',
    contentId: base + '-content',
    anchorName: toAnchorName(base),
    trigger: undefined,
    content: undefined,
    open: false,
    renderOpen: defaultOpen,
    openState,
    openBind: undefined,
    controlledOpen: undefined,
    reconcileFrame: undefined,
    reconcileTo: undefined,
    loop: true,
    dir: parent.dir,
    openFocus: 'first',
    restoreFocus: true,
    search: '',
    searchTimer: undefined,
    openTimer: undefined,
    closeTimer: undefined,
    pointerGrace: undefined,
    openDelay: 100,
    closeDelay: 300,
    onbeforeopenchange: undefined,
    onopenchange: undefined,
    parent,
    root: parent.root
  }
  const childContext = Object.create(context)
  childContext[$dropdown] = state

  context.onremove(() => {
    clearTimeout(state.searchTimer)
    clearTimeout(state.openTimer)
    clearTimeout(state.closeTimer)
    cancelAnimationFrame(state.reconcileFrame)
  })

  return ({
    loop = true,
    dir = parent.dir,
    open,
    bind,
    onbeforeopenchange,
    onopenchange,
    openDelay = 100,
    closeDelay = 300
  }, children, context) => {
    state.loop = loop
    state.dir = dir
    state.openDelay = openDelay
    state.closeDelay = closeDelay
    state.controlledOpen = open
    state.openBind = bind
    state.onbeforeopenchange = onbeforeopenchange
    state.onopenchange = onopenchange
    syncBinding(openState, bind, context)
    state.renderOpen = desiredOpen(state)
    reconcileOpen(state)

    return s({ context: childContext }, () => children)
  }
})

Dropdown.SubTrigger = s(({
  as,
  disabled = false,
  dom,
  onclick,
  onkeydown,
  onpointermove,
  onpointerleave,
  ...attrs
}, children, context) => {
  const state = useDropdown(context, 'subtrigger')

  return menuItem(state.parent, {
    ...attrs,
    as,
    disabled,
    id: state.triggerId,
    style: {
      'anchor-name': state.anchorName,
      ...attrs.style
    },
    dom: compact([
      element => mountPart(state, 'trigger', element),
      ...array(dom)
    ]),
    popovertarget: state.contentId,
    popovertargetaction: 'toggle',
    'aria-haspopup': 'menu',
    'aria-controls': state.contentId,
    'aria-expanded': String(state.renderOpen),
    data: {
      ...attrs.data,
      state: state.renderOpen ? 'open' : 'closed'
    },
    onclick: (event, element, elementAttrs, elementContext) => {
      clearSubmenuTimers(state)
      const nativePopover = 'popoverTargetElement' in element
      invokeHandler(onclick, event, element, elementAttrs, elementContext)
      if (event.defaultPrevented || disabled || nativePopover) {
        nativePopover && !onclick && (event.redraw = false)
        return
      }

      event.preventDefault()
      state.content.matches(':popover-open')
        ? close(state)
        : state.content.showPopover({ source: element })
    },
    onkeydown: (event, element, elementAttrs, elementContext) => {
      clearSubmenuTimers(state)
      invokeHandler(onkeydown, event, element, elementAttrs, elementContext)
      if (event.defaultPrevented || disabled || event.key !== forwardKey(state))
        return

      event.preventDefault()
      state.openFocus = 'first'
      state.content.matches(':popover-open')
        ? focusEdge(state, 'first')
        : state.content.showPopover()
    },
    onpointermove: (event, element, elementAttrs, elementContext) => {
      invokeHandler(onpointermove, event, element, elementAttrs, elementContext)
      if (event.defaultPrevented || disabled || state.open || state.openTimer)
        return

      clearTimeout(state.closeTimer)
      state.openTimer = setTimeout(() => {
        state.openTimer = undefined
        if (!state.content.matches(':popover-open')) {
          state.openFocus = 'none'
          state.content.showPopover({ source: element })
        }
      }, state.openDelay)
    },
    onpointerleave: (event, element, elementAttrs, elementContext) => {
      invokeHandler(onpointerleave, event, element, elementAttrs, elementContext)
      if (!event.defaultPrevented) {
        setSubmenuGrace(state, event)
        scheduleSubmenuClose(state)
      }
    },
    closeOnSelect: false,
    invokeSelect: false
  }, children, context)
})

Dropdown.SubContent = s(({}, [], context) => {
  const state = useDropdown(context, 'subcontent')
  if (!state.parent)
    throw new Error('Dropdown.SubContent must be used inside Dropdown.Sub')

  return ({ onpointerenter, onpointerleave, ...attrs }, children, context) => menuContent(state, {
    ...attrs,
    onpointerenter: (event, element, elementAttrs, elementContext) => {
      clearTimeout(state.closeTimer)
      state.closeTimer = undefined
      clearPointerGrace(state.parent, state)
      invokeHandler(onpointerenter, event, element, elementAttrs, elementContext)
    },
    onpointerleave: (event, element, elementAttrs, elementContext) => {
      invokeHandler(onpointerleave, event, element, elementAttrs, elementContext)
      event.defaultPrevented || scheduleSubmenuClose(state)
    }
  }, children, context)
})

Dropdown.Indicator = s(({}, [], context) => {
  const selection = context[$indicator]
  if (!selection)
    throw new Error('Dropdown.Indicator must be used inside Dropdown.Checkbox or Dropdown.Radio')

  const unobserve = selection.observe(context.redraw)
  context.onremove(unobserve)

  return ({ forceMount = false, ...attrs }, children) => {
    const value = selection()
    return forceMount || value !== false
      ? s`span`({
        ...attrs,
        'aria-hidden': attrs['aria-hidden'] == null ? 'true' : attrs['aria-hidden'],
        data: {
          ...attrs.data,
          state: checkedState(value)
        }
      }, children)
      : null
  }
})

function menuItem(state, {
  as,
  disabled = false,
  dom,
  onclick,
  onfocus,
  onpointermove,
  onselect,
  onactivate,
  closeOnSelect = true,
  invokeSelect = true,
  role = 'menuitem',
  textValue,
  ...attrs
}, children, context) {

  return renderPart(as, 'button', {
    ...attrs,
    type: as ? attrs.type : attrs.type || 'button',
    role,
    tabIndex: -1,
    'aria-disabled': String(disabled),
    data: {
      ...attrs.data,
      disabled: disabled ? '' : null,
      textValue: textValue || null
    },
    dom,
    onclick: (event, element, elementAttrs, elementContext) => {
      if (disabled) {
        event.preventDefault()
        return
      }

      invokeHandler(onclick, event, element, elementAttrs, elementContext)
      if (event.defaultPrevented)
        return

      invokeSelect && onselect && onselect(event, element)
      onactivate && onactivate(event, element)
      closeOnSelect && !event.defaultPrevented && close(state.root)
    },
    onfocus: (event, element, elementAttrs, elementContext) => {
      invokeHandler(onfocus, event, element, elementAttrs, elementContext)
      event.defaultPrevented || highlight(state, element)
    },
    onpointermove: (event, element, elementAttrs, elementContext) => {
      invokeHandler(onpointermove, event, element, elementAttrs, elementContext)
      disabled || event.defaultPrevented || pointerInGrace(state, event) || focusItem(state, element)
    }
  }, children)
}

Dropdown.Group = s(({ ariaLabel, ...attrs }, children) =>
  s`div`({
    ...attrs,
    role: 'group',
    'aria-label': attrs['aria-label'] || ariaLabel
  }, children)
)

Dropdown.Label = s((attrs, children) =>
  s`div`(attrs, children)
)

Dropdown.Separator = s((attrs, children) =>
  s`div`({ ...attrs, role: 'separator' }, children)
)

export { Dropdown }
export default Dropdown

function mountContent(state, element) {
  mountPart(state, 'content', element)
  reconcileOpen(state)
}

function mountPart(state, part, element) {
  if (import.meta.dev && state[part] && state[part] !== element && state[part].isConnected)
    console.warn('Dropdown.' + componentPartName(part) + ' should only be rendered once per Dropdown state scope')
  state[part] = element
}

function menuContent(state, {
  dom,
  onbeforetoggle,
  ontoggle,
  onkeydown,
  side = state.parent ? 'right' : 'bottom',
  align = 'start',
  offset = 0,
  alignOffset = 0,
  avoidCollisions = true,
  collisionStrategy = 'preferred',
  loop = state.loop,
  ...attrs
}, children, context) {
  return s`div
    position fixed
    inset auto
    margin 0
  `({
    ...attrs,
    id: state.contentId,
    popover: 'auto',
    role: 'menu',
    dir: attrs.dir || state.dir,
    style: {
      'position-anchor': state.anchorName,
      ...placementStyle(
        side,
        align,
        offset,
        alignOffset,
        avoidCollisions,
        collisionStrategy,
        state.dir
      ),
      ...attrs.style
    },
    'aria-labelledby': attrs['aria-labelledby'] || state.triggerId,
    data: {
      ...attrs.data,
      state: state.renderOpen ? 'open' : 'closed',
      side,
      align
    },
    dom: compact([
      element => mountContent(state, element),
      ...array(dom)
    ]),
    onbeforetoggle: state.onbeforeopenchange || onbeforetoggle
      ? (event, element, elementAttrs, elementContext) => {
        const open = event.newState === 'open'
        state.onbeforeopenchange && state.onbeforeopenchange(open, event)
        invokeHandler(onbeforetoggle, event, element, elementAttrs, elementContext)
      }
      : undefined,
    ontoggle: (event, element, elementAttrs, elementContext) => {
      const open = event.newState === 'open'
      const reconciled = state.reconcileTo === open
      reconciled && (state.reconcileTo = undefined)
      state.open = open
      state.renderOpen = desiredOpen(state)
      state.trigger && (state.trigger.ariaExpanded = String(open))
      state.trigger && (state.trigger.dataset.state = open ? 'open' : 'closed')
      element.dataset.state = open ? 'open' : 'closed'

      invokeHandler(ontoggle, event, element, elementAttrs, elementContext)
      if (!reconciled) {
        if (isLive(state.openBind)) {
          state.openBind(open)
        } else if (state.controlledOpen === undefined) {
          state.openState.value = open
        }
        state.onopenchange && state.onopenchange(open, event)
        state.renderOpen = desiredOpen(state)
        reconcileOpen(state)
      }

      if (open) {
        resetTypeahead(state)
        state.openFocus !== 'none' && focusEdge(state, state.openFocus)
        state.openFocus = 'first'
      } else {
        state.parent && clearPointerGrace(state.parent, state)
        resetTypeahead(state)
        clearHighlight(state)

        const restoreFocus = state.restoreFocus
        state.restoreFocus = true
        requestAnimationFrame(() => {
          if (
            restoreFocus
            && !state.open
            && (element.contains(document.activeElement) || document.activeElement === document.body)
          )
            state.trigger && state.trigger.focus()
        })
      }
    },
    onkeydown: (event, element, elementAttrs, elementContext) => {
      invokeHandler(onkeydown, event, element, elementAttrs, elementContext)
      if (event.defaultPrevented)
        return

      if (state.parent && event.key === backKey(state)) {
        event.preventDefault()
        event.stopPropagation()
        close(state)
        return
      }

      if (state.parent && event.key === 'Escape') {
        event.preventDefault()
        event.stopPropagation()
        close(state)
        return
      }

      contentKeydown(state, event, loop)
    }
  }, children)
}

function desiredOpen(state) {
  return !!readSelection(state.openState, state.openBind, state.controlledOpen)
}

function reconcileOpen(state) {
  if (!state.content)
    return

  const desired = desiredOpen(state)
  const actual = state.content.matches(':popover-open')
  if (desired === actual)
    return

  cancelAnimationFrame(state.reconcileFrame)
  state.reconcileFrame = requestAnimationFrame(() => {
    if (!state.content || !state.content.isConnected)
      return

    const next = desiredOpen(state)
    const current = state.content.matches(':popover-open')
    if (next === current)
      return

    state.reconcileTo = next
    next ? state.content.showPopover() : state.content.hidePopover()
  })
}

function contentKeydown(state, event, loop) {
  const items = enabledItems(state)
  const current = items.indexOf(document.activeElement)

  if (event.key === 'Tab') {
    state.root.restoreFocus = false
    close(state.root, false)
    return
  }

  if (event.key === 'Escape') {
    event.preventDefault()
    close(state)
    return
  }

  if (event.key === 'Enter' || event.key === ' ') {
    if (current === -1)
      return

    event.preventDefault()
    items[current].click()
    return
  }

  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault()
    if (!items.length)
      return

    const direction = event.key === 'ArrowDown' ? 1 : -1
    let next = current === -1
      ? direction === 1 ? 0 : items.length - 1
      : current + direction

    if (loop) {
      next = (next + items.length) % items.length
    } else {
      next = Math.max(0, Math.min(items.length - 1, next))
    }

    focusItem(state, items[next])
    return
  }

  if (event.key === 'Home' || event.key === 'End') {
    event.preventDefault()
    focusEdge(state, event.key === 'Home' ? 'first' : 'last')
    return
  }

  if (event.key.length !== 1 || event.key === ' ' || event.metaKey || event.ctrlKey || event.altKey)
    return

  event.preventDefault()
  clearTimeout(state.searchTimer)
  state.search += event.key.toLocaleLowerCase()
  state.searchTimer = setTimeout(() => state.search = '', 500)

  const repeated = Array.from(state.search).every(character => character === state.search[0])
  const query = repeated ? state.search[0] : state.search
  const ordered = items.slice(current + 1).concat(items.slice(0, current + 1))
  const match = ordered.find(item => itemText(item).startsWith(query))
  match && focusItem(state, match)
}

function close(state, restoreFocus = true) {
  state.restoreFocus = restoreFocus
  state.parent && clearPointerGrace(state.parent, state)
  state.content.matches(':popover-open') && state.content.hidePopover()
}

function enabledItems(state) {
  return allItems(state).filter(item => item.getAttribute('aria-disabled') !== 'true')
}

function allItems(state) {
  return state.content
    ? Array.from(state.content.querySelectorAll(itemSelector))
      .filter(item => item.closest('[role="menu"]') === state.content)
    : []
}

function focusEdge(state, edge) {
  const items = enabledItems(state)
  focusItem(state, edge === 'last' ? items.at(-1) : items[0])
}

function focusItem(state, item) {
  if (!item)
    return

  enabledItems(state).forEach(element => element.tabIndex = element === item ? 0 : -1)
  highlight(state, item)
  item.focus({ preventScroll: true })
}

function highlight(state, item) {
  allItems(state).forEach(element => {
    element.toggleAttribute('data-highlighted', element === item)
  })
  state.activeItem = item
}

function clearHighlight(state) {
  allItems(state).forEach(element => element.removeAttribute('data-highlighted'))
  state.activeItem = undefined
}

function resetTypeahead(state) {
  clearTimeout(state.searchTimer)
  state.search = ''
}

function itemText(item) {
  return (item.dataset.textValue || item.textContent).trim().toLocaleLowerCase()
}

function componentPartName(part) {
  return {
    trigger: 'Trigger',
    content: 'Content',
    item: 'Item',
    checkbox: 'Checkbox',
    radioGroup: 'RadioGroup',
    radio: 'Radio',
    indicator: 'Indicator',
    group: 'Group',
    label: 'Label',
    separator: 'Separator',
    sub: 'Sub',
    subtrigger: 'SubTrigger',
    subcontent: 'SubContent'
  }[part] || part
}

function useDropdown(context, part) {
  const state = context[$dropdown]
  if (!state)
    throw new Error('Dropdown.' + componentPartName(part) + ' must be used inside Dropdown')
  return state
}

function selectionState(value, context) {
  const state = {
    value,
    binding: undefined,
    unobserve: undefined
  }
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
  return isLive(bind)
    ? bind()
    : controlled === undefined ? state.value : controlled
}

function writeSelection(state, bind, controlled, value, context) {
  if (isLive(bind)) {
    bind(value)
  } else if (controlled === undefined) {
    state.value = value
    context.redraw()
  }
}

function indicatorContext(context, selection) {
  const childContext = Object.create(context)
  childContext[$indicator] = selection
  return childContext
}

function normalizeChecked(value) {
  return value === 'indeterminate' ? value : !!value
}

function checkedState(value) {
  return value === 'indeterminate'
    ? value
    : value ? 'checked' : 'unchecked'
}

function isLive(value) {
  return typeof value === 'function' && typeof value.observe === 'function'
}

function scheduleSubmenuClose(state) {
  clearTimeout(state.openTimer)
  clearTimeout(state.closeTimer)
  state.openTimer = undefined
  state.closeTimer = setTimeout(() => {
    state.closeTimer = undefined
    state.content.matches(':popover-open') && close(state)
  }, state.closeDelay)
}

function clearSubmenuTimers(state) {
  clearTimeout(state.openTimer)
  clearTimeout(state.closeTimer)
  state.openTimer = state.closeTimer = undefined
  clearPointerGrace(state.parent, state)
}

function setSubmenuGrace(state, event) {
  if (!state.parent || !state.content || !state.content.matches(':popover-open'))
    return

  const rect = state.content.getBoundingClientRect()
  const origin = { x: event.clientX, y: event.clientY }
  const padding = 5
  const edges = [
    {
      distance: Math.abs(origin.x - rect.left),
      points: [
        { x: rect.left, y: rect.top - padding },
        { x: rect.left, y: rect.bottom + padding }
      ]
    },
    {
      distance: Math.abs(origin.x - rect.right),
      points: [
        { x: rect.right, y: rect.top - padding },
        { x: rect.right, y: rect.bottom + padding }
      ]
    },
    {
      distance: Math.abs(origin.y - rect.top),
      points: [
        { x: rect.left - padding, y: rect.top },
        { x: rect.right + padding, y: rect.top }
      ]
    },
    {
      distance: Math.abs(origin.y - rect.bottom),
      points: [
        { x: rect.left - padding, y: rect.bottom },
        { x: rect.right + padding, y: rect.bottom }
      ]
    }
  ]
  const edge = edges.sort((a, b) => a.distance - b.distance)[0]
  state.parent.pointerGrace = {
    owner: state,
    triangle: [origin, ...edge.points]
  }
}

function pointerInGrace(state, event) {
  const grace = state.pointerGrace
  if (!grace)
    return false

  if (!grace.owner.content || !grace.owner.content.matches(':popover-open')) {
    state.pointerGrace = undefined
    return false
  }

  const inside = pointInTriangle(
    { x: event.clientX, y: event.clientY },
    ...grace.triangle
  )
  inside || (state.pointerGrace = undefined)
  return inside
}

function clearPointerGrace(state, owner) {
  if (state && (!owner || state.pointerGrace && state.pointerGrace.owner === owner))
    state.pointerGrace = undefined
}

function pointInTriangle(point, a, b, c) {
  const ab = triangleSign(point, a, b)
  const bc = triangleSign(point, b, c)
  const ca = triangleSign(point, c, a)
  const negative = ab < 0 || bc < 0 || ca < 0
  const positive = ab > 0 || bc > 0 || ca > 0
  return !(negative && positive)
}

function triangleSign(point, a, b) {
  return (point.x - b.x) * (a.y - b.y) - (a.x - b.x) * (point.y - b.y)
}

function placementStyle(
  side,
  align,
  offset,
  alignOffset,
  avoidCollisions,
  collisionStrategy,
  dir
) {
  const block = side === 'top' || side === 'bottom'
  const sideToken = {
    top: 'block-start',
    right: 'inline-end',
    bottom: 'block-end',
    left: 'inline-start'
  }[side] || 'block-end'
  const alignToken = align === 'center'
    ? ''
    : ' span-' + (block ? 'inline-' : 'block-') + (align === 'end' ? 'start' : 'end')
  const offsetProperty = {
    top: 'margin-block-end',
    right: 'margin-inline-start',
    bottom: 'margin-block-start',
    left: 'margin-inline-end'
  }[side] || 'margin-block-start'
  const alignProperty = block ? 'margin-inline-start' : 'margin-block-start'
  const fitFallback = block ? fitBlockFallback : fitInlineFallback
  const fallbacks = [
    'flip-block',
    'flip-inline',
    'flip-block flip-inline',
    fitFallback,
    fitFallback + ' flip-block',
    fitFallback + ' flip-inline',
    fitFallback + ' flip-block flip-inline'
  ].join(', ')

  return {
    'position-area': sideToken + alignToken,
    'position-try-fallbacks': avoidCollisions ? fallbacks : 'none',
    'position-try-order': avoidCollisions && collisionStrategy === 'most-space'
      ? block ? 'most-block-size' : 'most-inline-size'
      : 'normal',
    [offsetProperty]: cssLength(offset),
    [alignProperty]: cssLength(alignOffset),
    '--sinewy-trigger-width': 'anchor-size(width)',
    '--sinewy-trigger-height': 'anchor-size(height)',
    '--sinewy-transform-origin': transformOrigin(side, align, dir)
  }
}

function transformOrigin(side, align, dir) {
  const inlineStart = dir === 'rtl' ? 'right' : 'left'
  const inlineEnd = dir === 'rtl' ? 'left' : 'right'
  const horizontal = align === 'center' ? 'center' : align === 'end' ? inlineEnd : inlineStart
  const vertical = align === 'center' ? 'center' : align === 'end' ? 'bottom' : 'top'
  return side === 'top'
    ? horizontal + ' bottom'
    : side === 'bottom'
      ? horizontal + ' top'
      : side === 'left'
        ? 'right ' + vertical
        : 'left ' + vertical
}

function cssLength(value) {
  return typeof value === 'number' ? value + 'px' : value
}

function forwardKey(state) {
  return state.dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight'
}

function backKey(state) {
  return state.dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft'
}

function nextId(context) {
  let root = context
  let parent

  while ((parent = Object.getPrototypeOf(root)) && parent !== Object.prototype)
    root = parent

  const ids = root[$ids] || (root[$ids] = { value: 0 })
  return 'sinewy-dropdown-' + ++ids.value
}

function toAnchorName(id) {
  return '--' + id.replace(/[^a-zA-Z0-9_-]/g, '-') + '-anchor'
}

function compact(xs) {
  return xs.filter(Boolean)
}

function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : [x]
}

function invokeHandler(handler, event, ...args) {
  array(handler).forEach(handler => {
    if (typeof handler === 'function') {
      handler.call(event.currentTarget, event, ...args)
    } else if (handler && typeof handler.handleEvent === 'function') {
      handler.handleEvent(event, ...args)
    }
  })
}

function renderPart(as, fallback, attrs, children) {
  return as
    ? as(attrs, children)
    : s(fallback, attrs, children)
}
