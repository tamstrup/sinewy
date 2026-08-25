import s from 'sin'
import Dropdown from '../src/theme.js'

s.title = 'Sinewy — Documentation'
s.css.reset``
s.css`
  :root {
    color-scheme light;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background: #f7f6f2;
    color: #20211f;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-width: 320px;
    min-height: 100svh;
  }

  button,
  a {
    font: inherit;
  }

  a {
    color: inherit;
  }

  ::selection {
    background: #dcd5ff;
  }
`

const App = s(({}, [], { route }) => Site(
  route({
    '/': Overview,
    '/components/dropdown': DropdownPage,
    '/?': NotFound
  })
))

const Site = s`div
  min-height 100svh
  display grid
  grid-template-columns 256px minmax(0, 1fr)

  @media (max-width: 780px) {
    grid-template-columns 1fr
  }
`

const Sidebar = s`aside
  position fixed
  inset 0 auto 0 0
  width 256
  display grid
  grid-template-rows auto 1fr auto
  gap 32
  padding 28 22
  border-right 1px solid #dfddd6
  background rgb(250 249 246 / 0.92)
  backdrop-filter blur(18px)
  z-index 2

  @media (max-width: 780px) {
    display none
  }
`

const Brand = s`a
  width fit-content
  display flex
  align-items center
  gap 10
  color inherit
  text-decoration none

  strong {
    font-size 15
    letter-spacing -0.02em
  }

  span:last-child {
    color #77766f
    font-size 12
  }
`

const Mark = s`span
  width 31
  height 31
  display grid
  place-items center
  border-radius 9
  background #20211f
  color #fff
  font-size 17
  font-weight 820
  letter-spacing -0.08em
`

const Navigation = s`nav
  display grid
  align-content start
  gap 25
`

const NavGroup = s`section
  display grid
  gap 7

  h2 {
    padding-inline 9
    color #929087
    font-size 10
    font-weight 780
    letter-spacing 0.12em
    text-transform uppercase
  }
`

const NavLink = s`a
  display flex
  align-items center
  justify-content space-between
  gap 12
  padding 8 9
  border-radius 8
  color #5f605b
  font-size 13
  font-weight 590
  text-decoration none

  &:hover,
  &[data-active] {
    background #eceae3
    color #20211f
  }

  span {
    color #96938b
    font-size 10
    font-weight 650
  }
`

const SideFooter = s`footer
  display grid
  gap 6
  color #85837c
  font-size 11
  line-height 1.45

  strong {
    color #5c5c57
    font-weight 680
  }
`

const MobileNav = s`nav
  display none
  align-items center
  gap 5

  @media (max-width: 780px) {
    display flex
  }
`

const MobileLink = s`a
  padding 7 9
  border-radius 7
  color #5f605b
  font-size 12
  font-weight 640
  text-decoration none

  &[data-active] {
    background #eceae3
    color #20211f
  }
`

const Main = s`main
  min-width 0
  grid-column 2

  @media (max-width: 780px) {
    grid-column 1
  }
`

const Page = s`div
  width min(100%, 1100px)
  display grid
  gap 48
  margin 0 auto
  padding 72 52 96

  @media (max-width: 780px) {
    padding 44 20 72
  }
`

const Hero = s`header
  display grid
  gap 18
  max-width 780

  h1 {
    max-width 12ch
    font-size clamp(42px, 7vw, 78px)
    line-height 0.96
    letter-spacing -0.062em
  }

  p {
    max-width 64ch
    color #686964
    font-size 17
    line-height 1.65
  }
`

const Eyebrow = s`div
  display flex
  align-items center
  gap 9
  color #6553ca
  font-size 11
  font-weight 790
  letter-spacing 0.11em
  text-transform uppercase

  &::before {
    content ''
    width 7
    height 7
    border-radius 50%
    background #7865df
    box-shadow 0 0 0 4px #e7e2ff
  }
`

const Section = s`section
  display grid
  gap 18

  > header {
    display grid
    gap 6
  }

  h2 {
    font-size 22
    letter-spacing -0.035em
  }

  > header p {
    max-width 66ch
    color #74746e
    font-size 14
    line-height 1.55
  }
`

const StatusGrid = s`div
  display grid
  grid-template-columns repeat(3, minmax(0, 1fr))
  gap 12

  @media (max-width: 900px) {
    grid-template-columns 1fr
  }
`

const StatusCard = s`article
  min-width 0
  display grid
  align-content start
  gap 13
  padding 19
  border 1px solid #dedcd4
  border-radius 14
  background rgb(255 255 253 / 0.72)

  strong {
    font-size 14
    letter-spacing -0.015em
  }

  p {
    color #75756f
    font-size 12
    line-height 1.5
  }
`

const StatusTop = s`div
  display flex
  align-items center
  justify-content space-between
  gap 12
`

const Badge = s`span
  width fit-content
  padding 4 7
  border-radius 99
  background #e6f3e9
  color #347147
  font-size 9
  font-weight 790
  letter-spacing 0.08em
  text-transform uppercase

  &[data-tone='progress'] {
    background #eeeaff
    color #6854ca
  }

  &[data-tone='manual'] {
    background #f6ead3
    color #8b6423
  }
`

const Progress = s`div
  height 5
  overflow hidden
  border-radius 99
  background #e9e7e0

  span {
    height 100%
    display block
    border-radius inherit
    background #7966dc
  }
`

const ComponentCard = s`a
  display grid
  grid-template-columns minmax(0, 1fr) auto
  align-items center
  gap 20
  padding 24
  border 1px solid #d9d6cd
  border-radius 16
  background #fff
  color inherit
  text-decoration none
  box-shadow 0 15px 45px rgb(52 49 40 / 0.055)
  transition transform 140ms ease, border-color 140ms ease, box-shadow 140ms ease

  &:hover {
    transform translateY(-2px)
    border-color #bcb5df
    box-shadow 0 20px 54px rgb(52 49 40 / 0.09)
  }

  h3 {
    margin-bottom 5
    font-size 18
    letter-spacing -0.025em
  }

  p {
    color #71716b
    font-size 13
    line-height 1.5
  }
`

const Arrow = s`span
  width 34
  height 34
  display grid
  place-items center
  border-radius 50%
  background #f0eee8
  color #555650
  font-size 18
`

const Roadmap = s`ol
  display grid
  gap 0
  list-style none

  li {
    position relative
    display grid
    grid-template-columns 26px minmax(0, 1fr)
    gap 13
    padding 0 0 22
    color #74746e
    font-size 13
    line-height 1.5
  }

  li:not(:last-child)::before {
    content ''
    position absolute
    top 19
    left 9
    bottom 2
    width 1
    background #d8d5cc
  }

  strong {
    display block
    margin-bottom 2
    color #363733
    font-size 13
  }
`

const Step = s`span
  width 19
  height 19
  display grid
  place-items center
  border 1px solid #c8c5bc
  border-radius 50%
  background #f7f6f2
  color #89877f
  font-size 9
  font-weight 800
  z-index 1

  &[data-done] {
    border-color #78a987
    background #e6f3e9
    color #347147
  }

  &[data-current] {
    border-color #8d7de0
    background #eeeaff
    color #6854ca
  }
`

const ArticleHeader = s`header
  display grid
  gap 17
  padding-bottom 32
  border-bottom 1px solid #dddbd3

  h1 {
    font-size clamp(40px, 6vw, 65px)
    line-height 1
    letter-spacing -0.055em
  }

  p {
    max-width 65ch
    color #6e6f69
    font-size 16
    line-height 1.62
  }
`

const Breadcrumb = s`div
  display flex
  align-items center
  gap 7
  color #88877f
  font-size 11
  font-weight 650

  a {
    text-decoration none
  }

  a:hover {
    color #20211f
  }
`

const Meta = s`div
  display flex
  flex-wrap wrap
  align-items center
  gap 7
`

const Tag = s`span
  padding 5 8
  border 1px solid #d9d6cd
  border-radius 99
  color #6c6c66
  font-size 10
  font-weight 650
`

const ArticleGrid = s`div
  display grid
  grid-template-columns minmax(0, 1fr) 190px
  gap 58
  align-items start

  @media (max-width: 980px) {
    grid-template-columns 1fr

    > aside {
      display none
    }
  }
`

const Article = s`article
  min-width 0
  display grid
  gap 48

  section {
    display grid
    gap 14
    scroll-margin-top 24
  }

  h2 {
    font-size 23
    letter-spacing -0.035em
  }

  h3 {
    font-size 15
    letter-spacing -0.015em
  }

  p,
  li {
    color #656660
    font-size 14
    line-height 1.68
  }

  ul {
    display grid
    gap 8
    padding-left 19
  }
`

const Toc = s`aside
  position sticky
  top 28
  display grid
  gap 10

  strong {
    color #88877f
    font-size 10
    font-weight 770
    letter-spacing 0.1em
    text-transform uppercase
  }

  a {
    color #77776f
    font-size 12
    text-decoration none
  }

  a:hover {
    color #20211f
  }
`

const Example = s`div
  min-height 230
  display grid
  place-items center
  padding 28
  border 1px solid #dad7ce
  border-radius 15 15 0 0
  background-color #f2f0e9
  background-image radial-gradient(#d8d4c9 0.7px, transparent 0.7px)
  background-size 13px 13px
`

const ThemeMatrix = s`div
  display grid
  gap 16
`

const ThemeGroup = s`section
  display grid
  gap 9
  padding 16
  border 1px solid #dad7ce
  border-radius 14
  background #fff

  h3 {
    color #77766f
    font-size 10
    font-weight 780
    letter-spacing 0.1em
    text-transform uppercase
  }
`

const ThemeOptions = s`div
  display flex
  flex-wrap wrap
  align-items center
  gap 9
`

const ThemeOption = s`div
  min-width 116
  display grid
  justify-items start
  gap 8
  padding 12
  border 1px solid #e2dfd7
  border-radius 10
  background #f8f7f3

  > span {
    color #88877f
    font-size 10
    font-weight 680
  }

  &[data-dark] {
    color-scheme dark
    border-color #333
    background #111

    > span {
      color #aaa
    }
  }
`

const Code = s`pre
  overflow-x auto
  padding 18 20
  border-radius 0 0 15px 15px
  background #242522
  color #e9e8e2
  font-family "SFMono-Regular", Consolas, "Liberation Mono", monospace
  font-size 12
  line-height 1.65
  tab-size 2
`

const Anatomy = s`div
  display flex
  flex-wrap wrap
  align-items center
  gap 7

  code {
    padding 7 9
    border 1px solid #dcd9d0
    border-radius 7
    background #efede7
    color #53544f
    font-family "SFMono-Regular", Consolas, monospace
    font-size 11
  }

  span {
    color #aaa79e
    font-size 11
  }
`

const Note = s`div
  padding 15 17
  border-left 3px solid #7a67d9
  border-radius 0 9px 9px 0
  background #efecff
  color #5e5683
  font-size 13
  line-height 1.58
`

function ShellContent(content, route) {
  const overview = route.has('/')
  const component = route.has('/components/dropdown')

  return [
    Sidebar(
      Brand({ href: '/' }, Mark('S'), s`span`(s`strong`('Sinewy'), s`span`('Documentation'))),
      Navigation(
        NavGroup(
          s`h2`('Start here'),
          NavLink({ href: '/', data: { active: overview || undefined } }, 'Overview')
        ),
        NavGroup(
          s`h2`('Components'),
          NavLink({ href: '/components/dropdown', data: { active: component || undefined } }, 'Dropdown', s`span`('Preview'))
        )
      ),
      SideFooter(s`strong`('Independent preview'), 'Built for Sin.js with the platform.')
    ),
    Main(content)
  ]
}

function Overview({}, [], { route }) {
  return ShellContent([
    MobileHeader(route),
    Page(
      Hero(
        Eyebrow('Independent components for Sin.js'),
        s`h1`('Small parts. Native behavior.'),
        s`p`('Sinewy is an independently maintained component library for Sin.js. This site documents each public surface as it becomes useful, testable, and honest about its platform boundaries.')
      ),
      Section(
        s`header`(s`h2`('Where things stand'), s`p`('The status here follows implemented and verified behavior, not a speculative component catalog.')),
        StatusGrid(
          StatusCard(StatusTop(s`strong`('Dropdown API'), Badge('Reviewed')), s`p`('Names, composition rules, state modes, and source entrypoints are frozen for the preview.'), Progress(s`span`({ style: { width: '100%' } }))),
          StatusCard(StatusTop(s`strong`('Behavior suite'), Badge('Green')), s`p`('Browser, server rendering, hydration, deep submenu, and type declaration coverage are in place.'), Progress(s`span`({ style: { width: '100%' } }))),
          StatusCard(StatusTop(s`strong`('Accessibility sign-off'), Badge({ data: { tone: 'manual' } }, 'Manual')), s`p`('Keyboard behavior is covered; supported-browser and assistive-technology verification remains.'))
        )
      ),
      Section(
        s`header`(s`h2`('Components'), s`p`('Each component page combines the reviewed contract, a live example, implementation status, and known limits.')),
        ComponentCard({ href: '/components/dropdown' },
          s`div`(s`h3`('Dropdown'), s`p`('Actions, checkbox and radio choices, nested menus, room-aware placement, and a theme facade.')),
          Arrow('→')
        )
      ),
      Section({ id: 'roadmap' },
        s`header`(s`h2`('Documentation roadmap'), s`p`('The site itself becomes the visible checklist for turning implementation work into a usable system.')),
        Roadmap(
          s`li`(Step({ data: { done: '' } }, '✓'), s`div`(s`strong`('Freeze the first component contract'), 'Dropdown public names and behavior boundaries reviewed.')),
          s`li`(Step({ data: { current: '' } }, '2'), s`div`(s`strong`('Establish the documentation shell'), 'Navigation, progress overview, component layout, and live examples.')),
          s`li`(Step('3'), s`div`(s`strong`('Render portable Markdown'), 'Make the generator-neutral component documents feed the site directly.')),
          s`li`(Step('4'), s`div`(s`strong`('Expand through real components'), 'Add primitives only as their contracts become concrete enough to document.'))
        )
      )
    )
  ], route)
}

function DropdownPage({}, [], { route }) {
  return ShellContent([
    MobileHeader(route),
    Page(
      ArticleHeader(
        Breadcrumb(s`a`({ href: '/' }, 'Components'), s`span`('/'), s`span`('Dropdown')),
        Meta(Badge('API reviewed'), Tag('Popover API'), Tag('CSS anchors'), Tag('Headless + theme')),
        s`h1`('Dropdown'),
        s`p`('A composable menu for actions and choices, with native top-layer rendering, browser-owned collision fallback, keyboard navigation, and Sin-native controlled or live-bound state.')
      ),
      ArticleGrid(
        Article(
          s`section#example`(
            s`h2`('Example'),
            s`p`('The themed facade keeps the headless part structure and remains open to normal Sin style extension.'),
            s`div`(
              Example(DropdownExample()),
              Code(`import Dropdown from 'sinewy/theme'\n\nDropdown(\n  Dropdown.Trigger({ variant: 'outline', color: 'accent' },\n    'Open menu',\n    Dropdown.TriggerIcon()\n  ),\n  Dropdown.Content({ size: '2', variant: 'soft', color: 'indigo' },\n    Dropdown.Item('Edit'),\n    Dropdown.Checkbox({ checked: true },\n      Dropdown.Indicator('✓'),\n      'Notifications'\n    ),\n    Dropdown.Item({ color: 'red' }, 'Delete')\n  )\n)`)
            )
          ),
          s`section#theme`(
            s`h2`('Theme'),
            s`p`('Size and color establish an inherited menu scope. Items and nested menus follow it by default, while any part can make a deliberate local override.'),
            ThemeMatrix(
              ThemeGroup(
                s`h3`('Sizes'),
                ThemeOptions(
                  ThemePreview({ label: 'Size 1', size: '1', color: 'indigo' }),
                  ThemePreview({ label: 'Size 2', size: '2', color: 'indigo' }),
                  ThemePreview({ label: 'Size 3', size: '3', color: 'indigo' })
                )
              ),
              ThemeGroup(
                s`h3`('Menu variants'),
                ThemeOptions(
                  ThemePreview({ label: 'Solid', variant: 'solid', color: 'purple' }),
                  ThemePreview({ label: 'Soft', variant: 'soft', color: 'purple' })
                )
              ),
              ThemeGroup(
                s`h3`('Colors'),
                ThemeOptions(
                  ...['gray', 'indigo', 'cyan', 'green', 'amber', 'orange', 'crimson', 'purple'].map(color =>
                    ThemePreview({ label: capitalize(color), variant: 'soft', color })
                  )
                )
              ),
              ThemeGroup(
                s`h3`('Appearance'),
                ThemeOptions(
                  ThemePreview({ label: 'High contrast', color: 'amber', highContrast: true }),
                  ThemePreview({ label: 'Dark cyan', color: 'cyan', dark: true })
                )
              )
            )
          ),
          s`section#overview`(
            s`h2`('Overview'),
            s`p`('Dropdown supplies roles, relationships, state synchronization, focus movement, typeahead, selection semantics, checkable items, radio groups, and nested menus. It deliberately leaves product styling to the caller unless the theme entrypoint is used.'),
            Note('Current evergreen browsers are the first target. Native popovers provide the top layer, light dismissal, and Escape behavior; CSS Anchor Positioning provides placement and room-aware fallbacks.')
          ),
          s`section#import`(
            s`h2`('Import'),
            s`h3`('Headless'),
            Code(`import { Dropdown } from 'sinewy'`),
            s`h3`('Themed'),
            Code(`import Dropdown from 'sinewy/theme'`)
          ),
          s`section#anatomy`(
            s`h2`('Anatomy'),
            s`p`('The root is directly callable. Component identifiers use PascalCase, while callbacks retain Sin\'s lower-case event naming.'),
            Anatomy(
              s`code`('Dropdown'), s`span`('→'),
              s`code`('.Trigger'), s`span`('+'),
              s`code`('.Content'), s`span`('→'),
              s`code`('.Item / .Checkbox / .Radio / .Sub')
            )
          ),
          s`section#status`(
            s`h2`('Status and limits'),
            s`ul`(
              s`li`('The source-level component and attribute names are reviewed and frozen for the current-browser preview.'),
              s`li`('An arrow, modal mode, collision padding, outside-interaction callbacks, and legacy positioning are not reserved APIs.'),
              s`li`('Content remains mounted while closed, so a compatibility-only content forceMount attribute is deliberately not exposed.'),
              s`li`('Production accessibility sign-off still requires manual keyboard and assistive-technology testing in each supported browser.')
            )
          )
        ),
        Toc(
          s`strong`('On this page'),
          s`a`({ href: '#example' }, 'Example'),
          s`a`({ href: '#theme' }, 'Theme'),
          s`a`({ href: '#overview' }, 'Overview'),
          s`a`({ href: '#import' }, 'Import'),
          s`a`({ href: '#anatomy' }, 'Anatomy'),
          s`a`({ href: '#status' }, 'Status and limits')
        )
      )
    )
  ], route)
}

const DropdownExample = s(() => {
  const notifications = s.live(true)

  return () => Dropdown(
    Dropdown.Trigger({ variant: 'outline', color: 'accent', size: '2' },
      'Open menu',
      Dropdown.TriggerIcon()
    ),
    Dropdown.Content({ align: 'start', offset: 7, variant: 'soft', color: 'indigo' },
      Dropdown.Label('Workspace'),
      Dropdown.Item({ shortcut: '⌘ E' }, 'Edit details'),
      Dropdown.Checkbox({ bind: notifications },
        Dropdown.Indicator('✓'),
        'Notifications'
      ),
      Dropdown.Separator(),
      Dropdown.Sub(
        Dropdown.SubTrigger('Share'),
        Dropdown.SubContent(
          Dropdown.Item('Copy link'),
          Dropdown.Item('Invite people')
        )
      )
    )
  )
})

function ThemePreview({ label, size = '2', variant = 'solid', color, highContrast = false, dark = false }) {
  return ThemeOption({ data: { dark: dark || null } },
    s`span`(label),
    Dropdown(
      Dropdown.Trigger({
        size,
        variant: variant === 'soft' ? 'soft' : 'outline',
        color,
        highContrast
      }, 'Open', Dropdown.TriggerIcon()),
      Dropdown.Content({ size, variant, color, highContrast, align: 'start', offset: 6 },
        Dropdown.Item({ shortcut: '⌘ E' }, 'Edit'),
        Dropdown.Checkbox({ checked: true }, Dropdown.Indicator('✓'), 'Enabled'),
        Dropdown.Item({ color: 'red' }, 'Delete')
      )
    )
  )
}

function capitalize(value) {
  return value[0].toUpperCase() + value.slice(1)
}

function MobileHeader(route) {
  return s`header
    display none
    align-items center
    justify-content space-between
    gap 12
    padding 14 20
    border-bottom 1px solid #dfddd6
    background #faf9f6

    @media (max-width: 780px) {
      display flex
    }
  `(
    Brand({ href: '/' }, Mark('S'), s`strong`('Sinewy')),
    MobileNav(
      MobileLink({ href: '/', data: { active: route.has('/') || undefined } }, 'Overview'),
      MobileLink({ href: '/components/dropdown', data: { active: route.has('/components/dropdown') || undefined } }, 'Dropdown')
    )
  )
}

function NotFound({}, [], { route }) {
  return ShellContent([
    MobileHeader(route),
    Page(
      ArticleHeader(
        Eyebrow('404'),
        s`h1`('Nothing here yet.'),
        s`p`('This documentation is growing alongside the component system.'),
        ComponentCard({ href: '/' }, s`div`(s`h3`('Return to the overview'), s`p`('See current progress and available component pages.')), Arrow('→'))
      )
    )
  ], route)
}

s.mount(App)
