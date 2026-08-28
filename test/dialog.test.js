import s from 'sin'
import t from 'sin/test'
import Dialog from '../src/dialog.js'

t.timeout = 2000

const ExtendedContent = Dialog.Content`
  border-width 3
`

t`dialog`(
  t`connects native trigger, content, title, and description`(() => withDialog({}, ({ trigger, content, title, description }) => {
    t.is('BUTTON', trigger.tagName)
    t.is('button', trigger.type)
    t.is('dialog', trigger.getAttribute('aria-haspopup'))
    t.is(content.id, trigger.getAttribute('aria-controls'))
    t.is(title.id, content.getAttribute('aria-labelledby'))
    t.is(description.id, content.getAttribute('aria-describedby'))
    t.is('false', trigger.getAttribute('aria-expanded'))
    t.is('closed', content.dataset.state)
    return [false, content.open]
  })),

  t`opens modally and closes through semantic controls`(() => {
    const changes = []
    return withDialog({ root: {
      onopenchange: (open, event) => changes.push([open, event.type])
    } }, async({ trigger, content, close }) => {
      trigger.focus()
      trigger.click()
      await redraw()
      t.is(true, content.open)
      t.is(true, content.matches(':modal'))
      t.is('true', trigger.getAttribute('aria-expanded'))
      t.is('open', content.dataset.state)

      close.click()
      await redraw()
      t.is(false, content.open)
      t.is('false', trigger.getAttribute('aria-expanded'))
      t.is(true, document.activeElement === trigger)
      return ['true,click,false,click', changes.flat().join(',')]
    })
  }),

  t`opens from default state and closes on native cancellation`(() => withDialog({
    root: { defaultOpen: true }
  }, async({ content }) => {
    t.is(true, content.matches(':modal'))
    const event = new Event('cancel', { cancelable: true })
    content.dispatchEvent(event)
    await redraw()
    t.is(true, event.defaultPrevented)
    return [false, content.open]
  })),

  t`honors prevented trigger, close, and cancel handlers`(() => {
    let preventTrigger = true
    return withDialog({
      trigger: { onclick: event => preventTrigger && event.preventDefault() },
      close: { onclick: event => event.preventDefault() },
      content: { oncancel: event => event.preventDefault() }
    }, async({ trigger, content, close }) => {
      trigger.click()
      await redraw()
      t.is(false, content.open)

      preventTrigger = false
      trigger.click()
      await redraw()
      t.is(true, content.open)
      close.click()
      await redraw()
      t.is(true, content.open)

      content.dispatchEvent(new Event('cancel', { cancelable: true }))
      await redraw()
      t.is(true, content.open)
      content.close()
      return [false, content.open]
    })
  }),

  t`keeps controlled state with the owner while reporting intent`(() => {
    const open = s.live(false)
    const changes = []
    return withDialog({
      view: () => standardDialog({
        open: open(),
        onopenchange: value => changes.push(value)
      })
    }, async({ trigger, content, close }) => {
      trigger.click()
      await redraw()
      t.is(false, content.open)
      t.is('true', changes.join(','))

      open(true)
      await s.redraw.force()
      await redraw()
      t.is(true, content.open)
      close.click()
      await redraw()
      t.is(true, content.open)
      return ['true,false', changes.join(',')]
    })
  }),

  t`synchronizes a live binding in both directions`(() => {
    const open = s.live(false)
    return withDialog({ root: { bind: open } }, async({ trigger, content }) => {
      trigger.click()
      await redraw()
      t.is(true, open())
      t.is(true, content.open)

      open(false)
      await redraw()
      t.is(false, content.open)
      open(true)
      await redraw()
      return [true, content.matches(':modal')]
    })
  }),

  t`uses native disabled trigger behavior`(() => withDialog({
    trigger: { disabled: true }
  }, async({ trigger, content }) => {
    trigger.click()
    trigger.focus()
    await redraw()
    t.is(true, trigger.disabled)
    t.is(false, content.open)
    t.is(false, document.activeElement === trigger)
    return ['0.48', getComputedStyle(trigger).opacity]
  })),

  t`forwards native content attributes, events, data, style, and children`(() => {
    let closed = 0
    return withDialog({
      Content: ExtendedContent,
      content: {
        class: 'settings-dialog',
        data: { test: 'native' },
        style: { letterSpacing: '1px' },
        onclose: () => closed++
      }
    }, async({ trigger, content, close }) => {
      trigger.click()
      await redraw()
      close.click()
      await redraw()
      t.is('settings-dialog', content.classList.contains('settings-dialog') ? 'settings-dialog' : '')
      t.is('native', content.dataset.test)
      t.is('1px', content.style.letterSpacing)
      t.is('3px', getComputedStyle(content).borderTopWidth)
      t.is(1, closed)
      return ['Dialog title', content.querySelector('h2').textContent]
    })
  }),

  t`styles sizes, dark mode, high contrast, focus, and backdrop`(() => withDialog({
    content: { size: '3', color: 'cyan', highContrast: true }
  }, async({ trigger, content }) => {
    content.parentElement.style.colorScheme = 'dark'
    trigger.click()
    await redraw()
    const style = getComputedStyle(content)
    const backdrop = getComputedStyle(content, '::backdrop')
    t.is('640px', style.maxWidth)
    t.is('rgb(25, 25, 25)', style.backgroundColor)
    t.is('rgb(238, 238, 238)', style.color)
    t.is('rgba(0, 0, 0, 0.68)', backdrop.backgroundColor)
    return [true, cssRules().some(rule => rule.selectorText?.includes(':focus-visible') &&
      rule.style.outlineOffset === '2px')]
  }))
)

function standardDialog(root = {}, options = {}) {
  const Content = options.Content || Dialog.Content
  return Dialog(root,
    Dialog.Trigger(options.trigger || {}, 'Open dialog'),
    Content(options.content || {},
      Dialog.Title('Dialog title'),
      Dialog.Description('Dialog description'),
      Dialog.Close(options.close || {}, 'Close')
    )
  )
}

function withDialog(options, run) {
  const host = document.createElement('div')
  document.body.append(host)
  const mounted = s.mount(host, options.view || (() => standardDialog(options.root, options)))

  return redraw()
    .then(() => run({
      trigger: host.querySelector('button'),
      content: host.querySelector('dialog'),
      title: host.querySelector('h2'),
      description: host.querySelector('p'),
      close: host.querySelector('dialog button')
    }))
    .finally(() => {
      mounted.unmount()
      host.remove()
    })
}

function redraw() {
  return new Promise(resolve => requestAnimationFrame(resolve))
}

function cssRules() {
  return [...document.styleSheets].flatMap(sheet => nestedRules(sheet.cssRules))
}

function nestedRules(list) {
  return [...list].flatMap(rule => rule.selectorText
    ? [rule]
    : rule.cssRules ? nestedRules(rule.cssRules) : []
  )
}
