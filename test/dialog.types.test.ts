import s from 'sin'
import { Dialog } from '../src/index.js'
import DirectDialog from '../src/dialog.js'
import { Dialog as ThemeDialog } from '../src/theme.js'
import type { DialogDOMEvent, DialogRootAttrs } from '../src/index.js'

const open = s.live(false)
const attrs: DialogRootAttrs = {
  defaultOpen: false,
  bind: open,
  onopenchange(next: boolean, event: DialogDOMEvent) {
    void next
    void event
  }
}
void attrs

Dialog({ ...attrs },
  Dialog.Trigger({
    size: '2',
    variant: 'solid',
    color: 'accent',
    type: 'button',
    disabled: false,
    'aria-label': 'Open settings'
  }, 'Open'),
  Dialog.Content({
    size: '3',
    color: 'cyan',
    highContrast: true,
    'aria-labelledby': 'custom-title',
    'aria-describedby': null
  },
    Dialog.Title({ id: 'custom-title' }, 'Settings'),
    Dialog.Description('Change preferences.'),
    Dialog.Close({ variant: 'outline', autofocus: true }, 'Done')
  )
)

const ExtendedContent = Dialog.Content`
  max-width 700
`
Dialog(Dialog.Trigger('Open'), ExtendedContent(Dialog.Title('Title'), Dialog.Description('Description')))

DirectDialog(DirectDialog.Trigger('Open'), DirectDialog.Content(
  DirectDialog.Title('Title'),
  DirectDialog.Description('Description')
))

ThemeDialog(ThemeDialog.Trigger('Open'), ThemeDialog.Content(
  ThemeDialog.Title('Title'),
  ThemeDialog.Description('Description')
))

// @ts-expect-error invalid open value
Dialog({ open: 'yes' })

// @ts-expect-error invalid content size
Dialog(Dialog.Content({ size: '4' }))

// @ts-expect-error Dialog has no speculative Overlay part
Dialog.Overlay()
