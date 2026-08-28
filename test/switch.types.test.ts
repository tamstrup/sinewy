import s from 'sin'
import { Switch } from '../src/index.js'
import DirectSwitch from '../src/switch.js'
import { Switch as ThemeSwitch } from '../src/theme.js'
import type { SwitchAttrs, SwitchDOMEvent } from '../src/index.js'

const attrs: SwitchAttrs = {
  defaultChecked: true,
  size: '2',
  color: 'accent',
  highContrast: false
}
const switchOmitsAs: 'as' extends keyof SwitchAttrs ? never : true = true
void attrs
void switchOmitsAs

const checked = s.live(false)

Switch({
  bind: checked,
  name: 'notifications',
  value: 'enabled',
  required: true,
  disabled: false,
  autofocus: true,
  'aria-label': 'Enable notifications',
  oncheckedchange: (next: boolean, event: SwitchDOMEvent<Event>) => {
    void next
    void event
  }
})

DirectSwitch({ checked: true, color: 'cyan' })
ThemeSwitch({ defaultChecked: false, highContrast: true })

const ExtendedSwitch = Switch`
  margin-inline-start 8
`
ExtendedSwitch({ title: 'Extended switch' })

// @ts-expect-error Switch always renders a checkbox
Switch({ type: 'text' })

// @ts-expect-error Switch always owns the switch role
Switch({ role: 'checkbox' })

// @ts-expect-error invalid size
Switch({ size: '4' })

// @ts-expect-error Switch has no control variant
Switch({ variant: 'soft' })

// @ts-expect-error Switch has no speculative Root part
Switch.Root()
