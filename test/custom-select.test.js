import s from 'sin'
import t from 'sin/test'
import { CustomSelect, NativeSelect, Select } from '../src/index.js'

t.timeout = 3000

t`custom select`(
  t`preserves the existing native Select export`(() => [Select, NativeSelect]),

  t`renders a labelled button without a search input and resolves option text`(() => fixture({ root: { defaultValue: 'pear' } }, ({ trigger, content, host, proxy }) => {
    t.is('BUTTON', trigger.tagName)
    t.is('Pear', trigger.textContent)
    t.is(null, host.querySelector('input'))
    t.is(content.id, trigger.getAttribute('aria-controls'))
    t.is('false', trigger.getAttribute('aria-expanded'))
    t.is('true', proxy.getAttribute('aria-hidden'))
    return [true, content.hidden]
  })),

  t`opens on click with all options and the current selection highlighted`(() => fixture({ root: { defaultValue: 'pear' } }, async({ trigger, content, options }) => {
    trigger.click()
    await settle()
    t.is(true, content.matches(':popover-open'))
    t.is(true, options.every(x => !x.hidden))
    return [options[1].id, trigger.getAttribute('aria-activedescendant')]
  })),

  t`selects with pointer and retains trigger focus`(() => fixture({}, async({ trigger, options, content, proxy }) => {
    trigger.click()
    await settle()
    options[1].click()
    await settle()
    t.is('Pear', trigger.textContent)
    t.is('pear', proxy.value)
    t.is(false, content.matches(':popover-open'))
    return [trigger, document.activeElement]
  })),

  t`supports arrows, Home, End, disabled groups, and Enter`(() => fixture({}, async({ trigger, options }) => {
    trigger.focus()
    key(trigger, 'ArrowDown')
    await settle()
    t.is(options[0].id, trigger.getAttribute('aria-activedescendant'))
    key(trigger, 'End')
    await settle()
    t.is(options[3].id, trigger.getAttribute('aria-activedescendant'))
    key(trigger, 'ArrowUp')
    await settle()
    t.is(options[1].id, trigger.getAttribute('aria-activedescendant'))
    key(trigger, 'Home')
    key(trigger, 'Enter')
    await settle()
    return ['Apple', trigger.textContent]
  })),

  t`typeahead jumps without filtering and Escape cancels navigation`(() => fixture({ root: { defaultValue: 'apple' } }, async({ trigger, options }) => {
    trigger.focus()
    key(trigger, 'p')
    key(trigger, 'e')
    await settle()
    t.is(options[1].id, trigger.getAttribute('aria-activedescendant'))
    t.is(true, options.every(x => !x.hidden))
    key(trigger, 'Escape')
    await settle()
    t.is('false', trigger.getAttribute('aria-expanded'))
    return ['Apple', trigger.textContent]
  })),

  t`Space opens and commits, while Tab commits without trapping focus`(() => fixture({}, async({ trigger }) => {
    trigger.focus()
    key(trigger, ' ')
    key(trigger, 'ArrowDown')
    key(trigger, ' ')
    await settle()
    t.is('Pear', trigger.textContent)
    key(trigger, ' ')
    key(trigger, 'Home')
    const event = key(trigger, 'Tab')
    await settle()
    t.is(false, event.defaultPrevented)
    return ['Apple', trigger.textContent]
  })),

  t`updates live values and reacts to external writes`(() => {
    const selected = s.live(null)
    return fixture({ root: { bind: selected } }, async({ trigger, options, form }) => {
      options[1].click()
      await settle()
      t.is('pear', selected())
      t.is('pear', new FormData(form).get('produce'))
      selected('apple')
      await settle()
      return ['Apple', trigger.textContent]
    })
  }),

  t`controlled requests do not change selected display or submission`(() => {
    let requested
    return fixture({ root: { value: 'apple', onvaluechange: value => requested = value } }, async({ trigger, options, form }) => {
      options[1].click()
      await settle()
      t.is('pear', requested)
      t.is('Apple', trigger.textContent)
      return ['apple', new FormData(form).get('produce')]
    })
  }),

  t`resets local state and form submission to defaultValue`(() => fixture({ root: { defaultValue: 'pear' } }, async({ trigger, options, form }) => {
    options[0].click()
    await settle()
    form.reset()
    await settle()
    t.is('pear', new FormData(form).get('produce'))
    return ['Pear', trigger.textContent]
  })),

  t`reset synchronizes live state and cancelled reset preserves it`(() => {
    const selected = s.live('apple')
    return fixture({ root: { defaultValue: 'pear', bind: selected } }, async({ form }) => {
      form.reset()
      await settle()
      t.is('pear', selected())
      selected('apple')
      form.addEventListener('reset', event => event.preventDefault(), { once: true })
      form.reset()
      await settle()
      return ['apple', selected()]
    })
  }),

  t`required validation focuses the trigger and clears on selection`(() => fixture({ root: { required: true } }, async({ trigger, form, options }) => {
    t.is(false, form.reportValidity())
    await settle()
    t.is(trigger, document.activeElement)
    t.is('true', trigger.getAttribute('aria-invalid'))
    options[0].click()
    await settle()
    t.is(null, trigger.getAttribute('aria-invalid'))
    return [true, form.checkValidity()]
  })),

  t`disabled controls neither open nor submit`(() => fixture({ root: { disabled: true, defaultValue: 'pear' } }, async({ trigger, options, form }) => {
    trigger.click()
    options[0].click()
    await settle()
    t.is('false', trigger.getAttribute('aria-expanded'))
    t.is('Pear', trigger.textContent)
    return [null, new FormData(form).get('produce')]
  })),

  t`disabled fieldsets disable both the trigger and form proxy`(() => fixture({ fieldset: true, root: { defaultValue: 'pear' } }, async({ trigger, options, form }) => {
    t.is(true, trigger.matches(':disabled'))
    options[0].click()
    await settle()
    t.is('Pear', trigger.textContent)
    return [null, new FormData(form).get('produce')]
  })),

  t`forwards cancellable trigger and option events`(() => fixture({
    root: { onclick: event => event.preventDefault() },
    option: { onselect: event => event.preventDefault() }
  }, async({ trigger, options }) => {
    trigger.click()
    await settle()
    t.is('false', trigger.getAttribute('aria-expanded'))
    options[0].click()
    trigger.focus()
    key(trigger, 'ArrowDown')
    key(trigger, 'Enter')
    await settle()
    return ['Choose produce', trigger.textContent]
  })),

  t`closes on outside pointer interaction`(() => fixture({}, async({ trigger, content, form }) => {
    trigger.click()
    await settle()
    form.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }))
    await settle()
    return [false, content.matches(':popover-open')]
  })),

  t`uses shared theme sizes and a top-layer popup beyond clipped ancestors`(() => fixture({ clip: true, root: { size: '3', color: 'cyan', highContrast: true } }, async({ trigger, content, options, host }) => {
    t.is('42px', getComputedStyle(trigger).minHeight)
    t.is('40px', getComputedStyle(options[0]).minHeight)
    trigger.click()
    await settle()
    t.is(true, content.matches(':popover-open'))
    t.is('fixed', getComputedStyle(content).position)
    const rect = content.getBoundingClientRect()
    t.is(true, rect.bottom > host.getBoundingClientRect().bottom)
    const visible = document.elementFromPoint(rect.left + 20, rect.top + 20)
    return [true, content.contains(visible)]
  })),

  t`tracks changed option labels, removal, and DOM order`(() => {
    let rows = [['a', 'Alpha'], ['b', 'Beta'], ['c', 'Charlie']]
    return fixture({ root: { defaultValue: 'a' }, items: () => rows.map(([value, text]) => CustomSelect.Option({ key: value, value }, text)) }, async({ trigger, proxy, host }) => {
      rows = [['c', 'Charlie'], ['a', 'Apricot']]
      await s.redraw()
      await settle()
      t.is('Apricot', trigger.textContent)
      t.is(false, Array.from(proxy.options).some(x => x.value === 'b'))
      trigger.click()
      key(trigger, 'Home')
      await settle()
      return [host.querySelector('[data-value="c"]').id, trigger.getAttribute('aria-activedescendant')]
    })
  }),

  t`reacts to changed disabled and callback attributes`(() => {
    const root = { disabled: false }
    let requested
    return fixture({ root }, async({ trigger, content, options, host }) => {
      trigger.click()
      await settle()
      root.disabled = true
      await s.redraw()
      await settle()
      t.is(true, trigger.disabled)
      t.is(false, content.matches(':popover-open'))
      root.disabled = false
      root.onvaluechange = value => requested = value
      await s.redraw()
      await settle()
      t.is(false, trigger.disabled)
      t.is(true, options[1].isConnected)
      t.is(options[1], host.querySelectorAll('[role="option"]')[1])
      options[1].click()
      await settle()
      return ['pear', requested]
    })
  }),

  t`scrolls the selected option into view when opening a long list`(() => fixture({
    root: { defaultValue: '49' },
    items: () => Array.from({ length: 50 }, (_, i) => CustomSelect.Option({ value: String(i) }, 'Option ' + i))
  }, async({ trigger, content, options }) => {
    trigger.click()
    await settle()
    const selected = options[49].getBoundingClientRect()
    const popup = content.getBoundingClientRect()
    t.is(true, content.scrollTop > 0)
    return [true, selected.top >= popup.top && selected.bottom <= popup.bottom]
  })),

  t`positions above a low trigger and follows scrolling`(() => fixture({}, async({ trigger, content, host }) => {
    host.style.cssText = 'position:fixed;bottom:8px;left:8px;width:250px'
    trigger.click()
    await settle()
    t.is(true, content.getBoundingClientRect().bottom <= trigger.getBoundingClientRect().top)
    host.style.bottom = '48px'
    window.dispatchEvent(new Event('scroll'))
    await settle()
    return [true, Math.abs(content.getBoundingClientRect().bottom + 6 - trigger.getBoundingClientRect().top) < 2]
  })),

  t`supports an external form association`(() => fixture({ root: { form: 'external-produce', defaultValue: 'pear' } }, async({ host, trigger, options }) => {
    const external = document.createElement('form')
    external.id = 'external-produce'
    host.append(external)
    try {
      t.is('pear', new FormData(external).get('produce'))
      options[0].click()
      await settle()
      external.reset()
      await settle()
      return ['Pear', trigger.textContent]
    } finally {
      external.remove()
    }
  }))
)

async function fixture(config, run) {
  const host = document.createElement('div')
  if (config.clip)
    host.style.cssText = 'height:48px;overflow:hidden;width:320px'
  document.body.append(host)
  const view = () => CustomSelect({ name: 'produce', placeholder: 'Choose produce', 'aria-label': 'Produce', ...config.root },
    config.items ? config.items() : [CustomSelect.Group({ label: 'Fruit' },
      CustomSelect.Option({ value: 'apple', ...config.option }, 'Apple'),
      CustomSelect.Option({ value: 'pear' }, 'Pear')
    ),
    CustomSelect.Group({ label: 'Unavailable', disabled: true },
      CustomSelect.Option({ value: 'banana' }, 'Banana')
    ),
    CustomSelect.Option({ value: 'carrot' }, 'Carrot')]
  )
  const mounted = s.mount(host, () => s`form`(config.fieldset ? s`fieldset`({ disabled: true }, view()) : view()))
  const data = {
    host,
    form: host.querySelector('form'),
    trigger: host.querySelector('[role="combobox"]'),
    content: host.querySelector('[role="listbox"]'),
    proxy: host.querySelector('select'),
    options: Array.from(host.querySelectorAll('[role="option"]'))
  }
  try {
    await settle()
    return await run(data)
  } finally {
    mounted.unmount()
    host.remove()
  }
}

function key(element, keyName) {
  const event = new KeyboardEvent('keydown', { key: keyName, bubbles: true, cancelable: true })
  element.dispatchEvent(event)
  return event
}

function settle() {
  return new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
}
