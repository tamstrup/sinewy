import s from 'sin'
import t from 'sin/test'
import Switch from '../src/switch.js'

t.timeout = 2000

const ExtendedSwitch = Switch`
  margin-inline-start 7
`

t`switch`(
  t`renders native checkbox semantics, theme defaults, and style extension`(() => withSwitch({
    Switch: ExtendedSwitch
  }, input => {
    const style = getComputedStyle(input)
    t.is('INPUT', input.tagName)
    t.is('checkbox', input.type)
    t.is('switch', input.getAttribute('role'))
    t.is(false, input.checked)
    t.is('unchecked', input.dataset.state)
    t.is('2', input.dataset.size)
    t.is('accent', input.dataset.color)
    t.is('36px', style.width)
    t.is('22px', style.height)
    t.is('7px', style.marginInlineStart)
    return [null, input.getAttribute('defaultChecked')]
  })),

  t`toggles uncontrolled state and reports native change events`(() => {
    const changes = []
    return withSwitch({ attrs: {
      defaultChecked: true,
      oncheckedchange: (checked, event) => changes.push([checked, event.type])
    } }, input => {
      t.is(true, input.checked)
      t.is('checked', input.dataset.state)
      input.click()
      t.is(false, input.checked)
      t.is('unchecked', input.dataset.state)
      input.click()
      t.is(true, input.checked)
      return ['false,change,true,change', changes.flat().join(',')]
    })
  }),

  t`keeps controlled state with the owner while reporting intent`(() => {
    let checked = false
    const changes = []
    return withSwitch({
      view: () => Switch({
        checked,
        oncheckedchange: next => changes.push(next)
      })
    }, async input => {
      input.click()
      t.is(false, input.checked)
      t.is('true', changes.join(','))
      checked = true
      await s.redraw.force()
      return [true, input.checked]
    })
  }),

  t`reads and writes a live binding`(() => {
    const checked = s.live(false)
    return withSwitch({ attrs: { bind: checked } }, async input => {
      input.click()
      t.is(true, checked())
      t.is(true, input.checked)
      checked(false)
      await redraw()
      t.is(false, input.checked)
      checked(true)
      await redraw()
      return ['checked', input.dataset.state]
    })
  }),

  t`forwards native attributes, event forms, data, and style`(() => {
    const calls = []
    return withSwitch({ attrs: {
      id: 'notifications-switch',
      name: 'notifications',
      value: 'enabled',
      required: true,
      title: 'Notifications',
      'aria-label': 'Enable notifications',
      data: { test: 'native' },
      style: { verticalAlign: 'top' },
      onchange: [
        event => calls.push(event.type),
        { handleEvent: event => calls.push('object:' + event.type) }
      ]
    } }, input => {
      t.is(false, input.checkValidity())
      input.click()
      t.is(true, input.checkValidity())
      t.is('notifications', input.name)
      t.is('enabled', input.value)
      t.is('Enable notifications', input.getAttribute('aria-label'))
      t.is('native', input.dataset.test)
      t.is('top', input.style.verticalAlign)
      return ['change,object:change', calls.join(',')]
    })
  }),

  t`lets a prevented native click suppress the checkbox transition`(() => {
    let changes = 0
    return withSwitch({ attrs: {
      onclick: event => event.preventDefault(),
      oncheckedchange: () => changes++
    } }, input => {
      input.click()
      t.is(0, changes)
      t.is(false, input.checked)
      return ['unchecked', input.dataset.state]
    })
  }),

  t`participates in form data and follows native form reset`(() => withForm(async({ form, input }) => {
    t.is('enabled', new FormData(form).get('notifications'))
    input.click()
    t.is(null, new FormData(form).get('notifications'))
    t.is('unchecked', input.dataset.state)

    form.reset()
    await redraw()
    t.is(true, input.checked)
    t.is('checked', input.dataset.state)
    return ['enabled', new FormData(form).get('notifications')]
  })),

  t`uses native disabled behavior`(() => {
    let changes = 0
    return withSwitch({ attrs: {
      disabled: true,
      oncheckedchange: () => changes++
    } }, input => {
      input.click()
      input.focus()
      t.is(true, input.disabled)
      t.is(false, input.checked)
      t.is(0, changes)
      t.is(false, document.activeElement === input)
      return ['0.48', getComputedStyle(input).opacity]
    })
  }),

  t`styles sizes, checked state, dark mode, high contrast, thumb, and focus`(() => withSwitches([
    { size: '1', checked: false, color: 'cyan' },
    { size: '2', checked: true, color: 'cyan' },
    { size: '3', checked: true, color: 'amber', highContrast: true }
  ], inputs => {
    inputs.forEach(input => input.parentElement.style.colorScheme = 'dark')
    const styles = inputs.map(getComputedStyle)
    t.is('30px', styles[0].width)
    t.is('rgb(58, 58, 58)', styles[0].backgroundColor)
    t.is('rgb(0, 162, 199)', styles[1].backgroundColor)
    t.is('44px', styles[2].width)
    t.is('rgb(255, 231, 179)', styles[2].backgroundColor)
    t.is('18px', getComputedStyle(inputs[1], '::before').width)

    const rules = cssRules()
    t.is(true, rules.some(rule => rule.selectorText?.includes(':active:not(:disabled)::before')))
    return [true, rules.some(rule => rule.selectorText?.includes(':focus-visible') &&
      rule.style.outlineOffset === '2px')]
  }))
)

function withSwitch(options, run) {
  const host = document.createElement('div')
  document.body.append(host)
  const Component = options.Switch || Switch
  const mounted = s.mount(host, options.view || (() => Component(options.attrs || {})))
  const input = host.querySelector('input')

  return Promise.resolve()
    .then(() => run(input))
    .finally(() => {
      mounted.unmount()
      host.remove()
    })
}

function withForm(run) {
  const form = document.createElement('form')
  document.body.append(form)
  const mounted = s.mount(form, () => Switch({
    defaultChecked: true,
    name: 'notifications',
    value: 'enabled'
  }))

  return Promise.resolve()
    .then(() => run({ form, input: form.querySelector('input') }))
    .finally(() => {
      mounted.unmount()
      form.remove()
    })
}

function withSwitches(options, run) {
  const host = document.createElement('div')
  document.body.append(host)
  const mounted = s.mount(host, () => options.map((attrs, index) =>
    s`div`(Switch({ ...attrs, data: { test: index } }))
  ))
  const inputs = [...host.querySelectorAll('input')]

  return Promise.resolve()
    .then(() => run(inputs))
    .finally(() => {
      mounted.unmount()
      host.remove()
    })
}

function redraw() {
  return new Promise(resolve => requestAnimationFrame(resolve))
}

function cssRules() {
  return [...document.styleSheets].flatMap(sheet => nestedRules(sheet.cssRules))
}

function nestedRules(list) {
  return [...list].flatMap(rule => rule.selectorText
    ? [rule]
    : rule.cssRules ? nestedRules(rule.cssRules) : []
  )
}
