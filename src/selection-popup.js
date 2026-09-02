import s from 'sin'

// A top-layer list shared by both selection controls. Fixed positioning also
// provides a geometry fallback in browsers without CSS anchor positioning.
function mountPopup(state, element) {
  state.content = element
  const view = element.ownerDocument.defaultView
  const position = () => positionPopup(state)
  const dismiss = event => {
    if (!state.open || state.control?.contains(event.target) || element.contains(event.target))
      return
    state.open = false
    state.activeId = undefined
    state.editing = false
    s.redraw()
  }
  view.addEventListener('resize', position)
  view.addEventListener('scroll', position, true)
  element.ownerDocument.addEventListener('pointerdown', dismiss)
  const observer = new ResizeObserver(position)
  observer.observe(element)
  // Control may follow Content in DOM order for correct SSR option labels.
  queueMicrotask(() => {
    if (element.isConnected && state.control)
      observer.observe(state.control)
    syncPopup(state)
  })
  return () => {
    view.removeEventListener('resize', position)
    view.removeEventListener('scroll', position, true)
    element.ownerDocument.removeEventListener('pointerdown', dismiss)
    observer.disconnect()
    if (element.matches(':popover-open'))
      element.hidePopover()
    if (state.content === element)
      state.content = undefined
  }
}

function syncPopup(state) {
  const element = state.content
  if (!element?.isConnected || !element.showPopover)
    return
  const open = element.matches(':popover-open')
  if (state.open && !open) {
    element.hidden = false
    element.showPopover()
  } else if (!state.open && open) {
    element.hidePopover()
  }
  positionPopup(state)
  if (state.open && !open)
    state.items.find(item => item.id === state.activeId)?.scrollIntoView({ block: 'nearest' })
}

function positionPopup(state) {
  const element = state.content
  if (!state.open || !element?.isConnected || !state.control)
    return
  const rect = state.control.getBoundingClientRect()
  const view = element.ownerDocument.defaultView
  const gutter = 8
  const gap = 6
  const maxWidth = Math.max(0, view.innerWidth - gutter * 2)
  // Safari's UA popover height is intrinsic, which stretches fixed grid
  // popovers (WebKit 270334). Use ordinary content height in every browser.
  // The trigger is a minimum width, not a cap on readable option labels.
  Object.assign(element.style, {
    position: 'fixed',
    margin: '0',
    inset: 'auto',
    boxSizing: 'border-box',
    height: 'auto',
    width: 'max-content',
    minWidth: Math.min(rect.width, maxWidth) + 'px',
    maxWidth: maxWidth + 'px'
  })
  const width = element.getBoundingClientRect().width
  const below = view.innerHeight - rect.bottom - gap - gutter
  const above = rect.top - gap - gutter
  const up = below < Math.min(element.scrollHeight, 280) && above > below
  const available = Math.max(0, up ? above : below)
  Object.assign(element.style, {
    maxHeight: Math.min(320, available) + 'px',
    left: Math.max(gutter, Math.min(rect.left, view.innerWidth - width - gutter)) + 'px',
    top: up ? 'auto' : rect.bottom + gap + 'px',
    bottom: up ? view.innerHeight - rect.top + gap + 'px' : 'auto'
  })
}

export { mountPopup, syncPopup }
