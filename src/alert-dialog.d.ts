import type { Dialog as DialogComponent } from './dialog.js'

export type {
  DialogBinding as AlertDialogBinding,
  DialogCloseAttrs as AlertDialogCloseAttrs,
  DialogContentAttrs as AlertDialogContentAttrs,
  DialogDOMEvent as AlertDialogDOMEvent,
  DialogRootAttrs as AlertDialogRootAttrs,
  DialogTriggerAttrs as AlertDialogTriggerAttrs
} from './dialog.js'

export type AlertDialog = DialogComponent

declare const AlertDialog: AlertDialog

export { AlertDialog }
export default AlertDialog
