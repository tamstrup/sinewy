import s from 'sin'
import t from 'sin/test'
import AlertDialog from '../src/alert-dialog.js'

t.timeout = 2000

const ExtendedContent = AlertDialog.Content`
  max-width 520
`

t`alert dialog`(
  t`specializes native Dialog with the alertdialog role`(() => withAlertDialog({}, async({ trigger, content }) => {
    t.is('DIALOG', content.tagName)
    t.is('alertdialog', content.getAttribute('role'))
    t.is('dialog', trigger.getAttribute('aria-haspopup'))
    t.is(content.id, trigger.getAttribute('aria-controls'))
    t.is(content.querySelector('h2').id, content.getAttribute('aria-labelledby'))
    t.is(content.querySelector('p').id, content.getAttribute('aria-describedby'))
    trigger.click()
    await redraw()
    t.is(true, content.open)
    return [true, content.matches(':modal')]
  })),

  t`keeps the alert role through native attributes and style extension`(() => withAlertDialog({
    Content: ExtendedContent,
    content: {
      role: 'dialog',
      data: { test: 'alert' },
      style: { letterSpacing: '1px' }
    }
  }, ({ content }) => {
    t.is('alertdialog', content.getAttribute('role'))
    t.is('alert', content.dataset.test)
    t.is('1px', content.style.letterSpacing)
    return ['520px', getComputedStyle(content).maxWidth]
  })),

  t`supports an explicitly focused cancel choice and destructive close action`(() => {
    let deleted = 0
    return withAlertDialog({
      actions: [
        AlertDialog.Close({ autofocus: true }, 'Cancel'),
        AlertDialog.Close({ variant: 'solid', color: 'red', onclick: () => deleted++ }, 'Delete')
      ]
    }, async({ trigger, content }) => {
      trigger.focus()
      trigger.click()
      await redraw()
      const actions = [...content.querySelectorAll('button')]
      t.is('Cancel', document.activeElement.textContent)
      actions[1].click()
      await redraw()
      t.is(1, deleted)
      t.is(false, content.open)
      return [true, document.activeElement === trigger]
    })
  }),

  t`inherits live state and cancellation behavior from Dialog`(() => {
    const open = s.live(false)
    return withAlertDialog({
      root: { bind: open },
      content: { oncancel: event => event.preventDefault() }
    }, async({ trigger, content }) => {
      trigger.click()
      await redraw()
      t.is(true, open())
      content.dispatchEvent(new Event('cancel', { cancelable: true }))
      await redraw()
      t.is(true, content.open)
      open(false)
      await redraw()
      return [false, content.open]
    })
  })
)

function withAlertDialog(options, run) {
  const host = document.createElement('div')
  document.body.append(host)
  const Content = options.Content || AlertDialog.Content
  const mounted = s.mount(host, () => AlertDialog(options.root || {},
    AlertDialog.Trigger('Delete account'),
    Content(options.content || {},
      AlertDialog.Title('Delete account?'),
      AlertDialog.Description('This action permanently removes the account.'),
      ...(options.actions || [AlertDialog.Close('Cancel')])
    )
  ))

  return redraw()
    .then(() => run({
      trigger: host.querySelector('[aria-haspopup="dialog"]'),
      content: host.querySelector('dialog')
    }))
    .finally(() => {
      mounted.unmount()
      host.remove()
    })
}

function redraw() {
  return new Promise(resolve => requestAnimationFrame(resolve))
}
