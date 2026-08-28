import s from 'sin'
import t from 'sin/test'
import Button from '../src/button.js'

t.timeout = 2000

const ExtendedButton = Button`
  margin-inline-start 7
`

t`button`(
  t`renders theme defaults and supports Sin style extension`(() => withButton({
    Button: ExtendedButton
  }, button => {
    const style = getComputedStyle(button)
    t.is('BUTTON', button.tagName)
    t.is('button', button.type)
    t.is('2', button.dataset.size)
    t.is('solid', button.dataset.variant)
    t.is('accent', button.dataset.color)
    t.is(false, button.hasAttribute('data-high-contrast'))
    t.is('36px', style.minHeight)
    t.is('7px', style.marginInlineStart)
    t.is('rgb(62, 99, 221)', style.backgroundColor)
    return [null, button.getAttribute('variant')]
  })),

  t`styles every size and variant`(() => withButtons([
    { size: '1', variant: 'solid', color: 'indigo' },
    { size: '2', variant: 'soft', color: 'cyan' },
    { size: '3', variant: 'outline', color: 'green' },
    { size: '2', variant: 'ghost', color: 'crimson' }
  ], buttons => {
    const styles = buttons.map(getComputedStyle)
    t.is('30px', styles[0].minHeight)
    t.is('rgb(62, 99, 221)', styles[0].backgroundColor)
    t.is('rgb(222, 247, 249)', styles[1].backgroundColor)
    t.is('42px', styles[2].minHeight)
    t.is('rgb(142, 206, 170)', styles[2].borderTopColor)
    t.is('rgba(0, 0, 0, 0)', styles[3].backgroundColor)
    return ['rgb(203, 29, 99)', styles[3].color]
  })),

  t`forwards native attributes, events, data, style, and children`(() => {
    let clicked
    return withButton({
      attrs: {
        id: 'save-button',
        name: 'intent',
        value: 'save',
        title: 'Save changes',
        'aria-label': 'Save document',
        data: { test: 'native' },
        style: { letterSpacing: '2px' },
        onclick: (event, element) => clicked = [event.type, element.id]
      },
      children: [s`span`('Save')]
    }, button => {
      button.click()
      t.is('intent', button.name)
      t.is('save', button.value)
      t.is('Save changes', button.title)
      t.is('Save document', button.getAttribute('aria-label'))
      t.is('native', button.dataset.test)
      t.is('2px', button.style.letterSpacing)
      t.is('Save', button.querySelector('span').textContent)
      return ['click,save-button', clicked.join(',')]
    })
  }),

  t`uses native disabled behavior`(() => {
    let clicks = 0
    return withButton({
      attrs: { disabled: true, onclick: () => clicks++ }
    }, button => {
      button.click()
      button.focus()
      const style = getComputedStyle(button)
      t.is(true, button.disabled)
      t.is(0, clicks)
      t.is(false, document.activeElement === button)
      t.is('0.48', style.opacity)
      return ['default', style.cursor]
    })
  }),

  t`provides hover, active, and focus-visible rules`(() => withButton({}, button => {
    button.focus()
    const rules = cssRules()
    const hover = rules.find(rule => rule.selectorText?.includes(':hover:not(:disabled)') &&
      button.matches(rule.selectorText.replaceAll(':hover', ''))
    )
    const active = rules.find(rule => rule.selectorText?.includes(':active:not(:disabled)') &&
      rule.style.transform && button.matches(rule.selectorText.replaceAll(':active', ''))
    )
    const focus = rules.find(rule => rule.selectorText?.includes(':focus-visible') &&
      button.matches(rule.selectorText.replaceAll(':focus-visible', ''))
    )
    t.is(true, Boolean(hover))
    t.is('translateY(1px)', active?.style.transform)
    t.is('2px', focus?.style.outlineOffset)
    return [true, focus?.style.outline.includes('3px')]
  })),

  t`uses dark palette values and high contrast endpoints`(() => withButtons([
    { variant: 'soft', color: 'cyan' },
    { variant: 'solid', color: 'amber', highContrast: true }
  ], buttons => {
    buttons[0].parentElement.style.colorScheme = 'dark'
    buttons[1].parentElement.style.colorScheme = 'dark'
    const soft = getComputedStyle(buttons[0])
    const contrast = getComputedStyle(buttons[1])
    t.is('rgb(8, 44, 54)', soft.backgroundColor)
    t.is(true, buttons[1].hasAttribute('data-high-contrast'))
    t.is('rgb(255, 231, 179)', contrast.backgroundColor)
    return ['rgb(22, 18, 12)', contrast.color]
  }))
)

function withButton(options, run) {
  const host = document.createElement('div')
  document.body.append(host)
  const Component = options.Button || Button
  const mounted = s.mount(host, () => Component(options.attrs || {}, ...(options.children || ['Save'])))
  const button = host.querySelector('button')

  return Promise.resolve()
    .then(() => run(button))
    .finally(() => {
      mounted.unmount()
      host.remove()
    })
}

function withButtons(options, run) {
  const host = document.createElement('div')
  document.body.append(host)
  const mounted = s.mount(host, () => options.map((attrs, index) =>
    s`div`(Button({ ...attrs, data: { test: index } }, 'Button'))
  ))
  const buttons = [...host.querySelectorAll('button')]

  return Promise.resolve()
    .then(() => run(buttons))
    .finally(() => {
      mounted.unmount()
      host.remove()
    })
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
