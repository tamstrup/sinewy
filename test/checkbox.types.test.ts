import s from 'sin'
import { Checkbox } from '../src/index.js'
import DirectCheckbox from '../src/checkbox.js'
import { Checkbox as ThemeCheckbox } from '../src/theme.js'
import type { CheckboxAttrs, CheckboxDOMEvent, CheckboxGroupAttrs } from '../src/index.js'

const attrs: CheckboxAttrs = { defaultChecked: true, size: '2', color: 'accent' }
const groupAttrs: CheckboxGroupAttrs = { name: 'channels', defaultValue: ['email'] }
void attrs
void groupAttrs

const checked = s.live(false)
const channels = s.live<string[]>(['email'])

Checkbox({
  bind: checked,
  name: 'terms',
  value: 'accepted',
  required: true,
  oncheckedchange: (next: boolean, event: CheckboxDOMEvent<Event>) => {
    void next
    void event
  }
})

Checkbox.Group({ bind: channels, name: 'channels' },
  Checkbox({ value: 'email' }),
  Checkbox({ value: 'sms' })
)

DirectCheckbox({ checked: true, color: 'cyan' })
ThemeCheckbox.Group({ name: 'theme', value: ['dark'] }, ThemeCheckbox({ value: 'dark' }))

// @ts-expect-error Checkbox always renders a checkbox
Checkbox({ type: 'radio' })

// @ts-expect-error Checkbox owns its native semantics
Checkbox({ role: 'switch' })

// @ts-expect-error Checkbox has no control variant
Checkbox({ variant: 'soft' })

// @ts-expect-error group bindings are arrays, not booleans
Checkbox.Group({ name: 'channels', bind: checked })

// @ts-expect-error HTML has no native at-least-one checkbox group constraint
Checkbox.Group({ name: 'channels', required: true })

// @ts-expect-error checkbox groups have no control variant
Checkbox.Group({ name: 'channels', variant: 'soft' })

// @ts-expect-error Checkbox has no speculative Root part
Checkbox.Root()
