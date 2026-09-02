export const DEFAULT_COMMODITY = 'DKK'

export const initialTransactions = [
  {
    id: 'draft-1',
    status: 'draft',
    date: '2026-09-02',
    description: 'Train to client workshop',
    legs: [
      { id: 'draft-1-1', account: ['Assets', 'Bank'], amount: -384, commodity: 'DKK' },
      { id: 'draft-1-2', account: ['Expenses', 'Travel'], amount: 320, commodity: 'DKK' },
    ],
  },
  {
    id: 'txn-1007',
    status: 'committed',
    date: '2026-08-29',
    description: 'Office rent · September',
    legs: [
      {
        id: 'txn-1007-1',
        account: ['Expenses', 'Office', 'Rent'],
        amount: 16500,
        commodity: 'DKK',
      },
      { id: 'txn-1007-2', account: ['Assets', 'Bank'], amount: -16500, commodity: 'DKK' },
    ],
  },
  {
    id: 'txn-1006',
    status: 'committed',
    date: '2026-08-28',
    description: 'Acme ApS · invoice 1042',
    legs: [
      { id: 'txn-1006-1', account: ['Assets', 'Bank'], amount: 31250, commodity: 'DKK' },
      { id: 'txn-1006-2', account: ['Income', 'Consulting'], amount: -25000, commodity: 'DKK' },
      { id: 'txn-1006-3', account: ['Liabilities', 'VAT'], amount: -6250, commodity: 'DKK' },
    ],
  },
  {
    id: 'txn-1005',
    status: 'committed',
    date: '2026-08-24',
    description: 'Adobe Creative Cloud',
    legs: [
      { id: 'txn-1005-1', account: ['Expenses', 'Software'], amount: 439, commodity: 'DKK' },
      { id: 'txn-1005-2', account: ['Assets', 'VAT receivable'], amount: 109.75, commodity: 'DKK' },
      { id: 'txn-1005-3', account: ['Assets', 'Bank'], amount: -548.75, commodity: 'DKK' },
    ],
  },
  {
    id: 'txn-1004',
    status: 'committed',
    date: '2026-08-15',
    description: 'Owner transfer',
    legs: [
      { id: 'txn-1004-1', account: ['Assets', 'Bank'], amount: 20000, commodity: 'DKK' },
      { id: 'txn-1004-2', account: ['Equity', 'Owner'], amount: -20000, commodity: 'DKK' },
    ],
  },
  {
    id: 'txn-1003',
    status: 'committed',
    date: '2026-07-31',
    description: 'Mobile subscription · July',
    legs: [
      { id: 'txn-1003-1', account: ['Expenses', 'Phone'], amount: 319.2, commodity: 'DKK' },
      { id: 'txn-1003-2', account: ['Assets', 'VAT receivable'], amount: 79.8, commodity: 'DKK' },
      { id: 'txn-1003-3', account: ['Assets', 'Bank'], amount: -399, commodity: 'DKK' },
    ],
  },
  {
    id: 'txn-1002',
    status: 'committed',
    date: '2026-07-18',
    description: 'Nordic Design A/S · invoice 1041',
    legs: [
      { id: 'txn-1002-1', account: ['Assets', 'Bank'], amount: 56250, commodity: 'DKK' },
      { id: 'txn-1002-2', account: ['Income', 'Consulting'], amount: -45000, commodity: 'DKK' },
      { id: 'txn-1002-3', account: ['Liabilities', 'VAT'], amount: -11250, commodity: 'DKK' },
    ],
  },
  {
    id: 'txn-1001',
    status: 'committed',
    date: '2026-06-30',
    description: 'Bank interest',
    legs: [
      { id: 'txn-1001-1', account: ['Assets', 'Bank'], amount: 42.17, commodity: 'DKK' },
      { id: 'txn-1001-2', account: ['Income', 'Interest'], amount: -42.17, commodity: 'DKK' },
    ],
  },
]

export function accountLabel(account) {
  return account.join(':')
}

export function parseAccount(value) {
  return value.split(':').map((segment) => segment.trim()).filter(Boolean)
}

export function transactionTotal(transaction) {
  return round(transaction.legs.reduce((total, leg) => total + Number(leg.amount || 0), 0))
}

export function isBalanced(transaction) {
  return transaction.legs.length >= 2 &&
    transactionTotals(transaction).every(({ amount }) => amount === 0)
}

export function transactionTotals(transaction) {
  const totals = new Map()
  for (const leg of transaction.legs) {
    const commodity = leg.commodity || DEFAULT_COMMODITY
    totals.set(commodity, round((totals.get(commodity) || 0) + Number(leg.amount || 0)))
  }
  return [...totals].map(([commodity, amount]) => ({ commodity, amount }))
}

export function draftReadiness(transaction) {
  const date = new Date(`${transaction.date}T12:00:00Z`)
  const validDate = /^\d{4}-\d{2}-\d{2}$/.test(transaction.date) &&
    Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === transaction.date
  const complete = validDate && transaction.description.trim() && transaction.legs.length >= 2 &&
    transaction.legs.every((leg) =>
      leg.account.length && leg.account.every((part) => part.trim()) &&
      leg.amount !== '' && leg.amount !== null && Number.isFinite(Number(leg.amount)) &&
      typeof leg.commodity === 'string' && leg.commodity.trim()
    )
  return !complete ? 'incomplete' : isBalanced(transaction) ? 'ready' : 'unbalanced'
}

export function transactionsForTab(transactions, tab, filters) {
  return filterTransactions(
    transactions.filter(({ status }) => status === (tab === 'drafts' ? 'draft' : 'committed')),
    filters,
  )
}

export function postDrafts(transactions, ids, postedAt = new Date().toISOString()) {
  const selected = new Set(ids)
  const drafts = transactions.filter(({ id }) => selected.has(id))
  if (
    !selected.size || drafts.length !== selected.size ||
    drafts.some((draft) => draft.status !== 'draft' || draftReadiness(draft) !== 'ready')
  ) {
    throw new Error('Only complete, balanced drafts can be posted.')
  }
  return transactions.map((transaction) =>
    selected.has(transaction.id)
      ? { ...structuredClone(transaction), status: 'committed', postedAt }
      : transaction
  )
}

export function createCorrection(source, id, date) {
  if (source.status !== 'committed') throw new Error('Only posted transactions can be corrected.')
  return {
    id,
    status: 'draft',
    correctionOf: source.id,
    date,
    description: source.description,
    legs: source.legs.map((leg, index) => ({
      ...structuredClone(leg),
      id: `${id}-${index + 1}`,
      amount: -Number(leg.amount),
    })),
  }
}

export function filterTransactions(transactions, filters) {
  const accountNeedle = filters.account.trim().toLocaleLowerCase()
  const textNeedle = filters.text.trim().toLocaleLowerCase()

  return transactions
    .filter((transaction) => !filters.year || transaction.date.startsWith(filters.year))
    .filter((transaction) => !filters.month || transaction.date.slice(5, 7) === filters.month)
    .filter((transaction) => !filters.day || transaction.date === filters.day)
    .filter((transaction) =>
      !textNeedle || transaction.description.toLocaleLowerCase().includes(textNeedle)
    )
    .filter((transaction) =>
      !accountNeedle ||
      transaction.legs.some((leg) =>
        accountLabel(leg.account).toLocaleLowerCase().includes(accountNeedle)
      )
    )
    .sort((a, b) => b.date.localeCompare(a.date) || b.id.localeCompare(a.id))
}

export function accountBalances(transactions, tree = true) {
  const balances = new Map()

  for (const transaction of transactions) {
    for (const leg of transaction.legs) {
      const paths = tree
        ? leg.account.map((_, index) => leg.account.slice(0, index + 1))
        : [leg.account]

      for (const path of paths) {
        const commodity = leg.commodity || DEFAULT_COMMODITY
        const key = `${accountLabel(path)}\u0000${commodity}`
        const current = balances.get(key) ?? { account: path, commodity, amount: 0 }
        current.amount = round(current.amount + Number(leg.amount || 0))
        balances.set(key, current)
      }
    }
  }

  return [...balances.values()]
    .filter(({ amount }) => amount !== 0)
    .sort((a, b) =>
      accountLabel(a.account).localeCompare(accountLabel(b.account)) ||
      a.commodity.localeCompare(b.commodity)
    )
}

function round(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100
}
