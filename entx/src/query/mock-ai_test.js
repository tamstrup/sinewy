import { mockAiQuery } from './mock-ai.js'

function check(value) {
  if (!value) throw new Error('Mock AI assertion failed')
}

Deno.test('mock AI matches English and Danish topics to reviewable templates', () => {
  for (const prompt of ['Expenses by month in 2027', 'Udgifter pr. måned i 2027']) {
    const { topic, sql } = mockAiQuery(prompt)
    check(topic === 'expenses')
    check(sql.includes("date >= '2027-01-01'"))
    check(sql.includes("date < '2028-01-01'"))
    check(sql.includes('group by month, commodity'))
    check(sql.includes("status = 'committed'"))
  }
  check(mockAiQuery('Indtægter pr. måned').sql.includes('-sum(amount)'))
  check(mockAiQuery('Show account balances').topic === 'accounts')
  check(mockAiQuery('Vis mine bilag').topic === 'documents')
})

Deno.test('mock AI does not pretend to understand unsupported questions or interpolate prompt text', () => {
  check(mockAiQuery('How is the weather?').topic === 'fallback')
  const { sql } = mockAiQuery('expenses; drop table accounts; -- <script>alert(1)</script>')
  check(sql.startsWith('select '))
  check(!sql.includes('drop table'))
  check(!sql.includes('<script>'))
})
