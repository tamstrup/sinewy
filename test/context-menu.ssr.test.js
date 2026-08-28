import s from 'sin'
import t from 'sin/test'
import ssr from 'sin/ssr'
import { ContextMenu } from '../src/index.js'

t`context menu ssr`(
  t`renders deterministic relationships without a point anchor`(async() => {
    const html = await toHtml(() => ContextMenu(
      ContextMenu.Trigger('Target'),
      ContextMenu.Content(ContextMenu.Item('Rename'))
    ))

    t.is(true, html.includes('id="sinewy-context-menu-1-trigger"'))
    t.is(true, html.includes('aria-controls="sinewy-context-menu-1-content"'))
    t.is(true, html.includes('aria-labelledby="sinewy-context-menu-1-trigger"'))
    t.is(true, html.includes('-webkit-touch-callout:none'))
    return [false, html.includes('data-sinewy-context-anchor')]
  }),

  t`keeps sibling ids unique`(async() => {
    const html = await toHtml(() => [
      ContextMenu(
        ContextMenu.Trigger('First'),
        ContextMenu.Content(ContextMenu.Item('Alpha'))
      ),
      ContextMenu(
        ContextMenu.Trigger('Second'),
        ContextMenu.Content(ContextMenu.Item('Beta'))
      )
    ])

    t.is(true, html.includes('sinewy-context-menu-1-trigger'))
    return [true, html.includes('sinewy-context-menu-2-trigger')]
  })
)

async function toHtml(view) {
  return (await ssr(s.mount(view), {})).html
}
