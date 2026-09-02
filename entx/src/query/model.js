import { accountLabel, initialTransactions } from '../model.js'

export const QUERY_STORAGE_KEY = 'entx.queries.v1'
export const schemas = {
  ledger_entries: [
    'entry_id',
    'transaction_id',
    'date',
    'description',
    'status',
    'account',
    'account_type',
    'amount',
    'commodity',
  ],
  transactions: ['transaction_id', 'date', 'description', 'status', 'leg_count'],
  accounts: ['account', 'parent', 'account_type', 'commodity', 'balance'],
  documents: ['document_id', 'transaction_id', 'date', 'filename', 'type'],
}
export const examples = {
  ledger_entries:
    "SELECT date, description, account, account_type, amount, commodity\nFROM ledger_entries\nWHERE status = 'committed'\nORDER BY date DESC;",
  transactions: 'SELECT *\nFROM transactions\nORDER BY date DESC;',
  accounts: 'SELECT account, account_type, commodity, balance\nFROM accounts\nORDER BY account;',
  documents: 'SELECT *\nFROM documents\nORDER BY date DESC;',
}

// Fixed demo snapshots, independent of edits in the transaction workspace.
export function mockRows(view = 'ledger_entries') {
  const entries = initialTransactions.flatMap((transaction) =>
    transaction.legs.map((leg) => ({
      entry_id: leg.id,
      transaction_id: transaction.id,
      date: transaction.date,
      description: transaction.description,
      status: transaction.status,
      account: accountLabel(leg.account),
      account_type: leg.account[0],
      amount: leg.amount,
      commodity: leg.commodity,
    }))
  )
  if (view === 'transactions') {
    return initialTransactions.map(({ id, date, description, status, legs }) => ({
      transaction_id: id,
      date,
      description,
      status,
      leg_count: legs.length,
    }))
  }
  if (view === 'accounts') {
    const accounts = new Map()
    for (const entry of entries.filter((x) => x.status === 'committed')) {
      const key = `${entry.account}/${entry.commodity}`
      const row = accounts.get(key) || {
        account: entry.account,
        parent: entry.account.split(':').slice(0, -1).join(':'),
        account_type: entry.account_type,
        commodity: entry.commodity,
        balance: 0,
      }
      row.balance = Math.round((row.balance + entry.amount) * 100) / 100
      accounts.set(key, row)
    }
    return [...accounts.values()].sort((a, b) => a.account.localeCompare(b.account))
  }
  if (view === 'documents') {
    return [
      {
        document_id: 'doc-1042',
        transaction_id: 'txn-1006',
        date: '2026-08-28',
        filename: 'invoice-1042.pdf',
        type: 'invoice',
      },
      {
        document_id: 'doc-adobe',
        transaction_id: 'txn-1005',
        date: '2026-08-24',
        filename: 'adobe-august.pdf',
        type: 'receipt',
      },
      {
        document_id: 'doc-rent',
        transaction_id: 'txn-1007',
        date: '2026-08-29',
        filename: 'rent-september.pdf',
        type: 'voucher',
      },
    ]
  }
  return entries
}

// This chooses a sample dataset. It deliberately does NOT interpret SQL clauses or joins.
export function mockResult(sql) {
  if (!sql.trim()) throw new Error('queryEmpty')
  if (sql.length > 20000) throw new Error('queryTooLong')
  const referenced = sql.match(/\bfrom\s+(?:"?\w+"?\.)?["`]?([a-z_]+)/i)?.[1]?.toLowerCase()
  const view = Object.hasOwn(schemas, referenced) ? referenced : 'ledger_entries'
  return { view, fields: schemas[view], rows: mockRows(view) }
}

export function readQueries(storage) {
  const raw = storage.getItem(QUERY_STORAGE_KEY)
  if (!raw) return []
  const data = JSON.parse(raw)
  if (!Array.isArray(data) || data.length > 100) throw new Error('queryStorageInvalid')
  const ids = new Set()
  return data.map((entry) => {
    if (
      !entry || typeof entry.id !== 'string' || !entry.id || ids.has(entry.id) ||
      typeof entry.name !== 'string' || !entry.name.trim() || entry.name.length > 80 ||
      typeof entry.sql !== 'string' || entry.sql.length > 20000
    ) {
      throw new Error('queryStorageInvalid')
    }
    ids.add(entry.id)
    return { id: entry.id, name: entry.name, sql: entry.sql }
  })
}

export function upsertQuery(queries, query) {
  const name = query.name.trim()
  if (!name || name.length > 80) throw new Error('queryNameRequired')
  if (!query.sql.trim()) throw new Error('queryEmpty')
  if (query.sql.length > 20000) throw new Error('queryTooLong')
  if (queries.some((q) => q.id !== query.id && q.name.toLowerCase() === name.toLowerCase())) {
    throw new Error('queryDuplicateName')
  }
  if (queries.length >= 100 && !queries.some((q) => q.id === query.id)) {
    throw new Error('queryLimit')
  }
  const saved = { id: query.id, name, sql: query.sql }
  return queries.some((q) => q.id === query.id)
    ? queries.map((q) => q.id === query.id ? saved : q)
    : [...queries, saved]
}

export function persistQueries(storage, queries) {
  storage.setItem(QUERY_STORAGE_KEY, JSON.stringify(queries))
}

export function createQueryWorkspace() {
  return { id: null, name: '', sql: '', baseline: { name: '', sql: '' }, result: null, lastSql: '' }
}
