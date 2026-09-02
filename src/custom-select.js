import s from 'sin'
import { createSelection } from './selection.js'
import { ContentSurface, ItemSurface } from './combobox-theme.js'
import { themeColorStyle } from './theme-colors.js'
import { themedData } from './theme-options.js'

const Headless = createSelection({ name: 'CustomSelect', selectOnly: true })
const $theme = Symbol('sinewy-custom-select-theme')

const Root = s`div
  position relative
  width min(100%, 320px)
  color $sinewy-neutral-12
  font-family inherit
`

const Trigger = Headless.Trigger`
  width 100%
  min-width 0
  min-height 36
  display flex
  align-items center
  justify-content space-between
  gap 10
  padding 6px 10px
  border 1px solid $sinewy-neutral-7
  border-radius 9
  background $sinewy-panel
  color inherit
  font inherit
  font-size 13
  line-height 20px
  text-align start
  cursor pointer
  box-shadow 0 1px 2px light-dark(rgb(0 0 0 / 0.04), rgb(0 0 0 / 0.24))
  transition border-color 80ms ease, box-shadow 80ms ease

  &::after {
    content ''
    width 7
    height 7
    flex-shrink 0
    margin-inline 3px
    margin-block-start -3px
    border-right 1.5px solid currentColor
    border-bottom 1.5px solid currentColor
    transform rotate(45deg)
    color $sinewy-accent-11
  }

  &[data-state='open']::after {
    margin-block-start 3px
    transform rotate(225deg)
  }

  &:hover:not(:disabled) {
    border-color $sinewy-accent-8
  }

  &:focus-visible {
    outline 3px solid color-mix(in srgb, $sinewy-accent-8 42%, transparent)
    outline-offset 2px
  }

  &[data-state='open'] {
    border-color $sinewy-accent-8
  }

  &[data-placeholder] {
    color $sinewy-neutral-11
  }

  &[data-high-contrast] {
    border-color $sinewy-accent-8
  }

  &[aria-invalid='true'] {
    border-color #e5484d
  }

  &:disabled {
    cursor default
    opacity 0.5
  }

  &[data-size='1'] {
    min-height 30
    padding 4px 8px
    border-radius 7
    font-size 12
    line-height 18px
  }

  &[data-size='3'] {
    min-height 42
    padding 8px 12px
    border-radius 11
    font-size 14
    line-height 22px
  }

  @media (prefers-reduced-motion: reduce) {
    transition none
  }
`

const Group = Headless.Group`
  & + [role='group'] {
    margin-block-start 5px
    border-block-start 1px solid $sinewy-neutral-6
  }

  > [data-selection-group-label] {
    padding 7px 8px 4px
    color $sinewy-neutral-11
    font-size 11
    font-weight 750
    letter-spacing 0.06em
    text-transform uppercase
  }
`

const CustomSelect = s(({
  id, value, defaultValue, bind, onvaluechange, formatValue,
  name, form, required = false, disabled = false, autocomplete,
  placeholder, dir = 'ltr', size = '2', color = 'accent', highContrast = false,
  style, data, ...attrs
}, children, context) => {
  const theme = { size, color, highContrast }
  const childContext = Object.create(context)
  childContext[$theme] = theme
  return Root({ dir, style: themeColorStyle(color, style), data: themedData(data, theme) },
    s({ context: childContext }, () => Headless({
      id, value, defaultValue, bind, onvaluechange, formatValue, disabled, required
    },
      // Register options before the trigger and form proxy, including during SSR.
      ContentSurface({ 'aria-label': attrs['aria-label'], 'aria-labelledby': attrs['aria-labelledby'], data: themedData({}, theme) }, children),
      Trigger({ ...attrs, id, form, placeholder, data: themedData({}, theme) }),
      Headless.FormControl({ name, form, autocomplete })
    ))
  )
})

CustomSelect.Option = s(({ value, textValue, ...attrs }, children, context) => {
  if (typeof value !== 'string' || !value)
    throw new TypeError('CustomSelect.Option value must be a non-empty string')
  const theme = context[$theme] || {}
  return ItemSurface({
    ...attrs, value,
    textValue: textValue ?? (children.every(x => typeof x === 'string' || typeof x === 'number') ? children.join('') : value),
    data: themedData(attrs.data, theme)
  }, children)
})

CustomSelect.Group = Group

export { CustomSelect }
export default CustomSelect
