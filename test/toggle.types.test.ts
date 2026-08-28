import s from 'sin'
import { Toggle } from '../src/index.js'
import DirectToggle from '../src/toggle.js'
import { Toggle as ThemeToggle } from '../src/theme.js'
import type { ToggleAttrs, ToggleDOMEvent } from '../src/index.js'

const attrs: ToggleAttrs = {
  defaultPressed: true,
  size: '2',
  variant: 'soft',
  color: 'accent',
  highContrast: false
}
const toggleOmitsAs: 'as' extends keyof ToggleAttrs ? never : true = true
void attrs
void toggleOmitsAs

const pressed = s.live(false)

Toggle({
  bind: pressed,
  type: 'button',
  name: 'format',
  value: 'bold',
  disabled: false,
  autofocus: true,
  'aria-label': 'Toggle bold',
  onpressedchange: (next: boolean, event: ToggleDOMEvent<MouseEvent>) => {
    void next
    void event
  }
}, 'Bold')

DirectToggle({ pressed: true, variant: 'outline' }, 'Italic')
ThemeToggle({ defaultPressed: false, variant: 'ghost' }, 'Underline')

const ExtendedToggle = Toggle`
  min-width 100
`
ExtendedToggle({ title: 'Extended' }, 'Bold')

// @ts-expect-error invalid pressed value
Toggle({ pressed: 'yes' }, 'Invalid')

// @ts-expect-error invalid variant
Toggle({ variant: 'raised' }, 'Invalid')

// @ts-expect-error Toggle has no speculative Root part
Toggle.Root('Invalid')
