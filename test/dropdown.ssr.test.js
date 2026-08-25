import s from 'sin'
import t from 'sin/test'
import ssr from 'sin/ssr'
import { Dropdown } from '../src/index.js'
import Themed from '../src/theme.js'

t`dropdown ssr`(
  t`renders deterministic relationships`(async() => {
    const html = await toHtml(() => Dropdown(
      Dropdown.Trigger('Actions'),
      Dropdown.Content(Dropdown.Item('Alpha'))
    ))

    t.is(true, html.includes('id="sinewy-dropdown-1-trigger"'))
    t.is(true, html.includes('aria-controls="sinewy-dropdown-1-content"'))
    t.is(true, html.includes('aria-labelledby="sinewy-dropdown-1-trigger"'))
    return [true, html.includes('position-anchor:--sinewy-dropdown-1-anchor')]
  }),

  t`restarts generated ids for independent renders`(async() => {
    const render = () => toHtml(() => Dropdown(
      Dropdown.Trigger('Actions'),
      Dropdown.Content(Dropdown.Item('Alpha'))
    ))
    const [first, second] = await Promise.all([render(), render()])
    const id = 'id="sinewy-dropdown-1-trigger"'
    return [true, first.includes(id) && second.includes(id)]
  }),

  t`keeps sibling ids unique`(async() => {
    const html = await toHtml(() => [
      Dropdown(
        Dropdown.Trigger('First'),
        Dropdown.Content(Dropdown.Item('Alpha'))
      ),
      Dropdown(
        Dropdown.Trigger('Second'),
        Dropdown.Content(Dropdown.Item('Beta'))
      )
    ])

    t.is(true, html.includes('id="sinewy-dropdown-1-trigger"'))
    return [true, html.includes('id="sinewy-dropdown-2-trigger"')]
  }),

  t`serializes initially open state for hydration`(async() => {
    const html = await toHtml(() => Dropdown({ defaultOpen: true },
      Dropdown.Trigger('Actions'),
      Dropdown.Content(Dropdown.Item('Alpha'))
    ))

    t.is(true, html.includes('aria-expanded="true"'))
    return [2, occurrences(html, 'data-state="open"')]
  }),

  t`serializes theme metadata without leaking options`(async() => {
    const html = await toHtml(() => Themed(
      Themed.Trigger({ size: '3', variant: 'outline', color: 'accent' },
        'Actions',
        Themed.TriggerIcon()
      ),
      Themed.Content({ size: '1' },
        Themed.Item({ color: 'red', shortcut: '⌘ D' }, 'Delete')
      )
    ))

    t.is(true, html.includes('data-size="3"'))
    t.is(true, html.includes('data-variant="outline"'))
    t.is(true, html.includes('data-color="red"'))
    t.is(true, html.includes('<kbd'))
    return [false, /\s(?:size|variant|color|shortcut)=/.test(html)]
  })
)

async function toHtml(view) {
  return (await ssr(s.mount(view), {})).html
}

function occurrences(value, search) {
  return value.split(search).length - 1
}
