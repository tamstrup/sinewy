import s from 'sin'
import t from 'sin/test'
import { Combobox } from '../src/theme.js'

t.timeout = 2000

const ExtendedControl = Combobox.Control`
  margin-inline-start 7
`

t`combobox theme`(
  t`renders an inherited themed surface with normal style extension`(() => withCombobox({
    root: { size: '3', color: 'cyan', highContrast: true },
    Control: ExtendedControl
  }, ({ root, control, input, content, item }) => {
    t.is('3', root.dataset.size)
    t.is('cyan', root.dataset.color)
    t.is(true, root.hasAttribute('data-high-contrast'))
    t.is('42px', getComputedStyle(control).minHeight)
    t.is('7px', getComputedStyle(control).marginInlineStart)
    t.is('14px', getComputedStyle(input).fontSize)
    t.is('12px', getComputedStyle(content).borderRadius)
    return ['40px', getComputedStyle(item).minHeight]
  })),

  t`opens a positioned list and applies highlighted option colors`(() => withCombobox({
    root: { color: 'indigo' }
  }, async({ input, content, items }) => {
    input.focus()
    key(input, 'ArrowDown')
    await settle()

    const highlighted = items.find(item => item.hasAttribute('data-highlighted'))
    t.is(false, content.hidden)
    t.is(true, content.matches(':popover-open'))
    t.is('fixed', getComputedStyle(content).position)
    t.is('rgb(62, 99, 221)', getComputedStyle(highlighted).backgroundColor)
    return ['rgb(255, 255, 255)', getComputedStyle(highlighted).color]
  })),

  t`keeps popup height content-sized and width at least the control width`(() => withCombobox({
    root: { style: { width: '100px' } }
  }, async({ input, control, content }) => {
    input.focus()
    key(input, 'ArrowDown')
    await settle()
    t.is('auto', content.style.height)
    t.is('start', getComputedStyle(content).alignContent)
    return [true, content.getBoundingClientRect().width >= control.getBoundingClientRect().width]
  })),

  t`keeps filtered themed options visually hidden`(() => withCombobox({}, async({ input, items }) => {
    input.focus()
    input.value = 'income'
    input.dispatchEvent(new Event('input', { bubbles: true }))
    await settle()

    t.is('none', getComputedStyle(items[0]).display)
    return ['grid', getComputedStyle(items[1]).display]
  })),

  t`styles multiple selections as keyboard-removable pills`(() => withCombobox({
    root: { multiple: true, defaultValue: ['assets', 'income'] }
  }, async({ input, pills }) => {
    t.is(2, pills().length)
    t.is('rgb(237, 242, 254)', getComputedStyle(pills()[0]).backgroundColor)

    input.focus()
    input.setSelectionRange(0, 0)
    key(input, 'Backspace')
    await settle()
    t.is(pills().at(-1), document.activeElement)
    key(document.activeElement, 'Delete')
    await settle()
    return [1, pills().length]
  })),

  t`supports dark color palettes through the themed root`(() => withCombobox({
    colorScheme: 'dark',
    root: { color: 'cyan' }
  }, ({ control }) => [
    'rgb(25, 25, 25)',
    getComputedStyle(control).backgroundColor
  ]))
)

function withCombobox(options, run) {
  const host = document.createElement('div')
  options.colorScheme && (host.style.colorScheme = options.colorScheme)
  document.body.append(host)
  const Control = options.Control || Combobox.Control
  const mounted = s.mount(host, () => Combobox(options.root || {},
    Control(
      Combobox.Pills(),
      Combobox.Input({ 'aria-label': 'Account' })
    ),
    Combobox.Content(
      Combobox.Item({ value: 'assets', textValue: 'Assets account' }, 'Assets account'),
      Combobox.Item({ value: 'income', textValue: 'Income account' }, 'Income account')
    )
  ))
  const fixture = {
    root: host.firstElementChild,
    control: host.querySelector('[data-state]'),
    input: host.querySelector('[role="combobox"]'),
    content: host.querySelector('[role="listbox"]'),
    item: host.querySelector('[role="option"]'),
    items: Array.from(host.querySelectorAll('[role="option"]')),
    pills: () => Array.from(host.querySelectorAll('[data-sinewy-combobox-pill]'))
  }

  return Promise.resolve().then(() => run(fixture)).finally(() => {
    mounted.unmount()
    host.remove()
  })
}

function key(element, keyName) {
  element.dispatchEvent(new KeyboardEvent('keydown', {
    key: keyName,
    bubbles: true,
    cancelable: true
  }))
}

function settle() {
  return new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
}
