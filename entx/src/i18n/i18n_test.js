import { da, en, translate } from './messages.js'
import {
  defaults,
  formatAmount,
  formatDate,
  normalizePreferences,
  parseAmount,
  readPreferences,
} from './format.js'

function equal(actual, expected) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(`Expected ${JSON.stringify(expected)}, received ${JSON.stringify(actual)}`)
  }
}

Deno.test('Danish and English messages have matching keys, plurals and parameters', () => {
  equal(Object.keys(da).sort(), Object.keys(en).sort())
  const parameters = (text) => [...text.matchAll(/\{(\w+)\}/g)].map((match) => match[1]).sort()
  for (const key of Object.keys(en)) {
    equal(typeof da[key], typeof en[key])
    if (typeof en[key] === 'string') equal(parameters(da[key]), parameters(en[key]))
    else {
      equal(Object.keys(da[key]).sort(), Object.keys(en[key]).sort())
      for (const plural of Object.keys(en[key])) {
        equal(parameters(da[key][plural]), parameters(en[key][plural]))
      }
    }
  }
})

Deno.test('whole messages pluralize and interpolate in the chosen regional format', () => {
  equal(translate('da', 'da-DK', 'postQuestion', { count: 1 }), 'Bogfør 1 transaktion?')
  equal(translate('da', 'da-DK', 'postQuestion', { count: 0 }), 'Bogfør 0 transaktioner?')
  equal(translate('en', 'da-DK', 'postQuestion', { count: 1234 }), 'Post 1.234 transactions?')
  equal(translate('en', 'en-GB', 'postQuestion', { count: 1234 }), 'Post 1,234 transactions?')
  equal(
    translate('da', 'da-DK', 'selectDraft', { description: '<script>{count}</script>' }),
    'Vælg <script>{count}</script>',
  )
})

Deno.test('amount display uses locale delimiters, signs and two decimal places', () => {
  equal(formatAmount(1234.56, 'da-DK'), '1.234,56')
  equal(formatAmount(-1234.56, 'en-GB'), '-1,234.56')
  equal(formatAmount(0, 'da-DK', true), '0,00')
  equal(formatAmount(12, 'en-GB', true), '+12.00')
})

Deno.test('date-only values are formatted in UTC regardless of the machine timezone', () => {
  equal(formatDate('2026-09-02', 'en-GB'), '2 Sept 2026')
  equal(formatDate('2026-09-02', 'da-DK'), '2. sep. 2026')
  equal(formatDate('2026-02-30', 'da-DK'), '2026-02-30')
  equal(formatDate('2026-01-01', 'en-GB', { day: 'numeric', timeZone: 'Pacific/Honolulu' }), '1')
})

Deno.test('amount input parses explicit regional formats without guessing separators', () => {
  for (
    const [raw, locale, value] of [
      ['1.234,56', 'da-DK', 1234.56],
      ['-1234,56', 'da-DK', -1234.56],
      ['1,234.56', 'en-GB', 1234.56],
      ['−1,234.56', 'en-GB', -1234.56],
      [',5', 'da-DK', .5],
      ['.5', 'en-GB', .5],
      ['0', 'da-DK', 0],
      ['1.234', 'da-DK', 1234],
      ['1,234', 'en-GB', 1234],
    ]
  ) equal(parseAmount(raw, locale), { state: 'valid', value })
  for (
    const [raw, locale] of [
      ['1.23', 'da-DK'],
      ['1,23', 'en-GB'],
      ['1,234.56', 'da-DK'],
      ['1.234,56', 'en-GB'],
      ['1.23,45', 'da-DK'],
      ['12,3456', 'da-DK'],
      ['12.3456', 'en-GB'],
      ['1e3', 'en-GB'],
      ['Infinity', 'en-GB'],
      ['1 234,56', 'da-DK'],
      ['2,000,000,000,000', 'en-GB'],
    ]
  ) equal(parseAmount(raw, locale), { state: 'invalid', value: '' })
})

Deno.test('partial and empty amount edits never supply a postable value', () => {
  for (
    const [raw, locale] of [['-', 'da-DK'], ['+', 'en-GB'], ['123,', 'da-DK'], ['123.', 'en-GB']]
  ) {
    equal(parseAmount(raw, locale), { state: 'partial', value: '' })
  }
  equal(parseAmount('', 'da-DK'), { state: 'empty', value: '' })
})

Deno.test('preference loading validates untrusted, missing or unavailable storage', () => {
  equal(normalizePreferences({ language: 'xx', locale: 'en-US', commodity: 'BTC' }), defaults)
  equal(readPreferences({ getItem: () => '{bad json' }), defaults)
  equal(readPreferences({ getItem: () => null }), defaults)
  equal(
    readPreferences({
      getItem() {
        throw new Error('denied')
      },
    }),
    defaults,
  )
  equal(normalizePreferences({ language: 'en', locale: 'da-DK', commodity: 'EUR' }), {
    language: 'en',
    locale: 'da-DK',
    commodity: 'EUR',
    sidebarVisible: true,
  })
  equal(normalizePreferences({ sidebarVisible: false }), { ...defaults, sidebarVisible: false })
  equal(normalizePreferences({ sidebarVisible: 'false' }), defaults)
})
