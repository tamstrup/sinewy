import {
  createQueryWorkspace,
  mockResult,
  mockRows,
  persistQueries,
  QUERY_STORAGE_KEY,
  readQueries,
  schemas,
  upsertQuery,
} from './model.js'

function equal(got, expected) {
  if (JSON.stringify(got) !== JSON.stringify(expected)) {
    throw new Error(`Expected ${JSON.stringify(expected)}; received ${JSON.stringify(got)}`)
  }
}
function throws(fn, code) {
  try {
    fn()
  } catch (error) {
    equal(error.message, code)
    return
  }
  throw new Error('Expected error ' + code)
}
Deno.test('query workspace starts with no results or query', () => {
  equal(createQueryWorkspace().result, null)
  equal(createQueryWorkspace().sql, '')
})
Deno.test('sample rows match every autocomplete view schema and are fresh snapshots', () => {
  for (const view of Object.keys(schemas)) {
    equal(Object.keys(mockRows(view)[0]), schemas[view])
    const result = mockResult(`select * from ${view}`)
    equal(result.view, view)
    equal(result.fields, schemas[view])
    equal(result.rows.length > 0, true)
  }
  const rows = mockRows()
  rows[0].amount = 123456
  equal(mockRows()[0].amount, -384)
})
Deno.test('mock execution does not claim to evaluate filters, expressions or unknown tables', () => {
  equal(mockResult('select * from accounts where 1=0').rows.length, mockRows('accounts').length)
  equal(mockResult('select 42 as answer').view, 'ledger_entries')
  equal(mockResult('select * from constructor').view, 'ledger_entries')
  throws(() => mockResult('  '), 'queryEmpty')
})
Deno.test('saved queries can be created, renamed, updated and deleted without mutating originals', () => {
  const original = [{ id: 'one', name: 'Original', sql: 'select * from accounts' }]
  const changed = upsertQuery(original, {
    id: 'one',
    name: ' Renamed ',
    sql: 'select * from transactions',
  })
  equal(changed.length, 1)
  equal(changed[0].name, 'Renamed')
  equal(original[0].name, 'Original')
  const added = upsertQuery(changed, { id: 'two', name: 'Other', sql: 'select 1' })
  equal(added.length, 2)
  equal(added.filter((q) => q.id !== 'one').length, 1)
  throws(
    () => upsertQuery(added, { id: 'three', name: 'renamed', sql: 'select 1' }),
    'queryDuplicateName',
  )
  throws(() => upsertQuery([], { id: 'x', name: ' ', sql: 'select 1' }), 'queryNameRequired')
})
Deno.test('query storage round-trips and rejects malformed data without overwriting it', () => {
  let raw = null
  const storage = {
    getItem: () => raw,
    setItem: (key, value) => {
      equal(key, QUERY_STORAGE_KEY)
      raw = value
    },
  }
  equal(readQueries(storage), [])
  persistQueries(storage, [{ id: 'one', name: 'Accounts', sql: 'select * from accounts' }])
  equal(readQueries(storage)[0].name, 'Accounts')
  raw = JSON.stringify([{ id: 'x', name: 'Missing SQL' }])
  throws(() => readQueries(storage), 'queryStorageInvalid')
  equal(raw.includes('Missing SQL'), true)
})
