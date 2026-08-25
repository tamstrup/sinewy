import s from 'sin'
import t from 'sin/test'
import Dropdown from '../src/theme.js'

t.timeout = 2000

const ExtendedContent = Dropdown.Content`
  max-height none
`

const ExtendedTrigger = Dropdown.Trigger`
  margin-inline-start 7
`

t`dropdown theme`(
  t`keeps surface theme through call-site extension`(() => withTheme({
    content: ExtendedContent
  }, ({ content }) => {
    const style = getComputedStyle(content)
    t.is('1px', style.borderTopWidth)
    t.is('solid', style.borderTopStyle)
    t.is('13px', style.borderTopLeftRadius)
    t.is('auto', style.overflowY)
    t.is('none', style.maxHeight)
    return [true, style.boxShadow !== 'none']
  })),

  t`exposes visual trigger options without leaking attributes`(() => withTheme({
    trigger: {
      size: '3',
      variant: 'outline',
      color: 'accent',
      highContrast: true
    },
    Trigger: ExtendedTrigger
  }, ({ trigger }) => {
    t.is('3', trigger.dataset.size)
    t.is('outline', trigger.dataset.variant)
    t.is('accent', trigger.dataset.color)
    t.is(true, trigger.hasAttribute('data-high-contrast'))
    t.is(null, trigger.getAttribute('size'))
    t.is(null, trigger.getAttribute('variant'))
    t.is(null, trigger.getAttribute('color'))
    return ['7px', getComputedStyle(trigger).marginInlineStart]
  })),

  t`renders shortcut and semantic item color`(() => withTheme({
    item: {
      color: 'red',
      highContrast: true,
      shortcut: '⌘ D'
    }
  }, ({ item }) => {
    const itemStyle = getComputedStyle(item)
    const shortcutStyle = getComputedStyle(item.querySelector('kbd'))
    t.is('red', item.dataset.color)
    t.is(true, item.hasAttribute('data-high-contrast'))
    t.is('⌘ D', item.querySelector('kbd').textContent)
    t.is('36px', itemStyle.minHeight)
    t.is('14px', itemStyle.fontSize)
    t.is('20px', itemStyle.lineHeight)
    t.is(itemStyle.fontSize, shortcutStyle.fontSize)
    return [null, item.getAttribute('shortcut')]
  })),

  t`applies palette colors and content variants`(() => withTheme({
    trigger: {
      variant: 'soft',
      color: 'cyan'
    },
    contentAttrs: {
      variant: 'soft',
      color: 'orange'
    }
  }, ({ trigger, content, item }) => {
    item.toggleAttribute('data-highlighted', true)
    t.is('soft', content.dataset.variant)
    t.is('orange', content.dataset.color)
    t.is('soft', item.dataset.variant)
    t.is(undefined, item.dataset.color)
    t.is('rgb(222, 247, 249)', getComputedStyle(trigger).backgroundColor)
    t.is('rgb(255, 223, 181)', getComputedStyle(item).backgroundColor)
    return ['rgb(88, 45, 29)', getComputedStyle(item).color]
  })),

  t`lets item colors override the menu palette`(() => withTheme({
    contentAttrs: {
      variant: 'soft',
      color: 'orange'
    },
    item: {
      color: 'crimson'
    }
  }, ({ item }) => {
    item.toggleAttribute('data-highlighted', true)
    t.is('crimson', item.dataset.color)
    t.is('rgb(254, 220, 231)', getComputedStyle(item).backgroundColor)
    return ['rgb(98, 22, 57)', getComputedStyle(item).color]
  })),

  t`follows the inherited dark color scheme`(() => withTheme({
    colorScheme: 'dark',
    contentAttrs: {
      variant: 'soft',
      color: 'cyan'
    }
  }, ({ item }) => {
    item.toggleAttribute('data-highlighted', true)
    t.is('rgb(0, 56, 72)', getComputedStyle(item).backgroundColor)
    return ['rgb(182, 236, 247)', getComputedStyle(item).color]
  })),

  t`uses strong palette endpoints for high contrast`(() => withTheme({
    contentAttrs: {
      variant: 'solid',
      color: 'amber',
      highContrast: true
    }
  }, ({ item }) => {
    item.toggleAttribute('data-highlighted', true)
    t.is(true, item.hasAttribute('data-high-contrast'))
    t.is('rgb(79, 52, 34)', getComputedStyle(item).backgroundColor)
    return ['rgb(254, 253, 251)', getComputedStyle(item).color]
  })),

  t`provides an accessible decorative trigger icon`(() => withTheme({
    icon: true
  }, ({ trigger }) => {
    const icon = trigger.querySelector('svg')
    t.is('0 0 14 14', icon.getAttribute('viewBox'))
    t.is('false', icon.getAttribute('focusable'))
    return ['true', icon.getAttribute('aria-hidden')]
  })),

  t`reserves an indicator gutter across a checkable menu`(() => withMenu([
    Dropdown.Item({ data: { test: 'plain' } }, 'Plain'),
    Dropdown.Group(
      Dropdown.Checkbox({ data: { test: 'check' }, checked: true },
        Dropdown.Indicator('✓'),
        'Check'
      )
    )
  ], host => {
    const plain = host.querySelector('[data-test="plain"]')
    const check = host.querySelector('[data-test="check"]')
    t.is('35px', getComputedStyle(plain).paddingInlineStart)
    return ['35px', getComputedStyle(check).paddingInlineStart]
  })),

  t`keeps nested menu gutters independent`(() => withMenu([
    Dropdown.Item({ data: { test: 'parent' } }, 'Parent'),
    Dropdown.Sub(
      Dropdown.SubTrigger({ data: { test: 'subtrigger' } }, 'More'),
      Dropdown.SubContent(
        Dropdown.Item({ data: { test: 'nested' } }, 'Nested'),
        Dropdown.RadioGroup({ value: 'one' },
          Dropdown.Radio({ data: { test: 'radio' }, value: 'one' },
            Dropdown.Indicator('•'),
            'One'
          )
        )
      )
    )
  ], host => {
    t.is('9px', getComputedStyle(host.querySelector('[data-test="parent"]')).paddingInlineStart)
    t.is('9px', getComputedStyle(host.querySelector('[data-test="subtrigger"]')).paddingInlineStart)
    t.is('35px', getComputedStyle(host.querySelector('[data-test="nested"]')).paddingInlineStart)
    return ['35px', getComputedStyle(host.querySelector('[data-test="radio"]')).paddingInlineStart]
  })),

  t`inherits menu size through every themed part`(() => withMenu([
    Dropdown.Label({ data: { test: 'label' } }, 'Density'),
    Dropdown.Item({ data: { test: 'large' } }, 'Large'),
    Dropdown.Checkbox({ data: { test: 'check' }, checked: true },
      Dropdown.Indicator({ data: { test: 'indicator' } }, '✓'),
      'Check'
    ),
    Dropdown.Item({ data: { test: 'compact' }, size: '1' }, 'Compact override'),
    Dropdown.Sub(
      Dropdown.SubTrigger({ data: { test: 'subtrigger' } }, 'More'),
      Dropdown.SubContent({ data: { test: 'subcontent' } },
        Dropdown.Item({ data: { test: 'nested' } }, 'Nested')
      )
    )
  ], host => {
    const large = host.querySelector('[data-test="large"]')
    t.is('3', large.dataset.size)
    t.is('42px', getComputedStyle(large).minHeight)
    t.is('12px', getComputedStyle(host.querySelector('[data-test="label"]')).fontSize)
    t.is('18px', getComputedStyle(host.querySelector('[data-test="indicator"]')).width)
    t.is('41px', getComputedStyle(host.querySelector('[data-test="check"]')).paddingInlineStart)
    t.is('30px', getComputedStyle(host.querySelector('[data-test="compact"]')).minHeight)
    t.is('3', host.querySelector('[data-test="subcontent"]').dataset.size)
    return ['42px', getComputedStyle(host.querySelector('[data-test="nested"]')).minHeight]
  }, { size: '3' })),

  t`allows nested menus to override inherited theme axes`(() => withMenu([
    Dropdown.Item({ data: { test: 'parent' } }, 'Parent'),
    Dropdown.Sub(
      Dropdown.SubTrigger('More'),
      Dropdown.SubContent({ size: '3', variant: 'solid', color: 'cyan' },
        Dropdown.Item({ data: { test: 'nested' } }, 'Nested')
      )
    )
  ], host => {
    const parent = host.querySelector('[data-test="parent"]')
    const nested = host.querySelector('[data-test="nested"]')
    parent.toggleAttribute('data-highlighted', true)
    nested.toggleAttribute('data-highlighted', true)
    t.is('1', parent.dataset.size)
    t.is('soft', parent.dataset.variant)
    t.is('3', nested.dataset.size)
    t.is('solid', nested.dataset.variant)
    t.is('rgb(255, 238, 156)', getComputedStyle(parent).backgroundColor)
    return ['rgb(0, 162, 199)', getComputedStyle(nested).backgroundColor]
  }, { size: '1', variant: 'soft', color: 'amber' })),

  t`retains headless rapid-click behavior`(() => withTheme({}, async menu => {
    quickClick(menu.trigger)
    t.is(true, menu.content.matches(':popover-open'))
    await settle()
    return ['true', menu.trigger.getAttribute('aria-expanded')]
  }))
)

function withMenu(children, run, contentAttrs = {}) {
  const host = document.createElement('div')
  document.body.append(host)
  const mounted = s.mount(host, () => Dropdown(
    Dropdown.Trigger('Actions'),
    Dropdown.Content(contentAttrs, ...children)
  ))

  return Promise.resolve()
    .then(() => run(host))
    .finally(() => {
      for (const content of host.querySelectorAll('[role="menu"]'))
        content.matches(':popover-open') && content.hidePopover()
      mounted.unmount()
      host.remove()
    })
}

function withTheme(options, run) {
  const host = document.createElement('div')
  options.colorScheme && (host.style.colorScheme = options.colorScheme)
  document.body.append(host)
  const Content = options.content || Dropdown.Content
  const Trigger = options.Trigger || Dropdown.Trigger
  const mounted = s.mount(host, () => Dropdown(
    Trigger(options.trigger || {},
      'Actions',
      options.icon && Dropdown.TriggerIcon()
    ),
    Content(options.contentAttrs || {},
      Dropdown.Item(options.item || {}, 'Delete')
    )
  ))
  const menu = {
    host,
    trigger: host.querySelector('[aria-haspopup="menu"]'),
    content: host.querySelector('[role="menu"]'),
    item: host.querySelector('[role="menuitem"]')
  }

  return Promise.resolve()
    .then(() => run(menu))
    .finally(() => {
      menu.content.matches(':popover-open') && menu.content.hidePopover()
      mounted.unmount()
      host.remove()
    })
}

function quickClick(element) {
  element.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }))
  element.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
  element.dispatchEvent(new PointerEvent('pointerup', { bubbles: true }))
  element.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }))
  element.dispatchEvent(new MouseEvent('click', { bubbles: true }))
}

function settle() {
  return new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
}
