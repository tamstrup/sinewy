import s from 'sin'
import { ContextMenu } from '../src/theme.js'

s.css.reset``

const Target = ContextMenu.Trigger`
  width min(520px, calc(100vw - 48px))
  min-height 260
  display grid
  place-items center
  margin 48px auto
  border 1px dashed #8b7dd8
  border-radius 18
  background #f7f5ff
  color #55489b
  font 700 15px/1.5 system-ui, sans-serif
  user-select none

  &:focus-visible {
    outline 3px solid rgb(111 91 211 / 0.3)
    outline-offset 3px
  }
`

const App = () => ContextMenu(
  Target('Right-click, press and hold, or focus this area and press Shift+F10.'),
  ContextMenu.Content({ variant: 'soft', color: 'indigo' },
    ContextMenu.Item({ onselect: () => console.log('Rename'), shortcut: '⌘ R' }, 'Rename'),
    ContextMenu.Item({ onselect: () => console.log('Duplicate'), shortcut: '⌘ D' }, 'Duplicate'),
    ContextMenu.Separator(),
    ContextMenu.Item({ onselect: () => console.log('Delete'), color: 'red' }, 'Delete')
  )
)

s.mount(App)
