// An intentionally local demo, not an AI client or a general natural-language parser.
// Only fixed templates and a validated year are used; prompt text is never interpolated into SQL.
import { examples } from './model.js'

export function mockAiQuery(prompt) {
  const text = prompt.toLocaleLowerCase('en')
  const year = /\b(20\d{2})\b/.exec(text)?.[1]
  const dates = year
    ? `\n  and date >= '${year}-01-01'\n  and date < '${Number(year) + 1}-01-01'`
    : ''
  if (/expense|spend|cost|udgift|omkostning/.test(text)) {
    return {
      topic: 'expenses',
      sql: `select date_trunc('month', date) as month, commodity,
       sum(amount) as expenses
from ledger_entries
where status = 'committed'
  and account_type = 'Expenses'${dates}
group by month, commodity
order by month, commodity;`,
    }
  }
  if (/income|revenue|indtægt|omsætning/.test(text)) {
    return {
      topic: 'income',
      sql: `select date_trunc('month', date) as month, commodity,
       -sum(amount) as income
from ledger_entries
where status = 'committed'
  and account_type = 'Income'${dates}
group by month, commodity
order by month, commodity;`,
    }
  }
  if (/balance|saldo|konti/.test(text)) return { topic: 'accounts', sql: examples.accounts }
  if (/document|file|voucher|bilag|dokument|fil\b/.test(text)) {
    return { topic: 'documents', sql: examples.documents }
  }
  return { topic: 'fallback', sql: examples.ledger_entries }
}
