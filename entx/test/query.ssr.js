import assert from 'node:assert/strict'
import test from 'node:test'
import s from 'sin'
import ssr from 'sin/ssr'
import App from '../src/app.js'

test('Query preserves the empty error slot before the split panel during hydration', async () => {
  const { html } = await ssr(s.mount(App), {}, { location: '/query' })
  // An empty string emits no SSR node, shifting the split panel onto the toast viewport on hydration.
  assert.match(html, /<!--null--><div [^>]*id="query-split"/)
  assert.match(html, /role="status"[^>]*data-toast-viewport=""[^>]*><!--null--><\/div>/)
  assert.doesNotMatch(html, /data-toast=""/)
})
