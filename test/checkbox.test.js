import s from 'sin'
import t from 'sin/test'
import Checkbox from '../src/checkbox.js'

t.timeout = 2000

const ExtendedCheckbox = Checkbox`
  margin-inline-start 7
`

const ExtendedCheckboxGroup = Checkbox.Group`
  margin-inline-start 6
`

t`checkbox`(
  t`renders native checkbox semantics, theme defaults, and style extension`(() => withCheckbox({
    Checkbox: ExtendedCheckbox
  }, input => {
    t.is('INPUT', input.tagName)
    t.is('checkbox', input.type)
    t.is(false, input.checked)
    t.is('unchecked', input.dataset.state)
    t.is('2', input.dataset.size)
    t.is('18px', getComputedStyle(input).width)
    return ['7px', getComputedStyle(input).marginInlineStart]
  })),

  t`toggles standalone uncontrolled, controlled, and live state`(() => {
    const value = s.live(false)
    const changes = []
    return withCheckbox({ attrs: {
      bind: value,
      onchange: { handleEvent: event => changes.push(['native', event.type]) },
      oncheckedchange: (checked, event) => changes.push([checked, event.type])
    } }, async input => {
      input.click()
      t.is(true, value())
      t.is('checked', input.dataset.state)
      value(false)
      await redraw()
      t.is(false, input.checked)
      return ['native,change,true,change', changes.flat().join(',')]
    })
  }),

  t`binds a checkbox group to an array value`(() => {
    const selected = s.live(['email'])
    const changes = []
    return withCheckboxGroup({ attrs: {
      name: 'channels',
      bind: selected,
      onvaluechange: (value, event) => changes.push([value.join('+'), event.type])
    } }, async({ inputs }) => {
      t.is(true, inputs[0].checked)
      t.is(false, inputs[1].checked)
      inputs[1].click()
      t.is('email,sms', selected().join(','))
      selected(['sms'])
      await redraw()
      t.is(false, inputs[0].checked)
      t.is(true, inputs[1].checked)
      return ['email+sms,change', changes.flat().join(',')]
    })
  }),

  t`keeps a controlled checkbox group with its owner`(() => {
    let value = ['email']
    const changes = []
    return withCheckboxGroup({
      view: () => group({ value, onvaluechange: next => changes.push(next.join(',')) })
    }, async({ inputs }) => {
      inputs[1].click()
      t.is(false, inputs[1].checked)
      t.is('email,sms', changes.join(','))
      value = ['email', 'sms']
      await s.redraw.force()
      return [true, inputs[1].checked]
    })
  }),

  t`supports normal Sin style extension on the fieldset group`(() => withCheckboxGroup({
    view: () => ExtendedCheckboxGroup({ name: 'channels' }, Checkbox({ value: 'email' }))
  }, ({ fieldset }) => ['6px', getComputedStyle(fieldset).marginInlineStart])),

  t`uses native names, form data, disabled fieldsets, and reset`(() => withCheckboxForm(async({ form, fieldset, inputs }) => {
    t.is('email', new FormData(form).get('channels'))
    inputs[1].click()
    t.is('email,sms', new FormData(form).getAll('channels').join(','))
    form.reset()
    await redraw()
    t.is('email', new FormData(form).get('channels'))
    fieldset.disabled = true
    inputs[1].click()
    return [false, inputs[1].checked]
  })),

  t`forwards attributes and styles checked, disabled, focus, dark, and high contrast states`(() => withCheckbox({ attrs: {
    checked: true,
    disabled: true,
    size: '3',
    color: 'cyan',
    highContrast: true,
    name: 'terms',
    value: 'accepted',
    data: { test: 'native' },
    style: { verticalAlign: 'top' },
    'aria-label': 'Accept terms'
  } }, input => {
    input.parentElement.style.colorScheme = 'dark'
    t.is('terms', input.name)
    t.is('accepted', input.value)
    t.is('native', input.dataset.test)
    t.is('22px', getComputedStyle(input).width)
    t.is('rgb(182, 236, 247)', getComputedStyle(input).backgroundColor)
    t.is('0.48', getComputedStyle(input).opacity)
    const rules = cssRules()
    return [true, rules.some(rule => rule.selectorText?.includes(':focus-visible'))]
  }))
)

function withCheckbox(options = {}, run) {
  const host = document.createElement('div')
  document.body.append(host)
  const Component = options.Checkbox || Checkbox
  const mounted = s.mount(host, options.view || (() => Component(options.attrs || {})))
  const input = host.querySelector('input')
  return Promise.resolve().then(() => run(input)).finally(() => {
    mounted.unmount()
    host.remove()
  })
}

function group(attrs = {}) {
  return Checkbox.Group({ name: 'channels', ...attrs },
    s`label`(Checkbox({ name: 'ignored-item-name', value: 'email' }), 'Email'),
    s`label`(Checkbox({ value: 'sms' }), 'SMS')
  )
}

function withCheckboxGroup(options = {}, run) {
  const host = document.createElement('div')
  document.body.append(host)
  const mounted = s.mount(host, options.view || (() => group(options.attrs)))
  return Promise.resolve().then(() => run({
    fieldset: host.querySelector('fieldset'),
    inputs: [...host.querySelectorAll('input')]
  })).finally(() => {
    mounted.unmount()
    host.remove()
  })
}

function withCheckboxForm(run) {
  const form = document.createElement('form')
  document.body.append(form)
  const mounted = s.mount(form, () => group({ defaultValue: ['email'] }))
  return Promise.resolve().then(() => run({
    form,
    fieldset: form.querySelector('fieldset'),
    inputs: [...form.querySelectorAll('input')]
  })).finally(() => {
    mounted.unmount()
    form.remove()
  })
}

function redraw() {
  return new Promise(resolve => requestAnimationFrame(resolve))
}

function cssRules() {
  return [...document.styleSheets].flatMap(sheet => nestedRules(sheet.cssRules))
}

function nestedRules(list) {
  return [...list].flatMap(rule => rule.selectorText ? [rule] : rule.cssRules ? nestedRules(rule.cssRules) : [])
}
