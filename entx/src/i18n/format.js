const numbers = new Map()
const dates = new Map()

export function formatNumber(value, locale, options = {}) {
  const key = JSON.stringify([locale, options])
  if (!numbers.has(key)) numbers.set(key, new Intl.NumberFormat(locale, options))
  return numbers.get(key).format(value)
}

// Ledger dates are calendar dates, not instants in the user's timezone.
export function formatDate(
  value,
  locale,
  options = { day: 'numeric', month: 'short', year: 'numeric' },
) {
  const date = new Date(`${value}T12:00:00Z`)
  if (!Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== value) return value
  const key = JSON.stringify([locale, options])
  if (!dates.has(key)) {
    dates.set(key, new Intl.DateTimeFormat(locale, { ...options, timeZone: 'UTC' }))
  }
  return dates.get(key).format(date)
}

export function formatAmount(value, locale, showSign = false, grouping = true) {
  return formatNumber(value, locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: grouping,
    signDisplay: showSign ? 'exceptZero' : 'auto',
  })
}

// Deliberately strict: never guess whether an alternate separator is a decimal.
// The prototype supports two-decimal amounts, matching its existing ledger model.
export function parseAmount(raw, locale) {
  const text = raw.trim().replace(/\u2212/g, '-')
  if (!text) return { state: 'empty', value: '' }
  const decimal = locale === 'da-DK' ? ',' : '.'
  const group = locale === 'da-DK' ? '.' : ','
  const escapedGroup = group === '.' ? '\\.' : group
  const escapedDecimal = decimal === '.' ? '\\.' : decimal
  const integer = `(?:\\d+|\\d{1,3}(?:${escapedGroup}\\d{3})+)`
  if (/^[+-]$/.test(text) || new RegExp(`^[+-]?${integer}${escapedDecimal}$`).test(text)) {
    return { state: 'partial', value: '' }
  }
  if (
    !new RegExp(`^[+-]?(?:${integer}(?:${escapedDecimal}\\d{1,2})?|${escapedDecimal}\\d{1,2})$`)
      .test(text)
  ) {
    return { state: 'invalid', value: '' }
  }
  const canonical = text.split(group).join('').replace(decimal, '.')
  const value = Number(canonical)
  // Keep amounts within a range where the prototype's cent arithmetic is safe.
  if (!Number.isFinite(value) || Math.abs(value) > 1_000_000_000_000) {
    return { state: 'invalid', value: '' }
  }
  return { state: 'valid', value: Object.is(value, -0) ? 0 : value }
}

export const PREFERENCES_KEY = 'entx.preferences.v1'
export const defaults = { language: 'da', locale: 'da-DK', commodity: 'DKK' }

export function normalizePreferences(value) {
  return {
    language: ['da', 'en'].includes(value?.language) ? value.language : defaults.language,
    locale: ['da-DK', 'en-GB'].includes(value?.locale) ? value.locale : defaults.locale,
    commodity: ['DKK', 'EUR', 'USD', 'GBP'].includes(value?.commodity)
      ? value.commodity
      : defaults.commodity,
  }
}

export function readPreferences(storage, onUnavailable = () => {}) {
  let raw
  try {
    raw = storage.getItem(PREFERENCES_KEY)
  } catch {
    onUnavailable()
    return { ...defaults }
  }
  try {
    return normalizePreferences(JSON.parse(raw))
  } catch {
    return { ...defaults }
  }
}
