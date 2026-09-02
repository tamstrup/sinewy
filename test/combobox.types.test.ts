import s from 'sin'
import { Combobox } from '../src/index.js'
import FocusedCombobox from '../src/combobox.js'
import { Combobox as ThemedCombobox } from '../src/theme.js'

const selected = s.live<string | null>(null)
const selectedMany = s.live<string[]>([])

Combobox({
  defaultValue: 'assets',
  bind: selected,
  filter: (text, query, value) => text.includes(query) || value === query,
  formatValue: value => value.toUpperCase(),
  onvaluechange: value => {
    const selected: string | null = value
    void selected
  }
},
  Combobox.Control(
    Combobox.Input({ placeholder: 'Account', 'aria-label': 'Account' })
  ),
  Combobox.Content(
    Combobox.Item({ value: 'assets', textValue: 'Assets' }, 'Assets')
  )
)

Combobox({
  multiple: true,
  defaultValue: ['assets'],
  bind: selectedMany,
  onvaluechange: value => {
    const selected: string[] = value
    void selected
  }
},
  Combobox.Control(
    Combobox.Pills({ removelabel: (value, text) => `Remove ${text} (${value})` }),
    Combobox.Input()
  ),
  Combobox.Content(
    Combobox.Item({
      value: 'income',
      disabled: false,
      onclick: event => event.preventDefault(),
      onselect: event => event.preventDefault()
    }, 'Income')
  )
)

FocusedCombobox(
  FocusedCombobox.Control(FocusedCombobox.Input()),
  FocusedCombobox.Content(FocusedCombobox.Item({ value: 'cash' }, 'Cash'))
)

ThemedCombobox({
  multiple: true,
  bind: selectedMany,
  size: '3',
  color: 'cyan',
  highContrast: true,
  style: { width: '24rem' }
},
  ThemedCombobox.Control(
    ThemedCombobox.Pills({ removelabel: (_, text) => `Remove ${text}` }),
    ThemedCombobox.Input({ placeholder: 'Accounts' })
  ),
  ThemedCombobox.Content(
    ThemedCombobox.Item({ value: 'assets' }, 'Assets')
  )
)

// @ts-expect-error multiple selection requires an array binding
Combobox({ multiple: true, bind: selected })

// @ts-expect-error single selection does not accept an array
Combobox({ value: ['assets'] })

// @ts-expect-error item values are strings
Combobox.Item({ value: 42 }, 'Invalid')

// @ts-expect-error component identifiers are PascalCase
Combobox.input()

// @ts-expect-error combobox fields have one visual treatment rather than button variants
ThemedCombobox({ variant: 'solid' })

// @ts-expect-error invalid themed size
ThemedCombobox({ size: '4' })
