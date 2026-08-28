import s from 'sin'
import Dialog from './dialog.js'

const AlertDialog = s((attrs, children) => Dialog(attrs, ...children))

AlertDialog.Trigger = Dialog.Trigger
AlertDialog.Content = s((attrs, children) => Dialog.Content({ ...attrs, role: 'alertdialog' }, children))
AlertDialog.Title = Dialog.Title
AlertDialog.Description = Dialog.Description
AlertDialog.Close = Dialog.Close

export { AlertDialog }
export default AlertDialog
