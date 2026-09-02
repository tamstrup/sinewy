import { handleRequest } from './main.ts'

function assertEquals(actual: unknown, expected: unknown): void {
  const actualJson = JSON.stringify(actual)
  const expectedJson = JSON.stringify(expected)

  if (actualJson !== expectedJson) {
    throw new Error(`Expected ${expectedJson}, received ${actualJson}`)
  }
}

Deno.test('health endpoint identifies the service', async () => {
  const response = handleRequest(new Request('http://localhost/api/health'))

  assertEquals(response.status, 200)
  assertEquals(await response.json(), { status: 'ok', service: 'entx' })
})

Deno.test('unknown routes return JSON 404', async () => {
  const response = handleRequest(new Request('http://localhost/missing'))

  assertEquals(response.status, 404)
  assertEquals(await response.json(), { error: 'Not found' })
})
