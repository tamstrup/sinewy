import s from 'sin'
import t from 'sin/test'
import App from '../src/app.js'

t.timeout = 5000

t`transaction workspace`(
  t`tabs separate the lifecycle without changing live balances`(() =>
    fixture(async (host) => {
      const balances = host.querySelector('aside').textContent
      t.is(1, host.querySelectorAll('article').length)
      host.querySelector('#tab-ledger').click()
      await settle()
      t.is('/transactions/ledger', location.pathname)
      t.is(7, host.querySelectorAll('article').length)
      t.is(0, host.querySelectorAll('article input').length)
      return [balances, host.querySelector('aside').textContent]
    })
  ),
  t`tab arrows move focus and preserve transaction alignment`(() =>
    fixture(async (host) => {
      const title = host.querySelector('[aria-label="Transaction description"]')
      const account = host.querySelector('[aria-label="Account"]')
      t.is(title.getBoundingClientRect().left, account.getBoundingClientRect().left)
      key(host.querySelector('#tab-drafts'), 'ArrowRight')
      await settle()
      t.is('tab-ledger', document.activeElement.id)
      t.is(true, host.contains(document.activeElement))
      return ['true', host.querySelector('#tab-ledger').getAttribute('aria-selected')]
    })
  ),
  t`posting requires review and leaves a read-only ledger entry`(() =>
    fixture(async (host) => {
      input(host.querySelectorAll('[aria-label="Amount"]')[1], '384')
      await settle()
      host.querySelector('[aria-label="Select Train to client workshop"]').click()
      await settle()
      t.is(
        'checked:true',
        `checked:${host.querySelector('[aria-label="Select Train to client workshop"]').checked}`,
      )
      t.is(false, button(host, 'Post selected').disabled)
      key(host.querySelector('[aria-label="Select Train to client workshop"]'), 'Enter', {
        ctrlKey: true,
      })
      await settle()
      t.is('open:true', `open:${host.querySelector('dialog').open}`)
      t.is('Cancel', document.activeElement.textContent)
      button(host, 'Cancel').click()
      await settle()
      t.is(1, host.querySelectorAll('article').length)
      button(host, 'Post selected').click()
      await settle()
      button(host, 'Post to ledger').click()
      await settle()
      t.is(0, host.querySelectorAll('article').length)
      host.querySelector('#tab-ledger').click()
      await settle()
      t.is(8, host.querySelectorAll('article').length)
      return [0, host.querySelectorAll('article input').length]
    })
  ),
  t`bulk posting uses only ready drafts in the current filtered view`(() =>
    fixture(async (host) => {
      input(host.querySelectorAll('[aria-label="Amount"]')[1], '384')
      await settle()
      button(host, 'New transaction', true).click()
      await settle()
      t.is(2, host.querySelectorAll('article').length)
      button(host, 'Filter', true).click()
      await settle()
      input(host.querySelector('[data-filter-text]'), 'missing text')
      await settle()
      t.is(true, button(host, 'Post all ready').disabled)
      input(host.querySelector('[data-filter-text]'), 'Train')
      await settle()
      button(host, 'Post all ready').click()
      await settle()
      t.is(1, host.querySelectorAll('dialog li').length)
      button(host, 'Post to ledger').click()
      await settle()
      return ['Drafts1', host.querySelector('#tab-drafts').textContent]
    })
  ),
  t`new drafts from Ledger become visible and cannot be posted incomplete`(() =>
    fixture(async (host) => {
      host.querySelector('#tab-ledger').click()
      await settle()
      button(host, 'Filter', true).click()
      await settle()
      input(host.querySelector('[data-filter-text]'), 'no match')
      await settle()
      button(host, 'New transaction', true).click()
      await settle()
      t.is('/transactions/drafts', location.pathname)
      t.is(2, host.querySelectorAll('article').length)
      const newRow = [...host.querySelectorAll('article')].find((row) =>
        row.querySelector('[aria-label="Transaction description"]').value === ''
      )
      t.is('Transaction description', document.activeElement.getAttribute('aria-label'))
      return [true, button(newRow, 'Post').disabled]
    })
  ),
)

async function fixture(run) {
  const url = location.href
  const saved = localStorage.getItem('entx.transactions.tab')
  history.replaceState(null, '', '/transactions/drafts')
  const host = document.createElement('div')
  document.body.append(host)
  const mounted = s.mount(host, App)
  try {
    await settle()
    return await run(host)
  } finally {
    host.querySelector('dialog[open]')?.close()
    mounted.unmount()
    host.remove()
    history.replaceState(null, '', url)
    saved === null
      ? localStorage.removeItem('entx.transactions.tab')
      : localStorage.setItem('entx.transactions.tab', saved)
  }
}

function button(host, text, prefix = false) {
  return [...host.querySelectorAll('button')].find((element) =>
    prefix ? element.textContent.startsWith(text) : element.textContent === text
  )
}

function input(element, value) {
  element.value = value
  element.dispatchEvent(new Event('input', { bubbles: true }))
}

function key(element, key, modifiers = {}) {
  element.dispatchEvent(
    new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true, ...modifiers }),
  )
}

function settle() {
  return new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))
}
