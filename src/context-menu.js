import s from 'sin'
import Dropdown from './dropdown.js'
import { $menu } from './menu-context.js'

const $ids = Symbol('sinewy-context-menu-ids')
const longPressDuration = 700
const itemSelector = [
  '[role="menuitem"]',
  '[role="menuitemcheckbox"]',
  '[role="menuitemradio"]'
].join(',')

const ContextMenu = s(({ id }, [], context) => {
  const base = id || nextId(context)
  const state = {
    name: 'ContextMenu',
    prefix: 'context-menu',
    id: base,
    triggerId: base + '-trigger',
    contentId: base + '-content',
    anchorName: toAnchorName(base),
    trigger: undefined,
    content: undefined,
    anchor: undefined,
    open: false,
    renderOpen: false,
    openState: { value: false },
    openBind: undefined,
    controlledOpen: undefined,
    reconcileFrame: undefined,
    reconcileTo: undefined,
    loop: false,
    dir: 'ltr',
    openFocus: 'first',
    restoreFocus: true,
    search: '',
    searchTimer: undefined,
    pointerGrace: undefined,
    pointerDown: undefined,
    pointerCleanup: undefined,
    pendingOpen: undefined,
    longPressTimer: undefined,
    onbeforeopenchange: undefined,
    onopenchange: undefined
  }
  const childContext = Object.create(context)
  childContext[$menu] = state
  state.root = state

  context.onremove(() => {
    clearTimeout(state.searchTimer)
    cancelAnimationFrame(state.reconcileFrame)
    state.pointerCleanup && state.pointerCleanup()
    state.pendingOpen && state.pendingOpen()
    clearLongPress(state)
    state.anchor && state.anchor.remove()
  })

  return ({
    loop = false,
    dir = 'ltr',
    onbeforeopenchange,
    onopenchange
  }, children) => {
    state.loop = loop
    state.dir = dir
    state.onbeforeopenchange = onbeforeopenchange
    state.onopenchange = onopenchange
    state.renderOpen = state.openState.value

    return s({ context: childContext }, () => children)
  }
})

ContextMenu.Trigger = s(({
  as,
  disabled = false,
  dom,
  oncontextmenu,
  ...attrs
}, children, context) => {
  const state = useContextMenu(context, 'Trigger')

  return renderPart(as, 'div', {
    ...attrs,
    id: state.triggerId,
    tabIndex: as ? attrs.tabIndex : attrs.tabIndex == null ? 0 : attrs.tabIndex,
    disabled: as ? disabled || undefined : undefined,
    'aria-haspopup': 'menu',
    'aria-controls': state.contentId,
    'aria-expanded': String(state.renderOpen),
    'aria-disabled': String(disabled),
    style: triggerStyle(attrs.style, disabled),
    data: {
      ...attrs.data,
      disabled: disabled ? '' : null,
      state: state.renderOpen ? 'open' : 'closed'
    },
    dom: compact([
      element => mountTrigger(state, element),
      ...array(dom)
    ]),
    oncontextmenu: (event, element, elementAttrs, elementContext) => {
      invokeHandler(oncontextmenu, event, element, elementAttrs, elementContext)
      clearLongPress(state)
      if (disabled || event.defaultPrevented || !state.content)
        return

      event.preventDefault()
      const point = invocationPoint(event, element, state.dir)
      moveAnchor(state, element.ownerDocument, point.x, point.y)
      state.openFocus = 'first'
      state.restoreFocus = true

      state.pendingOpen && state.pendingOpen()
      if (state.pointerDown) {
        openAfterRelease(state, element, state.pointerDown)
      } else {
        open(state, element)
      }
    }
  }, children)
})

ContextMenu.Content = Dropdown.Content
ContextMenu.Item = Dropdown.Item
ContextMenu.Checkbox = Dropdown.Checkbox
ContextMenu.RadioGroup = Dropdown.RadioGroup
ContextMenu.Radio = Dropdown.Radio
ContextMenu.Indicator = Dropdown.Indicator
ContextMenu.Group = Dropdown.Group
ContextMenu.Label = Dropdown.Label
ContextMenu.Separator = Dropdown.Separator
ContextMenu.Sub = Dropdown.Sub
ContextMenu.SubTrigger = Dropdown.SubTrigger
ContextMenu.SubContent = Dropdown.SubContent

function useContextMenu(context, part) {
  const state = context[$menu]
  if (!state || state.name !== 'ContextMenu')
    throw new Error('ContextMenu.' + part + ' must be used inside ContextMenu')
  return state
}

function mountTrigger(state, element) {
  if (import.meta.dev && state.trigger && state.trigger !== element && state.trigger.isConnected)
    console.warn('ContextMenu.Trigger should only be rendered once per ContextMenu state scope')
  state.trigger = element

  const pointerdown = event => trackPointer(state, event)
  element.addEventListener('pointerdown', pointerdown, true)
  return () => {
    element.removeEventListener('pointerdown', pointerdown, true)
    state.pointerCleanup && state.pointerCleanup()
  }
}

function invocationPoint(event, element, dir) {
  if (event.clientX !== 0 || event.clientY !== 0 || event.button === 2 || event.pointerType)
    return { x: event.clientX, y: event.clientY }

  const rect = element.getBoundingClientRect()
  return {
    x: dir === 'rtl' ? rect.right : rect.left,
    y: rect.bottom
  }
}

function moveAnchor(state, doc, x, y) {
  const anchor = state.anchor || createAnchor(state, doc)
  anchor.style.left = x + 'px'
  anchor.style.top = y + 'px'
}

function open(state, trigger) {
  if (!state.content || !trigger.isConnected)
    return

  if (state.content.matches(':popover-open')) {
    focusFirst(state.content)
  } else {
    state.content.showPopover({ source: trigger })
  }
}

function openAfterRelease(state, trigger, pointer) {
  const doc = trigger.ownerDocument
  const { button, pointerId } = pointer
  let frame

  const detach = () => {
    doc.removeEventListener('pointerup', release, true)
    doc.removeEventListener('mouseup', release, true)
    doc.removeEventListener('pointercancel', cancelEvent, true)
  }
  const cancel = () => {
    detach()
    cancelAnimationFrame(frame)
    state.pendingOpen === cancel && (state.pendingOpen = undefined)
  }
  const matchesPointer = event => pointerId == null
    || event.pointerId == null
    || event.pointerId === pointerId
  const release = event => {
    if (event.button !== button || !matchesPointer(event))
      return

    state.pointerCleanup && state.pointerCleanup()
    detach()
    frame = requestAnimationFrame(() => {
      state.pendingOpen === cancel && (state.pendingOpen = undefined)
      open(state, trigger)
    })
  }
  const cancelEvent = event => {
    if (matchesPointer(event))
      cancel()
  }

  doc.addEventListener('pointerup', release, true)
  doc.addEventListener('mouseup', release, true)
  doc.addEventListener('pointercancel', cancelEvent, true)
  state.pendingOpen = cancel
}

function trackPointer(state, event) {
  state.pointerCleanup && state.pointerCleanup()

  const doc = event.currentTarget.ownerDocument
  const pointer = state.pointerDown = {
    button: event.button,
    pointerId: event.pointerId,
    pointerType: event.pointerType,
    x: event.clientX,
    y: event.clientY
  }
  const nonMouse = pointer.pointerType && pointer.pointerType !== 'mouse'
  const clear = event => {
    if (event.pointerId !== pointer.pointerId)
      return

    doc.removeEventListener('pointerup', clear, true)
    doc.removeEventListener('pointercancel', clear, true)
    doc.removeEventListener('pointermove', move, true)
    clearLongPress(state)
    state.pointerDown === pointer && (state.pointerDown = undefined)
    state.pointerCleanup === cleanup && (state.pointerCleanup = undefined)
  }
  const move = event => {
    if (nonMouse && event.pointerId === pointer.pointerId)
      clearLongPress(state)
  }
  const cleanup = () => {
    doc.removeEventListener('pointerup', clear, true)
    doc.removeEventListener('pointercancel', clear, true)
    doc.removeEventListener('pointermove', move, true)
    clearLongPress(state)
    state.pointerDown === pointer && (state.pointerDown = undefined)
    state.pointerCleanup === cleanup && (state.pointerCleanup = undefined)
  }

  doc.addEventListener('pointerup', clear, true)
  doc.addEventListener('pointercancel', clear, true)
  doc.addEventListener('pointermove', move, true)
  state.pointerCleanup = cleanup

  if (nonMouse && event.currentTarget.getAttribute('aria-disabled') !== 'true')
    startLongPress(state, event.currentTarget, pointer)
}

function startLongPress(state, trigger, pointer) {
  clearLongPress(state)
  if (state.content && state.content.matches(':popover-open'))
    state.content.hidePopover()

  state.longPressTimer = setTimeout(() => {
    state.longPressTimer = undefined
    if (state.pointerDown !== pointer || !state.content)
      return

    moveAnchor(state, trigger.ownerDocument, pointer.x, pointer.y)
    state.openFocus = 'first'
    state.restoreFocus = true
    state.pendingOpen && state.pendingOpen()
    openAfterRelease(state, trigger, pointer)
  }, longPressDuration)
}

function clearLongPress(state) {
  clearTimeout(state.longPressTimer)
  state.longPressTimer = undefined
}

function triggerStyle(style, disabled) {
  if (disabled)
    return style

  return style && typeof style === 'object'
    ? { '-webkit-touch-callout': 'none', ...style }
    : '-webkit-touch-callout:none;' + (style || '')
}

function createAnchor(state, doc) {
  const anchor = doc.createElement('span')
  anchor.setAttribute('aria-hidden', 'true')
  anchor.setAttribute('data-sinewy-context-anchor', '')
  anchor.style.position = 'fixed'
  anchor.style.inset = 'auto'
  anchor.style.width = '0'
  anchor.style.height = '0'
  anchor.style.pointerEvents = 'none'
  anchor.style.setProperty('anchor-name', state.anchorName)
  doc.body.insertBefore(anchor, doc.body.firstChild)
  state.anchor = anchor
  return anchor
}

function focusFirst(content) {
  const item = Array.from(content.querySelectorAll(itemSelector))
    .find(item => item.closest('[role="menu"]') === content && item.getAttribute('aria-disabled') !== 'true')
  item && item.focus({ preventScroll: true })
}

function nextId(context) {
  let root = context
  let parent

  while ((parent = Object.getPrototypeOf(root)) && parent !== Object.prototype)
    root = parent

  const ids = root[$ids] || (root[$ids] = { value: 0 })
  return 'sinewy-context-menu-' + ++ids.value
}

function toAnchorName(id) {
  return '--' + id.replace(/[^a-zA-Z0-9_-]/g, '-') + '-anchor'
}

function compact(xs) {
  return xs.filter(Boolean)
}

function array(value) {
  return value == null ? [] : Array.isArray(value) ? value : [value]
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

export { ContextMenu }
export default ContextMenu
