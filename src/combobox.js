import { createSelection } from './selection.js'

const Combobox = createSelection()

delete Combobox.Trigger
delete Combobox.FormControl
delete Combobox.Group

export { Combobox }
export default Combobox
