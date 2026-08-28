export type ThemeSize = '1' | '2' | '3'

export type ThemeColor =
  | 'gray'
  | 'accent'
  | 'red'
  | 'orange'
  | 'amber'
  | 'green'
  | 'teal'
  | 'cyan'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'
  | 'crimson'

export type ControlVariant = 'solid' | 'soft' | 'outline' | 'ghost'

export interface ThemeOptions {
  size?: ThemeSize
  color?: ThemeColor
  highContrast?: boolean
}

export interface ControlThemeOptions extends ThemeOptions {
  variant?: ControlVariant
}

export function themedData(
  data: Record<string, unknown> | undefined,
  values: Record<string, unknown>
): Record<string, unknown>
