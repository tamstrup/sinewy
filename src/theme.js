import s from 'sin'
import headless from './dropdown.js'
import { themeColorStyle } from './theme-colors.js'

const $theme = Symbol('sinewy-theme')

const ContentSurface = headless.content`
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

const SubcontentSurface = headless.subcontent`
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

const TriggerControl = headless.trigger`
  min-height 36
  display inline-flex
  align-items center
  justify-content center
  gap 8
  padding 0 11
  border 1px solid transparent
  border-radius 9
  font-size 13
  font-weight 750

  &[data-size='1'] {
    min-height 30
    gap 6
    padding 0 9
    border-radius 7
    font-size 12
  }

  &[data-size='3'] {
    min-height 42
    gap 9
    padding 0 14
    border-radius 11
    font-size 14
  }

  &[data-variant='solid'] {
    background $sinewy-accent-9
    color $sinewy-accent-contrast
  }

  &[data-variant='solid']:hover,
  &[data-variant='solid'][data-state='open'] {
    background $sinewy-accent-10
  }

  &[data-variant='soft'] {
    background $sinewy-accent-3
    color $sinewy-accent-11
  }

  &[data-variant='soft']:hover,
  &[data-variant='soft'][data-state='open'] {
    background $sinewy-accent-4
    color $sinewy-accent-12
  }

  &[data-variant='outline'] {
    border-color $sinewy-accent-7
    background $sinewy-panel
    color $sinewy-accent-11
  }

  &[data-variant='outline']:hover,
  &[data-variant='outline'][data-state='open'] {
    border-color $sinewy-accent-8
    background $sinewy-accent-2
    color $sinewy-accent-12
  }

  &[data-variant='ghost'] {
    background transparent
    color $sinewy-accent-11
  }

  &[data-variant='ghost']:hover,
  &[data-variant='ghost'][data-state='open'] {
    background $sinewy-accent-3
    color $sinewy-accent-12
  }

  &[data-high-contrast][data-variant='solid'] {
    background $sinewy-accent-12
    color $sinewy-accent-1
  }

  &[data-color='gray'][data-variant='solid'] {
    background $sinewy-accent-12
    color $sinewy-accent-1
  }

  &[data-high-contrast][data-variant='solid']:hover,
  &[data-high-contrast][data-variant='solid'][data-state='open'],
  &[data-color='gray'][data-variant='solid']:hover,
  &[data-color='gray'][data-variant='solid'][data-state='open'] {
    background $sinewy-extreme
  }

  &:focus-visible {
    outline 3px solid color-mix(in srgb, $sinewy-accent-8 42%, transparent)
    outline-offset 2px
  }

  &[data-disabled] {
    cursor default
    opacity 0.48
  }
`

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

const ItemButton = ItemControl(headless.item)
const CheckboxButton = ItemControl(headless.checkbox)
const RadioButton = ItemControl(headless.radio)
const SubtriggerButton = ItemControl(headless.subtrigger)

const LabelText = headless.label`
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

const SeparatorLine = headless.separator`
  height 1
  margin $dropdown-separator-margin
  background $sinewy-neutral-6
`

const IndicatorMark = headless.indicator`
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

const dropdown = s((attrs, children) => headless(attrs, children))

dropdown.trigger = s(({
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

dropdown.content = s(({
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

dropdown.item = themedItem(ItemButton)
dropdown.checkbox = themedItem(CheckboxButton)
dropdown.radio = themedItem(RadioButton)
dropdown.subtrigger = themedItem(SubtriggerButton)

dropdown.subcontent = s(({
  size,
  variant,
  color,
  highContrast,
  data,
  style,
  ...attrs
}, children, context) => {
  const theme = resolveTheme(context, { size, variant, color, highContrast })
  return SubcontentSurface({
    ...attrs,
    style: color == null ? style : themeColorStyle(color, style),
    data: themedData(data, theme)
  }, themedChildren(context, theme, children))
})

dropdown.label = s(({ size, data, ...attrs }, children, context) => {
  const theme = resolveTheme(context, { size })
  return LabelText({
    ...attrs,
    data: themedData(data, { size: theme.size })
  }, children)
})

dropdown.separator = s((attrs, children) => SeparatorLine(attrs, children))
dropdown.indicator = s((attrs, children) => IndicatorMark(attrs, children))
dropdown.shortcut = s((attrs, children) => ShortcutText(attrs, children))
dropdown.triggerIcon = s((attrs, children) => Chevron(attrs, children))

dropdown.group = headless.group
dropdown.radioGroup = headless.radioGroup
dropdown.sub = headless.sub

function themedItem(Base) {
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
    return Base({
      ...attrs,
      style: color == null ? style : themeColorStyle(color, style),
      data: themedData(data, {
        size: theme.size,
        variant: theme.variant,
        color,
        highContrast: theme.highContrast
      })
    }, shortcut == null ? children : [...children, ShortcutText(shortcut)])
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

function themedData(data, values) {
  return {
    ...data,
    ...Object.fromEntries(Object.entries(values).map(([name, value]) => [
      name,
      value == null ? null : typeof value === 'boolean' ? value ? '' : null : String(value)
    ]))
  }
}

export { dropdown }
export default dropdown
