import s from 'sin'
import Headless from './dropdown.js'
import HeadlessContextMenu from './context-menu.js'
import Button from './button.js'
import Toggle from './toggle.js'
import Dialog from './dialog.js'
import AlertDialog from './alert-dialog.js'
import Switch from './switch.js'
import Select from './select.js'
import Checkbox from './checkbox.js'
import Radio from './radio.js'
import Combobox from './combobox-theme.js'
import { controlTheme } from './control-theme.js'
import { themeColorStyle } from './theme-colors.js'
import { themedData } from './theme-options.js'

const $theme = Symbol('sinewy-theme')

const ContentSurface = Headless.Content`
  $dropdown-item-gutter initial
  $dropdown-item-gutter-size 35px
  $dropdown-separator-margin 5px
  width max-content
  min-width 248
  max-width min(340px, calc(100vw - 24px))
  max-height min(480px, calc(100vh - 24px))
  padding 6
  overflow auto
  outline 0
  border 1px solid $sinewy-neutral-6
  border-radius 13
  background color-mix(in srgb, $sinewy-panel 98%, transparent)
  color $sinewy-neutral-12
  box-shadow 0 22px 60px light-dark(rgb(35 31 24 / 0.18), rgb(0 0 0 / 0.5)), 0 3px 10px light-dark(rgb(35 31 24 / 0.08), rgb(0 0 0 / 0.28))
  opacity 0
  transform translateY(-4px) scale(0.985)
  transform-origin $sinewy-transform-origin
  transition opacity 120ms ease, transform 120ms ease, display 120ms allow-discrete, overlay 120ms allow-discrete

  &[data-size='1'] {
    $dropdown-item-gutter-size 29px
    $dropdown-separator-margin 4px
    min-width 200
    max-width min(300px, calc(100vw - 20px))
    max-height min(400px, calc(100vh - 20px))
    padding 5
    border-radius 11
  }

  &[data-size='3'] {
    $dropdown-item-gutter-size 41px
    $dropdown-separator-margin 6px
    min-width 280
    max-width min(380px, calc(100vw - 28px))
    max-height min(540px, calc(100vh - 28px))
    padding 7
    border-radius 15
  }

  &:has(> [role='menuitemcheckbox']),
  &:has(> [role='menuitemradio']),
  &:has(> [role='group'] > [role='menuitemcheckbox']),
  &:has(> [role='group'] > [role='menuitemradio']) {
    $dropdown-item-gutter $dropdown-item-gutter-size
  }

  &:popover-open {
    opacity 1
    transform translateY(0) scale(1)
  }

  @starting-style {
    &:popover-open {
      opacity 0
      transform translateY(-4px) scale(0.985)
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition none
    transform none
  }

  &::backdrop {
    background transparent
  }
`

const SubContentSurface = Headless.SubContent`
  $dropdown-item-gutter initial
  $dropdown-item-gutter-size 35px
  $dropdown-separator-margin 5px
  width max-content
  min-width 220
  max-width min(320px, calc(100vw - 24px))
  max-height min(440px, calc(100vh - 24px))
  padding 6
  overflow auto
  outline 0
  border 1px solid $sinewy-neutral-6
  border-radius 13
  background color-mix(in srgb, $sinewy-panel 98%, transparent)
  color $sinewy-neutral-12
  box-shadow 0 22px 60px light-dark(rgb(35 31 24 / 0.18), rgb(0 0 0 / 0.5)), 0 3px 10px light-dark(rgb(35 31 24 / 0.08), rgb(0 0 0 / 0.28))
  opacity 0
  transform translateY(-4px) scale(0.985)
  transform-origin $sinewy-transform-origin
  transition opacity 120ms ease, transform 120ms ease, display 120ms allow-discrete, overlay 120ms allow-discrete

  &[data-size='1'] {
    $dropdown-item-gutter-size 29px
    $dropdown-separator-margin 4px
    min-width 184
    max-width min(280px, calc(100vw - 20px))
    max-height min(380px, calc(100vh - 20px))
    padding 5
    border-radius 11
  }

  &[data-size='3'] {
    $dropdown-item-gutter-size 41px
    $dropdown-separator-margin 6px
    min-width 252
    max-width min(360px, calc(100vw - 28px))
    max-height min(500px, calc(100vh - 28px))
    padding 7
    border-radius 15
  }

  &:has(> [role='menuitemcheckbox']),
  &:has(> [role='menuitemradio']),
  &:has(> [role='group'] > [role='menuitemcheckbox']),
  &:has(> [role='group'] > [role='menuitemradio']) {
    $dropdown-item-gutter $dropdown-item-gutter-size
  }

  &:popover-open {
    opacity 1
    transform translateY(0) scale(1)
  }

  @starting-style {
    &:popover-open {
      opacity 0
      transform translateY(-4px) scale(0.985)
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition none
    transform none
  }

  &::backdrop {
    background transparent
  }
`

const TriggerControl = controlTheme(Headless.Trigger)

const ItemControl = component => component`
  $dropdown-indicator-width 16px
  $dropdown-indicator-start 9px
  $dropdown-indicator-font-size 12px
  width 100%
  min-height 36
  display flex
  position relative
  align-items center
  gap 10
  padding 7 9
  padding-inline-start var(--dropdown-item-gutter, 9px)
  border 0
  border-radius 8
  background transparent
  color inherit
  font-size 14
  line-height 20px
  text-align start
  text-decoration none
  user-select none

  &[data-size='1'] {
    $dropdown-indicator-width 14px
    $dropdown-indicator-start 7px
    $dropdown-indicator-font-size 11px
    min-height 30
    gap 8
    padding 5 7
    padding-inline-start var(--dropdown-item-gutter, 7px)
    border-radius 7
    font-size 12
    line-height 16px
  }

  &[data-size='3'] {
    $dropdown-indicator-width 18px
    $dropdown-indicator-start 11px
    $dropdown-indicator-font-size 13px
    min-height 42
    gap 12
    padding 9 11
    padding-inline-start var(--dropdown-item-gutter, 11px)
    border-radius 10
    font-size 16
    line-height 24px
  }

  &:focus-visible {
    outline 0
  }

  &[data-color] {
    color $sinewy-accent-11
  }

  &[data-variant='solid'][data-highlighted] {
    background $sinewy-accent-9
    color $sinewy-accent-contrast
  }

  &[data-variant='solid'][data-state='open'] {
    background $sinewy-accent-9
    color $sinewy-accent-contrast
  }

  &[data-variant='soft'][data-highlighted] {
    background $sinewy-accent-4
    color $sinewy-accent-12
  }

  &[data-variant='soft'][data-state='open'] {
    background $sinewy-accent-4
    color $sinewy-accent-12
  }

  &[data-high-contrast][data-highlighted] {
    background $sinewy-accent-12
    color $sinewy-accent-1
  }

  &[data-high-contrast][data-state='open'] {
    background $sinewy-accent-12
    color $sinewy-accent-1
  }

  &[data-color][data-high-contrast][data-highlighted] {
    background $sinewy-accent-9
    color $sinewy-accent-contrast
  }

  &[data-color][data-high-contrast][data-state='open'] {
    background $sinewy-accent-9
    color $sinewy-accent-contrast
  }

  &[data-disabled] {
    cursor default
    color $sinewy-neutral-9
  }

`

const ItemButton = ItemControl(Headless.Item)
const CheckboxButton = ItemControl(Headless.Checkbox)
const RadioButton = ItemControl(Headless.Radio)
const SubTriggerButton = ItemControl(Headless.SubTrigger)

const LabelText = Headless.Label`
  padding 7 9 4
  color $sinewy-neutral-11
  font-size 11
  font-weight 750
  letter-spacing 0.08em
  text-transform uppercase

  &[data-size='1'] {
    padding 6 7 3
    font-size 10
  }

  &[data-size='3'] {
    padding 8 11 5
    font-size 12
  }
`

const SeparatorLine = Headless.Separator`
  height 1
  margin $dropdown-separator-margin
  background $sinewy-neutral-6
`

const IndicatorMark = Headless.Indicator`
  width $dropdown-indicator-width
  display inline-grid
  place-items center
  position absolute
  inset-inline-start $dropdown-indicator-start
  flex 0 0 $dropdown-indicator-width
  font-size $dropdown-indicator-font-size
  font-weight 900
`

const ShortcutText = s`kbd
  margin-inline-start auto
  color currentColor
  font-family inherit
  font-size inherit
  line-height inherit
  opacity 0.58
`

const SubmenuChevron = s`svg
  width 14
  height 14
  display block
  margin-inline-start auto
  flex 0 0 14px
  opacity 0.72

  &:dir(rtl) {
    transform rotate(180deg)
  }
`

const Dropdown = s((attrs, children) => Headless(attrs, children))

Dropdown.Trigger = s(({
  size = '2',
  variant = 'solid',
  color = 'gray',
  highContrast = false,
  data,
  style,
  ...attrs
}, children) => TriggerControl({
  ...attrs,
  style: themeColorStyle(color, style),
  data: themedData(data, { size, variant, color, highContrast })
}, children))

Dropdown.Content = s(({
  size = '2',
  variant = 'solid',
  color = 'gray',
  highContrast = false,
  data,
  style,
  ...attrs
}, children, context) => {
  const theme = { size, variant, color, highContrast }
  return ContentSurface({
    ...attrs,
    style: themeColorStyle(color, style),
    data: themedData(data, { size, variant, color, highContrast })
  }, themedChildren(context, theme, children))
})

Dropdown.Item = themedItem(ItemButton)
Dropdown.Checkbox = themedItem(CheckboxButton)
Dropdown.Radio = themedItem(RadioButton)
Dropdown.SubTrigger = themedItem(SubTriggerButton, submenuChevron)

Dropdown.SubContent = s(({
  size,
  variant,
  color,
  highContrast,
  data,
  style,
  ...attrs
}, children, context) => {
  const theme = resolveTheme(context, { size, variant, color, highContrast })
  return SubContentSurface({
    ...attrs,
    style: color == null ? style : themeColorStyle(color, style),
    data: themedData(data, theme)
  }, themedChildren(context, theme, children))
})

Dropdown.Label = s(({ size, data, ...attrs }, children, context) => {
  const theme = resolveTheme(context, { size })
  return LabelText({
    ...attrs,
    data: themedData(data, { size: theme.size })
  }, children)
})

Dropdown.Separator = s((attrs, children) => SeparatorLine(attrs, children))
Dropdown.Indicator = s((attrs, children) => IndicatorMark(attrs, children))
Dropdown.Shortcut = s((attrs, children) => ShortcutText(attrs, children))
Dropdown.TriggerIcon = s((attrs, children) => Chevron(attrs, children))

Dropdown.Group = Headless.Group
Dropdown.RadioGroup = Headless.RadioGroup
Dropdown.Sub = Headless.Sub

const ContextMenu = s((attrs, children) => HeadlessContextMenu(attrs, children))

ContextMenu.Trigger = HeadlessContextMenu.Trigger
ContextMenu.Content = Dropdown.Content
ContextMenu.Item = Dropdown.Item
ContextMenu.Checkbox = Dropdown.Checkbox
ContextMenu.RadioGroup = HeadlessContextMenu.RadioGroup
ContextMenu.Radio = Dropdown.Radio
ContextMenu.Indicator = Dropdown.Indicator
ContextMenu.Group = HeadlessContextMenu.Group
ContextMenu.Label = Dropdown.Label
ContextMenu.Separator = Dropdown.Separator
ContextMenu.Sub = HeadlessContextMenu.Sub
ContextMenu.SubTrigger = Dropdown.SubTrigger
ContextMenu.SubContent = Dropdown.SubContent
ContextMenu.Shortcut = Dropdown.Shortcut

function themedItem(Base, trailing) {
  return s(({
    size,
    color,
    highContrast,
    shortcut,
    data,
    style,
    ...attrs
  }, children, context) => {
    const theme = resolveTheme(context, { size, highContrast })
    const content = shortcut == null ? children : [...children, ShortcutText(shortcut)]
    return Base({
      ...attrs,
      style: color == null ? style : themeColorStyle(color, style),
      data: themedData(data, {
        size: theme.size,
        variant: theme.variant,
        color,
        highContrast: theme.highContrast
      })
    }, trailing == null ? content : [...content, trailing()])
  })
}

function resolveTheme(context, values) {
  const inherited = context[$theme] || {}
  return Object.fromEntries(['size', 'variant', 'color', 'highContrast'].map(name => [
    name,
    values[name] == null ? inherited[name] : values[name]
  ]))
}

function themedChildren(context, theme, children) {
  const childContext = Object.create(context)
  childContext[$theme] = theme
  return s({ context: childContext }, () => children)
}

function Chevron(attrs) {
  return s`svg
    width 14
    height 14
    display block
    flex 0 0 14px
  `({
    ...attrs,
    viewBox: '0 0 14 14',
    fill: 'none',
    focusable: 'false',
    'aria-hidden': attrs['aria-hidden'] == null ? 'true' : attrs['aria-hidden']
  },
    s`path`({
      d: 'M3.5 5.25 7 8.75l3.5-3.5',
      stroke: 'currentColor',
      strokeWidth: 1.5,
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    })
  )
}

function submenuChevron() {
  return SubmenuChevron({
    viewBox: '0 0 14 14',
    fill: 'none',
    focusable: 'false',
    'aria-hidden': 'true'
  },
    s`path`({
      d: 'M5.25 3.5 8.75 7l-3.5 3.5',
      stroke: 'currentColor',
      strokeWidth: 1.5,
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    })
  )
}

export { AlertDialog, Button, Checkbox, Combobox, ContextMenu, Dialog, Dropdown, Radio, Select, Switch, Toggle }
export default Dropdown
