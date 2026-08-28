import s from 'sin'
import ContextMenu from '../src/context-menu.js'

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

const Content = ContextMenu.Content`
  width 210
  padding 6
  border 1px solid #ded9f7
  border-radius 11
  background white
  box-shadow 0 18px 50px rgb(39 31 73 / 0.18)
`

const Item = ContextMenu.Item`
  width 100%
  min-height 34
  padding 7 9
  border 0
  border-radius 7
  background transparent
  color #302a4f
  font-size 14
  line-height 20px
  text-align left

  &[data-highlighted] {
    background #6f5bd3
    color white
  }
`

const Separator = ContextMenu.Separator`
  height 1
  margin 5
  background #ece9f8
`

const App = () => ContextMenu(
  Target('Right-click, press and hold, or focus this area and press Shift+F10.'),
  Content(
    Item({ onselect: () => console.log('Rename') }, 'Rename'),
    Item({ onselect: () => console.log('Duplicate') }, 'Duplicate'),
    Separator(),
    Item({ onselect: () => console.log('Delete') }, 'Delete')
  )
)

s.mount(App)
