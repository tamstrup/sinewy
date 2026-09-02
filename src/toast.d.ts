import s from 'sin'

export type ToastBinding<T> = T extends unknown ? s.Live<T> : never
export interface ToastAttrs {
  open?: boolean
  defaultOpen?: boolean
  bind?: ToastBinding<boolean>
  duration?: number
  onopenchange?: (open: boolean, event?: Event) => unknown
}
export interface ToastViewportAttrs {
  position?: 'bottom-end' | 'bottom-start' | 'top-end' | 'top-start'
}
export type Toast = s.Component<HTMLDivElement, ToastAttrs, s.Children[]> & {
  Viewport: s.Component<HTMLDivElement, ToastViewportAttrs, s.Children[]>
  Close: s.Component<HTMLButtonElement, {}, s.Children[]>
}
declare const Toast: Toast
export { Toast }
export default Toast
