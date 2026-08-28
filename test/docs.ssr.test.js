import t from 'sin/test'
import ssr from 'sin/ssr'
import mount from '../docs/index.js'

t`documentation ssr`(
  t`exposes component routes for static generation`(async() => {
    const result = await render('/')
    t.is(true, result.links.has('/components/button'))
    t.is(true, result.links.has('/components/dropdown'))
    t.is(true, result.links.has('/components/context-menu'))
    t.is(true, result.links.has('/components/toggle'))
    t.is(true, result.links.has('/components/dialog'))
    t.is(true, result.links.has('/components/alert-dialog'))
    t.is(true, result.links.has('/components/switch'))
    t.is(true, result.links.has('/components/select'))
    t.is(true, result.links.has('/components/checkbox'))
    return [true, result.links.has('/components/radio')]
  }),

  t`renders the toggle document and live example`(async() => {
    const result = await render('/components/toggle')
    t.is('Toggle — Sinewy', result.title)
    t.is(true, result.html.includes('data-source="docs/components/toggle.md"'))
    return [true, result.html.includes('aria-pressed="false"')]
  }),

  t`renders the dialog document and live example`(async() => {
    const result = await render('/components/dialog')
    t.is('Dialog — Sinewy', result.title)
    t.is(true, result.html.includes('data-source="docs/components/dialog.md"'))
    return [true, result.html.includes('<dialog')]
  }),

  t`renders the alert dialog document and live example`(async() => {
    const result = await render('/components/alert-dialog')
    t.is('Alert Dialog — Sinewy', result.title)
    t.is(true, result.html.includes('data-source="docs/components/alert-dialog.md"'))
    return [true, result.html.includes('role="alertdialog"')]
  }),

  t`renders the switch document and live example`(async() => {
    const result = await render('/components/switch')
    t.is('Switch — Sinewy', result.title)
    t.is(true, result.html.includes('data-source="docs/components/switch.md"'))
    return [true, result.html.includes('role="switch"')]
  }),

  t`renders the select document and grouped live example`(async() => {
    const result = await render('/components/select')
    t.is('Select — Sinewy', result.title)
    t.is(true, result.html.includes('data-source="docs/components/select.md"'))
    return [true, result.html.includes('<optgroup')]
  }),

  t`renders the checkbox document and live example`(async() => {
    const result = await render('/components/checkbox')
    t.is('Checkbox — Sinewy', result.title)
    t.is(true, result.html.includes('data-source="docs/components/checkbox.md"'))
    return [true, result.html.includes('type="checkbox"')]
  }),

  t`renders the radio document and live example`(async() => {
    const result = await render('/components/radio')
    t.is('Radio — Sinewy', result.title)
    t.is(true, result.html.includes('data-source="docs/components/radio.md"'))
    return [true, result.html.includes('type="radio"')]
  }),

  t`renders the button document and live example`(async() => {
    const result = await render('/components/button')
    t.is('Button — Sinewy', result.title)
    t.is(true, result.html.includes('data-source="docs/components/button.md"'))
    return [true, result.html.includes('>Save</button>')]
  }),

  t`renders dropdown markdown and its generated toc`(async() => {
    const result = await render('/components/dropdown')
    t.is('Dropdown — Sinewy', result.title)
    t.is(true, result.html.includes('<h2 id="api-reference">API reference</h2>'))
    t.is(true, result.html.includes('<table>'))
    return [true, result.html.includes('href="#keyboard-and-focus-behavior"')]
  }),

  t`renders the context menu document and live example`(async() => {
    const result = await render('/components/context-menu')
    t.is('Context Menu — Sinewy', result.title)
    t.is(true, result.html.includes('data-source="docs/components/context-menu.md"'))
    return [true, result.html.includes('Open a contextual menu here')]
  }),

  t`returns a generated not-found page for unknown slugs`(async() => {
    const result = await render('/components/missing')
    t.is('Not found — Sinewy', result.title)
    return [404, result.status]
  })
)

function render(location) {
  return ssr(mount, {}, { location })
}
