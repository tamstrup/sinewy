import s from 'sin'
import { Radio } from '../src/index.js'
import DirectRadio from '../src/radio.js'
import { Radio as ThemeRadio } from '../src/theme.js'
import type { RadioAttrs, RadioDOMEvent, RadioGroupAttrs } from '../src/index.js'

const attrs: RadioAttrs = { defaultChecked: true, size: '2', color: 'accent' }
const groupAttrs: RadioGroupAttrs = { name: 'plan', defaultValue: 'free' }
void attrs
void groupAttrs

const checked = s.live(false)
const plan = s.live('free')

Radio({ bind: checked, name: 'standalone', value: 'yes' })
Radio.Group({
  bind: plan,
  name: 'plan',
  required: true,
  onvaluechange: (next: string, event: RadioDOMEvent<Event>) => {
    void next
    void event
  }
},
Radio({ value: 'free' }),
Radio({ value: 'pro' })
)

DirectRadio({ checked: true, color: 'cyan' })
ThemeRadio.Group({ name: 'theme', value: 'dark' }, ThemeRadio({ value: 'dark' }))

// @ts-expect-error Radio always renders a radio input
Radio({ type: 'checkbox' })

// @ts-expect-error Radio owns its native semantics
Radio({ role: 'switch' })

// @ts-expect-error Radio has no control variant
Radio({ variant: 'soft' })

// @ts-expect-error radio group bindings are scalar strings
Radio.Group({ name: 'plan', bind: checked })

// @ts-expect-error radio groups have no control variant
Radio.Group({ name: 'plan', variant: 'soft' })

// @ts-expect-error a typed radio group contract requires a native group name
const missingName: RadioGroupAttrs = { defaultValue: 'free' }
void missingName

// @ts-expect-error Radio has no speculative Root part
Radio.Root()
