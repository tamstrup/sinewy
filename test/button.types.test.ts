import s from 'sin'
import { Button } from '../src/index.js'
import DirectButton from '../src/button.js'
import { Button as ThemeButton } from '../src/theme.js'
import type { ThemeColor as DirectThemeColor } from '../src/button.js'
import type { ControlVariant as ThemeControlVariant } from '../src/theme.js'
import type { ButtonAttrs, ControlVariant, ThemeColor, ThemeSize } from '../src/index.js'

const size: ThemeSize = '2'
const color: ThemeColor = 'accent'
const variant: ControlVariant = 'solid'
const attrs: ButtonAttrs = { size, color, variant, highContrast: false }
const directColor: DirectThemeColor = color
const themeVariant: ThemeControlVariant = variant
const buttonOmitsAs: 'as' extends keyof ButtonAttrs ? never : true = true
void attrs
void buttonOmitsAs
void directColor
void themeVariant

const clicks = s.live(0)

Button({
  size: '3',
  variant: 'outline',
  color: 'red',
  highContrast: true,
  type: 'submit',
  name: 'intent',
  value: 'save',
  disabled: false,
  autofocus: true,
  'aria-label': 'Save document',
  onclick: clicks.set(value => value + 1)
}, 'Save')

DirectButton({ type: 'reset' }, 'Reset')
ThemeButton({ variant: 'ghost' }, 'Cancel')

const ExtendedButton = Button`
  min-width 100
`
ExtendedButton({ title: 'Extended' }, 'Continue')

// @ts-expect-error invalid size
Button({ size: '4' }, 'Invalid')

// @ts-expect-error invalid variant
Button({ variant: 'raised' }, 'Invalid')

// @ts-expect-error invalid color
Button({ color: 'chartreuse' }, 'Invalid')

// @ts-expect-error Button has no speculative Root part
Button.Root('Invalid')
