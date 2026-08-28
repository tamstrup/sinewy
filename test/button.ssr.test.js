import s from 'sin'
import t from 'sin/test'
import ssr from 'sin/ssr'
import Button from '../src/button.js'

t`button ssr`(
  t`renders a native button with theme metadata and safe type`(async() => {
    const html = await toHtml(() => Button({
      size: '3',
      variant: 'outline',
      color: 'red',
      highContrast: true,
      name: 'intent',
      value: 'save'
    }, 'Save'))

    t.is(true, html.includes('<button'))
    t.is(true, html.includes('type="button"'))
    t.is(true, html.includes('name="intent"'))
    t.is(true, html.includes('data-size="3"'))
    t.is(true, html.includes('data-variant="outline"'))
    t.is(true, html.includes('data-color="red"'))
    t.is(true, html.includes('data-high-contrast'))
    return [false, /\s(?:size|variant|color|highContrast)=/.test(html)]
  }),

  t`preserves an explicit native type`(async() => {
    const html = await toHtml(() => Button({ type: 'submit' }, 'Submit'))
    return [true, html.includes('type="submit"')]
  })
)

async function toHtml(view) {
  return (await ssr(s.mount(view), {})).html
}
