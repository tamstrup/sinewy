import s from 'sin'
import { Select } from '../src/index.js'
import DirectSelect from '../src/select.js'
import { Select as ThemeSelect } from '../src/theme.js'
import type { SelectAttrs, SelectDOMEvent } from '../src/index.js'

const attrs: SelectAttrs = {
  defaultValue: 'pear',
  size: '2',
  color: 'accent',
  highContrast: false
}
void attrs

const value = s.live('apple')
Select({
  bind: value,
  name: 'produce',
  required: true,
  disabled: false,
  autofocus: true,
  'aria-label': 'Choose produce',
  onvaluechange: (next: string, event: SelectDOMEvent<Event>) => {
    void next
    void event
  }
},
Select.Group({ label: 'Fruit', disabled: false },
  Select.Option({ value: 'apple' }, 'Apple'),
  Select.Option({ value: 'pear' }, 'Pear')
))

DirectSelect({ value: 'apple', color: 'cyan' }, DirectSelect.Option({ value: 'apple' }, 'Apple'))
ThemeSelect({ defaultValue: 'apple', highContrast: true }, ThemeSelect.Option({ value: 'apple' }, 'Apple'))

const ExtendedSelect = Select`
  width 240
`
ExtendedSelect({}, Select.Option({ value: 'a' }, 'A'))

// @ts-expect-error scalar Select deliberately omits multiple selection
Select({ multiple: true })

// @ts-expect-error invalid theme size
Select({ size: '4' })

// @ts-expect-error Select has no control variant
Select({ variant: 'outline' })

// @ts-expect-error Select has no speculative Root part
Select.Root()
