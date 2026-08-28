import s from 'sin'
import t from 'sin/test'
import ssr from 'sin/ssr'
import Toggle from '../src/toggle.js'

t`toggle ssr`(
  t`renders native pressed semantics, theme metadata, and safe type`(async() => {
    const html = await toHtml(() => Toggle({
      defaultPressed: true,
      size: '3',
      variant: 'outline',
      color: 'red',
      highContrast: true,
      name: 'format',
      value: 'bold'
    }, 'Bold'))

    t.is(true, html.includes('<button'))
    t.is(true, html.includes('type="button"'))
    t.is(true, html.includes('aria-pressed="true"'))
    t.is(true, html.includes('data-state="on"'))
    t.is(true, html.includes('data-size="3"'))
    t.is(true, html.includes('data-variant="outline"'))
    t.is(true, html.includes('data-color="red"'))
    t.is(true, html.includes('data-high-contrast'))
    return [false, /\s(?:pressed|defaultPressed|variant|color|highContrast)=/.test(html)]
  }),

  t`preserves explicit native attributes and controlled state`(async() => {
    const html = await toHtml(() => Toggle({
      pressed: false,
      type: 'submit',
      disabled: true
    }, 'Bold'))
    t.is(true, html.includes('type="submit"'))
    t.is(true, html.includes('disabled'))
    return [true, html.includes('aria-pressed="false"')]
  })
)

async function toHtml(view) {
  return (await ssr(s.mount(view), {})).html
}
