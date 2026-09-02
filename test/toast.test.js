import s from 'sin'
import t from 'sin/test'
import { Toast } from '../src/index.js'
import { Toast as Themed } from '../src/theme.js'

t.timeout = 6000
t`toast`(
  t`keeps a polite viewport present before messages and never steals focus`(() => fixture({ defaultOpen: false }, async({ host, trigger, show }) => {
    t.is('status', host.querySelector('[data-toast-viewport]').getAttribute('role'))
    t.is('polite', host.querySelector('[data-toast-viewport]').getAttribute('aria-live'))
    t.is(null, toast(host))
    trigger.focus()
    show({ defaultOpen: true }); await settle()
    t.is('true', toast(host).getAttribute('aria-atomic'))
    return [trigger, document.activeElement]
  })),
  t`auto-dismisses once without resetting on ordinary redraws`(() => fixture({ duration: 140 }, async({ host, redraw }) => {
    await wait(85); redraw(); await settle(); await wait(90)
    return [null, toast(host)]
  })),
  t`zero duration persists and pointer hover pauses the remaining time`(async() => {
    await fixture({ duration: 0 }, async({ host }) => { await wait(180); t.is(true, !!toast(host)) })
    return fixture({ duration: 180 }, async({ host }) => {
      await wait(70)
      toast(host).dispatchEvent(new PointerEvent('pointerenter', { pointerType: 'mouse' }))
      await wait(210)
      t.is(true, !!toast(host))
      toast(host).dispatchEvent(new PointerEvent('pointerleave', { pointerType: 'mouse' }))
      await wait(140)
      return [null, toast(host)]
    })
  }),
  t`focus and window blur pause independently`(() => fixture({ duration: 150 }, async({ host }) => {
    const node = toast(host)
    node.dispatchEvent(new FocusEvent('focusin', { bubbles: true }))
    window.dispatchEvent(new Event('blur'))
    node.dispatchEvent(new FocusEvent('focusout', { bubbles: true, relatedTarget: document.body }))
    await wait(200)
    t.is(true, !!toast(host))
    window.dispatchEvent(new Event('focus'))
    await wait(190)
    return [null, toast(host)]
  })),
  t`Close is cancellable and Escape is scoped to the toast`(() => fixture({ duration: 0 }, async({ host }) => {
    const node = toast(host)
    host.querySelector('[data-prevent]').click(); await settle()
    t.is(node, toast(host))
    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    t.is(node, toast(host))
    node.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }))
    await settle()
    return [null, toast(host)]
  })),
  t`controlled callbacks accept timer dismissal with plain owner state`(async() => {
    let open = true, calls = 0
    return fixture(() => ({ open, duration: 80, onopenchange: value => { open = value; calls++ } }), async({ host }) => {
      await wait(160); await settle()
      t.is(1, calls)
      return [null, toast(host)]
    })
  }),
  t`Close returns focus without stealing it on automatic dismissal`(() => fixture({ defaultOpen: false }, async({ host, trigger, show }) => {
    trigger.focus()
    show({ duration: 0 }); await settle()
    const close = host.querySelector('[data-close]')
    close.focus(); close.click(); await settle()
    t.is(null, toast(host))
    t.is(trigger, document.activeElement)
    show({ duration: 60 }); await settle(); window.dispatchEvent(new Event('focus'))
    await wait(120)
    return [trigger, document.activeElement]
  })),
  t`controlled owners can remove a focused toast and restore focus`(() => fixture({ defaultOpen: false }, async({ host, trigger, show, update }) => {
    trigger.focus()
    show({ open: true, duration: 0, onopenchange: () => update(null) }); await settle()
    const close = host.querySelector('[data-close]')
    close.focus(); close.click(); await settle()
    t.is(null, toast(host))
    return [trigger, document.activeElement]
  })),
  t`controlled rejection does not repeatedly call the expired timer`(async() => {
    let calls = 0
    return fixture({ open: true, duration: 60, onopenchange: () => calls++ }, async({ host, redraw }) => {
      await wait(110); redraw(); await settle(); await wait(100)
      t.is(true, !!toast(host))
      return [1, calls]
    })
  }),
  t`live bindings close and reopen with a fresh duration`(async() => {
    const bind = s.live(true)
    return fixture({ bind, duration: 100 }, async({ host }) => {
      await wait(160); t.is(false, bind())
      bind(true); await settle(); window.dispatchEvent(new Event('focus'))
      t.is(true, !!toast(host))
      await wait(160)
      return [false, bind()]
    })
  }),
  t`changing duration resets timing and new keys restart identical messages`(() => fixture({ duration: 100 }, async({ host, update, show }) => {
    update({ duration: 0 }); await settle(); await wait(150)
    t.is(true, !!toast(host))
    const old = toast(host)
    show({ duration: 100 }); await settle(); window.dispatchEvent(new Event('focus'))
    t.is(false, old === toast(host))
    await wait(160)
    return [null, toast(host)]
  })),
  t`theme, native attributes and hooks survive template extension`(() => fixture({ duration: 0, title: 'Confirmation', style: { borderRadius: '14px' } }, async({ host }) => {
    t.is('Confirmation', toast(host).title)
    t.is('14px', getComputedStyle(toast(host)).borderRadius)
    t.is('flex', getComputedStyle(toast(host)).display)
    t.is('button', host.querySelector('[data-close]').type)
    return [true, getComputedStyle(toast(host)).backgroundColor !== 'rgba(0, 0, 0, 0)']
  }, Themed`max-width 320px`)),
  t`teardown cancels pending timers`(async() => {
    let calls = 0
    await fixture({ duration: 300, onopenchange: () => calls++ }, async({ host }) => { t.is(true, !!toast(host)) })
    await wait(360)
    return [0, calls]
  })
)

function toast(host) { return host.querySelector('[data-toast]') }
function wait(ms) { return new Promise(resolve => setTimeout(resolve, ms)) }
async function settle() { await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))) }
async function fixture(initial, run, Component = Toast) {
  const host = document.createElement('div')
  document.body.append(host)
  let attrs = initial, key = 0, mounted = true
  const Close = Component === Toast ? Toast.Close : Themed.Close
  const mount = s.mount(host, () => mounted && s`div`(
    s`button`({ data: { trigger: true } }, 'Trigger'),
    Toast.Viewport(attrs && Component({ ...(typeof attrs === 'function' ? attrs() : attrs), key },
      s`span`('Query saved'),
      Close({ data: { prevent: true }, onclick: event => event.preventDefault() }),
      Close({ data: { close: true } })
    ))
  ))
  try {
    await settle()
    // The headless test window need not have OS focus; model the focus event explicitly.
    window.dispatchEvent(new Event('focus'))
    return await run({ host, trigger: host.querySelector('[data-trigger]'), redraw: () => s.redraw(),
      update: value => { attrs = value; s.redraw() }, show: value => { attrs = value; key++; s.redraw() }
    })
  } finally { mounted = false; await s.redraw(); mount.unmount(); host.remove() }
}
