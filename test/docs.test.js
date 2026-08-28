import fs from 'node:fs/promises'
import path from 'node:path'
import t from 'sin/test'
import { fileURLToPath } from 'node:url'
import { buildDocuments, contentModule } from '../docs/build-content.js'
import { compileDocument, documentationHref } from '../docs/markdown.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const components = path.join(root, 'docs', 'components')

t`documentation markdown`(
  t`builds every component document`(async() => [
    'alert-dialog,button,context-menu,dialog,dropdown,switch,toggle',
    (await buildDocuments()).map(document => document.slug).join(',')
  ]),

  t`renders GFM tables and stable heading ids`(async() => {
    const document = (await buildDocuments()).find(document => document.slug === 'context-menu')
    t.is(true, document.html.includes('<table>'))
    t.is(true, document.html.includes('<h2 id="api-reference">'))
    return [document.headings.length, new Set(document.headings.map(heading => heading.id)).size]
  }),

  t`deduplicates repeated heading ids`(() => {
    const sourcePath = path.join(components, 'sample.md')
    const document = compileDocument('---\ntitle: Sample\ndescription: A sample.\n---\n## Same\n## Same\n', sourcePath, root)
    return ['same,same-2', document.headings.map(heading => heading.id).join(',')]
  }),

  t`rewrites component and repository links`(() => {
    const sourcePath = path.join(components, 'dropdown.md')
    t.is('/components/context-menu#usage', documentationHref('./context-menu.md#usage', sourcePath, root))
    return [
      'https://github.com/tamstrup/sinewy/blob/main/examples/demo.js',
      documentationHref('../../examples/demo.js', sourcePath, root)
    ]
  }),

  t`keeps the generated module current`(async() => {
    const expected = contentModule(await buildDocuments())
    const actual = await fs.readFile(path.join(root, 'docs', 'content.generated.js'), 'utf8')
    return [true, expected === actual]
  })
)
