import s from 'sin'
import t from 'sin/test'
import ssr from 'sin/ssr'
import Select from '../src/select.js'

t`select ssr`(
  t`renders native groups and the selected option`(async() => {
    const html = await toHtml(() => Select({
      defaultValue: 'pear',
      name: 'produce',
      size: '3',
      color: 'cyan',
      highContrast: true
    },
    Select.Group({ label: 'Fruit' },
      Select.Option({ value: 'apple' }, 'Apple'),
      Select.Option({ value: 'pear' }, 'Pear')
    )))

    t.is(true, html.includes('<select'))
    t.is(true, html.includes('<optgroup label="Fruit"'))
    t.is(true, /<option[^>]*value="pear"[^>]*selected/.test(html))
    t.is(true, html.includes('name="produce"'))
    t.is(true, html.includes('data-size="3"'))
    t.is(true, html.includes('data-color="cyan"'))
    t.is(true, html.includes('data-high-contrast'))
    return [false, /\s(?:defaultValue|highContrast|color)=/.test(html)]
  }),

  t`keeps a controlled scalar value and rejects multiple at runtime`(async() => {
    const html = await toHtml(() => Select({ value: 'b', multiple: true },
      Select.Option({ value: 'a' }, 'A'),
      Select.Option({ value: 'b' }, 'B')
    ))
    t.is(true, /<option[^>]*value="b"[^>]*selected/.test(html))
    return [false, html.includes('multiple')]
  })
)

async function toHtml(view) {
  return (await ssr(s.mount(view), {})).html
}
