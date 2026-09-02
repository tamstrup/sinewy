import {
  accountBalances,
  filterTransactions,
  isBalanced,
  parseAccount,
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
