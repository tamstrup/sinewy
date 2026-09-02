export function handleRequest(request: Request): Response {
  const url = new URL(request.url)

  if (request.method === 'GET' && url.pathname === '/api/health') {
    return Response.json({ status: 'ok', service: 'entx' })
  }

  return Response.json({ error: 'Not found' }, { status: 404 })
}

if (import.meta.main) {
  const port = Number(Deno.env.get('PORT') ?? 8000)

  Deno.serve({ port }, handleRequest)
}
