import s from 'sin'
import { AlertDialog } from '../src/index.js'
import DirectAlertDialog from '../src/alert-dialog.js'
import { AlertDialog as ThemeAlertDialog } from '../src/theme.js'
import type { AlertDialogRootAttrs } from '../src/index.js'

const open = s.live(false)
const attrs: AlertDialogRootAttrs = { bind: open }
void attrs

AlertDialog({ ...attrs },
  AlertDialog.Trigger({ variant: 'outline' }, 'Delete account'),
  AlertDialog.Content({ size: '2', color: 'red' },
    AlertDialog.Title('Delete account?'),
    AlertDialog.Description('This cannot be undone.'),
    AlertDialog.Close({ autofocus: true }, 'Cancel'),
    AlertDialog.Close({ variant: 'solid', color: 'red' }, 'Delete')
  )
)

DirectAlertDialog(DirectAlertDialog.Trigger('Open'), DirectAlertDialog.Content(
  DirectAlertDialog.Title('Title'),
  DirectAlertDialog.Description('Description')
))

ThemeAlertDialog(ThemeAlertDialog.Trigger('Open'), ThemeAlertDialog.Content(
  ThemeAlertDialog.Title('Title'),
  ThemeAlertDialog.Description('Description')
))

const ExtendedContent = AlertDialog.Content`
  max-width 540
`
AlertDialog(AlertDialog.Trigger('Open'), ExtendedContent(
  AlertDialog.Title('Title'),
  AlertDialog.Description('Description')
))

// @ts-expect-error invalid root state
AlertDialog({ open: 'yes' })

// @ts-expect-error no compatibility-only Action alias
AlertDialog.Action('Delete')

// @ts-expect-error no compatibility-only Cancel alias
AlertDialog.Cancel('Cancel')
