import s from 'sin'
import { translate } from './messages.js'
import {
  defaults,
  formatAmount,
  formatDate,
  formatNumber,
  normalizePreferences,
  PREFERENCES_KEY,
  readPreferences,
} from './format.js'

// One instance per mounted application (and, eventually, per SSR request).
export function createI18n() {
  const preferences = s.live({ ...defaults })
  const storageAvailable = s.live(true)
  const t = (key, params) => translate(preferences().language, preferences().locale, key, params)
  return {
    preferences,
    storageAvailable,
    t,
    load() {
      try {
        preferences(readPreferences(localStorage, () => storageAvailable(false)))
      } catch {
        storageAvailable(false)
      }
    },
    update(patch) {
      const value = normalizePreferences({ ...preferences(), ...patch })
      preferences(value)
      try {
        localStorage.setItem(PREFERENCES_KEY, JSON.stringify(value))
        storageAvailable(true)
      } catch {
        storageAvailable(false)
      }
    },
    amount: (value, sign = false) => formatAmount(value, preferences().locale, sign),
    number: (value) => formatNumber(value, preferences().locale),
    date: (value, options) => formatDate(value, preferences().locale, options),
    period(filters) {
      if (filters.day) return this.date(filters.day)
      if (filters.month) {
        return this.date(`${filters.year || '2026'}-${filters.month}-01`, {
          month: 'long',
          ...(filters.year ? { year: 'numeric' } : {}),
        })
      }
      return filters.year || t('allDates')
    },
  }
}
