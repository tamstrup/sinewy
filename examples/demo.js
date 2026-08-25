import s from 'sin'
import dropdown from '../src/theme.js'

s.css.reset``

s.css`
  :root {
    color-scheme light
    font-family Inter, ui-sans-serif, system-ui, sans-serif
    background #f4f3ef
    color #20201e
  }

  body {
    min-height 100svh
  }

  button,
  a {
    font inherit
  }

  button {
    cursor pointer
  }

`

const Menu = dropdown.content
const Submenu = dropdown.subcontent
const Item = dropdown.item
const Checkbox = dropdown.checkbox
const Radio = dropdown.radio
const Subtrigger = dropdown.subtrigger
const MenuLabel = dropdown.label
const Separator = dropdown.separator
const Shortcut = dropdown.shortcut

const Page = s`main
  width min(1040px, 100%)
  min-height 100svh
  display grid
  align-content center
  gap 22
  margin 0 auto
  padding 36 22 52
`

const Header = s`header
  display grid
  gap 10
  max-width 720
`

const Eyebrow = s`p
  color #6f5bd3
  font-size 12
  font-weight 800
  letter-spacing 0.11em
  text-transform uppercase
`

const Heading = s`h1
  font-size clamp(34px, 7vw, 66px)
  line-height 0.94
  letter-spacing -0.055em
`

const Intro = s`p
  max-width 62ch
  color #68645b
  font-size 16
  line-height 1.55
`

const Grid = s`div
  display grid
  grid-template-columns minmax(0, 1.25fr) minmax(280px, 0.75fr)
  gap 18

  @media (max-width: 760px) {
    grid-template-columns 1fr
  }
`

const Card = s`section
  min-width 0
  display grid
  align-content start
  gap 20
  padding 24
  border 1px solid #dedbd2
  border-radius 18
  background rgb(255 255 253 / 0.76)
  box-shadow 0 16px 50px rgb(46 40 30 / 0.07)
`

const CardHeader = s`header
  display grid
  gap 5

  h2 {
    font-size 18
    letter-spacing -0.02em
  }

  p {
    color #777268
    font-size 13
    line-height 1.45
  }
`

const DemoStage = s`div
  min-height 250
  display grid
  place-items center
  padding 28
  border 1px dashed #d7d2c7
  border-radius 14
  background #f8f7f2
`

const Toolbar = s`div
  display flex
  align-items center
  gap 10
  padding 8
  border 1px solid #dedbd2
  border-radius 13
  background #fff
  box-shadow 0 8px 22px rgb(46 40 30 / 0.08)
`

const Avatar = s`span
  width 34
  height 34
  display grid
  place-items center
  border-radius 10
  background #eeeafe
  color #5e47c6
  font-size 12
  font-weight 850
`

const Account = s`span
  display grid
  gap 1
  line-height 1.1

  strong {
    font-size 13
  }

  small {
    color #89847a
    font-size 11
  }
`

const Trigger = dropdown.trigger`
  margin-inline-start 4
`

const Result = s`div
  display grid
  grid-template-columns repeat(2, minmax(0, 1fr))
  gap 8

  div {
    min-width 0
    display grid
    gap 3
    padding 11 12
    border-radius 10
    background #efede6
  }

  span {
    color #827d72
    font-size 10
    font-weight 750
    letter-spacing 0.08em
    text-transform uppercase
  }

  strong {
    overflow hidden
    font-size 13
    text-overflow ellipsis
    white-space nowrap
  }
`

const PlacementGrid = s`div
  display grid
  grid-template-columns repeat(2, minmax(0, 1fr))
  gap 9
`

const PlacementTrigger = s((attrs, children) => dropdown.trigger({
  size: '3',
  variant: 'outline',
  color: 'accent',
  ...attrs
}, children))

const FeatureList = s`ul
  display grid
  gap 9
  color #666158
  font-size 13

  li {
    display flex
    align-items baseline
    gap 8
  }

  li::before {
    content '✓'
    color #6f5bd3
    font-weight 900
  }
`

const Warning = s`p
  padding 11 13
  border 1px solid #e9b87e
  border-radius 10
  background #fff6e9
  color #8a4b12
  font-size 13
`

const Evaluation = s`section
  display grid
  gap 18
  padding 24
  border 1px solid #d9d4c8
  border-radius 18
  background rgb(255 255 253 / 0.78)
  box-shadow 0 16px 50px rgb(46 40 30 / 0.07)
`

const EvaluationHeader = s`header
  display grid
  gap 7
  max-width 760

  h2 {
    font-size 24
    letter-spacing -0.035em
  }

  p {
    color #716c62
    font-size 13
    line-height 1.5
  }
`

const LabGrid = s`div
  display grid
  grid-template-columns repeat(2, minmax(0, 1fr))
  gap 14

  @media (max-width: 820px) {
    grid-template-columns 1fr
  }
`

const Lab = s`section
  min-width 0
  display grid
  align-content start
  gap 14
  padding 17
  border 1px solid #e2ded5
  border-radius 14
  background #faf9f5

  h3 {
    font-size 15
    letter-spacing -0.015em
  }

  p {
    color #777268
    font-size 12
    line-height 1.45
  }
`

const Controls = s`div
  display flex
  flex-wrap wrap
  align-items center
  gap 10

  label {
    display inline-flex
    align-items center
    gap 7
    color #5f5a51
    font-size 12
    font-weight 700
  }

  select,
  input[type='range'] {
    accent-color #6f5bd3
  }

  select {
    min-height 34
    padding 0 9
    border 1px solid #d8d4c9
    border-radius 8
    background #fff
    color #45423c
    font inherit
  }
`

const EdgeStage = s`div
  min-height 320
  position relative
  overflow hidden
  border 1px dashed #cbc5b8
  border-radius 12
  background linear-gradient(135deg, #f2efe7, #fff)
`

const MovingStage = s`div
  min-height 154
  position relative
  overflow hidden
  border 1px dashed #cbc5b8
  border-radius 12
  background linear-gradient(90deg, #f2efe7, #fff)
`

const ProbeState = s`div
  display grid
  grid-template-columns repeat(3, minmax(0, 1fr))
  gap 7

  div {
    min-width 0
    padding 8
    border-radius 8
    background #efede6
  }

  span {
    display block
    color #827d72
    font-size 9
    font-weight 800
    letter-spacing 0.07em
    text-transform uppercase
  }

  strong {
    display block
    overflow hidden
    margin-top 2
    font-size 11
    text-overflow ellipsis
    white-space nowrap
  }
`

const ScrollProbe = s`div
  height 150
  overflow auto
  border 1px dashed #cbc5b8
  border-radius 12
  background #f2efe7
`

const ScrollProbeInner = s`div
  min-height 520
  display flex
  align-items end
  justify-content center
  padding 24
`

const Link = s((attrs, children) => s`a`(attrs, children))
const Row = (label, shortcut) => [s`span`(label), shortcut && Shortcut(shortcut)]
const Indicator = symbol => dropdown.indicator(symbol)

const App = s(({}, [], { doc }) => {
  let support
  const menuOpen = s.live(false)
  const spellcheck = s.live(true)
  const autosave = s.live('indeterminate')
  const density = s.live('comfortable')
  const lastAction = s.live('Nothing selected yet')

  doc.title('Sinewy · Dropdown capability demo')

  return () => Page({
    dom: () => {
      support = 'popover' in HTMLElement.prototype
        && CSS.supports('position-area: bottom')
      s.redraw()
    }
  },
    Header(
      Eyebrow('Sinewy · themed components'),
      Heading('Dropdown, end to end.'),
      Intro(
        'A live demonstration of the themed facade over the headless API: native popovers, CSS anchor positioning, keyboard navigation, typeahead, composed items, selection state, and nested menus.'
      )
    ),

    support === false && Warning(
      'This demo needs a browser with the Popover API and CSS Anchor Positioning.'
    ),

    Grid(
      Card(
        CardHeader(
          s`h2`('Full capability menu'),
          s`p`('Try the keyboard, type ahead, toggle persistent choices, and open the nested Export submenu.')
        ),

        DemoStage(
          dropdown({ bind: menuOpen },
            Toolbar(
              Avatar('PS'),
              Account(
                s`strong`('Patrick Smith'),
                s`small`('Workspace owner')
              ),
              Trigger({ color: 'accent' },
                'Actions',
                dropdown.triggerIcon()
              )
            ),

            Menu({
              side: 'bottom',
              align: 'end',
              offset: 10,
              data: { demoMenu: '' }
            },
              MenuLabel('Document'),
              Item({
                textValue: 'Rename',
                shortcut: '⌘ R',
                onselect: () => lastAction('Rename selected')
              }, 'Rename'),
              Item({
                textValue: 'Duplicate',
                shortcut: '⌘ D',
                onselect: () => lastAction('Duplicate selected')
              }, 'Duplicate'),
              Item({ disabled: true, textValue: 'Move' }, Row('Move unavailable', '⇧ M')),

              Separator(),
              MenuLabel('Preferences'),
              Checkbox({
                bind: spellcheck,
                textValue: 'Spellcheck',
                onselect: event => event.preventDefault(),
                oncheckedchange: checked => lastAction('Spellcheck ' + (checked ? 'enabled' : 'disabled'))
              }, Indicator('✓'), Row('Spellcheck')),
              Checkbox({
                bind: autosave,
                textValue: 'Autosave',
                onselect: event => event.preventDefault(),
                oncheckedchange: checked => lastAction('Autosave ' + (checked ? 'enabled' : 'disabled'))
              }, Indicator(autosave.if('indeterminate', '−', '✓')), Row('Autosave')),

              dropdown.radioGroup({
                bind: density,
                ariaLabel: 'Interface density',
                onvaluechange: value => lastAction('Density changed to ' + value)
              },
                Radio({
                  value: 'compact',
                  textValue: 'Compact density',
                  onselect: event => event.preventDefault()
                }, Indicator('•'), Row('Compact density')),
                Radio({
                  value: 'comfortable',
                  textValue: 'Comfortable density',
                  onselect: event => event.preventDefault()
                }, Indicator('•'), Row('Comfortable density'))
              ),

              Separator(),
              dropdown.sub({ openDelay: 120, closeDelay: 320 },
                Subtrigger({ textValue: 'Export' },
                  s`span`('Export'),
                  Shortcut('→')
                ),
                Submenu({
                  align: 'start',
                  offset: 5,
                  data: { demoMenu: '' }
                },
                  MenuLabel('Export as'),
                  Item({ onselect: () => lastAction('Exported PDF') }, Row('PDF document', '⌘ P')),
                  Item({ onselect: () => lastAction('Exported Markdown') }, Row('Markdown', '⌘ M')),
                  Item({ onselect: () => lastAction('Copied share link') }, Row('Copy share link'))
                )
              ),
              Item({
                as: Link,
                href: '#keyboard-guide',
                textValue: 'Keyboard guide',
                onselect: () => lastAction('Opened keyboard guide')
              }, Row('Keyboard guide', '?')),

              Separator(),
              Item({
                textValue: 'Delete',
                color: 'red',
                shortcut: '⌘ ⌫',
                onselect: () => lastAction('Delete selected')
              }, 'Delete document')
            )
          )
        ),

        Result(
          s`div`(s`span`('Menu state'), s`strong`(menuOpen.if(true, 'Open', 'Closed'))),
          s`div`(s`span`('Last action'), s`strong`(lastAction)),
          s`div`(s`span`('Spellcheck'), s`strong`(spellcheck.if(true, 'On', 'Off'))),
          s`div`(s`span`('Density'), s`strong`(density))
        )
      ),

      Card(
        CardHeader(
          s`h2`('Placement & direction'),
          s`p`('Each menu uses native top-layer rendering and logical CSS anchor placement.')
        ),

        PlacementGrid(
          PlacementDemo({ label: 'Bottom · start', side: 'bottom', align: 'start' }),
          PlacementDemo({ label: 'Bottom · end', side: 'bottom', align: 'end' }),
          PlacementDemo({ label: 'Top · center', side: 'top', align: 'center' }),
          PlacementDemo({ label: 'RTL submenu', side: 'bottom', align: 'end', dir: 'rtl', nested: true })
        ),

        CardHeader(
          s`h2`('Currently demonstrated'),
          s`p`('The reusable theme owns visuals while all interaction behavior remains in the headless component.')
        ),
        FeatureList(
          s`li`('Popover light-dismiss and focus restoration'),
          s`li`('Arrow keys, Home/End, looping, and typeahead'),
          s`li`('Controlled, uncontrolled, and live-bound state'),
          s`li`('Checkbox, indeterminate, and exclusive radio state'),
          s`li`('Composed link items and cancellable selection'),
          s`li`('LTR/RTL submenus with pointer delays'),
          s`li`('Side, alignment, offsets, and collision flips')
        )
      )
    ),

    EvaluationLab(),

    s`p#keyboard-guide
      color #777268
      font-size 12
      line-height 1.6
    `(
      s`strong`('Keyboard guide: '),
      'Enter, Space, Arrow Down, or Arrow Up opens a menu. Use arrows or typeahead to move, Right/Left to cross submenu boundaries, Escape to return, and Tab to leave.'
    )
  )
})

const PlacementDemo = s(({ label, side, align, dir = 'ltr', nested = false }) =>
  dropdown({ dir },
    PlacementTrigger(label),
    Menu({ side, align, offset: 7, data: { demoMenu: '' } },
      Item({ onselect: () => {} }, Row('First action')),
      Item({ onselect: () => {} }, Row('Second action')),
      nested && dropdown.sub(
        Subtrigger(Row(dir === 'rtl' ? 'قائمة فرعية' : 'Nested menu', dir === 'rtl' ? '←' : '→')),
        Submenu({ offset: 5, data: { demoMenu: '' } },
          Item(Row(dir === 'rtl' ? 'الخيار الأول' : 'Nested action')),
          Item(Row(dir === 'rtl' ? 'الخيار الثاني' : 'Another action'))
        )
      )
    )
  )
)

const EvaluationLab = s(() =>
  Evaluation(
    EvaluationHeader(
      s`h2`('Evaluation lab'),
      s`p`(
        'Purpose-built fixtures for collision handling, oversized content, moving and clipped anchors, deep nesting, lifecycle cancellation, and the rapid-click issue.'
      )
    ),
    LabGrid(
      PlacementLab(),
      MovingAnchorLab(),
      OversizedLab(),
      DeepMenuLab(),
      LifecycleLab(),
      DetachedAnchorLab()
    )
  )
)

const PlacementLab = s(() => {
  const strategy = s.live('preferred')
  const viewportEdges = s.live(false)

  return () => Lab(
    s`h3`('Viewport edges & collision strategy'),
    s`p`(
      'Enable viewport mode to pin these triggers to the actual window corners. Disable it before continuing with the other fixtures.'
    ),
    Controls(
      s`label`(
        'Strategy',
        s`select`({
          value: strategy(),
          oninput: event => strategy(event.currentTarget.value)
        },
          s`option`({ value: 'preferred' }, 'Preferred side'),
          s`option`({ value: 'most-space' }, 'Most space')
        )
      ),
      s`label`(
        s`input`({
          type: 'checkbox',
          checked: viewportEdges(),
          onchange: event => viewportEdges(event.currentTarget.checked)
        }),
        'Use viewport corners'
      )
    ),
    EdgeStage(
      EdgeCase({
        label: 'Top · start',
        corner: 'top-start',
        side: 'top',
        align: 'start',
        strategy: strategy(),
        viewport: viewportEdges()
      }),
      EdgeCase({
        label: 'Top · end',
        corner: 'top-end',
        side: 'top',
        align: 'end',
        strategy: strategy(),
        viewport: viewportEdges()
      }),
      EdgeCase({
        label: 'Bottom · start',
        corner: 'bottom-start',
        side: 'bottom',
        align: 'start',
        strategy: strategy(),
        viewport: viewportEdges()
      }),
      EdgeCase({
        label: 'Bottom · end',
        corner: 'bottom-end',
        side: 'bottom',
        align: 'end',
        strategy: strategy(),
        viewport: viewportEdges()
      })
    )
  )
})

function EdgeCase({ label, corner, side, align, strategy, viewport }) {
  const [block, inline] = corner.split('-')
  const inset = [
    block === 'top' ? '12px' : 'auto',
    inline === 'end' ? '12px' : 'auto',
    block === 'bottom' ? '12px' : 'auto',
    inline === 'start' ? '12px' : 'auto'
  ].join(' ')

  return dropdown(
    PlacementTrigger({
      style: {
        position: viewport ? 'fixed' : 'absolute',
        inset,
        zIndex: viewport ? 20 : 'auto'
      }
    }, label),
    Menu({
      side,
      align,
      offset: 7,
      collisionStrategy: strategy,
      data: { demoMenu: '', evaluationMenu: '' }
    },
      Item('Placement probe'),
      Item('Second action'),
      Item('Third action')
    )
  )
}

const MovingAnchorLab = s(() => {
  const position = s.live(12)

  return () => Lab(
    s`h3`('Moving & scrolling anchor'),
    s`p`('Open the menu, move the range control, then leave it open while scrolling the page.'),
    Controls(
      s`label`(
        'Horizontal position',
        s`input`({
          type: 'range',
          min: 4,
          max: 68,
          value: position(),
          oninput: event => position(Number(event.currentTarget.value))
        })
      )
    ),
    MovingStage(
      dropdown(
        PlacementTrigger({
          style: {
            position: 'absolute',
            inset: '56px auto auto ' + position() + '%'
          }
        }, 'Moving anchor'),
        Menu({
          side: 'bottom',
          align: 'start',
          offset: 7,
          collisionStrategy: 'most-space',
          data: { demoMenu: '', evaluationMenu: '' }
        },
          Item('Anchored action'),
          Item('Another action')
        )
      )
    )
  )
})

const OversizedLab = s(() =>
  Lab(
    s`h3`('Oversized content containment'),
    s`p`('Open this menu and resize the window vertically. The menu should stay inside the viewport and scroll internally.'),
    DemoStage(
      dropdown(
        PlacementTrigger('Open 30-item menu'),
        Menu({
          side: 'bottom',
          align: 'start',
          offset: 7,
          style: { maxHeight: 'none' },
          data: { demoMenu: '', evaluationMenu: '' }
        },
          Array.from({ length: 30 }, (_, index) =>
            Item({ key: 'stress-' + index }, Row('Stress item ' + (index + 1)))
          )
        )
      )
    )
  )
)

const DeepMenuLab = s(() =>
  Lab(
    s`h3`('Three-level submenu'),
    s`p`('Open all levels with pointer or keyboard. Escape should unwind one layer; the deepest action should close the whole tree.'),
    DemoStage(
      dropdown(
        PlacementTrigger('Open deep menu'),
        Menu({ offset: 7, data: { demoMenu: '', evaluationMenu: '' } },
          Item('Root action'),
          dropdown.sub(
            Subtrigger({ textValue: 'First level' }, Row('First level', '→')),
            Submenu({ offset: 5, data: { demoMenu: '', evaluationMenu: '' } },
              Item('First-level action'),
              dropdown.sub(
                Subtrigger({ textValue: 'Second level' }, Row('Second level', '→')),
                Submenu({ offset: 5, data: { demoMenu: '', evaluationMenu: '' } },
                  Item('Deep action'),
                  Item('Another deep action')
                )
              )
            )
          )
        )
      )
    )
  )
)

const LifecycleLab = s(() => {
  const blocked = s.live(false)
  const open = s.live(false)
  const beforeCount = s.live(0)
  const changeCount = s.live(0)
  const pressDuration = s.live('—')
  let pointerDownAt = 0

  return () => Lab(
    s`h3`('Rapid click & lifecycle probe'),
    s`p`('Make very short single clicks. Every unblocked closed-state click should produce Open and increment both counters once.'),
    Controls(
      s`label`(
        s`input`({
          type: 'checkbox',
          checked: blocked(),
          onchange: event => blocked(event.currentTarget.checked)
        }),
        'Cancel opening'
      )
    ),
    dropdown({
      bind: open,
      onbeforeopenchange: (next, event) => {
        beforeCount(beforeCount() + 1)
        next && blocked() && event.preventDefault()
      },
      onopenchange: () => changeCount(changeCount() + 1)
    },
      PlacementTrigger({
        onpointerdown: event => {
          pointerDownAt = performance.now()
          event.redraw = false
        },
        onpointerup: event => {
          pressDuration(Math.round(performance.now() - pointerDownAt) + ' ms')
          event.redraw = false
        }
      }, 'Rapid single-click target'),
      Menu({ offset: 7, data: { demoMenu: '', evaluationMenu: '' } },
        Item('Probe action'),
        Item('Second probe action')
      )
    ),
    ProbeState(
      s`div`(s`span`('State'), s`strong`(open.if(true, 'Open', 'Closed'))),
      s`div`(s`span`('Before / change'), s`strong`(beforeCount, ' / ', changeCount)),
      s`div`(s`span`('Press duration'), s`strong`(pressDuration))
    )
  )
})

const DetachedAnchorLab = s(() =>
  Lab(
    s`h3`('Clipped-anchor interoperability probe'),
    s`p`('Scroll to the trigger, open it, then scroll it fully away. Record whether your browser hides or leaves the popover visible; this is not yet a guaranteed behavior.'),
    ScrollProbe(
      ScrollProbeInner(
        dropdown(
          PlacementTrigger('Clipped anchor'),
          Menu({ side: 'top', offset: 7, data: { demoMenu: '', evaluationMenu: '' } },
            Item('Interop result'),
            Item('Second action')
          )
        )
      )
    )
  )
)

s.mount(App)
