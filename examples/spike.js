import s from 'sin'
import Dropdown from '../src/dropdown.js'

s.css.reset``

s.css`
  :root {
    color-scheme light;
    font-family Inter, ui-sans-serif, system-ui, sans-serif;
    background #f5f5f4;
    color #1c1917;
  }

  body {
    min-height 100svh;
  }

  button {
    cursor pointer;
  }
`

const Page = s`main
  min-height 100svh
  display grid
  place-items center
  padding 32
`

const Card = s`section
  width min(560px, 100%)
  display grid
  gap 24
  padding 32
  border 1px solid #e7e5e4
  border-radius 18
  background #fff
  box-shadow 0 20px 60px rgb(28 25 23 / 0.09)
`

const Eyebrow = s`p
  color #7c3aed
  font-size 12
  font-weight 750
  letter-spacing 0.12em
  text-transform uppercase
`

const Heading = s`h1
  margin-top 6
  font-size clamp(28px, 7vw, 44px)
  line-height 1
  letter-spacing -0.04em
`

const Description = s`p
  max-width 48ch
  color #57534e
  font-size 15
`

const Demo = s`div
  display flex
  align-items center
  gap 14
  flex-wrap wrap
`

const Trigger = Dropdown.Trigger`
  display inline-flex
  align-items center
  gap 8
  min-height 40
  padding 0 14
  border 1px solid #ddd6fe
  border-radius 10
  background #f5f3ff
  color #5b21b6
  font-weight 700
  box-shadow 0 1px 2px rgb(28 25 23 / 0.06)

  &:hover {
    background #ede9fe
  }

  &:focus-visible {
    outline 3px solid rgb(124 58 237 / 0.25)
    outline-offset 2px
  }
`

const Result = s`p
  color #78716c
  font-size 13

  strong {
    color #292524
  }
`

const Warning = s`p
  padding 10 12
  border 1px solid #fdba74
  border-radius 8
  background #fff7ed
  color #9a3412
  font-size 13
`

const Menu = Dropdown.Content`
  position-area block-end span-inline-end
  position-try-fallbacks flip-block, flip-inline, flip-block flip-inline
  justify-self start
  width max-content
  min-width 230
  max-width min(320px, calc(100vw - 24px))
  max-height min(420px, calc(100vh - 24px))
  margin 8px 0 0
  padding 6
  overflow auto
  border 1px solid rgb(231 229 228 / 0.95)
  border-radius 12
  background rgb(255 255 255 / 0.98)
  color #292524
  box-shadow 0 18px 50px rgb(28 25 23 / 0.18), 0 2px 8px rgb(28 25 23 / 0.08)
  opacity 0
  transform translateY(-4px) scale(0.98)
  transform-origin top left
  transition opacity 120ms ease, transform 120ms ease, display 120ms allow-discrete, overlay 120ms allow-discrete

  &:popover-open {
    opacity 1
    transform translateY(0) scale(1)
  }

  @starting-style {
    &:popover-open {
      opacity 0
      transform translateY(-4px) scale(0.98)
    }
  }

  &::backdrop {
    background transparent
  }
`

const MenuItem = Dropdown.Item`
  width 100%
  min-height 34
  display flex
  align-items center
  justify-content space-between
  gap 24
  padding 7 9
  border 0
  border-radius 7
  background transparent
  color inherit
  text-align left
  user-select none

  &:focus-visible,
  &[data-highlighted] {
    outline 0
    background #7c3aed
    color #fff
  }

  &[data-disabled] {
    cursor default
    color #a8a29e
  }

  kbd {
    color currentColor
    font-family inherit
    font-size 11
    opacity 0.66
  }
`

const Separator = Dropdown.Separator`
  height 1
  margin 5
  background #e7e5e4
`

const MenuLabel = Dropdown.Label`
  padding 7 9 4
  color #78716c
  font-size 11
  font-weight 750
  letter-spacing 0.08em
  text-transform uppercase
`

const App = s(({}, [], { doc }) => {
  let support
  const selected = s.live('Nothing selected yet')

  doc.title('Sinewy · Dropdown spike')

  return () => Page({
    dom: () => {
      support = 'popover' in HTMLElement.prototype
        && CSS.supports('position-area: bottom')
      s.redraw()
    }
  },
    Card(
      s`header`(
        Eyebrow('Sinewy platform spike'),
        Heading('Dropdown menu'),
        Description(
          'Native popover, implicit CSS anchoring, collision fallbacks, keyboard navigation, typeahead, and focus restoration.'
        )
      ),

      support === false && Warning(
        'This browser does not support the Popover API and CSS anchor positioning required by the spike.'
      ),

      Dropdown(
        Demo(
          Trigger(
            'Options',
            s`span`({ ariaHidden: true }, '⌄')
          ),

          Result('Last action: ', s`strong`(selected))
        ),

        Menu({ side: 'bottom', align: 'start' },
          MenuLabel('File actions'),
          Dropdown.Group({ ariaLabel: 'File actions' },
            MenuItem({ onselect: () => selected('Edit'), textValue: 'Edit' },
              'Edit',
              s`kbd`('⌘ E')
            ),
            MenuItem({ onselect: () => selected('Duplicate'), textValue: 'Duplicate' },
              'Duplicate',
              s`kbd`('⌘ D')
            ),
            MenuItem({ disabled: true, textValue: 'Rename' },
              'Rename unavailable',
              s`kbd`('⇧ R')
            )
          ),
          Separator(),
          MenuItem({ onselect: () => selected('Archive'), textValue: 'Archive' },
            'Archive',
            s`kbd`('⌘ N')
          ),
          MenuItem({
            onselect: event => {
              selected('Kept open')
              event.preventDefault()
            },
            textValue: 'Keep open'
          },
            'Keep menu open',
            s`kbd`('⌘ K')
          ),
          Separator(),
          MenuItem`
            color #b91c1c

            &:focus-visible,
            &[data-highlighted] {
              background #dc2626
              color #fff
            }
          `({ onselect: () => selected('Delete'), textValue: 'Delete' },
            'Delete',
            s`kbd`('⌘ ⌫')
          )
        )
      )
    )
  )
})

s.mount(App)
