import s from 'sin'
import t from 'sin/test'
import { ContextMenu } from '../src/theme.js'

t.timeout = 2000

const ExtendedContent = ContextMenu.Content`
  max-height none
`

t`context menu theme`(
  t`keeps context invocation with themed menu parts`(() => withTheme(async menu => {
    menu.trigger.dispatchEvent(new PointerEvent('contextmenu', {
      bubbles: true,
      cancelable: true,
      clientX: 80,
      clientY: 70,
      button: 2,
      pointerType: 'mouse'
    }))
    await settle()

    const itemStyle = getComputedStyle(menu.item)
    t.is(true, menu.content.matches(':popover-open'))
    t.is(menu.item, document.activeElement)
    t.is(undefined, menu.trigger.dataset.size)
    t.is('2', menu.content.dataset.size)
    t.is('soft', menu.item.dataset.variant)
    t.is('14px', itemStyle.fontSize)
    t.is('20px', itemStyle.lineHeight)
    t.is('⌘ R', menu.item.querySelector('kbd').textContent)
    return ['none', getComputedStyle(menu.content).maxHeight]
  })),

  t`inherits theme axes and checkable gutters through submenus`(() => withTheme(menu => {
    const checkStyle = getComputedStyle(menu.checkbox)
    t.is('3', menu.item.dataset.size)
    t.is('solid', menu.item.dataset.variant)
    t.is('41px', checkStyle.paddingInlineStart)
    t.is('3', menu.subContent.dataset.size)
    t.is('solid', menu.subItem.dataset.variant)
    return ['42px', getComputedStyle(menu.subItem).minHeight]
  }, { size: '3', variant: 'solid', color: 'cyan' }))
)

function withTheme(run, contentAttrs = { size: '2', variant: 'soft', color: 'indigo' }) {
  const host = document.createElement('div')
  document.body.append(host)
  const mounted = s.mount(host, () => ContextMenu(
    ContextMenu.Trigger('Context target'),
    ExtendedContent(contentAttrs,
      ContextMenu.Label('Document'),
      ContextMenu.Item({ shortcut: '⌘ R' }, 'Rename'),
      ContextMenu.Checkbox({ defaultChecked: true },
        ContextMenu.Indicator('✓'),
        'Visible'
      ),
      ContextMenu.Sub(
        ContextMenu.SubTrigger('More'),
        ContextMenu.SubContent(
          ContextMenu.Item('Nested action')
        )
      )
    )
  ))
  const contents = Array.from(host.querySelectorAll('[role="menu"]'))
  const menu = {
    host,
    trigger: host.querySelector('[aria-haspopup="menu"]'),
    content: contents[0],
    item: contents[0].querySelector('[role="menuitem"]'),
    checkbox: contents[0].querySelector('[role="menuitemcheckbox"]'),
    subContent: contents[1],
    subItem: contents[1].querySelector('[role="menuitem"]')
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
