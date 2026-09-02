import s from 'sin'
import t from 'sin/test'
import ssr from 'sin/ssr'
import { Toast } from '../src/index.js'
import { Toast as Themed } from '../src/theme.js'

t`toast ssr`(
  t`renders an empty live region before notifications without browser globals`(async() => {
    const result = await ssr(s.mount(() => Toast.Viewport(Toast({ open: false }, 'Not shown'))), {})
    t.is(true, result.html.includes('role="status"'))
    t.is(true, result.html.includes('aria-live="polite"'))
    return [false, result.html.includes('Not shown')]
  }),
  t`renders themed content, localizable dismissal and logical placement`(async() => {
    const result = await ssr(s.mount(() => Themed.Viewport({ position: 'top-start', 'aria-label': 'Beskeder' },
      Themed({ duration: 0 }, 'Gemt', Themed.Close({ 'aria-label': 'Luk besked' }))
    )), {})
    t.is(true, result.html.includes('data-position="top-start"'))
    t.is(true, result.html.includes('aria-label="Luk besked"'))
    t.is(true, result.html.includes('type="button"'))
    return [false, result.html.includes('duration=')]
  })
)
