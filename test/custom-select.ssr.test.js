import s from 'sin'
import t from 'sin/test'
import ssr from 'sin/ssr'
import { CustomSelect } from '../src/index.js'

t`custom select ssr`(
  t`renders selected labels, accessible relationships, and the form value before hydration`(async() => {
    const result = await ssr(s.mount(() => CustomSelect({ id: 'produce', name: 'produce', defaultValue: 'pear', required: true, 'aria-label': 'Produce' },
      CustomSelect.Group({ label: 'Fruit' },
        CustomSelect.Option({ value: 'pear' }, 'Pear'),
        CustomSelect.Option({ value: 'apple', disabled: true }, 'Apple')
      )
    )), {})
    t.is(true, result.html.includes('aria-controls="produce-content"'))
    t.is(true, result.html.includes('role="combobox"'))
    t.is(true, result.html.includes('>Pear</button>'))
    t.is(true, result.html.includes('aria-required="true"'))
    t.is(true, result.html.includes('popover="auto"'))
    t.is(true, /<option[^>]*value="pear"[^>]*selected/.test(result.html))
    return [false, result.html.includes('<input')]
  }),

  t`renders placeholders and deterministic generated IDs`(async() => {
    const render = async() => (await ssr(s.mount(() => CustomSelect({ placeholder: 'Pick one' }, CustomSelect.Option({ value: 'a' }, 'A'))), {})).html
    const first = await render()
    t.is(true, first.includes('>Pick one</button>'))
    t.is(true, first.includes('id="sinewy-custom-select-1-input"'))
    return [first, await render()]
  })
)
