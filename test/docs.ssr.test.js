import t from 'sin/test'
import ssr from 'sin/ssr'
import mount from '../docs/index.js'

t`documentation ssr`(
  t`exposes component routes for static generation`(async() => {
    const result = await render('/')
    t.is(true, result.links.has('/components/dropdown'))
    return [true, result.links.has('/components/context-menu')]
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
