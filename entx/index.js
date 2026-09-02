import s from 'sin'
import App, { TOPBAR_COLOR } from './src/app.js'

export default s.mount((_attrs, _children, { doc }) => {
  doc.head(s`meta`({ name: 'theme-color', content: TOPBAR_COLOR }))
  return () => App()
})
