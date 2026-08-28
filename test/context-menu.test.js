import s from 'sin'
import t from 'sin/test'
import ContextMenu from '../src/context-menu.js'

t.timeout = 3000

t`context menu`(
  t`structure`(
    t`connects its target and shared menu content`(() => withMenu({}, menu => {
      t.is('menu', menu.trigger.getAttribute('aria-haspopup'))
      t.is(menu.content.id, menu.trigger.getAttribute('aria-controls'))
      t.is(menu.trigger.id, menu.content.getAttribute('aria-labelledby'))
      t.is('false', menu.trigger.getAttribute('aria-expanded'))
      t.is('menuitem', menu.items[0].getAttribute('role'))
      t.is('menuitemcheckbox', menu.items[1].getAttribute('role'))
      return [0, menu.trigger.tabIndex]
    }))
  ),

  t`invocation`(
    t`opens at the pointer and focuses the first item`(() => withMenu({}, async menu => {
      const event = contextEvent({ clientX: 120, clientY: 90, button: 2, pointerType: 'mouse' })
      menu.trigger.dispatchEvent(event)
      await settle()

      const anchor = document.querySelector('[data-sinewy-context-anchor]')
      const rect = anchor.getBoundingClientRect()
      t.is(true, event.defaultPrevented)
      t.is(true, menu.content.matches(':popover-open'))
      t.is(menu.items[0], document.activeElement)
      t.is('true', menu.trigger.getAttribute('aria-expanded'))
      t.is(120, Math.round(rect.left))
      return [90, Math.round(rect.top)]
    })),

    t`waits for a held secondary button to be released`(() => withMenu({}, async menu => {
      menu.trigger.dispatchEvent(new PointerEvent('pointerdown', {
        bubbles: true,
        button: 2,
        buttons: 2,
        pointerId: 1,
        pointerType: 'mouse'
      }))
      menu.trigger.dispatchEvent(contextEvent({
        clientX: 120,
        clientY: 90,
        button: 2,
        buttons: 0,
        pointerId: 1,
        pointerType: 'mouse'
      }))

      t.is(false, menu.content.matches(':popover-open'))
      document.dispatchEvent(new PointerEvent('pointerup', {
        bubbles: true,
        button: 2,
        buttons: 0,
        pointerId: 1,
        pointerType: 'mouse'
      }))
      await settle()

      return [true, menu.content.matches(':popover-open')]
    })),

    t`opens a stationary touch long press at its initial point`(() => withMenu({}, async menu => {
      menu.trigger.dispatchEvent(pointerEvent('pointerdown', {
        clientX: 135,
        clientY: 95,
        pointerId: 2,
        pointerType: 'touch'
      }))
      await wait(725)

      t.is(false, menu.content.matches(':popover-open'))
      document.dispatchEvent(pointerEvent('pointerup', {
        clientX: 135,
        clientY: 95,
        pointerId: 2,
        pointerType: 'touch'
      }))
      await settle()

      const anchor = document.querySelector('[data-sinewy-context-anchor]').getBoundingClientRect()
      t.is(135, Math.round(anchor.left))
      t.is(95, Math.round(anchor.top))
      return [true, menu.content.matches(':popover-open')]
    })),

    t`cancels touch long press after pointer movement`(() => withMenu({}, async menu => {
      menu.trigger.dispatchEvent(pointerEvent('pointerdown', {
        clientX: 80,
        clientY: 70,
        pointerId: 3,
        pointerType: 'touch'
      }))
      document.dispatchEvent(pointerEvent('pointermove', {
        clientX: 81,
        clientY: 70,
        pointerId: 3,
        pointerType: 'touch'
      }))
      await wait(725)
      document.dispatchEvent(pointerEvent('pointerup', {
        clientX: 81,
        clientY: 70,
        pointerId: 3,
        pointerType: 'touch'
      }))
      await settle()

      t.is(null, document.querySelector('[data-sinewy-context-anchor]'))
      return [false, menu.content.matches(':popover-open')]
    })),

    t`uses the target corner for keyboard-origin events`(() => withMenu({
      trigger: {
        style: {
          position: 'fixed',
          left: '60px',
          top: '50px',
          width: '140px',
          height: '40px'
        }
      }
    }, async menu => {
      const target = menu.trigger.getBoundingClientRect()
      menu.trigger.dispatchEvent(contextEvent())
      await settle()

      const anchor = document.querySelector('[data-sinewy-context-anchor]').getBoundingClientRect()
      t.is(Math.round(target.left), Math.round(anchor.left))
      return [Math.round(target.bottom), Math.round(anchor.top)]
    })),

    t`honors prevented consumer handlers`(() => withMenu({
      trigger: { oncontextmenu: event => event.preventDefault() }
    }, async menu => {
      const event = contextEvent({ clientX: 40, clientY: 30, button: 2, pointerType: 'mouse' })
      menu.trigger.dispatchEvent(event)
      await settle()

      t.is(true, event.defaultPrevented)
      t.is(null, document.querySelector('[data-sinewy-context-anchor]'))
      return [false, menu.content.matches(':popover-open')]
    })),

    t`leaves the native context menu available when disabled`(() => withMenu({
      trigger: { disabled: true }
    }, async menu => {
      const event = contextEvent({ clientX: 40, clientY: 30, button: 2, pointerType: 'mouse' })
      menu.trigger.dispatchEvent(event)
      await settle()

      t.is(false, event.defaultPrevented)
      t.is(null, document.querySelector('[data-sinewy-context-anchor]'))
      return [false, menu.content.matches(':popover-open')]
    })),

    t`moves an open menu to the latest invocation point`(() => withMenu({}, async menu => {
      menu.trigger.dispatchEvent(contextEvent({ clientX: 30, clientY: 40, button: 2, pointerType: 'mouse' }))
      await settle()
      menu.items[1].focus()

      menu.trigger.dispatchEvent(contextEvent({ clientX: 210, clientY: 160, button: 2, pointerType: 'mouse' }))
      await settle()

      const anchor = document.querySelector('[data-sinewy-context-anchor]').getBoundingClientRect()
      t.is(true, menu.content.matches(':popover-open'))
      t.is(menu.items[0], document.activeElement)
      t.is(210, Math.round(anchor.left))
      return [160, Math.round(anchor.top)]
    }))
  ),

  t`selection`(
    t`selects, closes, reports lifecycle, and restores target focus`(() => {
      const changes = []
      let selections = 0
      return withMenu({
        root: { onopenchange: open => changes.push(open) },
        onselect: () => selections++
      }, async menu => {
        menu.trigger.focus()
        menu.trigger.dispatchEvent(contextEvent({ clientX: 100, clientY: 100, button: 2, pointerType: 'mouse' }))
        await settle()
        menu.items[0].click()
        await settle()

        t.is(1, selections)
        t.is(false, menu.content.matches(':popover-open'))
        t.is(menu.trigger, document.activeElement)
        return ['true,false', changes.join(',')]
      })
    })
  ),

  t`shared menu behavior`(
    t`toggles checkbox items`(() => withMenu({}, async menu => {
      menu.trigger.dispatchEvent(contextEvent({ clientX: 100, clientY: 100, button: 2, pointerType: 'mouse' }))
      await settle()
      menu.items[1].click()
      await settle()

      t.is('false', menu.items[1].getAttribute('aria-checked'))
      return [false, menu.content.matches(':popover-open')]
    })),

    t`opens submenus and closes the tree on nested selection`(() => {
      let selections = 0
      return withSubmenu(() => selections++, async menu => {
        menu.trigger.dispatchEvent(contextEvent({ clientX: 100, clientY: 100, button: 2, pointerType: 'mouse' }))
        await settle()
        menu.subTrigger.dispatchEvent(new KeyboardEvent('keydown', {
          key: 'ArrowRight',
          bubbles: true,
          cancelable: true
        }))
        await settle()

        t.is(true, menu.subContent.matches(':popover-open'))
        t.is(menu.nestedItem, document.activeElement)
        menu.nestedItem.click()
        await settle()

        t.is(1, selections)
        t.is(false, menu.subContent.matches(':popover-open'))
        return [false, menu.content.matches(':popover-open')]
      })
    })
  )
)

function withMenu(options, run) {
  const host = document.createElement('div')
  document.body.append(host)
  const mounted = s.mount(host, () => ContextMenu(options.root || {},
    ContextMenu.Trigger(options.trigger || {}, 'Right-click target'),
    ContextMenu.Content({
      style: { width: '180px', padding: '4px', background: 'white' }
    },
      ContextMenu.Item({ onselect: options.onselect }, 'Rename'),
      ContextMenu.Checkbox({ defaultChecked: true },
        ContextMenu.Indicator('✓'),
        'Visible'
      )
    )
  ))
  const menu = {
    host,
    trigger: host.querySelector('[aria-haspopup="menu"]'),
    content: host.querySelector('[role="menu"]'),
    items: Array.from(host.querySelectorAll('[role^="menuitem"]'))
  }

  return Promise.resolve()
    .then(() => run(menu))
    .finally(() => {
      menu.content.matches(':popover-open') && menu.content.hidePopover()
      mounted.unmount()
      host.remove()
      document.querySelectorAll('[data-sinewy-context-anchor]').forEach(anchor => anchor.remove())
    })
}

function contextEvent(options = {}) {
  return new PointerEvent('contextmenu', {
    bubbles: true,
    cancelable: true,
    ...options
  })
}

function pointerEvent(type, options = {}) {
  return new PointerEvent(type, {
    bubbles: true,
    cancelable: true,
    button: 0,
    buttons: type === 'pointerup' ? 0 : 1,
    ...options
  })
}

function withSubmenu(onselect, run) {
  const host = document.createElement('div')
  document.body.append(host)
  const mounted = s.mount(host, () => ContextMenu(
    ContextMenu.Trigger('Right-click target'),
    ContextMenu.Content(
      ContextMenu.Sub(
        ContextMenu.SubTrigger('More'),
        ContextMenu.SubContent(
          ContextMenu.Item({ onselect }, 'Nested action')
        )
      )
    )
  ))
  const contents = Array.from(host.querySelectorAll('[role="menu"]'))
  const menu = {
    host,
    trigger: host.querySelector('[aria-haspopup="menu"]'),
    content: contents[0],
    subTrigger: contents[0].querySelector('[aria-haspopup="menu"]'),
    subContent: contents[1],
    nestedItem: contents[1].querySelector('[role="menuitem"]')
  }

  return Promise.resolve()
    .then(() => run(menu))
    .finally(() => {
      Array.from(host.querySelectorAll(':popover-open')).reverse().forEach(content => content.hidePopover())
      mounted.unmount()
      host.remove()
      document.querySelectorAll('[data-sinewy-context-anchor]').forEach(anchor => anchor.remove())
    })
}

function settle() {
  return new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
