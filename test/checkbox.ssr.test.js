import s from 'sin'
import t from 'sin/test'
import ssr from 'sin/ssr'
import Checkbox from '../src/checkbox.js'

t`checkbox ssr`(
  t`renders native checkbox state and theme metadata`(async() => {
    const html = await toHtml(() => Checkbox({
      defaultChecked: true,
      name: 'terms',
      value: 'accepted',
      size: '3',
      color: 'cyan',
      highContrast: true
    }))
    t.is(true, html.includes('type="checkbox"'))
    t.is(true, html.includes('checked'))
    t.is(true, html.includes('data-state="checked"'))
    t.is(true, html.includes('data-size="3"'))
    return [false, /\s(?:defaultChecked|highContrast|color|size)=/.test(html)]
  }),

  t`renders a fieldset group with selected native items`(async() => {
    const html = await toHtml(() => Checkbox.Group({
      name: 'channels',
      defaultValue: ['email']
    },
    s`legend`('Channels'),
    Checkbox({ value: 'email' }),
    Checkbox({ value: 'sms' })
    ))
    t.is(true, html.includes('<fieldset'))
    t.is(true, html.includes('<legend>Channels</legend>'))
    t.is(2, (html.match(/name="channels"/g) || []).length)
    return [1, (html.match(/\schecked(?:\s|>)/g) || []).length]
  })
)

async function toHtml(view) {
  return (await ssr(s.mount(view), {})).html
}
