import path from 'node:path'
import { marked, Renderer, TextRenderer } from 'marked'

const repositoryUrl = 'https://github.com/tamstrup/sinewy/blob/main/'

export function compileDocument(source, sourcePath, root) {
  const { attributes, body } = frontmatter(source, sourcePath)
  const headings = []
  const slugs = new Map()
  const renderer = new Renderer()

  renderer.heading = function({ tokens, depth }) {
    const html = this.parser.parseInline(tokens)
    const text = this.parser.parseInline(tokens, new TextRenderer())
    const id = uniqueSlug(text, slugs)
    headings.push({ depth, id, text })
    return `<h${depth} id="${escapeAttribute(id)}">${html}</h${depth}>\n`
  }

  renderer.link = function({ href, title, tokens }) {
    const text = this.parser.parseInline(tokens)
    const resolved = documentationHref(href, sourcePath, root)
    const titleAttribute = title == null ? '' : ` title="${escapeAttribute(title)}"`
    return `<a href="${escapeAttribute(resolved)}"${titleAttribute}>${text}</a>`
  }

  renderer.image = function({ href, title, text }) {
    const resolved = documentationHref(href, sourcePath, root)
    const titleAttribute = title == null ? '' : ` title="${escapeAttribute(title)}"`
    return `<img src="${escapeAttribute(resolved)}" alt="${escapeAttribute(text)}"${titleAttribute}>`
  }

  return {
    ...attributes,
    slug: path.basename(sourcePath, path.extname(sourcePath)),
    source: path.relative(root, sourcePath).split(path.sep).join('/'),
    headings,
    html: marked.parse(body, { gfm: true, renderer })
  }
}

export function frontmatter(source, sourcePath = 'document') {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/)
  if (!match)
    throw new Error(sourcePath + ' must begin with YAML frontmatter')

  const attributes = Object.fromEntries(match[1].split(/\r?\n/).map(line => {
    const separator = line.indexOf(':')
    if (separator === -1)
      throw new Error(sourcePath + ' has invalid frontmatter: ' + line)
    return [line.slice(0, separator).trim(), line.slice(separator + 1).trim()]
  }))
  const keys = Object.keys(attributes)

  if (keys.length !== 2 || !attributes.title || !attributes.description || keys.some(key => key !== 'title' && key !== 'description'))
    throw new Error(sourcePath + ' frontmatter must contain exactly title and description')

  return { attributes, body: source.slice(match[0].length) }
}

export function documentationHref(href, sourcePath, root) {
  if (!href || href[0] === '#' || href[0] === '/' || /^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('//'))
    return href

  const match = href.match(/^([^?#]*)([?#].*)?$/)
  const pathname = match[1]
  const suffix = match[2] || ''
  const resolved = path.resolve(path.dirname(sourcePath), pathname)
  const components = path.join(root, 'docs', 'components') + path.sep

  if (resolved.startsWith(components) && path.extname(resolved) === '.md' && path.basename(resolved).toLowerCase() !== 'readme.md')
    return '/components/' + path.basename(resolved, '.md') + suffix

  const relative = path.relative(root, resolved).split(path.sep).join('/')
  if (!relative.startsWith('../') && relative !== '..')
    return repositoryUrl + relative + suffix

  return href
}

function uniqueSlug(text, slugs) {
  const base = text
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/[\s-]+/g, '-') || 'section'
  const count = slugs.get(base) || 0
  slugs.set(base, count + 1)
  return count ? base + '-' + (count + 1) : base
}

function escapeAttribute(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}
