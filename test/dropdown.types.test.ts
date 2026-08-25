import s from 'sin'
import { Dropdown as Headless } from '../src/index.js'
import type { DropdownContentAttrs } from '../src/index.js'
import Themed from '../src/theme.js'

const open = s.live(false)
const checked = s.live<boolean | 'indeterminate'>('indeterminate')
const value = s.live('comfortable')
const contentOmitsForceMount: 'forceMount' extends keyof DropdownContentAttrs ? never : true = true
void contentOmitsForceMount

Headless({
  bind: open,
  dir: 'rtl',
  onbeforeopenchange: (next, event) => next && event.preventDefault(),
  onopenchange: next => {
    const value: boolean = next
    void value
  }
},
  Headless.Trigger({ disabled: false }, 'Actions'),
  Headless.Content({
    side: 'bottom',
    align: 'end',
    offset: 8,
    collisionStrategy: 'most-space'
  },
    Headless.Item({ textValue: 'Rename', onselect: event => event.preventDefault() }, 'Rename'),
    Headless.Checkbox({ bind: checked },
      Headless.Indicator('✓'),
      'Spellcheck'
    ),
    Headless.RadioGroup({ bind: value },
      Headless.Radio({ value: 'compact' }, 'Compact'),
      Headless.Radio({ value: 'comfortable' }, 'Comfortable')
    ),
    Headless.Sub({ openDelay: 120, closeDelay: 300 },
      Headless.SubTrigger('More'),
      Headless.SubContent({ side: 'right' },
        Headless.Item('Nested action')
      )
    )
  )
)

const CustomItem = Themed.Item`
  font-weight 800
`

Themed(
  Themed.Trigger({ size: '3', variant: 'outline', color: 'accent' },
    'Actions',
    Themed.TriggerIcon()
  ),
  Themed.Content({ size: '2', variant: 'soft', color: 'cyan', highContrast: true },
    Themed.Label('Document'),
    CustomItem({ color: 'red', highContrast: true, shortcut: '⌘ D' }, 'Delete'),
    Themed.Separator(),
    Themed.Checkbox({ bind: checked }, Themed.Indicator('✓'), 'Enabled')
  )
)

// @ts-expect-error invalid placement side
Headless.Content({ side: 'diagonal' })

// @ts-expect-error invalid theme variant
Themed.Trigger({ variant: 'raised' })

// @ts-expect-error content has menu variants, not trigger variants
Themed.Content({ variant: 'outline' })

// @ts-expect-error invalid theme color
Themed.Content({ color: 'chartreuse' })

// @ts-expect-error component identifiers are PascalCase
Headless.trigger('Lower-case aliases are intentionally absent')
