import s from 'sin'
import Button from '../src/button.js'

s.css.reset``
s.css`
  :root {
    color-scheme light dark
    font-family Inter, ui-sans-serif, system-ui, sans-serif
    background light-dark(#f4f3ef, #111)
    color light-dark(#20201e, #eee)
  }
`

const Stage = s`main
  min-height 100svh
  display grid
  place-items center
  padding 32
`

const Matrix = s`div
  display flex
  flex-wrap wrap
  align-items center
  gap 12
  padding 24
`

const App = () => Stage(
  Matrix(
    Button({ variant: 'solid' }, 'Save'),
    Button({ variant: 'soft', color: 'cyan' }, 'Duplicate'),
    Button({ variant: 'outline', color: 'green' }, 'Publish'),
    Button({ variant: 'ghost', color: 'red' }, 'Delete'),
    Button({ disabled: true }, 'Unavailable')
  )
)

s.mount(App)
