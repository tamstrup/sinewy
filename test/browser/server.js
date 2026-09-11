import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { resolve, sep, extname } from 'node:path'

const root = resolve('.')
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' }

createServer(async(req, res) => {
  const file = resolve(root, '.' + new URL(req.url, 'http://localhost').pathname)
  if (!file.startsWith(root + sep)) {
    res.writeHead(403).end()
    return
  }
  try {
    const body = await readFile(file)
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' }).end(body)
  } catch {
    res.writeHead(404).end()
  }
}).listen(4179, '127.0.0.1')
