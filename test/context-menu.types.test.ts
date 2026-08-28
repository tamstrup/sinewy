import { ContextMenu } from '../src/index.js'
import type { ContextMenuRootAttrs } from '../src/index.js'
import FocusedContextMenu from '../src/context-menu.js'
import { ContextMenu as ThemedContextMenu } from '../src/theme.js'

const rootOmitsOpen: 'open' extends keyof ContextMenuRootAttrs ? never : true = true
void rootOmitsOpen

ContextMenu({
  dir: 'rtl',
  loop: false,
  onbeforeopenchange: (open, event) => open && event.preventDefault(),
  onopenchange: open => {
    const value: boolean = open
    void value
  }
},
  ContextMenu.Trigger({
    disabled: false,
    oncontextmenu: event => event.preventDefault(),
    onkeydown: event => event.key === 'F10' && event.preventDefault()
  }, 'Target'),
  ContextMenu.Content({ collisionStrategy: 'most-space' },
    ContextMenu.Item({ textValue: 'Rename' }, 'Rename'),
    ContextMenu.Checkbox({ defaultChecked: true },
      ContextMenu.Indicator('✓'),
      'Visible'
    ),
    ContextMenu.RadioGroup({ defaultValue: 'comfortable' },
      ContextMenu.Radio({ value: 'compact' }, 'Compact'),
      ContextMenu.Radio({ value: 'comfortable' }, 'Comfortable')
    ),
    ContextMenu.Sub(
      ContextMenu.SubTrigger('More'),
      ContextMenu.SubContent(ContextMenu.Item('Nested action'))
    )
  )
)

FocusedContextMenu(
  FocusedContextMenu.Trigger('Target'),
  FocusedContextMenu.Content(FocusedContextMenu.Item('Action'))
)

const CustomThemedItem = ThemedContextMenu.Item`
  font-weight 800
`

ThemedContextMenu(
  ThemedContextMenu.Trigger('Target'),
  ThemedContextMenu.Content({ size: '3', variant: 'soft', color: 'cyan' },
    ThemedContextMenu.Label('Document'),
    CustomThemedItem({ color: 'red', shortcut: '⌘ D' }, 'Delete'),
    ThemedContextMenu.Checkbox({ defaultChecked: true },
      ThemedContextMenu.Indicator('✓'),
      'Visible'
    ),
    ThemedContextMenu.Sub(
      ThemedContextMenu.SubTrigger('More'),
      ThemedContextMenu.SubContent(ThemedContextMenu.Item('Nested action'))
    )
  )
)

// @ts-expect-error content has menu variants, not trigger variants
ThemedContextMenu.Content({ variant: 'outline' })

// @ts-expect-error component identifiers are PascalCase
ContextMenu.trigger('Lower-case aliases are intentionally absent')
