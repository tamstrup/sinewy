import {
  accountBalances,
  createCorrection,
  draftReadiness,
  filterTransactions,
  isBalanced,
  parseAccount,
  postDrafts,
  transactionsForTab,
  transactionTotal,
} from './model.js'

function assertEquals(actual, expected) {
  const actualJson = JSON.stringify(actual)
  const expectedJson = JSON.stringify(expected)

  if (actualJson !== expectedJson) {
    throw new Error(`Expected ${expectedJson}, received ${actualJson}`)
  }
}

Deno.test('account names round-trip as segments', () => {
  assertEquals(parseAccount('Assets:Bank:Operating'), ['Assets', 'Bank', 'Operating'])
})

function readyDraft(id = 'draft-a') {
  return {
    id,
    status: 'draft',
    date: '2026-09-02',
    description: 'Office supplies',
    legs: [
      { id: `${id}-1`, account: ['Expenses', 'Office'], amount: 100, commodity: 'DKK' },
      { id: `${id}-2`, account: ['Assets', 'Bank'], amount: -100, commodity: 'DKK' },
    ],
  }
}

Deno.test('draft readiness distinguishes incomplete, unbalanced and ready', () => {
  const draft = readyDraft()
  assertEquals(draftReadiness(draft), 'ready')
  draft.legs[1].amount = -90
  assertEquals(draftReadiness(draft), 'unbalanced')
  for (const amount of ['', null, NaN, Infinity, undefined]) {
    draft.legs[1].amount = amount
    assertEquals(draftReadiness(draft), 'incomplete')
  }
  draft.legs[1].amount = -100
  draft.description = ' '
  assertEquals(draftReadiness(draft), 'incomplete')
  draft.description = 'Office supplies'
  draft.legs[0].account = []
  assertEquals(draftReadiness(draft), 'incomplete')
  draft.legs[0].account = ['Expenses']
  draft.legs[0].commodity = ''
  assertEquals(draftReadiness(draft), 'incomplete')
})

Deno.test('invalid or missing draft dates cannot be posted', () => {
  for (const date of ['', '2026-13-01', '2026-02-30', 'not a date']) {
    assertEquals(draftReadiness({ ...readyDraft(), date }), 'incomplete')
  }
})

Deno.test('readiness requires balancing each commodity independently', () => {
  const draft = readyDraft()
  draft.legs[1].commodity = 'EUR'
  assertEquals(isBalanced(draft), false)
  assertEquals(draftReadiness(draft), 'unbalanced')
  draft.legs.push(
    { account: ['Assets', 'Bank'], amount: -100, commodity: 'DKK' },
    { account: ['Expenses', 'Office'], amount: 100, commodity: 'EUR' },
  )
  assertEquals(draftReadiness(draft), 'ready')
})

Deno.test('tabs partition transactions and combine with the active filters', () => {
  const transactions = [readyDraft(), { ...readyDraft('posted-a'), status: 'committed' }]
  const filters = { year: '2026', month: '', day: '', account: 'office', text: 'supplies' }
  assertEquals(transactionsForTab(transactions, 'drafts', filters).map(({ id }) => id), ['draft-a'])
  assertEquals(transactionsForTab(transactions, 'ledger', filters).map(({ id }) => id), [
    'posted-a',
  ])
  assertEquals(transactionsForTab(transactions, 'drafts', { ...filters, year: '2025' }), [])
})

Deno.test('selected account paths match any selection and include descendants, not name prefixes', () => {
  const transaction = (id, account) => ({
    ...readyDraft(id),
    legs: [{ account, amount: 1, commodity: 'DKK' }],
  })
  const transactions = [
    transaction('a', ['Expenses', 'Office', 'Rent']),
    transaction('b', ['Expenses', 'Office']),
    transaction('c', ['Expenses', 'Office supplies']),
    transaction('d', ['Income', 'Consulting']),
  ]
  const filters = {
    year: '',
    month: '',
    day: '',
    account: '',
    text: '',
    accounts: [['Expenses', 'Office'], ['Income']],
  }
  const ids = (patch = {}) =>
    filterTransactions(transactions, { ...filters, ...patch }).map(({ id }) => id)
  assertEquals(ids(), ['d', 'b', 'a'])
  assertEquals(ids({ accounts: [['Expenses'], ['Expenses', 'Office']] }), ['c', 'b', 'a'])
  assertEquals(ids({ accounts: [] }), ['d', 'c', 'b', 'a'])
  assertEquals(ids({ year: '2025' }), [])
  assertEquals(ids({ account: 'rent' }), ['a'])
  assertEquals(ids({ text: 'does not match' }), [])
  assertEquals(ids({ accounts: [['expenses']] }), [])
})

Deno.test('posting changes only the selected ready drafts and snapshots their contents', () => {
  const transactions = [readyDraft(), readyDraft('draft-b')]
  const posted = postDrafts(transactions, ['draft-a'], '2026-09-02T12:00:00Z')
  assertEquals(transactions[0].status, 'draft')
  assertEquals(posted[0].status, 'committed')
  assertEquals(posted[0].postedAt, '2026-09-02T12:00:00Z')
  assertEquals(posted[1].status, 'draft')
  transactions[0].legs[0].amount = 42
  assertEquals(posted[0].legs[0].amount, 100)
})

Deno.test('posting refuses invalid selections atomically, including already posted entries', () => {
  const invalid = readyDraft('invalid')
  invalid.description = ''
  const transactions = [readyDraft(), invalid, { ...readyDraft('posted'), status: 'committed' }]
  for (const ids of [[], ['missing'], ['posted'], ['draft-a', 'invalid']]) {
    let rejected = false
    try {
      postDrafts(transactions, ids)
    } catch {
      rejected = true
    }
    assertEquals(rejected, true)
    assertEquals(transactions[0].status, 'draft')
  }
})

Deno.test('a correction links to its source and reverses every leg without altering it', () => {
  const source = { ...readyDraft('posted-a'), status: 'committed' }
  const before = structuredClone(source)
  const correction = createCorrection(source, 'correction-a', '2026-09-03')
  assertEquals(correction.correctionOf, source.id)
  assertEquals(correction.status, 'draft')
  assertEquals(correction.legs.map(({ amount }) => amount), [-100, 100])
  assertEquals(accountBalances([source, correction]), [])
  correction.legs[0].account.push('Changed')
  assertEquals(source, before)
  const posted = postDrafts([source, correction], [correction.id])
  assertEquals(posted[1].correctionOf, source.id)
})

Deno.test('transaction balance is the sum of its legs', () => {
  const transaction = {
    legs: [{ amount: 125.25 }, { amount: -100 }, { amount: -25.25 }],
  }

  assertEquals(transactionTotal(transaction), 0)
  assertEquals(isBalanced(transaction), true)
})

Deno.test('tree balances include account parents', () => {
  const transactions = [{
    legs: [{ account: ['Assets', 'Bank'], amount: 500 }],
  }]

  assertEquals(accountBalances(transactions, true), [
    { account: ['Assets'], commodity: 'DKK', amount: 500 },
    { account: ['Assets', 'Bank'], commodity: 'DKK', amount: 500 },
  ])
})

Deno.test('balances keep commodities separate', () => {
  const transactions = [{
    legs: [
      { account: ['Assets', 'Bank'], amount: 500, commodity: 'DKK' },
      { account: ['Assets', 'Bank'], amount: 75, commodity: 'EUR' },
    ],
  }]

  assertEquals(accountBalances(transactions, false), [
    { account: ['Assets', 'Bank'], commodity: 'DKK', amount: 500 },
    { account: ['Assets', 'Bank'], commodity: 'EUR', amount: 75 },
  ])
})

Deno.test('filters combine date, account, and description', () => {
  const transactions = [
    {
      id: '1',
      date: '2026-08-02',
      description: 'Client lunch',
      legs: [{ account: ['Expenses', 'Meals'], amount: 100 }],
    },
    {
      id: '2',
      date: '2026-07-02',
      description: 'Software',
      legs: [{ account: ['Expenses', 'Software'], amount: 200 }],
    },
  ]

  const filtered = filterTransactions(transactions, {
    year: '2026',
    month: '08',
    day: '',
    account: 'meals',
    text: 'client',
  })

  assertEquals(filtered.map(({ id }) => id), ['1'])
})
