function stateBinding(value, context) {
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

function readState(state, bind, controlled) {
  return isLive(bind)
    ? bind()
    : controlled === undefined ? state.value : controlled
}

function writeState(state, bind, controlled, value, context) {
  if (isLive(bind)) {
    bind(value)
  } else if (controlled === undefined) {
    state.value = value
    context.redraw()
  }
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

function array(value) {
  return value == null ? [] : Array.isArray(value) ? value : [value]
}

function isLive(value) {
  return typeof value === 'function' && typeof value.observe === 'function'
}

export { invokeHandler, readState, stateBinding, syncBinding, writeState }
