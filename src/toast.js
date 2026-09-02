import s from 'sin'
import { invokeHandler, readState, stateBinding, syncBinding, writeState } from './control-state.js'

const $toast = Symbol('sinewy-toast')
const Surface = s`div
  pointer-events auto
  min-width 0
`
const Viewport = s`div
  position fixed
  inset-inline-end 16px
  bottom max(16px, env(safe-area-inset-bottom))
  width min(360px, calc(100vw - 32px))
  display flex
  flex-direction column
  gap 8
  z-index 1000
  pointer-events none
  &[data-position='bottom-start'] { inset-inline-start 16px; inset-inline-end auto }
  &[data-position='top-end'] { top max(16px, env(safe-area-inset-top)); bottom auto }
  &[data-position='top-start'] {
    top max(16px, env(safe-area-inset-top))
    bottom auto
    inset-inline-start 16px
    inset-inline-end auto
  }
`

const Toast = s(({ defaultOpen = true }, [], context) => {
  const local = stateBinding(!!defaultOpen, context)
  const childContext = Object.create(context)
  let config = {}, element, timer, started = 0, remaining = 5000, duration = 5000
  let open = false, requested = false, disposed = false, returnFocus
  const paused = new Set()

  function stop() {
    if (timer === undefined) return
    clearTimeout(timer)
    timer = undefined
    remaining = Math.max(0, remaining - (performance.now() - started))
  }
  function schedule() {
    if (!element || !open || !duration || requested || paused.size || timer !== undefined || disposed) return
    started = performance.now()
    timer = setTimeout(() => {
      timer = undefined
      remaining = 0
      requested = true
      dismiss()
    }, remaining)
  }
  function pause(reason, value) {
    stop()
    value ? paused.add(reason) : paused.delete(reason)
    schedule()
  }
  function dismiss(event) {
    if (!open) return
    writeState(local, config.bind, config.open, false, context)
    config.onopenchange?.(false, event)
    if (config.onopenchange) s.redraw()
  }
  childContext[$toast] = { dismiss }
  context.onremove(() => { disposed = true; stop() })

  return ({
    open: controlled, defaultOpen, bind, duration: delay = 5000, onopenchange,
    dom, data, onpointerenter, onpointerleave, onfocusin, onfocusout, onkeydown, ...attrs
  }, children) => {
    config = { open: controlled, bind, onopenchange }
    syncBinding(local, bind, context)
    const next = !!readState(local, bind, controlled)
    const nextDuration = Number.isFinite(delay) && delay >= 0 ? delay : 5000
    if (next !== open || nextDuration !== duration) {
      stop()
      remaining = duration = nextDuration
      requested = false
      open = next
    }
    if (!open) return null
    schedule()
    const handler = (consumer, internal) => (event, ...args) => {
      invokeHandler(consumer, event, ...args)
      if (!event.defaultPrevented) internal(event)
      if (!consumer && event.redraw === undefined) event.redraw = false
    }
    return Surface({
      ...attrs,
      'aria-atomic': 'true',
      data: { ...data, toast: '', state: 'open' },
      dom: [node => {
        element = node
        const doc = node.ownerDocument, win = doc.defaultView
        returnFocus = doc.activeElement
        paused.clear()
        if (!doc.hasFocus()) paused.add('window')
        if (doc.hidden) paused.add('hidden')
        const blur = () => pause('window', true)
        const focus = () => pause('window', false)
        const visibility = () => pause('hidden', doc.hidden)
        win.addEventListener('blur', blur)
        win.addEventListener('focus', focus)
        doc.addEventListener('visibilitychange', visibility)
        schedule()
        return () => {
          const focused = node.contains(doc.activeElement), previous = returnFocus
          stop()
          element = undefined
          win.removeEventListener('blur', blur)
          win.removeEventListener('focus', focus)
          doc.removeEventListener('visibilitychange', visibility)
          paused.clear()
          if (focused) queueMicrotask(() => {
            if (previous?.isConnected && doc.activeElement === doc.body)
              previous.focus({ preventScroll: true })
          })
        }
      }, ...array(dom)],
      onpointerenter: handler(onpointerenter, event => event.pointerType !== 'touch' && pause('hover', true)),
      onpointerleave: handler(onpointerleave, () => pause('hover', false)),
      onfocusin: handler(onfocusin, () => pause('focus', true)),
      onfocusout: handler(onfocusout, event => !element?.contains(event.relatedTarget) && pause('focus', false)),
      onkeydown: handler(onkeydown, event => {
        if (event.key !== 'Escape') return
        event.preventDefault()
        event.stopPropagation()
        dismiss(event)
        // A controlled owner may update plain closure state in its callback.
        event.redraw = true
      })
    }, s({ context: childContext }, () => children))
  }
})

Toast.Viewport = s(({ position = 'bottom-end', data, ...attrs }, children) => {
  if (!['bottom-end', 'bottom-start', 'top-end', 'top-start'].includes(position))
    throw new TypeError('Invalid Toast.Viewport position')
  return Viewport({
    ...attrs,
    role: 'status', 'aria-live': 'polite', 'aria-atomic': 'false', 'aria-relevant': 'additions text',
    'aria-label': attrs['aria-label'] || 'Notifications',
    data: { ...data, toastViewport: '', position }
  }, children)
})

Toast.Close = s(({ onclick, type = 'button', ...attrs }, children, context) => {
  const state = context[$toast]
  if (!state) throw new Error('Toast.Close must be inside Toast')
  return s`button`({
    ...attrs, type, 'aria-label': attrs['aria-label'] || 'Dismiss notification',
    onclick: (event, ...args) => {
      invokeHandler(onclick, event, ...args)
      if (!event.defaultPrevented && !attrs.disabled) state.dismiss(event)
    }
  }, children.length ? children : '×')
})

function array(value) { return value == null ? [] : Array.isArray(value) ? value : [value] }
export { Toast }
export default Toast
