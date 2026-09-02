import s from 'sin'
import { CustomSelect, NativeSelect } from '../src/index.js'
import Custom from '../src/custom-select.js'
import Native from '../src/native-select.js'
import { CustomSelect as Themed } from '../src/theme.js'
import type { CustomSelectAttrs, NativeSelectAttrs } from '../src/index.js'

const bind = s.live<string | null>('pear')
const attrs: CustomSelectAttrs = { bind, required: true, placeholder: 'Produce', color: 'cyan' }
CustomSelect({ ...attrs, name: 'produce', 'aria-label': 'Produce', onvaluechange(value, event) {
  const selected: string | null = value
  void selected
  void event.type
} }, CustomSelect.Group({ label: 'Fruit' }, CustomSelect.Option({ value: 'pear', onselect: event => event.preventDefault() }, 'Pear')))
Custom({ value: null })
Themed({ defaultValue: 'pear', size: '3' })
NativeSelect({ defaultValue: 'pear' }, NativeSelect.Option({ value: 'pear' }, 'Pear'))
const nativeAttrs: NativeSelectAttrs = { defaultValue: 'pear' }
Native({ ...nativeAttrs })
const Extended = CustomSelect`width 240`
Extended({}, CustomSelect.Option({ value: 'pear' }, 'Pear'))

// @ts-expect-error single-value only
CustomSelect({ multiple: true })
// @ts-expect-error no search or filtering surface
CustomSelect({ filter: () => true })
// @ts-expect-error no array value
CustomSelect({ value: ['pear'] })
// @ts-expect-error values are strings
CustomSelect.Option({ value: 123 })
// @ts-expect-error no input part
CustomSelect.Input()
// @ts-expect-error groups require labels
CustomSelect.Group({ disabled: true })
// @ts-expect-error no array binding
CustomSelect({ bind: s.live<string[]>([]) })
