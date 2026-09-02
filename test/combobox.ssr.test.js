import s from 'sin'
import t from 'sin/test'
import ssr from 'sin/ssr'
import { Combobox } from '../src/index.js'

t`combobox ssr`(
  t`renders deterministic accessible relationships`(async() => {
    const html = await toHtml(() => Combobox({ defaultValue: 'assets' },
      Combobox.Control(Combobox.Input({ 'aria-label': 'Account' })),
      Combobox.Content(
        Combobox.Item({ value: 'assets', textValue: 'Assets' }, 'Assets')
      )
    ))

    t.is(true, html.includes('id="sinewy-combobox-1-input"'))
    t.is(true, html.includes('aria-controls="sinewy-combobox-1-content"'))
    t.is(true, html.includes('role="listbox"'))
    return [true, html.includes('aria-selected="true"')]
  }),

  t`renders selected values as pills in multiple mode`(async() => {
    const html = await toHtml(() => Combobox({
      multiple: true,
      defaultValue: ['assets', 'income']
    },
      Combobox.Control(Combobox.Pills(), Combobox.Input()),
      Combobox.Content(
        Combobox.Item({ value: 'assets' }, 'Assets'),
        Combobox.Item({ value: 'income' }, 'Income')
      )
    ))

    t.is(true, html.includes('aria-multiselectable="true"'))
    return [2, occurrences(html, 'data-sinewy-combobox-pill=""')]
  })
)

async function toHtml(view) {
  return (await ssr(s.mount(view), {})).html
}

function occurrences(value, search) {
  return value.split(search).length - 1
}
