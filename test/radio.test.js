import s from 'sin'
import t from 'sin/test'
import Radio from '../src/radio.js'

t.timeout = 2000

const ExtendedRadio = Radio`
  margin-inline-start 7
`

const ExtendedRadioGroup = Radio.Group`
  margin-inline-start 6
`

t`radio`(
  t`renders native radio semantics, theme defaults, and style extension`(() => withRadio({
    Radio: ExtendedRadio
  }, input => {
    t.is('radio', input.type)
    t.is(false, input.checked)
    t.is('unchecked', input.dataset.state)
    t.is('18px', getComputedStyle(input).width)
    return ['7px', getComputedStyle(input).marginInlineStart]
  })),

  t`supports standalone checked and live state`(() => {
    const checked = s.live(false)
    const events = []
    return withRadio({ attrs: {
      bind: checked,
      onchange: [event => events.push(event.type)]
    } }, async input => {
      input.click()
      t.is(true, checked())
      t.is('change', events.join(','))
      checked(false)
      await redraw()
      return [false, input.checked]
    })
  }),

  t`supports normal Sin style extension on the fieldset group`(() => withRadioGroup({
    view: () => ExtendedRadioGroup({ name: 'plan' }, Radio({ value: 'free' }))
  }, ({ fieldset }) => ['6px', getComputedStyle(fieldset).marginInlineStart])),

  t`binds one native radio group value`(() => {
    const value = s.live('free')
    const changes = []
    return withRadioGroup({ attrs: {
      name: 'plan',
      bind: value,
      onvaluechange: (next, event) => changes.push([next, event.type])
    } }, async({ inputs }) => {
      t.is(true, inputs[0].checked)
      inputs[1].click()
      t.is(false, inputs[0].checked)
      t.is(true, inputs[1].checked)
      t.is('pro', value())
      value('free')
      await redraw()
      t.is(true, inputs[0].checked)
      return ['pro,change', changes.flat().join(',')]
    })
  }),

  t`keeps a controlled radio group with its owner`(() => {
    let value = 'free'
    const changes = []
    return withRadioGroup({
      view: () => group({ value, onvaluechange: next => changes.push(next) })
    }, async({ inputs }) => {
      inputs[1].click()
      t.is(true, inputs[0].checked)
      t.is(false, inputs[1].checked)
      t.is('pro', changes.join(','))
      value = 'pro'
      await s.redraw.force()
      return [true, inputs[1].checked]
    })
  }),

  t`uses fieldset, legend, shared name, required validity, form data, and reset`(() => withRadioForm(async({ form, fieldset, inputs }) => {
    t.is('FIELDSET', fieldset.tagName)
    t.is('Plan', fieldset.querySelector('legend').textContent)
    t.is('plan', inputs[0].name)
    t.is(true, inputs[0].required)
    t.is('free', new FormData(form).get('plan'))
    inputs[1].click()
    t.is('pro', new FormData(form).get('plan'))
    form.reset()
    await redraw()
    return ['free', new FormData(form).get('plan')]
  })),

  t`inherits group theme and uses native disabled and interaction styling`(() => withRadioGroup({ attrs: {
    name: 'plan',
    defaultValue: 'free',
    disabled: true,
    size: '3',
    color: 'cyan',
    highContrast: true
  } }, ({ fieldset, inputs }) => {
    fieldset.style.colorScheme = 'dark'
    inputs[1].click()
    t.is(true, inputs[0].checked)
    t.is(false, inputs[1].checked)
    t.is('3', inputs[0].dataset.size)
    t.is('22px', getComputedStyle(inputs[0]).width)
    t.is('rgb(182, 236, 247)', getComputedStyle(inputs[0]).backgroundColor)
    const rules = cssRules()
    return [true, rules.some(rule => rule.selectorText?.includes(':focus-visible'))]
  }))
)

function withRadio(options = {}, run) {
  const host = document.createElement('div')
  document.body.append(host)
  const Component = options.Radio || Radio
  const mounted = s.mount(host, () => Component(options.attrs || {}))
  const input = host.querySelector('input')
  return Promise.resolve().then(() => run(input)).finally(() => {
    mounted.unmount()
    host.remove()
  })
}

function group(attrs = {}) {
  return Radio.Group({ name: 'plan', ...attrs },
    s`legend`('Plan'),
    s`label`(Radio({ name: 'ignored-item-name', value: 'free' }), 'Free'),
    s`label`(Radio({ value: 'pro' }), 'Pro')
  )
}

function withRadioGroup(options = {}, run) {
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

function withRadioForm(run) {
  const form = document.createElement('form')
  document.body.append(form)
  const mounted = s.mount(form, () => group({ defaultValue: 'free', required: true }))
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
