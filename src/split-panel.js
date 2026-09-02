import s from 'sin'
import { invokeHandler } from './control-state.js'

const $split = Symbol('sinewy-split-panel')
const $ids = Symbol('sinewy-split-panel-ids')
const Root = s`div
  position relative
  display grid
  min-width 0
  min-height 0
  grid-template-columns minmax(0, var(--split-start, 1fr)) var(--divider-width, 4px) minmax(0, var(--split-end, 1fr))
  grid-template-rows minmax(0, 1fr)
  &[data-orientation='vertical'] {
    grid-template-columns minmax(0, 1fr)
    grid-template-rows minmax(0, var(--split-start, 1fr)) var(--divider-width, 4px) minmax(0, var(--split-end, 1fr))
  }
`
const Pane = s`div
  min-width 0
  min-height 0
  overflow hidden
`
const Handle = s`div
  position relative
  display flex
  align-items center
  justify-content center
  min-width 0
  min-height 0
  touch-action none
  user-select none
  cursor col-resize
  z-index 1
  outline-offset 2px
  &[aria-orientation='horizontal'] { cursor row-resize }
  &[aria-disabled='true'] { cursor default }
  &::before {
    content ''
    position absolute
    top 0
    bottom 0
    left 50%
    width max(100%, var(--divider-hit-area, 12px))
    transform translateX(-50%)
  }
  &[aria-orientation='horizontal']::before {
    left 0
    right 0
    top 50%
    bottom auto
    width auto
    height max(100%, var(--divider-hit-area, 12px))
    transform translateY(-50%)
  }
`
const Limits = s`div
  position absolute
  pointer-events none
  visibility hidden
  overflow hidden
  contain strict
  top 0
  left 0
  > div { position absolute; top 0; left 0; height 0 }
`

const SplitPanel = s((initial, [], context) => {
  const base = initial.id || nextId(context)
  const state = {
    attrs: initial, root: null, divider: null, limits: null, panes: {}, ids: { start: base + '-start', end: base + '-end' },
    percent: finite(initial.defaultPosition, 50), pixels: initial.defaultPositionInPixels,
    size: 0, low: 0, high: 0, frame: 0, pending: null, pointer: null, restore: null,
    input: undefined, binding: undefined, unobserve: undefined, disposed: false
  }
  const childContext = Object.create(context)
  childContext[$split] = state
  state.schedule = () => {
    if (!state.root || state.frame || state.disposed) return
    state.frame = state.root.ownerDocument.defaultView.requestAnimationFrame(() => {
      state.frame = 0
      measure(state)
      const pending = state.pending
      state.pending = null
      if (pending) move(state, pending)
    })
  }
  state.cancel = event => {
    if (event && state.pointer !== event.pointerId) return
    state.pending = null
    if (state.pointer !== null && state.divider?.hasPointerCapture(state.pointer))
      state.divider.releasePointerCapture(state.pointer)
    state.pointer = null
    state.root?.removeAttribute('data-dragging')
  }
  context.onremove(() => {
    state.disposed = true
    state.cancel()
    state.unobserve?.()
    if (state.frame) state.root?.ownerDocument.defaultView.cancelAnimationFrame(state.frame)
  })
  return ({
    position, positionInPixels, defaultPosition, defaultPositionInPixels, bind,
    orientation = 'horizontal', primary, disabled = false, snap, snapThreshold = 12,
    onreposition, dom, data, style, ...attrs
  }, children) => {
    if (orientation !== 'horizontal' && orientation !== 'vertical') throw new TypeError('Invalid SplitPanel orientation')
    if (primary != null && primary !== 'start' && primary !== 'end') throw new TypeError('Invalid SplitPanel primary')
    state.attrs = { position, positionInPixels, bind, orientation, primary, disabled, snap, snapThreshold, onreposition }
    if (disabled) state.cancel()
    if (bind !== state.binding) {
      state.unobserve?.()
      state.binding = bind
      state.unobserve = bind?.observe(state.schedule)
    }
    const input = readInput(state)
    if (input && (input.key !== state.input?.key || input.value !== state.input?.value)) {
      state.input = input
      if (input.key === 'px') state.pixels = input.value
      else { state.percent = input.value; state.pixels = undefined }
    }
    state.schedule()
    const basis = state.pixels != null ? state.pixels + 'px'
      : `calc((100% - var(--divider-width, 4px)) * ${clamp(state.percent, 0, 100)} / 100)`
    return Root({
      ...attrs,
      style: { ...style, '--split-start': primary === 'end' ? '1fr' : basis, '--split-end': primary === 'end' ? basis : '1fr' },
      data: { ...data, splitPanel: '', orientation },
      dom: [element => {
        state.root = element
        const observer = new ResizeObserver(state.schedule)
        observer.observe(element)
        if (state.divider) observer.observe(state.divider)
        state.schedule()
        return () => observer.disconnect()
      }, ...array(dom)]
    },
      s({ context: childContext }, () => children),
      Limits({ 'aria-hidden': 'true', dom: element => { state.limits = element } },
        s`div`({ style: { width: 'clamp(0px, var(--min, 0px), 100%)' } }),
        s`div`({ style: { width: 'clamp(0px, var(--max, 100%), 100%)' } })
      )
    )
  }
})

function panel(side) {
  return s(({ dom, data, id, ...attrs }, children, context) => {
    const state = useSplit(context)
    if (id) state.ids[side] = id
    return Pane({ ...attrs, id: state.ids[side], data: { ...data, ['split' + (side === 'start' ? 'Start' : 'End')]: '' },
      dom: [element => { state.panes[side] = element; state.schedule() }, ...array(dom)]
    }, children)
  })
}
SplitPanel.Start = panel('start')
SplitPanel.End = panel('end')
SplitPanel.Divider = s(({
  dom, data, onkeydown, onpointerdown, onpointermove, onpointerup, onpointercancel,
  onlostpointercapture, ...attrs
}, children, context) => {
  const state = useSplit(context)
  const config = state.attrs
  const handler = (consumer, internal) => (event, ...args) => {
    invokeHandler(consumer, event, ...args)
    if (!event.defaultPrevented) internal(event)
    if (!consumer && !state.attrs.onreposition) event.redraw = false
  }
  return Handle({
    ...attrs, role: 'separator', tabindex: config.disabled ? -1 : 0,
    'aria-label': attrs['aria-label'] || (attrs['aria-labelledby'] ? undefined : 'Resize panels'),
    'aria-orientation': config.orientation === 'vertical' ? 'horizontal' : 'vertical',
    'aria-controls': state.ids[config.primary || 'start'],
    'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': state.percent,
    'aria-disabled': String(config.disabled), data: { ...data, splitDivider: '' },
    dom: [element => { state.divider = element; state.schedule() }, ...array(dom)],
    onkeydown: handler(onkeydown, event => keyboard(state, event)),
    onpointerdown: handler(onpointerdown, event => {
      if (state.attrs.disabled || event.button !== 0 || !event.isPrimary) return
      event.preventDefault()
      event.stopPropagation()
      state.divider.focus({ preventScroll: true })
      measure(state)
      state.pointer = event.pointerId
      try { state.divider.setPointerCapture(event.pointerId) } catch (error) {
        if (error.name !== 'NotFoundError') throw error
      }
      state.root.setAttribute('data-dragging', '')
    }),
    onpointermove: handler(onpointermove, event => {
      if (state.pointer !== event.pointerId) return
      state.pending = event
      state.schedule()
    }),
    onpointerup: handler(onpointerup, event => {
      if (state.pointer !== event.pointerId) return
      measure(state)
      move(state, event)
      state.cancel()
    }),
    onpointercancel: handler(onpointercancel, state.cancel),
    onlostpointercapture: handler(onlostpointercapture, state.cancel)
  }, children)
})

function measure(state) {
  if (!state.root || !state.divider || !state.limits) return
  const vertical = state.attrs.orientation === 'vertical'
  const css = getComputedStyle(state.root)
  const whole = vertical ? state.root.clientHeight : state.root.clientWidth
  const padding = vertical
    ? parseFloat(css.paddingTop) + parseFloat(css.paddingBottom)
    : parseFloat(css.paddingLeft) + parseFloat(css.paddingRight)
  const divider = vertical ? state.divider.offsetHeight : state.divider.offsetWidth
  const size = Math.max(0, whole - padding - divider)
  if (!size) return // Preserve intent while hidden; never divide by zero.
  state.limits.style.width = size + 'px'
  state.limits.style.height = '0px'
  const [min, max] = state.limits.children
  state.high = clamp(max.getBoundingClientRect().width, 0, size)
  state.low = clamp(min.getBoundingClientRect().width, 0, state.high)
  const input = readInput(state)
  let pixels
  if (input?.key === 'px') pixels = input.value
  else if (input && (!state.attrs.primary || input.value !== state.percent)) pixels = size * input.value / 100
  else if (state.pixels != null && (!state.size || state.attrs.primary)) pixels = state.pixels
  else pixels = size * state.percent / 100
  const previous = state.pixels
  const oldSize = state.size
  state.size = size
  paint(state, clamp(pixels, state.low, state.high))
  if (oldSize && (oldSize !== size || previous !== state.pixels)) {
    if (state.attrs.bind && state.attrs.bind() !== state.percent) state.attrs.bind(state.percent)
    notify(state, undefined, 'resize')
  }
}

function paint(state, pixels) {
  state.pixels = pixels
  state.percent = pixels / state.size * 100
  const end = state.attrs.primary === 'end'
  state.root.style.setProperty('--split-start', end ? '1fr' : pixels + 'px')
  state.root.style.setProperty('--split-end', end ? pixels + 'px' : '1fr')
  state.divider.setAttribute('aria-valuenow', String(round(state.percent)))
  state.divider.setAttribute('aria-valuemin', String(round(state.low / state.size * 100)))
  state.divider.setAttribute('aria-valuemax', String(round(state.high / state.size * 100)))
  state.divider.setAttribute('aria-controls', state.ids[end ? 'end' : 'start'])
  if (state.panes.start) state.panes.start.inert = (end ? state.size - pixels : pixels) < .5
  if (state.panes.end) state.panes.end.inert = (end ? pixels : state.size - pixels) < .5
}

function request(state, pixels, event) {
  if (!state.size || state.attrs.disabled) return
  const next = clamp(pixels, state.low, state.high)
  const percent = next / state.size * 100
  if (Math.abs(next - state.pixels) < .001) return
  if (state.attrs.bind) state.attrs.bind(percent)
  if (state.attrs.bind || !readInput(state)) paint(state, next)
  state.attrs.onreposition?.({ position: percent, positionInPixels: next, source: event.type.startsWith('pointer') ? 'pointer' : 'keyboard' }, event)
}
function notify(state, event, source) {
  state.attrs.onreposition?.({ position: state.percent, positionInPixels: state.pixels, source }, event)
}
function move(state, event) {
  if (!state.size) return
  const rect = state.root.getBoundingClientRect()
  const vertical = state.attrs.orientation === 'vertical'
  const rtl = !vertical && getComputedStyle(state.root).direction === 'rtl'
  const divider = vertical ? state.divider.offsetHeight : state.divider.offsetWidth
  const css = getComputedStyle(state.root)
  let pixel = (vertical ? event.clientY - rect.top - state.root.clientTop - parseFloat(css.paddingTop)
    : event.clientX - rect.left - state.root.clientLeft - parseFloat(css.paddingLeft)) - divider / 2
  if (rtl) pixel = state.size - pixel
  if (state.attrs.primary === 'end') pixel = state.size - pixel
  state.restore = null
  request(state, snapTo(state, pixel), event)
}
function snapTo(state, pixels) {
  const { snap, snapThreshold = 12 } = state.attrs
  if (typeof snap === 'function') {
    const result = snap({ positionInPixels: pixels, size: state.size, snapThreshold })
    return Number.isFinite(result) ? result : pixels
  }
  let best = pixels, distance = Infinity
  for (const item of String(snap || '').trim().split(/\s+/)) {
    const match = /^(repeat\()?([\d.]+)(px|%)(\))?$/.exec(item)
    if (!match || !!match[1] !== !!match[4]) continue
    let point = Number(match[2]) * (match[3] === '%' ? state.size / 100 : 1)
    if (!Number.isFinite(point) || point <= 0 && match[1]) continue
    if (match[1]) point *= Math.round(pixels / point)
    const delta = Math.abs(point - pixels)
    if (delta <= snapThreshold && delta < distance) { best = point; distance = delta }
  }
  return best
}
function keyboard(state, event) {
  if (state.attrs.disabled || event.altKey || event.ctrlKey || event.metaKey) return
  const vertical = state.attrs.orientation === 'vertical'
  const negative = vertical ? 'ArrowUp' : 'ArrowLeft'
  const positive = vertical ? 'ArrowDown' : 'ArrowRight'
  if (![negative, positive, 'Home', 'End', 'Enter'].includes(event.key)) return
  event.preventDefault()
  event.stopPropagation()
  measure(state)
  let next = state.pixels
  if (event.key === 'Home') next = state.low
  else if (event.key === 'End') next = state.high
  else if (event.key === 'Enter') {
    if (state.restore != null) { next = state.restore; state.restore = null }
    else { state.restore = next; next = state.low }
  } else {
    state.restore = null
    let sign = event.key === negative ? -1 : 1
    if (!vertical && getComputedStyle(state.root).direction === 'rtl') sign *= -1
    if (state.attrs.primary === 'end') sign *= -1
    next += sign * state.size * (event.shiftKey ? .1 : .01)
  }
  // Keyboard steps deliberately do not snap: a nearby snap point must not trap arrow navigation.
  request(state, next, event)
}
function readInput(state) {
  const { bind, positionInPixels, position } = state.attrs
  return bind ? { key: '%', value: finite(bind(), 50) }
    : positionInPixels !== undefined ? { key: 'px', value: finite(positionInPixels, 0) }
    : position !== undefined ? { key: '%', value: finite(position, 50) } : null
}
function useSplit(context) {
  if (!context[$split]) throw new Error('SplitPanel parts must be inside SplitPanel')
  return context[$split]
}
function nextId(context) {
  let root = context, parent
  while ((parent = Object.getPrototypeOf(root)) && parent !== Object.prototype) root = parent
  const ids = root[$ids] || (root[$ids] = { value: 0 })
  return 'sinewy-split-panel-' + ++ids.value
}
function finite(value, fallback) { return Number.isFinite(value) ? value : fallback }
function clamp(value, min, max) { return Math.max(min, Math.min(max, finite(value, min))) }
function round(value) { return Math.round(value * 1000) / 1000 }
function array(value) { return value == null ? [] : Array.isArray(value) ? value : [value] }

export { SplitPanel }
export default SplitPanel
