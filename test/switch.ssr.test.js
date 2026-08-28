import s from 'sin'
import t from 'sin/test'
import ssr from 'sin/ssr'
import Switch from '../src/switch.js'

t`switch ssr`(
  t`renders native switch semantics, checked state, and theme metadata`(async() => {
    const html = await toHtml(() => Switch({
      defaultChecked: true,
      size: '3',
      color: 'cyan',
      highContrast: true,
      name: 'notifications',
      value: 'enabled',
      required: true,
      'aria-label': 'Enable notifications'
    }))

    t.is(true, html.includes('<input'))
    t.is(true, html.includes('type="checkbox"'))
    t.is(true, html.includes('role="switch"'))
    t.is(true, html.includes('checked'))
    t.is(true, html.includes('name="notifications"'))
    t.is(true, html.includes('data-state="checked"'))
    t.is(true, html.includes('data-size="3"'))
    t.is(true, html.includes('data-color="cyan"'))
    t.is(true, html.includes('data-high-contrast'))
    return [false, /\s(?:defaultChecked|highContrast|color|size)=/.test(html)]
  }),

  t`forces the native switch element and controlled state`(async() => {
    const html = await toHtml(() => Switch({
      checked: false,
      type: 'text',
      role: 'checkbox',
      disabled: true
    }))
    t.is(true, html.includes('type="checkbox"'))
    t.is(true, html.includes('role="switch"'))
    t.is(true, html.includes('disabled'))
    return [false, html.includes('checked="true"')]
  })
)

async function toHtml(view) {
  return (await ssr(s.mount(view), {})).html
}
