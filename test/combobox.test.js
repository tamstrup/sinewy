import s from 'sin'
import t from 'sin/test'
import Combobox from '../src/combobox.js'

t.timeout = 2000

t`combobox`(
  t`connects the input and listbox with accessible state`(() => withCombobox({}, ({ input, content, items }) => {
    t.is('combobox', input.getAttribute('role'))
    t.is('listbox', content.getAttribute('role'))
    t.is(content.id, input.getAttribute('aria-controls'))
    t.is('false', input.getAttribute('aria-expanded'))
    t.is(true, content.hidden)
    t.is('option', items[0].getAttribute('role'))
    return ['false', items[0].getAttribute('aria-selected')]
  })),

  t`filters options as the user types`(() => withCombobox({}, async({ input, content, items }) => {
    input.focus()
    type(input, 'be')
    await settle()

    t.is('true', input.getAttribute('aria-expanded'))
    t.is(false, content.hidden)
    t.is(true, items[0].hidden)
    t.is(false, items[1].hidden)
    return [true, items[2].hidden]
  })),

  t`associates the native popup with its input and retains it across redraws`(() => withCombobox({}, async({ input, content }) => {
    const show = content.showPopover.bind(content)
    let source
    content.showPopover = options => {
      source = options?.source
      return show(options)
    }
    input.focus()
    // Background headless tabs can change activeElement without delivering focus.
    input.dispatchEvent(new FocusEvent('focus'))
    await settle()
    t.is(input, source)
    await s.redraw()
    await new Promise(resolve => setTimeout(resolve, 600))
    t.is(input, document.activeElement)
    t.is('true', input.getAttribute('aria-expanded'))
    t.is(true, content.matches(':popover-open'))
    key(input, 'Escape')
    await settle()
    return [false, content.matches(':popover-open')]
  })),

  t`keeps input pointer interaction inside the control but dismisses outside it`(() => withCombobox({}, async({ host, input, content }) => {
    input.focus()
    input.dispatchEvent(new FocusEvent('focus'))
    await settle()
    input.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }))
    await settle()
    t.is(true, content.matches(':popover-open'))
    host.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }))
    await settle()
    return [false, content.matches(':popover-open')]
  })),

  t`selects one value and displays its text in the input`(() => withCombobox({}, async({ input, content, items }) => {
    input.focus()
    await settle()
    items[1].click()
    await settle()

    t.is('Beta account', input.value)
    t.is(true, content.hidden)
    return ['true', items[1].getAttribute('aria-selected')]
  })),

  t`resolves an initial stored value to its item text`(() => withCombobox({
    root: { defaultValue: 'assets' }
  }, async({ input }) => {
    await settle()
    return ['Assets account', input.value]
  })),

  t`moves through matching enabled options and selects with Enter`(() => withCombobox({}, async({ input, items }) => {
    input.focus()
    type(input, 'b')
    await settle()
    t.is(items[1].id, input.getAttribute('aria-activedescendant'))

    key(input, 'ArrowDown')
    await settle()
    t.is(items[3].id, input.getAttribute('aria-activedescendant'))
    key(input, 'Enter')
    await settle()
    return ['Bravo account', input.value]
  })),

  t`renders multiple selections as removable pills`(() => withCombobox({
    root: { multiple: true, defaultValue: ['assets', 'income'] }
  }, async({ input, pills, items }) => {
    t.is(2, pills().length)
    t.is('true', items[0].getAttribute('aria-selected'))
    t.is('true', items[2].getAttribute('aria-selected'))

    items[1].click()
    await settle()
    t.is(3, pills().length)
    return ['', input.value]
  })),

  t`resolves initial pill labels from item text`(() => withCombobox({
    root: { multiple: true, defaultValue: ['assets'] }
  }, async({ pills }) => {
    await settle()
    return ['Assets account', pills()[0].textContent]
  })),

  t`localizes pill removal labels`(() => withCombobox({
    root: { multiple: true, defaultValue: ['assets'] },
    pills: { removelabel: (value, text) => `Fjern ${text} (${value})` }
  }, async({ pills }) => {
    await settle()
    return ['Fjern Assets account (assets)', pills()[0].getAttribute('aria-label')]
  })),

  t`selects the last pill when Backspace starts at the input boundary`(() => withCombobox({
    root: { multiple: true, defaultValue: ['assets', 'income'] }
  }, async({ input, pills }) => {
    input.focus()
    input.setSelectionRange(0, 0)
    key(input, 'Backspace')
    await settle()
    return [pills().at(-1), document.activeElement]
  })),

  t`moves between pills and removes them with Delete or Backspace`(() => withCombobox({
    root: { multiple: true, defaultValue: ['assets', 'beta', 'income'] }
  }, async({ input, pills }) => {
    pills()[2].focus()
    key(document.activeElement, 'ArrowLeft')
    t.is(pills()[1], document.activeElement)

    key(document.activeElement, 'Delete')
    await settle()
    t.is(2, pills().length)
    t.is(pills()[1], document.activeElement)

    key(document.activeElement, 'Backspace')
    await settle()
    t.is(1, pills().length)
    key(document.activeElement, 'ArrowRight')
    return [input, document.activeElement]
  })),

  t`updates a live binding from mouse selection`(() => {
    const selected = s.live(null)
    return withCombobox({ root: { bind: selected } }, async({ items }) => {
      items[0].click()
      await settle()
      return ['assets', selected()]
    })
  }),

  t`reports controlled changes without mutating the controlled value`(() => {
    let requested
    return withCombobox({
      root: {
        value: 'assets',
        onvaluechange: value => requested = value
      }
    }, async({ items }) => {
      items[1].click()
      await settle()
      t.is('beta', requested)
      return ['true', items[0].getAttribute('aria-selected')]
    })
  })
)

async function withCombobox(options, run) {
  const host = document.createElement('div')
  document.body.append(host)
  let active = true
  const mounted = s.mount(host, () => active ? Combobox(options.root || {},
    Combobox.Control(
      Combobox.Pills(options.pills || {}),
      Combobox.Input({ 'aria-label': 'Account' })
    ),
    Combobox.Content(
      Combobox.Item({ value: 'assets', textValue: 'Assets account' }, 'Assets account'),
      Combobox.Item({ value: 'beta', textValue: 'Beta account' }, 'Beta account'),
      Combobox.Item({ value: 'income', textValue: 'Income account', disabled: true }, 'Income account'),
      Combobox.Item({ value: 'bravo', textValue: 'Bravo account' }, 'Bravo account')
    )
  ) : null)
  const fixture = {
    host,
    input: host.querySelector('[role="combobox"]'),
    content: host.querySelector('[role="listbox"]'),
    items: Array.from(host.querySelectorAll('[role="option"]')),
    pills: () => Array.from(host.querySelectorAll('[data-sinewy-combobox-pill]'))
  }

  try {
    await settle()
    return await run(fixture)
  } finally {
    active = false
    await s.redraw()
    mounted.unmount()
    host.remove()
  }
}

function type(input, value) {
  input.value = value
  input.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertText', data: value }))
}

function key(element, keyName) {
  element.dispatchEvent(new KeyboardEvent('keydown', {
    key: keyName,
    bubbles: true,
    cancelable: true
  }))
}

async function settle() {
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
}
