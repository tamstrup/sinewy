import { ContextMenu } from '../src/index.js'
import type { ContextMenuRootAttrs } from '../src/index.js'
import FocusedContextMenu from '../src/context-menu.js'

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
    oncontextmenu: event => event.preventDefault()
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

// @ts-expect-error component identifiers are PascalCase
ContextMenu.trigger('Lower-case aliases are intentionally absent')
