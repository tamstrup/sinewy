import s from 'sin'
import t from 'sin/test'
import ssr from 'sin/ssr'
import Dialog from '../src/dialog.js'

t`dialog ssr`(
  t`renders deterministic native relationships and theme metadata`(async() => {
    const html = await toHtml(() => Dialog({ id: 'settings', defaultOpen: true },
      Dialog.Trigger({ variant: 'outline' }, 'Edit settings'),
      Dialog.Content({ size: '3', color: 'cyan', highContrast: true },
        Dialog.Title('Settings'),
        Dialog.Description('Change your preferences.'),
        Dialog.Close('Done')
      )
    ))

    t.is(true, html.includes('<dialog'))
    t.is(true, html.includes('id="settings-content"'))
    t.is(true, html.includes('aria-controls="settings-content"'))
    t.is(true, html.includes('aria-labelledby="settings-title"'))
    t.is(true, html.includes('aria-describedby="settings-description"'))
    t.is(true, html.includes('data-state="open"'))
    t.is(true, html.includes('data-size="3"'))
    t.is(true, html.includes('data-color="cyan"'))
    return [false, /\s(?:defaultOpen|highContrast|color|size)=/.test(html)]
  }),

  t`generates stable independent ids and safe button types`(async() => {
    const first = await toHtml(dialog)
    const second = await toHtml(dialog)
    t.is(true, first.includes('sinewy-dialog-1-content'))
    t.is(true, second.includes('sinewy-dialog-1-content'))
    return [2, (first.match(/type="button"/g) || []).length]
  })
)

function dialog() {
  return Dialog(
    Dialog.Trigger('Open'),
    Dialog.Content(
      Dialog.Title('Title'),
      Dialog.Description('Description'),
      Dialog.Close('Close')
    )
  )
}

async function toHtml(view) {
  return (await ssr(s.mount(view), {})).html
}
