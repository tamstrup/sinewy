import s from 'sin'
import t from 'sin/test'
import ssr from 'sin/ssr'
import Radio from '../src/radio.js'

t`radio ssr`(
  t`renders a native fieldset group with one selected value`(async() => {
    const html = await toHtml(() => Radio.Group({
      name: 'plan',
      defaultValue: 'pro',
      required: true,
      size: '3',
      color: 'cyan'
    },
    s`legend`('Plan'),
    Radio({ value: 'free' }),
    Radio({ value: 'pro' })
    ))
    t.is(true, html.includes('<fieldset'))
    t.is(2, (html.match(/type="radio"/g) || []).length)
    t.is(2, (html.match(/name="plan"/g) || []).length)
    t.is(2, (html.match(/required/g) || []).length)
    t.is(true, /value="pro"[^>]*checked/.test(html))
    return [1, (html.match(/\schecked(?:\s|>)/g) || []).length]
  }),

  t`generates deterministic native names when JavaScript omits one`(async() => {
    const html = await toHtml(() => [
      Radio.Group({}, Radio({ value: 'a' })),
      Radio.Group({}, Radio({ value: 'b' }))
    ])
    t.is(true, html.includes('name="sinewy-radio-1"'))
    return [true, html.includes('name="sinewy-radio-2"')]
  })
)

async function toHtml(view) {
  return (await ssr(s.mount(view), {})).html
}
