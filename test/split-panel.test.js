import s from 'sin'
import t from 'sin/test'
import { SplitPanel } from '../src/index.js'
import { SplitPanel as Themed } from '../src/theme.js'

t.timeout = 6000
t`split panel`(
  t`pointer focus suppresses the ring without removing keyboard focus`(() => fixture({}, async(root) => {
    start(root).querySelector('input').focus()
    drag(root, 280)
    await settle()
    t.is(divider(root), document.activeElement)
    t.is('none', getComputedStyle(divider(root)).outlineStyle)
    key(root, 'ArrowRight'); await settle()
    t.is(false, divider(root).hasAttribute('data-pointer-focus'))
    // Synthetic keys cannot set :focus-visible; the marker must release its override.
    // The native keyboard ring is additionally checked with real browser input.
    drag(root, 280); await settle()
    divider(root).dispatchEvent(new FocusEvent('blur'))
    return [false, divider(root).hasAttribute('data-pointer-focus')]
  }, Themed)),
  t`percentage layout, parts, accessible relationships, and theme`(() => fixture({}, async(root) => {
    near(300, start(root).getBoundingClientRect().width)
    t.is('separator', divider(root).getAttribute('role'))
    t.is('vertical', divider(root).getAttribute('aria-orientation'))
    t.is(start(root).id, divider(root).getAttribute('aria-controls'))
    t.is('50', divider(root).getAttribute('aria-valuenow'))
    return [true, getComputedStyle(divider(root)).backgroundColor !== 'rgba(0, 0, 0, 0)']
  }, Themed)),
  t`keyboard steps, bounds, collapse and restore do not trap arrows at snap points`(() => fixture({ snap: '50%' }, async(root) => {
    key(root, 'ArrowRight'); await settle()
    near(306, start(root).getBoundingClientRect().width)
    key(root, 'ArrowRight', { shiftKey: true }); await settle()
    near(366, start(root).getBoundingClientRect().width)
    key(root, 'Enter'); await settle()
    near(0, start(root).getBoundingClientRect().width)
    t.is(true, start(root).inert)
    key(root, 'Enter'); await settle()
    near(366, start(root).getBoundingClientRect().width)
    key(root, 'End'); await settle()
    near(600, start(root).getBoundingClientRect().width)
    key(root, 'Home'); await settle()
    return [0, Number(divider(root).getAttribute('aria-valuenow'))]
  })),
  t`CSS pixel/calc bounds constrain actual layout, keyboard, and ARIA`(() => fixture({ style: { '--min': '120px', '--max': 'calc(100% - 160px)' } }, async(root) => {
    key(root, 'Home'); await settle()
    near(120, start(root).getBoundingClientRect().width)
    t.is('20', divider(root).getAttribute('aria-valuenow'))
    key(root, 'End'); await settle()
    near(440, start(root).getBoundingClientRect().width)
    root.style.width = '104px'; await settle()
    near(0, start(root).getBoundingClientRect().width)
    return [true, Number.isFinite(Number(divider(root).getAttribute('aria-valuenow')))]
  })),
  t`primary start retains pixels on container resize; proportional mode retains ratio`(async() => {
    await fixture({ primary: 'start', defaultPositionInPixels: 200 }, async(root) => {
      root.style.width = '804px'; await settle()
      near(200, start(root).getBoundingClientRect().width)
    })
    return fixture({ defaultPosition: 25 }, async(root) => {
      root.style.width = '804px'; await settle()
      near(200, start(root).getBoundingClientRect().width)
      return [25, Number(divider(root).getAttribute('aria-valuenow'))]
    })
  }),
  t`primary end, vertical orientation, and RTL use physical arrow direction`(async() => {
    await fixture({ primary: 'end', defaultPositionInPixels: 200, dir: 'rtl' }, async(root) => {
      key(root, 'ArrowRight'); await settle()
      near(206, end(root).getBoundingClientRect().width)
      t.is(end(root).id, divider(root).getAttribute('aria-controls'))
    })
    return fixture({ orientation: 'vertical' }, async(root) => {
      t.is('horizontal', divider(root).getAttribute('aria-orientation'))
      key(root, 'ArrowDown'); await settle()
      near(153, start(root).getBoundingClientRect().height)
      return [51, Number(divider(root).getAttribute('aria-valuenow'))]
    })
  }),
  t`binding, controlled rejection, controlled acceptance, and pixel precedence`(async() => {
    const bind = s.live(20)
    await fixture({ bind }, async(root) => {
      key(root, 'ArrowRight'); await settle()
      t.is(21, bind())
      bind(60); await settle()
      near(360, start(root).getBoundingClientRect().width)
    })
    await fixture({ position: 20, positionInPixels: 180 }, async(root) => {
      key(root, 'ArrowRight'); await settle()
      near(180, start(root).getBoundingClientRect().width)
    })
    let value = 20
    return fixture(() => ({ position: value, onreposition: detail => { value = detail.position } }), async(root) => {
      key(root, 'ArrowRight'); await settle()
      near(126, start(root).getBoundingClientRect().width)
      return [21, value]
    })
  }),
  t`pointer snapping, custom snapping, cancellation, and disabled interaction`(async() => {
    await fixture({ snap: 'repeat(100px) 50%' }, async(root) => {
      drag(root, 294); await settle()
      near(300, start(root).getBoundingClientRect().width)
      drag(root, 393); await settle()
      near(400, start(root).getBoundingClientRect().width)
    })
    await fixture({ snap: ({ positionInPixels }) => Math.round(positionInPixels / 80) * 80 }, async(root) => {
      drag(root, 285); await settle()
      near(320, start(root).getBoundingClientRect().width)
      const node = divider(root)
      pointer(node, 'pointerdown', 100)
      pointer(node, 'pointercancel', 100)
      pointer(node, 'pointermove', 150)
      await settle()
      t.is(false, root.hasAttribute('data-dragging'))
    })
    return fixture({ disabled: true }, async(root) => {
      key(root, 'End'); drag(root, 100); await settle()
      near(300, start(root).getBoundingClientRect().width)
      return [-1, divider(root).tabIndex]
    })
  }),
  t`hidden containers recover without NaN, consumer handlers can prevent resizing`(() => fixture({ defaultPositionInPixels: 170 }, async(root) => {
    root.style.display = 'none'; await settle()
    root.style.display = ''; await settle()
    near(170, start(root).getBoundingClientRect().width)
    key(root, 'End'); await settle()
    return [170, Math.round(start(root).getBoundingClientRect().width)]
  }, SplitPanel, { onkeydown: event => event.preventDefault() })),
  t`nested splits resize independently and keep mounted children`(() => fixture({}, async(root) => {
    const input = start(root).querySelector('input')
    input.value = 'keep me'
    const nested = root.querySelector('#nested-split')
    key(nested, 'ArrowDown'); await settle()
    near(300, start(root).getBoundingClientRect().width)
    near(153, start(nested).getBoundingClientRect().height)
    key(root, 'ArrowRight'); await settle()
    near(306, start(root).getBoundingClientRect().width)
    near(153, start(nested).getBoundingClientRect().height)
    t.is(input, start(root).querySelector('input'))
    return ['keep me', input.value]
  }, SplitPanel, {}, true)),
  t`disabling a live drag cancels pending movement`(async() => {
    let disabled = false
    return fixture(() => ({ disabled }), async(root) => {
      pointer(divider(root), 'pointerdown', 100)
      t.is(true, root.hasAttribute('data-dragging'))
      disabled = true
      await s.redraw()
      pointer(divider(root), 'pointermove', 400)
      await settle()
      near(300, start(root).getBoundingClientRect().width)
      return [false, root.hasAttribute('data-dragging')]
    })
  })
)

function near(expected, got) { t.is(true, Math.abs(expected - got) < 1) }
function start(root) { return root.querySelector('[data-split-start]') }
function end(root) { return root.querySelector('[data-split-end]') }
function divider(root) { return root.querySelector('[data-split-divider]') }
function key(root, key, attrs = {}) { divider(root).dispatchEvent(new KeyboardEvent('keydown', { key, ...attrs, bubbles: true, cancelable: true })) }
function pointer(node, type, x) { node.dispatchEvent(new PointerEvent(type, { pointerId: 1, isPrimary: true, button: 0, clientX: x, clientY: 20, bubbles: true, cancelable: true })) }
function drag(root, pixels) {
  const x = root.getBoundingClientRect().left + pixels + 2
  pointer(divider(root), 'pointerdown', x)
  pointer(divider(root), 'pointermove', x)
  pointer(divider(root), 'pointerup', x)
}
async function settle() { await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(() => requestAnimationFrame(resolve)))) }
async function fixture(attrs, run, Component = SplitPanel, handleAttrs = {}, nested = false) {
  const host = document.createElement('div')
  document.body.append(host)
  const mount = s.mount(host, () => {
    const values = typeof attrs === 'function' ? attrs() : attrs
    return Component({ ...values, style: { width: '604px', height: '304px', ...values.style } },
      Component.Start(s`input`({ 'aria-label': 'Persistent input' })),
      Component.Divider({ 'aria-label': 'First pane', ...handleAttrs }),
      Component.End(nested ? Component({ id: 'nested-split', orientation: 'vertical', style: { height: '100%' } },
        Component.Start('Nested start'), Component.Divider(), Component.End('Nested end')
      ) : 'Second pane')
    )
  })
  try { await settle(); return await run(host.querySelector('[data-split-panel]')) }
  finally { mount.unmount(); host.remove() }
}
