import s from 'sin'
import t from 'sin/test'
import ssr from 'sin/ssr'
import AlertDialog from '../src/alert-dialog.js'

t`alert dialog ssr`(
  t`renders the alertdialog specialization with deterministic relationships`(async() => {
    const html = await toHtml(() => AlertDialog({ id: 'delete-account' },
      AlertDialog.Trigger('Delete account'),
      AlertDialog.Content(
        AlertDialog.Title('Delete account?'),
        AlertDialog.Description('This cannot be undone.'),
        AlertDialog.Close('Cancel'),
        AlertDialog.Close({ color: 'red', variant: 'solid' }, 'Delete')
      )
    ))

    t.is(true, html.includes('<dialog'))
    t.is(true, html.includes('role="alertdialog"'))
    t.is(true, html.includes('id="delete-account-content"'))
    t.is(true, html.includes('aria-labelledby="delete-account-title"'))
    t.is(true, html.includes('aria-describedby="delete-account-description"'))
    return [3, (html.match(/type="button"/g) || []).length]
  })
)

async function toHtml(view) {
  return (await ssr(s.mount(view), {})).html
}
