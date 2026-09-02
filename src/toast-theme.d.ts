import s from 'sin'
import type { Toast as Primitive, ToastAttrs } from './toast.js'
import type { ThemeColor } from './theme-options.js'
export type Toast = s.Component<HTMLDivElement, ToastAttrs & { color?: ThemeColor }, s.Children[]> & {
  Viewport: Primitive['Viewport']
  Close: Primitive['Close']
}
declare const Toast: Toast
export { Toast }
export default Toast
