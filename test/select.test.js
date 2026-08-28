import s from 'sin'
import t from 'sin/test'
import Select from '../src/select.js'

t.timeout = 2000

const ExtendedSelect = Select`
  margin-inline-start 7
`

t`select`(
  t`renders a themed native select with option groups and style extension`(() => withSelect({
    Select: ExtendedSelect,
    attrs: { defaultValue: 'pear' }
  }, select => {
    const group = select.querySelector('optgroup')
    t.is('SELECT', select.tagName)
    t.is('pear', select.value)
    t.is('Fruit', group.label)
    t.is(2, group.querySelectorAll('option').length)
    t.is('2', select.dataset.size)
    t.is('accent', select.dataset.color)
    t.is('36px', getComputedStyle(select).minHeight)
    return ['7px', getComputedStyle(select).marginInlineStart]
  })),

  t`updates uncontrolled state and reports native changes`(() => {
    const changes = []
    return withSelect({ attrs: {
      defaultValue: 'apple',
      onvaluechange: (value, event) => changes.push([value, event.type])
    } }, select => {
      change(select, 'pear')
      t.is('pear', select.value)
      change(select, 'carrot')
      return ['pear,change,carrot,change', changes.flat().join(',')]
    })
  }),

  t`keeps controlled state with the owner while reporting intent`(() => {
    let value = 'apple'
    const changes = []
    return withSelect({
      view: () => selectOptions(Select, {
        value,
        onvaluechange: next => changes.push(next)
      })
    }, async select => {
      change(select, 'pear')
      t.is('apple', select.value)
      t.is('pear', changes.join(','))
      value = 'pear'
      await s.redraw.force()
      return ['pear', select.value]
    })
  }),

  t`reads and writes a live binding`(() => {
    const value = s.live('apple')
    return withSelect({ attrs: { bind: value } }, async select => {
      change(select, 'carrot')
      t.is('carrot', value())
      value('pear')
      await redraw()
      return ['pear', select.value]
    })
  }),

  t`forwards native attributes, events, data, and style`(() => {
    const calls = []
    return withSelect({ attrs: {
      name: 'produce',
      required: true,
      title: 'Produce',
      'aria-label': 'Choose produce',
      data: { test: 'native' },
      style: { verticalAlign: 'top' },
      onchange: [
        event => calls.push(event.type),
        { handleEvent: event => calls.push('object:' + event.type) }
      ]
    }, emptyOptions: true }, select => {
      t.is(false, select.checkValidity())
      change(select, 'apple')
      t.is(true, select.checkValidity())
      t.is('produce', select.name)
      t.is('native', select.dataset.test)
      t.is('top', select.style.verticalAlign)
      return ['change,object:change', calls.join(',')]
    })
  }),

  t`participates in forms and restores its default value`(() => withForm(async({ form, select }) => {
    t.is('pear', new FormData(form).get('produce'))
    change(select, 'carrot')
    t.is('carrot', new FormData(form).get('produce'))
    form.reset()
    await redraw()
    t.is('pear', select.value)
    return ['pear', new FormData(form).get('produce')]
  })),

  t`uses native disabled behavior and shared interaction styling`(() => withSelect({ attrs: {
    disabled: true,
    size: '3',
    color: 'cyan',
    highContrast: true
  } }, select => {
    select.focus()
    t.is(true, select.disabled)
    t.is(false, document.activeElement === select)
    t.is('42px', getComputedStyle(select).minHeight)
    t.is('0.5', getComputedStyle(select).opacity)
    const rules = cssRules()
    return [true, rules.some(rule => rule.selectorText?.includes(':focus-visible') &&
      rule.style.outlineOffset === '2px')]
  })),

  t`progressively matches the shared menu surface and item styling`(() => withSelect({ attrs: {
    defaultValue: 'pear',
    color: 'cyan',
    highContrast: true
  } }, select => {
    t.is(true, CSS.supports('appearance', 'base-select'))
    t.is('base-select', getComputedStyle(select).appearance)

    const rules = cssRules()
    const picker = rules.find(rule => rule.selectorText?.includes('::picker(select)') &&
      rule.style.borderRadius === '13px')
    const option = rules.find(rule => / option$/.test(rule.selectorText || ''))
    const group = rules.find(rule => / optgroup$/.test(rule.selectorText || ''))
    const groupGaps = rules.filter(rule => rule.selectorText?.includes('optgroup > option:first-of-type'))
    const checkmark = rules.find(rule => rule.selectorText?.endsWith('option::checkmark'))
    const highlighted = rules.find(rule => rule.selectorText?.includes('option:hover:not(:disabled)'))
    const contrast = rules.find(rule => rule.selectorText?.includes('[data-high-contrast] option:checked'))

    t.is('6px', picker.style.padding)
    t.is(true, picker.style.boxShadow.includes('22px 60px'))
    t.is('36px', option.style.minHeight)
    t.is('35px', option.style.paddingInlineStart)
    t.is('750', group.style.fontWeight)
    t.is('3px,4px,5px', groupGaps.map(rule => rule.style.marginBlockStart).sort().join(','))
    t.is('absolute', checkmark.style.position)
    t.is('var(--sinewy-accent-9)', highlighted.style.background)
    return ['var(--sinewy-accent-12)', contrast.style.background]
  }))
)

function withSelect(options = {}, run) {
  const host = document.createElement('div')
  document.body.append(host)
  const Component = options.Select || Select
  const view = options.view || (() => options.emptyOptions
    ? Component(options.attrs || {}, Select.Option({ value: '' }, 'Choose'), Select.Option({ value: 'apple' }, 'Apple'))
    : selectOptions(Component, options.attrs || {}))
  const mounted = s.mount(host, view)
  const select = host.querySelector('select')

  return Promise.resolve().then(() => run(select)).finally(() => {
    mounted.unmount()
    host.remove()
  })
}

function selectOptions(Component, attrs) {
  return Component(attrs,
    Select.Group({ label: 'Fruit' },
      Select.Option({ value: 'apple' }, 'Apple'),
      Select.Option({ value: 'pear' }, 'Pear')
    ),
    Select.Group({ label: 'Vegetables' },
      Select.Option({ value: 'carrot' }, 'Carrot')
    )
  )
}

function change(select, value) {
  select.value = value
  select.dispatchEvent(new Event('change', { bubbles: true }))
}

function withForm(run) {
  const form = document.createElement('form')
  document.body.append(form)
  const mounted = s.mount(form, () => Select({ name: 'produce', defaultValue: 'pear' },
    Select.Option({ value: 'apple' }, 'Apple'),
    Select.Option({ value: 'pear' }, 'Pear'),
    Select.Option({ value: 'carrot' }, 'Carrot')
  ))
  return Promise.resolve().then(() => run({ form, select: form.querySelector('select') })).finally(() => {
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
