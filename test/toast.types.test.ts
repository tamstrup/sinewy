import s from 'sin'
import { Toast } from '../src/index.js'
import ToastModule from '../src/toast.js'
import { Toast as Themed } from '../src/theme.js'
Toast.Viewport({ position: 'bottom-start', 'aria-label': 'Notifications' },
  Toast({ bind: s.live(true), duration: 5000, onopenchange(open, event) { const value: boolean = open; void value; void event?.type } },
    'Saved', Toast.Close({ disabled: false, 'aria-label': 'Dismiss' })
  )
)
Themed({ color: 'green', open: true }, 'Saved', Themed.Close())
ToastModule({ defaultOpen: false })
// @ts-expect-error supported placement is explicit
Toast.Viewport({ position: 'center' })
// @ts-expect-error duration is milliseconds
Toast({ duration: '5s' })
// @ts-expect-error visibility is boolean
Toast({ bind: s.live('open') })
