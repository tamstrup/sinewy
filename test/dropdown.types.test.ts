import s from 'sin'
import { dropdown as headless } from '../src/index.js'
import type { DropdownContentAttrs } from '../src/index.js'
import themed from '../src/theme.js'

const open = s.live(false)
const checked = s.live<boolean | 'indeterminate'>('indeterminate')
const value = s.live('comfortable')
const contentOmitsForceMount: 'forceMount' extends keyof DropdownContentAttrs ? never : true = true
void contentOmitsForceMount

headless({
  bind: open,
  dir: 'rtl',
  onbeforeopenchange: (next, event) => next && event.preventDefault(),
  onopenchange: next => {
    const value: boolean = next
    void value
  }
},
  headless.trigger({ disabled: false }, 'Actions'),
  headless.content({
    side: 'bottom',
    align: 'end',
    offset: 8,
    collisionStrategy: 'most-space'
  },
    headless.item({ textValue: 'Rename', onselect: event => event.preventDefault() }, 'Rename'),
    headless.checkbox({ bind: checked },
      headless.indicator('✓'),
      'Spellcheck'
    ),
    headless.radioGroup({ bind: value },
      headless.radio({ value: 'compact' }, 'Compact'),
      headless.radio({ value: 'comfortable' }, 'Comfortable')
    ),
    headless.sub({ openDelay: 120, closeDelay: 300 },
      headless.subtrigger('More'),
      headless.subcontent({ side: 'right' },
        headless.item('Nested action')
      )
    )
  )
)

const CustomItem = themed.item`
  font-weight 800
`

themed(
  themed.trigger({ size: '3', variant: 'outline', color: 'accent' },
    'Actions',
    themed.triggerIcon()
  ),
  themed.content({ size: '2', variant: 'soft', color: 'cyan', highContrast: true },
    themed.label('Document'),
    CustomItem({ color: 'red', highContrast: true, shortcut: '⌘ D' }, 'Delete'),
    themed.separator(),
    themed.checkbox({ bind: checked }, themed.indicator('✓'), 'Enabled')
  )
)

// @ts-expect-error invalid placement side
headless.content({ side: 'diagonal' })

// @ts-expect-error invalid theme variant
themed.trigger({ variant: 'raised' })

// @ts-expect-error content has menu variants, not trigger variants
themed.content({ variant: 'outline' })

// @ts-expect-error invalid theme color
themed.content({ color: 'chartreuse' })
