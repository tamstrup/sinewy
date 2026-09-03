import s from 'sin'
import t from 'sin/test'
import App from '../src/app.js'
import { PREFERENCES_KEY } from '../src/i18n/format.js'

t.timeout = 5000

t`transaction workspace`(
  ...['drafts', 'ledger'].flatMap((tab) =>
    ['en', 'da'].map((language) =>
      t`toolbar buttons retain comfortable spacing in ${tab} with ${language} labels`(() =>
        fixture(
          async (host) => {
            const create = button(
              host,
              language === 'en' ? 'New transaction' : 'Ny transaktion',
              true,
            )
            const filter = button(host, language === 'en' ? 'Filter' : 'Filtrér', true)
            for (const control of [create, filter]) {
              const style = getComputedStyle(control)
              t.is(32, control.getBoundingClientRect().height)
              t.is('10px', style.paddingLeft)
              t.is('10px', style.paddingRight)
              const hint = control.querySelector('kbd').getBoundingClientRect()
              t.is(true, hint.top - control.getBoundingClientRect().top >= 6)
              t.is('button', control.type)
              t.is('gray', control.dataset.color)
            }
            filter.click()
            await settle()
            t.is(true, !!host.querySelector('[data-filter-text]'))
            t.is(32, filter.getBoundingClientRect().height)
            return [
              28,
              host.querySelector('[aria-controls="accounts-sidebar"]').getBoundingClientRect()
                .height,
            ]
          },
          { language, locale: language === 'en' ? 'en-GB' : 'da-DK', commodity: 'DKK' },
          `/transactions/${tab}`,
        )
      )
    )
  ),
  t`primary toolbar action uses the solid Sinewy palette without an outlined border`(() =>
    fixture((host) => {
      const create = button(host, 'New transaction', true)
      const filter = button(host, 'Filter', true)
      t.is('solid', create.dataset.variant)
      t.is('gray', create.dataset.color)
      t.is('rgb(32, 32, 32)', getComputedStyle(create).backgroundColor)
      t.is('rgb(252, 252, 252)', getComputedStyle(create).color)
      t.is('rgba(0, 0, 0, 0)', getComputedStyle(create).borderTopColor)
      return ['ghost', filter.dataset.variant]
    })
  ),
  ...['drafts', 'ledger'].flatMap((tab) =>
    ['mouse', 'keyboard'].map((method) =>
      t`new transaction focuses its description from ${tab} via ${method}`(() =>
        fixture(async (host) => {
          if (tab === 'ledger') {
            host.querySelector('#tab-ledger').click()
            await settle()
          }
          const create = button(host, 'New transaction', true)
          create.focus()
          method === 'mouse' ? create.click() : key(create, 'n')
          await settle()

          const description = [...host.querySelectorAll('[aria-label="Transaction description"]')]
            .find((element) => element.value === '')
          t.is(true, !!description)
          t.is(description, document.activeElement)
          const rows = host.querySelectorAll('article').length
          key(description, 'n')
          await settle()
          return [rows, host.querySelectorAll('article').length]
        })
      )
    )
  ),
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

t`selection scrolling`(
  ...[['j', 'k'], ['ArrowDown', 'ArrowUp']].map(([down, up]) =>
    t`${down}/${up} keeps selected rows visible below the sticky topbar`(() =>
      scrollingFixture(async (host) => {
        const panel = host.querySelector('[role="tabpanel"]')
        const rows = [...host.querySelectorAll('article')]
        const scrollLeft = host.scrollLeft
        panel.focus({ preventScroll: true })
        for (let index = 1; index < rows.length; index++) {
          key(panel, down)
          await settle()
          t.is('true', rows[index].dataset.selected)
          assertVisible(host, rows[index])
          t.is(panel, document.activeElement)
        }
        t.is(true, host.scrollTop > 0)
        for (let index = rows.length - 2; index >= 0; index--) {
          key(panel, up)
          await settle()
          t.is('true', rows[index].dataset.selected)
          assertVisible(host, rows[index])
        }
        return [scrollLeft, host.scrollLeft]
      })
    )
  ),
  t`a visible selection does not jump or steal focus`(() =>
    scrollingFixture(async (host) => {
      for (
        const toggle of host.querySelectorAll('article button[aria-label="Collapse transaction"]')
      ) {
        toggle.click()
      }
      await settle()
      const panel = host.querySelector('[role="tabpanel"]')
      panel.focus({ preventScroll: true })
      const before = host.scrollTop
      key(panel, 'j')
      await settle()
      t.is(before, host.scrollTop)
      key(panel, 'k')
      await settle()
      t.is(before, host.scrollTop)
      key(panel, 'k')
      await settle()
      return [panel, document.activeElement]
    })
  ),
  t`rapid repeats scroll only the final selection, after its selected attribute is rendered`(() =>
    scrollingFixture(async (host) => {
      const panel = host.querySelector('[role="tabpanel"]')
      const rows = [...host.querySelectorAll('article')]
      const calls = []
      for (const row of rows) {
        const scroll = row.scrollIntoView
        row.scrollIntoView = function (options) {
          calls.push([this.dataset.transactionId, this.dataset.selected])
          return scroll.call(this, options)
        }
      }
      for (let count = 0; count < 12; count++) key(panel, 'j')
      await settle()
      t.is(1, calls.length)
      t.is(rows.at(-1).dataset.transactionId, calls[0][0])
      t.is('true', calls[0][1])
      assertVisible(host, rows.at(-1))
      const before = host.scrollTop
      key(panel, 'j')
      await settle()
      return [before, host.scrollTop]
    })
  ),
  t`a pending selection scroll is ignored after leaving the transaction workspace`(() =>
    scrollingFixture(async (host) => {
      let calls = 0
      for (const row of host.querySelectorAll('article')) row.scrollIntoView = () => calls++
      key(host.querySelector('[role="tabpanel"]'), 'j')
      host.querySelector('a[href="/accounts"]').click()
      await settle()
      return [0, calls]
    })
  ),
  t`an oversized expanded transaction reveals its header`(() =>
    scrollingFixture(async (host) => {
      const panel = host.querySelector('[role="tabpanel"]')
      const rows = [...host.querySelectorAll('article')]
      // Exercise the geometry of a long posting without changing the sample ledger data.
      rows[1].style.minHeight = `${host.clientHeight * 2}px`
      for (let count = 0; count < 3; count++) key(panel, 'j')
      await settle()
      key(panel, 'k')
      key(panel, 'k')
      await settle()
      t.is('true', rows[1].dataset.selected)
      assertVisible(host, rows[1].querySelector('header'))
      return [true, rows[1].getBoundingClientRect().height > host.clientHeight]
    })
  ),
)

t`Vim boundary shortcuts`(
  t`Shift+G and gg select and reveal the last and first transactions without moving focus`(() =>
    scrollingFixture(async (host) => {
      const panel = host.querySelector('[role="tabpanel"]')
      const rows = [...host.querySelectorAll('article')]
      panel.focus({ preventScroll: true })
      key(panel, 'G', { shiftKey: true })
      await settle()
      t.is('true', rows.at(-1).dataset.selected)
      assertVisible(host, rows.at(-1))
      t.is(panel, document.activeElement)
      key(panel, 'g')
      await settle()
      t.is('true', rows.at(-1).dataset.selected)
      key(panel, 'g')
      await settle()
      t.is('true', rows[0].dataset.selected)
      assertVisible(host, rows[0])
      return [panel, document.activeElement]
    })
  ),
  t`boundary shortcuts work in Drafts and ignore editor input`(() =>
    fixture(async (host) => {
      button(host, 'New transaction', true).click()
      await settle()
      const rows = [...host.querySelectorAll('article')]
      const panel = host.querySelector('[role="tabpanel"]')
      panel.focus({ preventScroll: true })
      key(panel, 'G', { shiftKey: true })
      await settle()
      t.is('true', rows.at(-1).dataset.selected)
      const description = rows.at(-1).querySelector('[data-description]')
      description.focus()
      key(description, 'g')
      key(description, 'g')
      await settle()
      t.is('true', rows.at(-1).dataset.selected)
      t.is(description, document.activeElement)
      panel.focus({ preventScroll: true })
      key(panel, 'g')
      key(panel, 'g')
      await settle()
      t.is('true', rows[0].dataset.selected)
      const firstDescription = rows[0].querySelector('[data-description]')
      firstDescription.focus()
      key(firstDescription, 'G', { shiftKey: true })
      await settle()
      return ['true', rows[0].dataset.selected]
    })
  ),
  t`boundary shortcuts respect filters and safely ignore an empty view`(() =>
    scrollingFixture(async (host) => {
      button(host, 'Filter', true).click()
      await settle()
      input(host.querySelector('[data-filter-text]'), 'invoice')
      await settle()
      const rows = [...host.querySelectorAll('article')]
      t.is(2, rows.length)
      const panel = host.querySelector('[role="tabpanel"]')
      key(panel, 'G', { shiftKey: true })
      await settle()
      t.is('true', rows[1].dataset.selected)
      key(panel, 'g')
      key(panel, 'g')
      await settle()
      t.is('true', rows[0].dataset.selected)
      input(host.querySelector('[data-filter-text]'), 'no matching transactions')
      await settle()
      key(panel, 'G', { shiftKey: true })
      key(panel, 'g')
      key(panel, 'g')
      await settle()
      return [0, host.querySelectorAll('article').length]
    })
  ),
  t`g d and g l still navigate between workspaces`(() =>
    fixture(async (host) => {
      key(host.querySelector('[role="tabpanel"]'), 'g')
      key(host.querySelector('[role="tabpanel"]'), 'l')
      await settle()
      t.is('/transactions/ledger', location.pathname)
      key(host.querySelector('[role="tabpanel"]'), 'g')
      key(host.querySelector('[role="tabpanel"]'), 'g')
      key(host.querySelector('[role="tabpanel"]'), 'g')
      key(host.querySelector('[role="tabpanel"]'), 'd')
      await settle()
      return ['/transactions/drafts', location.pathname]
    })
  ),
  t`held, expired, or interrupted g sequences do not jump to the first transaction`(() =>
    scrollingFixture(async (host) => {
      const panel = host.querySelector('[role="tabpanel"]')
      const last = host.querySelector('article:last-child')
      key(panel, 'G', { shiftKey: true })
      await settle()
      key(panel, 'g')
      key(panel, 'g', { repeat: true })
      await settle()
      t.is('true', last.dataset.selected)
      key(panel, 'Escape')
      key(panel, 'g')
      await settle()
      t.is('true', last.dataset.selected)
      key(panel, 'Escape')
      const now = Date.now
      try {
        let clock = now()
        Date.now = () => clock
        key(panel, 'g')
        clock += 1201
        key(panel, 'g')
      } finally {
        Date.now = now
      }
      await settle()
      t.is('true', last.dataset.selected)
      key(panel, 'Escape')
      key(panel, 'g')
      key(panel, 'x')
      key(panel, 'g')
      await settle()
      return ['true', last.dataset.selected]
    })
  ),
  t`modified keys and focused controls retain their native behavior`(() =>
    scrollingFixture(async (host) => {
      const panel = host.querySelector('[role="tabpanel"]')
      const first = host.querySelector('article')
      key(panel, 'G', { shiftKey: true, ctrlKey: true })
      key(panel, 'G', { shiftKey: true, metaKey: true })
      key(panel, 'G', { shiftKey: true, altKey: true })
      const filter = button(host, 'Filter', true)
      filter.focus({ preventScroll: true })
      key(filter, 'G', { shiftKey: true })
      await settle()
      t.is('true', first.dataset.selected)
      return [filter, document.activeElement]
    })
  ),
)

t`sidebar account filters`(
  ...['metaKey', 'ctrlKey'].map((modifier) =>
    t`account clicks replace selection and ${modifier} toggles additional accounts`(() =>
      fixture(async (host) => {
        host.querySelector('#tab-ledger').click()
        await settle()
        const sidebar = host.querySelector('aside')
        const balances = sidebar.textContent
        const income = sidebar.querySelector('button[title="Income"]')
        const expenses = sidebar.querySelector('button[title="Expenses"]')
        income.click()
        await settle()
        t.is('true', income.getAttribute('aria-pressed'))
        t.is(3, host.querySelectorAll('article').length)
        t.is(balances, sidebar.textContent)
        expenses.dispatchEvent(new MouseEvent('click', { bubbles: true, [modifier]: true }))
        await settle()
        t.is(6, host.querySelectorAll('article').length)
        t.is(2, sidebar.querySelectorAll('[aria-pressed="true"]').length)
        t.is(2, host.querySelectorAll('main [title^="Remove "]').length)
        expenses.dispatchEvent(new MouseEvent('click', { bubbles: true, [modifier]: true }))
        await settle()
        t.is(3, host.querySelectorAll('article').length)
        expenses.click()
        await settle()
        t.is('false', income.getAttribute('aria-pressed'))
        t.is('true', expenses.getAttribute('aria-pressed'))
        t.is(3, host.querySelectorAll('article').length)
        t.is(
          'rgb(234, 231, 250)',
          getComputedStyle(expenses.closest('[data-account-row]')).backgroundColor,
        )
        return [1, sidebar.querySelectorAll('[aria-pressed="true"]').length]
      })
    )
  ),
  t`blank sidebar space clears only selected accounts and chips remove individual accounts`(() =>
    fixture(async (host) => {
      host.querySelector('#tab-ledger').click()
      button(host, 'Filter', true).click()
      await settle()
      const month = host.querySelectorAll('main select')[1]
      month.value = '08'
      month.dispatchEvent(new Event('change', { bubbles: true }))
      await settle()
      const sidebar = host.querySelector('aside')
      sidebar.querySelector('button[title="Income"]').click()
      await settle()
      t.is(1, host.querySelectorAll('article').length)
      sidebar.querySelector('button[title="Expenses"]').dispatchEvent(
        new MouseEvent('click', { bubbles: true, ctrlKey: true }),
      )
      await settle()
      host.querySelector('main [title="Remove Income filter"]').click()
      await settle()
      t.is(2, host.querySelectorAll('article').length)
      t.is(1, sidebar.querySelectorAll('[aria-pressed="true"]').length)
      sidebar.querySelector('[aria-label="Account filters"]').click()
      await settle()
      t.is(0, sidebar.querySelectorAll('[aria-pressed="true"]').length)
      t.is('08', month.value)
      return [4, host.querySelectorAll('article').length]
    })
  ),
  t`tree expansion, draft inclusion, flat mode, and amounts do not clear account selection`(() =>
    fixture(async (host) => {
      const sidebar = host.querySelector('aside')
      sidebar.querySelector('button[title="Expenses:Office:Rent"]').click()
      await settle()
      sidebar.querySelector('button[aria-label="Collapse Expenses"]').click()
      sidebar.querySelector('[role="switch"]').click()
      await settle()
      t.is(null, sidebar.querySelector('button[title="Expenses:Office:Rent"]'))
      sidebar.querySelector('input[type="checkbox"]').click()
      await settle()
      const rent = sidebar.querySelector('button[title="Expenses:Office:Rent"]')
      t.is('true', rent.getAttribute('aria-pressed'))
      t.is('Expenses:Office:Rent', rent.textContent)
      t.is('button', rent.type)
      t.is(0, host.querySelectorAll('article').length)
      rent.closest('[data-account-row]').lastElementChild.click()
      await settle()
      t.is('true', rent.getAttribute('aria-pressed'))
      host.querySelector('#tab-ledger').click()
      await settle()
      return [1, host.querySelectorAll('article').length]
    })
  ),
  t`new drafts and clear filters reset sidebar selection as well`(() =>
    fixture(async (host) => {
      const sidebar = host.querySelector('aside')
      sidebar.querySelector('button[title="Income"]').click()
      await settle()
      button(host, 'Filter', true).click()
      await settle()
      button(host, 'Clear').click()
      await settle()
      t.is(0, sidebar.querySelectorAll('[aria-pressed="true"]').length)
      sidebar.querySelector('button[title="Income"]').click()
      await settle()
      button(host, 'New transaction', true).click()
      await settle()
      t.is(0, sidebar.querySelectorAll('[aria-pressed="true"]').length)
      t.is('Transaction description', document.activeElement.getAttribute('aria-label'))
      return [2, host.querySelectorAll('article').length]
    })
  ),
  t`account controls translate and filtering survives other pages`(() =>
    fixture(async (host) => {
      host.querySelector('aside button[title="Assets:Bank"]').click()
      await settle()
      host.querySelector('a[href="/accounts"]').click()
      await settle()
      host.querySelector('a[href="/transactions/drafts"]').click()
      await settle()
      const account = host.querySelector('aside button[title="Assets:Bank"]')
      t.is('Filtrér på Assets:Bank', account.getAttribute('aria-label'))
      t.is('true', account.getAttribute('aria-pressed'))
      return [1, host.querySelectorAll('article').length]
    }, { language: 'da', locale: 'da-DK', commodity: 'DKK' })
  ),
)

t`sidebar and browser appearance`(
  t`the opaque sticky topbar matches the document background`(() =>
    fixture((host) => {
      const topbar = host.firstElementChild.querySelector(':scope > header')
      t.is('sticky', getComputedStyle(topbar).position)
      t.is('rgb(252, 252, 253)', getComputedStyle(topbar).backgroundColor)
      t.is(
        getComputedStyle(topbar).backgroundColor,
        getComputedStyle(document.documentElement).backgroundColor,
      )
      return [
        getComputedStyle(topbar).backgroundColor,
        getComputedStyle(document.body).backgroundColor,
      ]
    })
  ),
  t`hiding the sidebar frees space without resetting draft edits or sidebar state`(() =>
    fixture(async (host) => {
      const sidebar = host.querySelector('aside')
      const main = host.querySelector('main')
      const width = main.getBoundingClientRect().width
      const description = host.querySelector('[data-description]')
      input(description, 'Keep this draft')
      input(host.querySelector('[data-amount]'), '123.')
      host.querySelector('[role="switch"]').click()
      host.querySelector('button[aria-label="Collapse Assets"]').click()
      await settle()
      const balances = sidebar.textContent
      const toggle = host.querySelector('button[aria-controls="accounts-sidebar"]')
      t.is('true', toggle.getAttribute('aria-expanded'))
      t.is('Hide accounts sidebar', toggle.getAttribute('aria-label'))
      t.is(true, toggle.querySelector('img').src.startsWith('data:image/svg+xml,'))
      toggle.focus({ preventScroll: true })
      toggle.click()
      await settle()
      t.is(toggle, document.activeElement)
      t.is('false', toggle.getAttribute('aria-expanded'))
      t.is('Show accounts sidebar', toggle.getAttribute('aria-label'))
      t.is('none', getComputedStyle(sidebar).display)
      t.is(true, main.getBoundingClientRect().width >= width + 263)
      t.is(main, host.querySelector('main'))
      t.is(description, host.querySelector('[data-description]'))
      t.is('Keep this draft', description.value)
      t.is('123.', host.querySelector('[data-amount]').value)
      t.is(false, JSON.parse(localStorage.getItem(PREFERENCES_KEY)).sidebarVisible)
      toggle.click()
      await settle()
      t.is('flex', getComputedStyle(sidebar).display)
      t.is(width, main.getBoundingClientRect().width)
      t.is(balances, sidebar.textContent)
      t.is(true, host.querySelector('[role="switch"]').checked)
      t.is(
        'false',
        host.querySelector('button[aria-label="Expand Assets"]').getAttribute('aria-expanded'),
      )
      return [true, JSON.parse(localStorage.getItem(PREFERENCES_KEY)).sidebarVisible]
    })
  ),
  t`sidebar visibility is shared across all pages and its control translates`(() =>
    fixture(async (host) => {
      const toggle = () => host.querySelector('button[aria-controls="accounts-sidebar"]')
      toggle().click()
      await settle()
      for (const path of ['/accounts', '/files', '/settings']) {
        host.querySelector(`a[href="${path}"]`).click()
        await settle()
        if (path === '/settings') {
          await until(() => host.querySelector('[data-preference="language"]'))
        }
        t.is('none', getComputedStyle(host.querySelector('aside')).display)
        t.is('false', toggle().getAttribute('aria-expanded'))
      }
      change(host.querySelector('[data-preference="language"]'), 'da')
      await settle()
      t.is('Vis kontosidepanel', toggle().getAttribute('aria-label'))
      toggle().click()
      await settle()
      t.is('Skjul kontosidepanel', toggle().getAttribute('aria-label'))
      return ['flex', getComputedStyle(host.querySelector('aside')).display]
    })
  ),
  t`saved sidebar visibility restores on a direct Settings visit`(() =>
    fixture(
      async (host) => {
        await until(() => host.querySelector('[data-preference="language"]'))
        t.is('none', getComputedStyle(host.querySelector('aside')).display)
        return [
          'false',
          host.querySelector('button[aria-controls="accounts-sidebar"]').getAttribute(
            'aria-expanded',
          ),
        ]
      },
      { language: 'en', locale: 'en-GB', commodity: 'DKK', sidebarVisible: false },
      '/settings',
    )
  ),
)

t`Vim expand and collapse`(
  ...['drafts', 'ledger'].map((tab) =>
    t`h collapses and l expands the selected ${tab} transaction idempotently`(() =>
      fixture(async (host) => {
        if (tab === 'ledger') {
          host.querySelector('#tab-ledger').click()
          await settle()
        }
        const panel = host.querySelector('[role="tabpanel"]')
        const rows = [...host.querySelectorAll('article')]
        const toggle = () => rows[0].querySelector('button[aria-expanded]')
        panel.focus({ preventScroll: true })
        key(panel, 'h')
        await settle()
        t.is('false', toggle().getAttribute('aria-expanded'))
        key(panel, 'h', { repeat: true })
        await settle()
        t.is('false', toggle().getAttribute('aria-expanded'))
        if (rows[1]) {
          t.is('true', rows[1].querySelector('button[aria-expanded]').getAttribute('aria-expanded'))
        }
        key(panel, 'l')
        await settle()
        t.is('true', toggle().getAttribute('aria-expanded'))
        key(panel, 'l', { repeat: true })
        await settle()
        t.is('true', toggle().getAttribute('aria-expanded'))
        return [panel, document.activeElement]
      })
    )
  ),
  t`h and l ignore editors, menus, and posting review`(() =>
    fixture(async (host) => {
      const row = host.querySelector('article')
      const toggle = () => row.querySelector('button[aria-expanded]')
      const description = row.querySelector('[data-description]')
      description.focus()
      key(description, 'h')
      key(description, 'l')
      await settle()
      t.is('true', toggle().getAttribute('aria-expanded'))
      row.querySelector('button[aria-label="Actions for Train to client workshop"]').click()
      await settle()
      key(host.querySelector('[role="menu"]'), 'h')
      key(host.querySelector('[role="menu"]'), 'l')
      await settle()
      t.is('true', toggle().getAttribute('aria-expanded'))
      key(host.querySelector('[role="menu"]'), 'Escape')
      await settle()
      input(row.querySelectorAll('[data-amount]')[1], '384')
      await settle()
      button(row, 'Post').click()
      await settle()
      key(host.querySelector('dialog'), 'h')
      key(host.querySelector('dialog'), 'l')
      await settle()
      return ['true', toggle().getAttribute('aria-expanded')]
    })
  ),
  t`g l still changes workspace instead of expanding a collapsed draft`(() =>
    fixture(async (host) => {
      const panel = host.querySelector('[role="tabpanel"]')
      key(panel, 'h')
      key(panel, 'g')
      key(panel, 'l')
      await settle()
      t.is('/transactions/ledger', location.pathname)
      host.querySelector('#tab-drafts').click()
      await settle()
      return [
        'false',
        host.querySelector('article button[aria-expanded]').getAttribute('aria-expanded'),
      ]
    })
  ),
)

function scrollingFixture(run) {
  return fixture(async (host) => {
    // An isolated viewport keeps scrolling deterministic without disturbing the runner's app.
    host.style.cssText = 'position:fixed;inset:0;overflow:auto;z-index:1000'
    host.querySelector('#tab-ledger').click()
    await settle()
    return run(host)
  })
}

function assertVisible(host, element) {
  const rect = element.getBoundingClientRect()
  const topbar = host.firstElementChild.querySelector(':scope > header').getBoundingClientRect()
  const viewport = host.getBoundingClientRect()
  t.is(true, rect.top >= topbar.bottom + 11)
  t.is(true, rect.bottom <= viewport.bottom - 11)
}

t`localization`(
  t`settings use Sinewy native selects with matching chevron and text insets`(() =>
    fixture(async (host) => {
      host.querySelector('a[href="/settings"]').click()
      await until(() => host.querySelector('[data-preference="language"]'))
      const selects = host.querySelectorAll('select[data-preference]')
      t.is(3, selects.length)
      for (const select of selects) {
        const style = getComputedStyle(select)
        t.is('1', select.dataset.size)
        t.is('true', select.dataset.entxSelect)
        t.is('none', style.appearance)
        t.is('10px', style.paddingInlineStart)
        t.is(`calc(100% - ${style.paddingInlineStart})`, style.backgroundPositionX)
        t.is('32px', style.paddingInlineEnd)
        t.is(true, style.backgroundImage.includes('data:image/svg+xml,'))
      }
      return ['DKK', selects[2].value]
    })
  ),
  t`account suggestions retain typed new accounts and accept keyboard selections`(() =>
    fixture(async (host) => {
      const account = host.querySelector('input[aria-label="Account"]')
      t.is('combobox', account.getAttribute('role'))
      account.focus()
      input(account, 'Expenses:New category')
      await settle()
      host.querySelector('[data-description]').focus()
      await settle()
      t.is('Expenses:New category', account.value)
      account.focus()
      input(account, 'Assets:Bank')
      await settle()
      key(account, 'ArrowDown')
      key(account, 'Enter')
      await settle()
      return ['Assets:Bank', account.value]
    })
  ),
  t`account suggestions remain open while focused across redraws`(() =>
    fixture(async (host) => {
      const account = host.querySelector('input[aria-label="Account"]')
      account.focus()
      account.dispatchEvent(new FocusEvent('focus'))
      await settle()
      const popup = host.querySelector(`#${account.getAttribute('aria-controls')}`)
      await s.redraw()
      await new Promise((resolve) => setTimeout(resolve, 600))
      t.is(account, document.activeElement)
      t.is('true', account.getAttribute('aria-expanded'))
      t.is(true, popup.matches(':popover-open'))
      host.querySelector('[data-description]').focus()
      account.dispatchEvent(new FocusEvent('focusout', { bubbles: true }))
      await settle()
      return [false, popup.matches(':popover-open')]
    })
  ),
  t`first visit defaults to Danish and new draft focus is language independent`(() =>
    fixture(async (host) => {
      t.is('da', document.documentElement.lang)
      t.is('Kassekladde1', host.querySelector('#tab-drafts').textContent)
      for (const method of ['mouse', 'keyboard']) {
        const create = button(host, 'Ny transaktion', true)
        create.focus()
        method === 'mouse' ? create.click() : key(create, 'n')
        await settle()
        t.is(true, document.activeElement.matches('[data-description]'))
        t.is('', document.activeElement.value)
      }
      return [3, host.querySelectorAll('article').length]
    }, null)
  ),
  t`settings loads directly through the lazy route and restores saved preferences`(() =>
    fixture(
      async (host) => {
        await until(() => host.querySelector('[data-preference="language"]'))
        t.is('/settings', location.pathname)
        t.is('en', host.querySelector('[data-preference="language"]').value)
        t.is('da-DK', host.querySelector('[data-preference="locale"]').value)
        return [true, host.textContent.includes('1.234,56 EUR')]
      },
      { language: 'en', locale: 'da-DK', commodity: 'EUR' },
      '/settings',
    )
  ),
  t`switching language and region preserves draft data, filters, selection and balances`(() =>
    fixture(async (host) => {
      const row = host.querySelector('article')
      input(row.querySelector('[data-description]'), 'Kaffe med Ægir')
      input(row.querySelectorAll('[data-amount]')[0], '-1234.56')
      input(row.querySelectorAll('[data-amount]')[1], '1234.56')
      row.querySelector('input[type="checkbox"]').click()
      host.querySelector('[role="switch"]').click()
      button(host, 'Filter', true).click()
      await settle()
      input(host.querySelector('[data-filter-text]'), 'Ægir')
      await settle()
      host.querySelector('a[href="/settings"]').click()
      await until(() => host.querySelector('[data-preference="language"]'))
      change(host.querySelector('[data-preference="language"]'), 'da')
      await settle()
      t.is('da', document.documentElement.lang)
      t.is(true, host.textContent.includes('1,234.56 DKK'))
      change(host.querySelector('[data-preference="locale"]'), 'da-DK')
      await settle()
      t.is(true, host.textContent.includes('1.234,56 DKK'))
      host.querySelector('nav a[href="/transactions/drafts"]').click()
      await settle()
      const restored = host.querySelector('article')
      t.is('Kaffe med Ægir', restored.querySelector('[data-description]').value)
      t.is('-1.234,56', restored.querySelectorAll('[data-amount]')[0].value)
      t.is('1.234,56', restored.querySelectorAll('[data-amount]')[1].value)
      t.is('Assets:Bank', restored.querySelector('[aria-label="Konto"]').value)
      t.is(true, restored.querySelector('input[type="checkbox"]').checked)
      t.is('Ægir', host.querySelector('[data-filter-text]').value)
      t.is(true, host.querySelector('[role="switch"]').checked)
      t.is(false, button(host, 'Bogfør valgte').disabled)
      t.is(true, host.querySelector('aside').textContent.includes('1.234,56'))
      return ['da', JSON.parse(localStorage.getItem(PREFERENCES_KEY)).language]
    })
  ),
  t`unfinished Danish amount keeps its text and parser locale across settings navigation`(() =>
    fixture(async (host) => {
      const amount = host.querySelectorAll('[data-amount]')[1]
      amount.focus()
      input(amount, '123,')
      await settle()
      t.is('123,', amount.value)
      t.is('true', amount.getAttribute('aria-invalid'))
      t.is(true, button(host.querySelector('article'), 'Bogfør').disabled)
      host.querySelector('a[href="/settings"]').click()
      await until(() => host.querySelector('[data-preference="locale"]'))
      change(host.querySelector('[data-preference="locale"]'), 'en-GB')
      change(host.querySelector('[data-preference="language"]'), 'en')
      await settle()
      host.querySelector('nav a[href="/transactions/drafts"]').click()
      await settle()
      const restored = host.querySelectorAll('[data-amount]')[1]
      t.is('123,', restored.value)
      restored.focus()
      t.is(true, restored === document.activeElement)
      input(restored, '123,56')
      await settle()
      t.is(false, restored.hasAttribute('aria-invalid'))
      t.is(true, restored.isConnected)
      t.is(true, restored === host.querySelectorAll('[data-amount]')[1])
      t.is(true, restored === document.activeElement)
      t.is('en-GB', JSON.parse(localStorage.getItem(PREFERENCES_KEY)).locale)
      // Dispatch explicitly, like input/change above, without depending on OS window focus.
      restored.dispatchEvent(new FocusEvent('blur'))
      await settle()
      t.is('123.56', restored.value)
      return [false, restored.hasAttribute('aria-invalid')]
    }, { language: 'da', locale: 'da-DK', commodity: 'DKK' })
  ),
  t`Danish decimal amounts can be reviewed and posted without changing their value`(() =>
    fixture(async (host) => {
      const amounts = host.querySelectorAll('[data-amount]')
      input(amounts[0], '-1.234,56')
      input(amounts[1], '1.234,56')
      await settle()
      button(host.querySelector('article'), 'Bogfør').click()
      await settle()
      t.is(true, host.querySelector('dialog').textContent.includes('Bogfør 1 transaktion?'))
      button(host, 'Bogfør i regnskabet').click()
      await settle()
      host.querySelector('#tab-ledger').click()
      await settle()
      const posted = host.querySelector('[data-transaction-id="draft-1"]')
      t.is(true, posted.textContent.includes('-1.234,56'))
      return [0, posted.querySelectorAll('input').length]
    }, null)
  ),
  t`changing default currency affects only new entries and persists locally`(() =>
    fixture(async (host) => {
      host.querySelector('a[href="/settings"]').click()
      await until(() => host.querySelector('[data-preference="commodity"]'))
      change(host.querySelector('[data-preference="commodity"]'), 'EUR')
      await settle()
      host.querySelector('nav a[href="/transactions/drafts"]').click()
      await settle()
      t.is('DKK', host.querySelector('[aria-label="Commodity"]').value)
      button(host, 'New transaction', true).click()
      await settle()
      t.is(
        'EUR',
        host.querySelector('[data-transaction-id="draft-2000"] [aria-label="Commodity"]').value,
      )
      return ['EUR', JSON.parse(localStorage.getItem(PREFERENCES_KEY)).commodity]
    })
  ),
)

function change(element, value) {
  element.value = value
  element.dispatchEvent(new Event('change', { bubbles: true }))
}

async function until(condition) {
  const deadline = performance.now() + 3000
  while (!condition()) {
    if (performance.now() > deadline) throw new Error('Expected route content did not appear')
    await settle()
  }
  await settle()
}

async function fixture(
  run,
  preferences = { language: 'en', locale: 'en-GB', commodity: 'DKK' },
  path = '/transactions/drafts',
) {
  const url = location.href
  const saved = localStorage.getItem('entx.transactions.tab')
  const savedPreferences = localStorage.getItem(PREFERENCES_KEY)
  const savedLanguage = document.documentElement.lang
  preferences === null
    ? localStorage.removeItem(PREFERENCES_KEY)
    : localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences))
  history.replaceState(null, '', path)
  const host = document.createElement('div')
  document.body.append(host)
  let active = true
  const mounted = s.mount(host, () => active ? App() : null)
  try {
    await settle()
    return await run(host)
  } finally {
    host.querySelector('dialog[open]')?.close()
    active = false
    await s.redraw()
    mounted.unmount()
    host.remove()
    history.replaceState(null, '', url)
    saved === null
      ? localStorage.removeItem('entx.transactions.tab')
      : localStorage.setItem('entx.transactions.tab', saved)
    savedPreferences === null
      ? localStorage.removeItem(PREFERENCES_KEY)
      : localStorage.setItem(PREFERENCES_KEY, savedPreferences)
    document.documentElement.lang = savedLanguage
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
