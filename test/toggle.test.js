import s from 'sin'
import t from 'sin/test'
import Toggle from '../src/toggle.js'

t.timeout = 2000

const ExtendedToggle = Toggle`
  margin-inline-start 7
`

t`toggle`(
  t`renders native defaults, state metadata, and style extensions`(() => withToggle({
    Toggle: ExtendedToggle
  }, toggle => {
    const style = getComputedStyle(toggle)
    t.is('BUTTON', toggle.tagName)
    t.is('button', toggle.type)
    t.is('false', toggle.getAttribute('aria-pressed'))
    t.is('off', toggle.dataset.state)
    t.is('2', toggle.dataset.size)
    t.is('soft', toggle.dataset.variant)
    t.is('accent', toggle.dataset.color)
    t.is('7px', style.marginInlineStart)
    return [null, toggle.getAttribute('pressed')]
  })),

  t`toggles uncontrolled state and reports changes`(() => {
    const changes = []
    return withToggle({ attrs: {
      defaultPressed: true,
      onpressedchange: (pressed, event) => changes.push([pressed, event.type])
    } }, toggle => {
      t.is('true', toggle.getAttribute('aria-pressed'))
      toggle.click()
      t.is('false', toggle.getAttribute('aria-pressed'))
      t.is('off', toggle.dataset.state)
      toggle.click()
      t.is('true', toggle.getAttribute('aria-pressed'))
      return ['false,click,true,click', changes.flat().join(',')]
    })
  }),

  t`keeps controlled state with the owner while reporting intent`(() => {
    const pressed = s.live(false)
    const changes = []
    return withToggle({
      view: () => Toggle({
        pressed: pressed(),
        onpressedchange: value => changes.push(value)
      }, 'Bold')
    }, async toggle => {
      toggle.click()
      t.is('false', toggle.getAttribute('aria-pressed'))
      t.is('true', changes.join(','))
      pressed(true)
      await redraw()
      return ['true', toggle.getAttribute('aria-pressed')]
    })
  }),

  t`reads and writes a live binding`(() => {
    const pressed = s.live(false)
    return withToggle({ attrs: { bind: pressed } }, async toggle => {
      toggle.click()
      t.is(true, pressed())
      t.is('true', toggle.getAttribute('aria-pressed'))
      pressed(false)
      await redraw()
      return ['false', toggle.getAttribute('aria-pressed')]
    })
  }),

  t`runs native click handlers first and honors cancellation`(() => {
    let changes = 0
    const calls = []
    return withToggle({ attrs: {
      onclick: [
        event => calls.push(event.type),
        { handleEvent: event => {
          calls.push('object:' + event.type)
          event.preventDefault()
        } }
      ],
      onpressedchange: () => changes++
    } }, toggle => {
      toggle.click()
      t.is('click,object:click', calls.join(','))
      t.is(0, changes)
      return ['false', toggle.getAttribute('aria-pressed')]
    })
  }),

  t`forwards native attributes, data, style, events, and children`(() => {
    let clicked
    return withToggle({
      attrs: {
        id: 'bold-toggle',
        name: 'format',
        value: 'bold',
        title: 'Bold text',
        'aria-label': 'Toggle bold',
        data: { test: 'native' },
        style: { letterSpacing: '2px' },
        onclick: (event, element) => clicked = [event.type, element.id]
      },
      children: [s`span`('B')]
    }, toggle => {
      toggle.click()
      t.is('format', toggle.name)
      t.is('bold', toggle.value)
      t.is('native', toggle.dataset.test)
      t.is('2px', toggle.style.letterSpacing)
      t.is('B', toggle.querySelector('span').textContent)
      return ['click,bold-toggle', clicked.join(',')]
    })
  }),

  t`uses native disabled behavior`(() => {
    let changes = 0
    return withToggle({ attrs: {
      disabled: true,
      onpressedchange: () => changes++
    } }, toggle => {
      toggle.click()
      toggle.focus()
      t.is(true, toggle.disabled)
      t.is(0, changes)
      t.is('false', toggle.getAttribute('aria-pressed'))
      t.is(false, document.activeElement === toggle)
      return ['0.48', getComputedStyle(toggle).opacity]
    })
  }),

  t`styles pressed, unpressed, focus-visible, dark, and high-contrast states`(() => withToggles([
    { pressed: false, variant: 'solid', color: 'cyan' },
    { pressed: true, variant: 'solid', color: 'cyan' },
    { pressed: false, variant: 'outline', color: 'green' },
    { pressed: true, variant: 'ghost', color: 'amber', highContrast: true }
  ], toggles => {
    toggles.forEach(toggle => toggle.parentElement.style.colorScheme = 'dark')
    const styles = toggles.map(getComputedStyle)
    t.is('rgb(34, 34, 34)', styles[0].backgroundColor)
    t.is('rgb(0, 162, 199)', styles[1].backgroundColor)
    t.is('rgb(72, 72, 72)', styles[2].borderTopColor)
    t.is('rgb(48, 32, 8)', styles[3].backgroundColor)

    const focus = cssRules().find(rule => rule.selectorText?.includes(':focus-visible') &&
      toggles[1].matches(rule.selectorText.replaceAll(':focus-visible', ''))
    )
    t.is('2px', focus?.style.outlineOffset)
    return [true, focus?.style.outline.includes('3px')]
  }))
)

function withToggle(options, run) {
  const host = document.createElement('div')
  document.body.append(host)
  const Component = options.Toggle || Toggle
  const mounted = s.mount(host, options.view || (() =>
    Component(options.attrs || {}, ...(options.children || ['Bold']))
  ))
  const toggle = host.querySelector('button')

  return Promise.resolve()
    .then(() => run(toggle))
    .finally(() => {
      mounted.unmount()
      host.remove()
    })
}

function withToggles(options, run) {
  const host = document.createElement('div')
  document.body.append(host)
  const mounted = s.mount(host, () => options.map((attrs, index) =>
    s`div`(Toggle({ ...attrs, data: { test: index } }, 'Toggle'))
  ))
  const toggles = [...host.querySelectorAll('button')]

  return Promise.resolve()
    .then(() => run(toggles))
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
