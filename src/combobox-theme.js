import s from 'sin'
import Headless from './combobox.js'
import { themeColorStyle } from './theme-colors.js'
import { themedData } from './theme-options.js'

const $comboboxTheme = Symbol('sinewy-combobox-theme')

const RootSurface = s`div
  width min(100%, 320px)
  display grid
  position relative
  gap 6
  color $sinewy-neutral-12
  font-family inherit
`

const ControlSurface = Headless.Control`
  width 100%
  min-height 36
  display flex
  flex-wrap wrap
  align-items center
  gap 5
  padding 4px 8px
  border 1px solid $sinewy-neutral-7
  border-radius 9
  background $sinewy-panel
  color inherit
  box-shadow 0 1px 2px light-dark(rgb(0 0 0 / 0.04), rgb(0 0 0 / 0.24))
  cursor text
  transition border-color 80ms ease, box-shadow 80ms ease

  &[data-size='1'] {
    min-height 30
    gap 4
    padding 3px 7px
    border-radius 7
  }

  &[data-size='3'] {
    min-height 42
    gap 6
    padding 5px 10px
    border-radius 11
  }

  &:hover {
    border-color $sinewy-neutral-8
  }

  &:focus-within {
    border-color $sinewy-accent-8
    box-shadow 0 0 0 3px color-mix(in srgb, $sinewy-accent-8 26%, transparent)
  }

  &[data-state='open'] {
    border-color $sinewy-accent-8
    box-shadow 0 0 0 3px color-mix(in srgb, $sinewy-accent-8 26%, transparent)
  }

  &[data-high-contrast]:focus-within {
    border-color $sinewy-accent-9
  }

  &[data-high-contrast][data-state='open'] {
    border-color $sinewy-accent-9
  }

  @media (prefers-reduced-motion: reduce) {
    transition none
  }
`

const PillsSurface = Headless.Pills`
  display contents

  > [data-sinewy-combobox-pill] {
    min-width 0
    min-height 24
    display inline-flex
    align-items center
    gap 5
    padding 2px 7px
    border 0
    border-radius 6
    background $sinewy-accent-3
    color $sinewy-accent-11
    font inherit
    font-size 12
    font-weight 650
    line-height 18px
    cursor pointer
  }

  > [data-sinewy-combobox-pill]::after {
    content '×'
    color currentColor
    font-size 13
    line-height 1
    opacity 0.62
  }

  > [data-sinewy-combobox-pill]:hover {
    background $sinewy-accent-4
    color $sinewy-accent-12
  }

  > [data-sinewy-combobox-pill]:focus-visible {
    outline 2px solid $sinewy-accent-8
    outline-offset 1px
  }

  > [data-sinewy-combobox-pill][data-selected] {
    outline 2px solid $sinewy-accent-8
    outline-offset 1px
  }

  &[data-size='1'] > [data-sinewy-combobox-pill] {
    min-height 20
    padding 1px 6px
    border-radius 5
    font-size 11
    line-height 16px
  }

  &[data-size='3'] > [data-sinewy-combobox-pill] {
    min-height 28
    padding 3px 8px
    border-radius 7
    font-size 13
    line-height 20px
  }

  &[data-high-contrast] > [data-sinewy-combobox-pill] {
    background $sinewy-accent-4
    color $sinewy-accent-12
  }
`

const InputSurface = Headless.Input`
  min-width 9ch
  min-height 26
  flex 1 1 9ch
  padding 0 2px
  outline 0
  border 0
  background transparent
  color inherit
  font inherit
  font-size 13
  line-height 20px

  &::placeholder {
    color $sinewy-neutral-9
  }

  &[data-size='1'] {
    min-height 22
    font-size 12
    line-height 18px
  }

  &[data-size='3'] {
    min-height 30
    font-size 14
    line-height 22px
  }
`

const ContentSurface = Headless.Content`
  width 100%
  max-height min(280px, calc(100vh - 24px))
  display grid
  position fixed
  inset auto
  margin 0
  gap 2
  padding 5
  overflow auto
  border 1px solid $sinewy-neutral-6
  border-radius 10
  background color-mix(in srgb, $sinewy-panel 98%, transparent)
  color inherit
  box-shadow 0 18px 48px light-dark(rgb(35 31 24 / 0.16), rgb(0 0 0 / 0.48)), 0 3px 10px light-dark(rgb(35 31 24 / 0.07), rgb(0 0 0 / 0.26))
  z-index 20

  &[hidden] {
    display none
  }

  &[data-size='1'] {
    max-height min(240px, calc(100vh - 20px))
    padding 4
    border-radius 8
  }

  &[data-size='3'] {
    max-height min(320px, calc(100vh - 28px))
    padding 6
    border-radius 12
  }
`

const ItemBox = Headless.Item`
  width 100%
  min-height 34
  display grid
  grid-template-columns minmax(0, 1fr) auto
  align-items center
  gap 10
  padding 6px 8px
  border-radius 7
  color $sinewy-neutral-12
  font-size 13
  line-height 20px
  cursor pointer
  user-select none

  &[hidden] {
    display none
  }

  > [data-selection-indicator] {
    color $sinewy-accent-11
    font-size 12
    font-weight 900
    opacity 0
  }

  &[data-selected] {
    background $sinewy-accent-3
    color $sinewy-accent-12
    font-weight 650
  }

  &[data-selected] > [data-selection-indicator] {
    opacity 1
  }

  &[data-highlighted] {
    background $sinewy-accent-9
    color $sinewy-accent-contrast
  }

  &[data-highlighted] > [data-selection-indicator] {
    color currentColor
  }

  &[data-high-contrast][data-highlighted] {
    background $sinewy-accent-12
    color $sinewy-accent-1
  }

  &[data-disabled] {
    color $sinewy-neutral-9
    cursor default
  }

  &[data-size='1'] {
    min-height 30
    padding 5px 7px
    border-radius 6
    font-size 12
    line-height 18px
  }

  &[data-size='3'] {
    min-height 40
    padding 8px 10px
    border-radius 9
    font-size 14
    line-height 22px
  }
`

const ItemSurface = s((attrs, children) => ItemBox({
  ...attrs,
  'aria-label': attrs['aria-label'] ?? attrs.textValue
},
  s`span`(children),
  s`span`({ 'aria-hidden': 'true', data: { selectionIndicator: '' } }, '✓')
))

const Combobox = s(({
  id,
  multiple,
  value,
  defaultValue,
  bind,
  dir,
  filter,
  formatValue,
  onvaluechange,
  size = '2',
  color = 'accent',
  highContrast = false,
  data,
  style,
  ...attrs
}, children, context) => {
  const theme = { size, color, highContrast }
  const childContext = Object.create(context)
  childContext[$comboboxTheme] = theme

  return RootSurface({
    ...attrs,
    id,
    style: themeColorStyle(color, style),
    data: themedData(data, theme)
  }, s({ context: childContext }, () => Headless({
    id,
    multiple,
    value,
    defaultValue,
    bind,
    dir,
    filter,
    formatValue,
    onvaluechange
  }, children)))
})

Combobox.Control = themedPart(ControlSurface)
Combobox.Pills = themedPart(PillsSurface)
Combobox.Input = themedPart(InputSurface)
Combobox.Content = themedPart(ContentSurface)
Combobox.Item = themedPart(ItemSurface)

function themedPart(Surface) {
  return s((attrs, children, context) => {
    const { size = '2', highContrast = false } = context[$comboboxTheme] || {}
    return Surface({
      ...attrs,
      data: themedData(attrs.data, { size, highContrast })
    }, children)
  })
}

export { Combobox, ContentSurface, ItemSurface }
export default Combobox
