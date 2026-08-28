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

    t`opens from Shift+F10 without browser contextmenu synthesis`(() => withMenu({
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
      menu.trigger.focus()
      const event = key(menu.trigger, 'F10', { shiftKey: true })
      await settle()

      const target = menu.trigger.getBoundingClientRect()
      const anchor = document.querySelector('[data-sinewy-context-anchor]').getBoundingClientRect()
      t.is(true, event.defaultPrevented)
      t.is(menu.items[0], document.activeElement)
      t.is(Math.round(target.left), Math.round(anchor.left))
      t.is(Math.round(target.bottom), Math.round(anchor.top))
      return [true, menu.content.matches(':popover-open')]
    })),

    t`opens from the Context Menu key`(() => withMenu({}, async menu => {
      const event = key(menu.trigger, 'ContextMenu')
      await settle()

      t.is(true, event.defaultPrevented)
      t.is(menu.items[0], document.activeElement)
      return [true, menu.content.matches(':popover-open')]
    })),

    t`honors prevented consumer keyboard handlers`(() => withMenu({
      trigger: { onkeydown: event => event.preventDefault() }
    }, async menu => {
      const event = key(menu.trigger, 'F10', { shiftKey: true })
      await settle()

      t.is(true, event.defaultPrevented)
      t.is(null, document.querySelector('[data-sinewy-context-anchor]'))
      return [false, menu.content.matches(':popover-open')]
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

  t`positioning`(
    t`stays inside every viewport corner across repeated invocation`(() => withMenu({
      content: {
        style: {
          width: '160px',
          height: '100px'
        }
      }
    }, async menu => {
      const inset = 4
      const corners = [
        { x: inset, y: inset, horizontal: 'after', vertical: 'after' },
        { x: innerWidth - inset, y: inset, horizontal: 'before', vertical: 'after' },
        { x: inset, y: innerHeight - inset, horizontal: 'after', vertical: 'before' },
        { x: innerWidth - inset, y: innerHeight - inset, horizontal: 'before', vertical: 'before' }
      ]

      for (const corner of corners) {
        menu.trigger.dispatchEvent(contextEvent({
          clientX: corner.x,
          clientY: corner.y,
          button: 2,
          pointerType: 'mouse'
        }))
        await settle()

        const content = menu.content.getBoundingClientRect()
        t.is(true,
          content.left >= 0
          && content.top >= 0
          && content.right <= innerWidth
          && content.bottom <= innerHeight
        )
        t.is(true, corner.horizontal === 'after'
          ? content.left >= corner.x - 1
          : content.right <= corner.x + 1
        )
        t.is(true, corner.vertical === 'after'
          ? content.top >= corner.y - 1
          : content.bottom <= corner.y + 1
        )
      }

      return [true, menu.content.matches(':popover-open')]
    }))
  ),

  t`keyboard interaction`(
    t`navigates, typeaheads, dismisses, and restores the target`(() => withMenu({}, async menu => {
      menu.trigger.focus()
      key(menu.trigger, 'F10', { shiftKey: true })
      await settle()

      key(document.activeElement, 'ArrowDown')
      t.is(menu.items[1], document.activeElement)
      key(document.activeElement, 'Home')
      t.is(menu.items[0], document.activeElement)
      key(document.activeElement, 'v')
      t.is(menu.items[1], document.activeElement)
      key(document.activeElement, 'Escape')
      await settle()

      t.is(false, menu.content.matches(':popover-open'))
      return [menu.trigger, document.activeElement]
    })),

    t`Tab closes without forcing focus back to the target`(() => withMenu({}, async menu => {
      key(menu.trigger, 'ContextMenu')
      await settle()
      key(document.activeElement, 'Tab')
      await settle()

      t.is(false, menu.content.matches(':popover-open'))
      return [false, document.activeElement === menu.trigger]
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
    }),

    t`RTL opens deep submenus toward inline start and unwinds with the back key`(() => withDeepSubmenu({
      root: { dir: 'rtl' }
    }, async menu => {
      menu.trigger.dispatchEvent(contextEvent({
        clientX: innerWidth - 4,
        clientY: 100,
        button: 2,
        pointerType: 'mouse'
      }))
      await settle()

      t.is(menu.subtriggers[0], document.activeElement)
      key(menu.subtriggers[0], 'ArrowLeft')
      await settle()
      t.is(menu.subtriggers[1], document.activeElement)
      key(menu.subtriggers[1], 'ArrowLeft')
      await settle()

      t.is(menu.deepItem, document.activeElement)
      t.is('true,true,true', menu.contents.map(content => content.matches(':popover-open')).join(','))
      t.is(true, menu.contents[1].getBoundingClientRect().right <= menu.subtriggers[0].getBoundingClientRect().left + 1)
      t.is(true, menu.contents[2].getBoundingClientRect().right <= menu.subtriggers[1].getBoundingClientRect().left + 1)

      key(menu.deepItem, 'ArrowRight')
      await settle()
      t.is('true,true,false', menu.contents.map(content => content.matches(':popover-open')).join(','))
      return [menu.subtriggers[1], document.activeElement]
    }))
  )
)

function withMenu(options, run) {
  const host = document.createElement('div')
  document.body.append(host)
  const mounted = s.mount(host, () => ContextMenu(options.root || {},
    ContextMenu.Trigger(options.trigger || {}, 'Right-click target'),
    ContextMenu.Content({
      ...options.content,
      style: {
        width: '180px',
        padding: '4px',
        background: 'white',
        ...options.content?.style
      }
    },
      ContextMenu.Item({ onselect: options.onselect }, 'Rename'),
      ContextMenu.Checkbox({ defaultChecked: true, textValue: 'Visible' },
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

function withDeepSubmenu(options, run) {
  const host = document.createElement('div')
  document.body.append(host)
  const mounted = s.mount(host, () => ContextMenu(options.root || {},
    ContextMenu.Trigger('Right-click target'),
    ContextMenu.Content({ style: { width: '180px', padding: '4px', background: 'white' } },
      ContextMenu.Sub(
        ContextMenu.SubTrigger({ textValue: 'First level' }, 'First level'),
        ContextMenu.SubContent({ style: { width: '150px', padding: '4px', background: 'white' } },
          ContextMenu.Sub(
            ContextMenu.SubTrigger({ textValue: 'Second level' }, 'Second level'),
            ContextMenu.SubContent({ style: { width: '130px', padding: '4px', background: 'white' } },
              ContextMenu.Item({ textValue: 'Deep action' }, 'Deep action')
            )
          )
        )
      )
    )
  ))
  const contents = Array.from(host.querySelectorAll('[role="menu"]'))
  const menu = {
    host,
    trigger: host.querySelector(':scope > [aria-haspopup="menu"]'),
    contents,
    subtriggers: Array.from(host.querySelectorAll('[role="menuitem"][aria-haspopup="menu"]')),
    deepItem: host.querySelector('[data-text-value="Deep action"]')
  }

  return Promise.resolve()
    .then(() => run(menu))
    .finally(() => {
      contents.slice().reverse().forEach(content =>
        content.matches(':popover-open') && content.hidePopover()
      )
      mounted.unmount()
      host.remove()
      document.querySelectorAll('[data-sinewy-context-anchor]').forEach(anchor => anchor.remove())
    })
}

function key(element, keyName, options = {}) {
  const event = new KeyboardEvent('keydown', {
    key: keyName,
    bubbles: true,
    cancelable: true,
    ...options
  })
  element.dispatchEvent(event)
  return event
}

function settle() {
  return new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
