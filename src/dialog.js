import s from 'sin'
import { controlTheme } from './control-theme.js'
import { invokeHandler, readState, stateBinding, syncBinding, writeState } from './control-state.js'
import { $dialog } from './dialog-context.js'
import { themeColorStyle } from './theme-colors.js'
import { themedData } from './theme-options.js'

const $ids = Symbol('sinewy-dialog-ids')

const TriggerControl = controlTheme(s`button`)
const CloseControl = controlTheme(s`button`)

const ContentSurface = s`dialog
  width calc(100% - 32px)
  max-width 480
  max-height calc(100svh - 32px)
  margin auto
  padding 24
  overflow auto
  border 1px solid $sinewy-neutral-6
  border-radius 15
  background $sinewy-panel
  color $sinewy-neutral-12
  box-shadow 0 28px 80px light-dark(rgb(35 31 24 / 0.24), rgb(0 0 0 / 0.68)), 0 4px 14px light-dark(rgb(35 31 24 / 0.1), rgb(0 0 0 / 0.34))

  &[data-size='1'] {
    max-width 360
    padding 20
    border-radius 13
  }

  &[data-size='3'] {
    max-width 640
    padding 28
    border-radius 17
  }

  &:focus-visible {
    outline 3px solid color-mix(in srgb, $sinewy-accent-8 42%, transparent)
    outline-offset 2px
  }

  &::backdrop {
    background light-dark(rgb(24 22 18 / 0.42), rgb(0 0 0 / 0.68))
    backdrop-filter blur(2px)
  }
`

const DialogTitle = s`h2
  margin 0
  color $sinewy-neutral-12
  font-size 20
  font-weight 780
  line-height 1.2
  letter-spacing -0.02em
`

const DialogDescription = s`p
  margin 8px 0 0
  color $sinewy-neutral-11
  font-size 14
  line-height 1.55
`

const Dialog = s(({ id, defaultOpen = false }, [], context) => {
  const base = id || nextId(context)
  const local = stateBinding(!!defaultOpen, context)
  const state = {
    id: base,
    contentId: base + '-content',
    titleId: base + '-title',
    descriptionId: base + '-description',
    content: undefined,
    trigger: undefined,
    local,
    bind: undefined,
    controlled: undefined,
    renderOpen: !!defaultOpen,
    onopenchange: undefined,
    closing: false
  }
  const childContext = Object.create(context)
  childContext[$dialog] = state

  return ({
    open,
    defaultOpen,
    bind,
    onopenchange
  }, children, context) => {
    state.bind = bind
    state.controlled = open
    state.onopenchange = onopenchange
    syncBinding(local, bind, context)
    state.renderOpen = !!readState(local, bind, open)
    reconcile(state)

    return s({ context: childContext }, () => children)
  }
})

Dialog.Trigger = s(({
  disabled = false,
  dom,
  onclick,
  size = '2',
  variant = 'solid',
  color = 'accent',
  highContrast = false,
  type = 'button',
  data,
  style,
  ...attrs
}, children, context) => {
  const state = useDialog(context, 'Trigger')

  return TriggerControl({
    ...attrs,
    type,
    disabled,
    'aria-haspopup': 'dialog',
    'aria-controls': state.contentId,
    'aria-expanded': String(state.renderOpen),
    style: themeColorStyle(color, style),
    data: themedData(data, {
      size,
      variant,
      color,
      highContrast,
      state: state.renderOpen ? 'open' : 'closed'
    }),
    dom: [element => state.trigger = element, ...array(dom)],
    onclick: (event, element, elementAttrs, elementContext) => {
      invokeHandler(onclick, event, element, elementAttrs, elementContext)
      if (event.defaultPrevented || disabled)
        return

      requestOpen(state, true, event, context)
    }
  }, children)
})

Dialog.Content = s(({
  dom,
  oncancel,
  onclose,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  'aria-describedby': ariaDescribedby,
  size = '2',
  color = 'accent',
  highContrast = false,
  data,
  style,
  ...attrs
}, children, context) => {
  const state = useDialog(context, 'Content')

  return ContentSurface({
    ...attrs,
    id: state.contentId,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabel ? ariaLabelledby : ariaLabelledby || state.titleId,
    'aria-describedby': ariaDescribedby === null ? undefined : ariaDescribedby || state.descriptionId,
    style: themeColorStyle(color, style),
    data: themedData(data, {
      size,
      color,
      highContrast,
      state: state.renderOpen ? 'open' : 'closed'
    }),
    dom: [element => {
      state.content = element
      queueMicrotask(() => reconcile(state))
    }, ...array(dom)],
    oncancel: (event, element, elementAttrs, elementContext) => {
      invokeHandler(oncancel, event, element, elementAttrs, elementContext)
      if (event.defaultPrevented)
        return

      event.preventDefault()
      requestOpen(state, false, event, context)
    },
    onclose: (event, element, elementAttrs, elementContext) => {
      invokeHandler(onclose, event, element, elementAttrs, elementContext)
      if (state.closing) {
        state.closing = false
        return
      }

      if (state.renderOpen)
        requestOpen(state, false, event, context)
    }
  }, children)
})

Dialog.Title = s((attrs, children, context) => {
  const state = useDialog(context, 'Title')
  return DialogTitle({ ...attrs, id: attrs.id || state.titleId }, children)
})

Dialog.Description = s((attrs, children, context) => {
  const state = useDialog(context, 'Description')
  return DialogDescription({ ...attrs, id: attrs.id || state.descriptionId }, children)
})

Dialog.Close = s(({
  disabled = false,
  onclick,
  size = '2',
  variant = 'soft',
  color = 'gray',
  highContrast = false,
  type = 'button',
  data,
  style,
  ...attrs
}, children, context) => {
  const state = useDialog(context, 'Close')

  return CloseControl({
    ...attrs,
    type,
    disabled,
    style: themeColorStyle(color, style),
    data: themedData(data, { size, variant, color, highContrast }),
    onclick: (event, element, elementAttrs, elementContext) => {
      invokeHandler(onclick, event, element, elementAttrs, elementContext)
      if (event.defaultPrevented || disabled)
        return

      requestOpen(state, false, event, context)
    }
  }, children)
})

function requestOpen(state, next, event, context) {
  if (next === state.renderOpen)
    return

  writeState(state.local, state.bind, state.controlled, next, context)
  state.renderOpen = !!readState(state.local, state.bind, state.controlled)
  state.onopenchange && state.onopenchange(next, event)
  queueMicrotask(() => reconcile(state))
}

function reconcile(state) {
  const content = state.content
  if (!content || !content.isConnected)
    return

  if (state.renderOpen && !content.open) {
    content.showModal()
  } else if (!state.renderOpen && content.open) {
    state.closing = true
    content.close()
  }
}

function useDialog(context, part) {
  const state = context[$dialog]
  if (!state)
    throw new Error('Dialog.' + part + ' must be used inside Dialog')
  return state
}

function nextId(context) {
  let root = context
  let parent
  while ((parent = Object.getPrototypeOf(root)) && parent !== Object.prototype)
    root = parent

  const ids = root[$ids] || (root[$ids] = { value: 0 })
  return 'sinewy-dialog-' + ++ids.value
}

function array(value) {
  return value == null ? [] : Array.isArray(value) ? value : [value]
}

export { Dialog }
export default Dialog
