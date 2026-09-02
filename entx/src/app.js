import s from 'sin'
import Dropdown, { AlertDialog } from 'sinewy/theme'
import { createI18n } from './i18n/index.js'
import { formatAmount as displayAmount, parseAmount } from './i18n/format.js'
import {
  accountBalances,
  accountLabel,
  createCorrection,
  draftReadiness,
  filterTransactions,
  initialTransactions,
  parseAccount,
  postDrafts,
  transactionsForTab,
  transactionTotals,
} from './model.js'

export const TOPBAR_COLOR = '#fcfcfd'

const SIDEBAR_ICON = `data:image/svg+xml,${
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"><rect x="2.75" y="3.75" width="14.5" height="12.5" rx="2" stroke="#66666c" stroke-width="1.5"/><path d="M7.25 4v12" stroke="#66666c" stroke-width="1.5"/></svg>',
  )
}`

const CHEVRON_ICON = `data:image/svg+xml,${
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none"><path d="m6 4 4 4-4 4" stroke="#77777e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  )
}`

s.css.reset``

s.css`
  :root {
    color-scheme light
    font-family Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
    background ${TOPBAR_COLOR}
    color #1d1d20
    font-synthesis none
    text-rendering optimizeLegibility
  }

  * { box-sizing border-box }

  body {
    min-width 960
    min-height 100svh
    margin 0
    background ${TOPBAR_COLOR}
  }

  button, input, select { font inherit }
  button { color inherit }
  ::selection { background #ddd6fe }
`

const Shell = s`div
  min-height 100svh
  display grid
  grid-template-rows 52px minmax(0, 1fr)
  background #f7f7f8
`

const Topbar = s`header
  position sticky
  z-index 20
  top 0
  display grid
  grid-template-columns 264px minmax(0, 1fr) auto
  align-items center
  border-bottom 1px solid #e6e6e8
  background ${TOPBAR_COLOR}

  &[data-sidebar-visible='false'] { grid-template-columns auto minmax(0, 1fr) auto }
`

const TopbarStart = s`div
  height 100%
  display flex
  align-items center
  gap 10
  padding 0 18
`

const SidebarToggle = s`button
  width 28
  height 28
  display inline-grid
  place-items center
  padding 0
  border 0
  border-radius 5
  background transparent
  cursor pointer

  img { width 20; height 20 }
  &:hover { background #ededf0 }
  &:focus-visible { outline 2px solid #968eeb; outline-offset 2 }
`

const Brand = s`button
  height 100%
  display flex
  align-items center
  gap 10
  padding 0
  border 0
  background transparent
  cursor pointer
`

const Mark = s`span
  width 24
  height 24
  display grid
  place-items center
  border-radius 7
  background #17171a
  color white
  font-size 11
  font-weight 850
  letter-spacing -0.04em
`

const Wordmark = s`span
  font-size 13
  font-weight 820
  letter-spacing 0.11em
`

const Nav = s`nav
  height 100%
  display flex
  align-items center
  gap 3
`

const NavButton = s`a
  height 32
  display inline-flex
  align-items center
  padding 0 11
  border 0
  border-radius 7
  background transparent
  color #66666c
  font-size 13
  font-weight 620
  cursor pointer
  text-decoration none

  &:hover { background #f0f0f2; color #252528 }
  &[aria-current='page'] { background #ededf0; color #19191c }
`

const TopbarEnd = s`div
  display flex
  align-items center
  gap 8
  padding-right 18
  color #77777e
  font-size 11
`

const SyncDot = s`span
  width 6
  height 6
  border-radius 999
  background #22a06b
  box-shadow 0 0 0 3px #e6f5ee
`

const Workspace = s`div
  min-height 0
  display grid
  grid-template-columns 264px minmax(0, 1fr)

  &[data-sidebar-visible='false'] { grid-template-columns minmax(0, 1fr) }
`

const Sidebar = s`aside
  position sticky
  top 52
  height calc(100svh - 52px)
  display flex
  flex-direction column
  border-right 1px solid #e6e6e8
  background #fafafa

  &[hidden] { display none }
`

const SidebarHeader = s`header
  display grid
  gap 4
  padding 20 18 14
`

const SidebarTitleRow = s`div
  display flex
  align-items center
  justify-content space-between
  gap 12
`

const SidebarTitle = s`h2
  font-size 12
  font-weight 760
  letter-spacing 0.01em
`

const SidebarMeta = s`p
  color #8b8b92
  font-size 11
`

const TreeToggle = s`label
  display flex
  align-items center
  gap 6
  color #6d6d73
  font-size 11
  cursor pointer

  input {
    width 14
    height 14
    margin 0
    accent-color #5b50d6
  }
`

const IncludeToggle = s`label
  display flex
  align-items center
  gap 7
  margin-top 6
  color #6d6d73
  font-size 10
  cursor pointer

  input {
    position absolute
    width 1
    height 1
    overflow hidden
    opacity 0
  }

  span {
    position relative
    width 26
    height 15
    flex none
    border-radius 999
    background #d7d7db
    transition background 120ms ease
  }

  span::after {
    content ''
    position absolute
    top 2
    left 2
    width 11
    height 11
    border-radius 999
    background white
    box-shadow 0 1px 3px rgb(0 0 0 / 0.2)
    transition transform 120ms ease
  }

  input:checked + span { background #655bd8 }
  input:checked + span::after { transform translateX(11px) }
  input:focus-visible + span { outline 2px solid #968eeb; outline-offset 2px }
`

const AccountList = s`div
  flex 1
  min-height 0
  overflow auto
  padding 2px 10px 20px
`

const AccountRow = s`div
  min-height 30
  display grid
  grid-template-columns minmax(0, 1fr) auto
  align-items center
  gap 10
  padding 5px 8px
  border-radius 6
  font-size 11

  &:hover { background #f0f0f2 }
  &[data-root='true'] { margin-top 5; color #5a5a60; font-weight 720 }
`

const AccountBranch = s`div
  min-width 0
  display flex
  align-items center
  gap 2
`

const AccountToggle = s`button
  width 18
  height 18
  flex none
  display grid
  place-items center
  padding 0
  border 0
  border-radius 4
  background transparent
  cursor pointer

  &:hover { background #ebebee }
  &:focus-visible { outline 2px solid #968eeb; outline-offset 1px }
`

const AccountIndent = s`span
  width 18
  height 18
  flex none
`

const AccountName = s`span
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
`

const ChevronIcon = s`img
  width 14
  height 14
  display block
  transform rotate(0deg)
  transition transform 120ms ease

  &[data-expanded='true'] { transform rotate(90deg) }

  @media (prefers-reduced-motion: reduce) { transition none }
`

const AccountValue = s`span
  display grid
  justify-items end
  gap 1
  font-variant-numeric tabular-nums
  font-weight 610

  &[data-staged='true'] { color #5b50c8 }

  em {
    margin-left 3
    color #98989e
    font-size 8
    font-style normal
    font-weight 650
  }
`

const SidebarFooter = s`footer
  display grid
  gap 3
  padding 13px 18px 16px
  border-top 1px solid #e9e9eb
  color #8a8a90
  font-size 10

  strong { color #626268; font-weight 680 }
`

const Main = s`main
  min-width 0
  padding 24px clamp(24px, 4vw, 56px) 64px
`

const MainHeader = s`header
  display flex
  align-items flex-end
  justify-content space-between
  gap 24
  margin-bottom 18
`

const TitleGroup = s`div
  display grid
  gap 5
`

const Title = s`h1
  font-size 22
  font-weight 760
  letter-spacing -0.035em
`

const Subtitle = s`p
  color #7b7b82
  font-size 12
`

const Toolbar = s`div
  display flex
  align-items center
  gap 7
`

const Button = s`button
  min-height 32
  display inline-flex
  align-items center
  justify-content center
  gap 7
  padding 0 10
  border 1px solid #dedee1
  border-radius 7
  background #fff
  color #444448
  box-shadow 0 1px 1px rgb(0 0 0 / 0.03)
  font-size 12
  font-weight 650
  cursor pointer

  &:hover { border-color #ccccd0; background #fafafa }
  &[data-active='true'] { border-color #cbc5f6; background #f1efff; color #4f45bd }
  &[data-primary='true'] { border-color #1c1c1f; background #1c1c1f; color white }
  &[data-primary='true']:hover { background #303035 }
  &:disabled { opacity 0.44; cursor default }
`

const Key = s`kbd
  min-width 17
  height 17
  display inline-grid
  place-items center
  padding 0 4
  border 1px solid currentColor
  border-radius 4
  opacity 0.54
  font-family inherit
  font-size 9
  font-weight 700
`

const FilterPanel = s`section
  display grid
  grid-template-columns 112px 112px 152px minmax(170px, 1fr) minmax(170px, 1fr) auto
  align-items end
  gap 10
  margin 0 0 16px
  padding 14
  border 1px solid #e1e1e4
  border-radius 10
  background #fdfdfd
  box-shadow 0 8px 30px rgb(0 0 0 / 0.035)
`

const Field = s`label
  display grid
  gap 5
  color #74747a
  font-size 10
  font-weight 690

  input, select {
    width 100%
    height 30
    padding 0 8
    outline 0
    border 1px solid #dedee1
    border-radius 6
    background white
    color #2b2b2e
    font-size 12
    font-weight 500
  }

  input:focus, select:focus {
    border-color #8c82e8
    box-shadow 0 0 0 2px #ece9ff
  }
`

const FilterChips = s`div
  display flex
  flex-wrap wrap
  gap 6
  margin -6px 0 14px
`

const Chip = s`button
  height 24
  display inline-flex
  align-items center
  gap 5
  padding 0 8
  border 0
  border-radius 999
  background #eceafc
  color #584ec0
  font-size 10
  font-weight 650
  cursor pointer
`

const SectionHeader = s`header
  min-height 34
  display flex
  align-items center
  justify-content space-between
  gap 16
  padding 0 2px
`

const SectionLabel = s`h2
  display flex
  align-items center
  gap 7
  color #66666d
  font-size 10
  font-weight 780
  letter-spacing 0.065em
  text-transform uppercase

  span {
    min-width 18
    height 18
    display inline-grid
    place-items center
    border-radius 999
    background #ececef
    color #707076
    font-size 9
    letter-spacing 0
  }
`

const TransactionTabs = s`nav
  display flex
  gap 24
  border-bottom 1px solid #e0e0e3
  margin-bottom 18
`

const TransactionTab = s`a
  display inline-flex
  align-items center
  gap 7
  padding 0 1px 12px
  border-bottom 2px solid transparent
  color #77777e
  text-decoration none
  font-size 13
  font-weight 650

  &[aria-selected='true'] { border-color #655bd8; color #28252f }
  &:focus-visible { outline 2px solid #968eeb; outline-offset 4px }
  span { padding 2px 6px; border-radius 5; background #ececef; font-size 10; color #77777e }
`

const SelectionCell = s`div
  display flex
  align-items center
  gap 7

  input { width 14; height 14; margin 0; accent-color #655bd8; cursor pointer }
`

const PostingToolbar = s`div
  display flex
  align-items center
  gap 10
  margin-bottom 12
  color #7b7b82
  font-size 11

  label { display inline-flex; align-items center; gap 6 }
  input { accent-color #655bd8 }
  > span { flex 1 }
`

const Notice = s`div
  display flex
  align-items center
  gap 10
  color #5a5277
  font-size 12
  margin-bottom 12

  &:empty { display none }
`

const CorrectionNote = s`div
  padding 0 46px 8px 193px
  font-size 10
  color #88818f

  button { padding 0; border 0; background none; color #655bd8; cursor pointer }
`

const ReviewList = s`ul
  display grid
  gap 10
  max-height 260
  overflow auto
  margin 18px 0
  padding 0
  list-style none
  font-size 13

  li { display grid; gap 3 }
  time { color #77777e; font-size 11 }
`

const Ledger = s`section
  overflow hidden
  border 1px solid #e0e0e3
  border-radius 10
  background #fff
`

const Transaction = s`article
  position relative
  scroll-margin-top 64
  scroll-margin-bottom 12
  border-bottom 1px solid #ededee
  background white

  &:last-child { border-bottom 0 }
  &[data-selected='true'] { box-shadow inset 2px 0 #655bd8 }
  &[data-draft='true'] { background #fffdf7 }
`

const TransactionHeader = s`header
  min-height 46
  scroll-margin-top 64
  scroll-margin-bottom 12
  display grid
  grid-template-columns 45px 118px minmax(0, 1fr) auto auto
  align-items center
  gap 10
  padding 7px 9px 7px 10px
  cursor default
`

const CollapseButton = s`button
  width 24
  height 24
  display grid
  place-items center
  padding 0
  border 0
  border-radius 5
  background transparent
  color #96969c
  cursor pointer

  &:hover { background #f0f0f2; color #4e4e53 }
  &:focus-visible { outline 2px solid #968eeb; outline-offset 1px }
`

const DateText = s`time
  color #6d6d73
  font-size 11
  font-variant-numeric tabular-nums
`

const Description = s`strong
  min-width 0
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
  font-size 12
  font-weight 670
`

const StateBadge = s`span
  padding 3px 6px
  border-radius 999
  background #f0f0f2
  color #7b7b81
  font-size 9
  font-weight 760
  letter-spacing 0.035em
  text-transform uppercase

  &[data-balanced='true'] { background #e9f6ef; color #168255 }
  &[data-unbalanced='true'] { background #fff0d4; color #a05e08 }
`

const MenuDots = s`span
  display inline-flex
  letter-spacing 1px
  transform translateY(-2px)
`

const Legs = s`div
  padding 0 46px 10px 193px
`

const Leg = s`div
  min-height 29
  display grid
  grid-template-columns minmax(180px, 1fr) 118px 46px 24px
  align-items center
  gap 8
  color #55555b
  font-family ui-monospace, SFMono-Regular, Menlo, Consolas, monospace
  font-size 11
`

const LegAccount = s`span
  min-width 0
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
`

const LegAmount = s`span
  justify-self end
  font-variant-numeric tabular-nums
  color #2c2c30

  &[data-negative='true'] { color #a64444 }
`

const Commodity = s`span
  color #9a9aa0
  font-size 9
`

const DraftHeaderInput = s`input
  width 100%
  height 30
  min-width 0
  padding 0 6
  outline 0
  border 1px solid transparent
  border-radius 5
  background transparent
  color #29292c
  font-size 12
  font-weight 620

  &:hover { border-color #e5e1d7; background rgb(255 255 255 / 0.58) }
  &:focus { border-color #afa7ee; background white; box-shadow 0 0 0 2px #efedff }
`

const DraftLeg = s`div
  min-height 34
  display grid
  grid-template-columns minmax(180px, 1fr) 118px 66px 24px
  align-items center
  gap 8

  input {
    width 100%
    height 28
    min-width 0
    padding 0 6
    outline 0
    border 1px solid transparent
    border-radius 5
    background transparent
    color #4f4f54
    font-family ui-monospace, SFMono-Regular, Menlo, Consolas, monospace
    font-size 11
  }

  input:hover { border-color #e5e1d7; background rgb(255 255 255 / 0.7) }
  input:focus { border-color #afa7ee; background white; box-shadow 0 0 0 2px #efedff }
  input[data-amount] { text-align right; font-variant-numeric tabular-nums }
`

const QuietButton = s`button
  min-height 26
  display inline-flex
  align-items center
  justify-content center
  gap 5
  padding 0 7
  border 0
  border-radius 5
  background transparent
  color #77777e
  font-size 10
  font-weight 650
  cursor pointer

  &:hover { background #efeff1; color #39393d }
`

const RemoveButton = s`button
  width 24
  height 24
  display grid
  place-items center
  padding 0
  border 0
  border-radius 5
  background transparent
  color #aaa9a5
  cursor pointer

  &:hover { background #f7e8e8; color #a33d3d }
`

const DraftFooter = s`footer
  min-height 38
  display flex
  align-items center
  justify-content space-between
  gap 16
  padding 3px 0 1px
`

const DraftActions = s`div
  display flex
  align-items center
  gap 6
`

const BalanceMessage = s`span
  color #9d610f
  font-size 10
  font-weight 650

  &[data-balanced='true'] { color #168255 }
`

const EmptyState = s`div
  min-height 220
  display grid
  place-items center
  padding 40
  color #898990
  font-size 12
  text-align center
`

const KeyboardHint = s`footer
  display flex
  flex-wrap wrap
  gap 13
  margin-top 16
  color #929298
  font-size 10

  span { display inline-flex; align-items center; gap 5 }
`

const Placeholder = s`section
  min-height 480
  display grid
  place-items center
  border 1px dashed #d9d9dc
  border-radius 10
  color #85858b
  text-align center

  div { display grid; gap 7 }
  strong { color #47474c; font-size 15 }
  p { font-size 12 }
`

const App = s((_attrs, _children, context) => {
  const { route } = context
  const i18n = createI18n()
  const { t, amount: formatAmount } = i18n
  const periodLabel = (filters) => i18n.period(filters)
  context.entx = { i18n }
  context.doc.lang(i18n.preferences().language)
  context.onremove(i18n.preferences.observe(() => {
    context.doc.lang(i18n.preferences().language)
    context.redraw()
  }))
  // Raw, unfinished amounts survive navigation without changing their input locale.
  const amountEdits = new Map()
  let shell
  let transactions = structuredClone(initialTransactions)
  let lastTab = transactions.some(({ status }) => status === 'draft') ? 'drafts' : 'ledger'
  const activeArea = () =>
    route.has('/accounts')
      ? 'accounts'
      : route.has('/files')
      ? 'files'
      : route.has('/settings')
      ? 'settings'
      : 'transactions'
  const activeTab = () =>
    route.has('/transactions/ledger')
      ? 'ledger'
      : route.has('/transactions/drafts')
      ? 'drafts'
      : lastTab
  let filtersOpen = false
  let tree = true
  let includeDrafts = false
  const collapsed = new Set()
  const collapsedAccounts = new Set()
  const checkedDrafts = new Set()
  let reviewIds = []
  let reviewError = ''
  let notice = ''
  let postedNotice = false
  let goPressedAt = 0
  let selectedId = transactions[0].id
  let selectionScrollRequest = 0
  let filters = { year: '', month: '', day: '', account: '', text: '' }
  let nextId = 2000

  const activeFilters = () => Object.values(filters).filter(Boolean).length
  const visible = () => transactionsForTab(transactions, activeTab(), filters)
  const patchFilters = (patch) => filters = { ...filters, ...patch }
  const selectedDrafts = () =>
    visible().filter(({ id, status }) => status === 'draft' && checkedDrafts.has(id))
  const rememberTab = () => {
    if (activeArea() !== 'transactions') return
    lastTab = activeTab()
    try {
      localStorage.setItem('entx.transactions.tab', lastTab)
    } catch { /* Storage is optional. */ }
  }
  const navigateTab = (tab) => {
    lastTab = tab
    route(`/transactions/${tab}`, { scroll: false })
    rememberTab()
  }
  const showDraft = (id, message) => {
    const hadFilters = activeFilters()
    filters = { year: '', month: '', day: '', account: '', text: '' }
    selectedId = id
    collapsed.delete(id)
    notice = { key: message, filtersCleared: !!hadFilters }
    postedNotice = false
    navigateTab('drafts')
    s.redraw().then(() =>
      shell?.querySelector(
        `[data-transaction-id="${id}"] input[data-description]`,
      )?.focus()
    )
  }

  const addDraft = () => {
    const id = `draft-${nextId++}`
    transactions.unshift({
      id,
      status: 'draft',
      date: today(),
      description: '',
      legs: [
        {
          id: `${id}-1`,
          account: ['Assets', 'Bank'],
          amount: '',
          commodity: i18n.preferences().commodity,
        },
        {
          id: `${id}-2`,
          account: ['Expenses', 'Uncategorized'],
          amount: '',
          commodity: i18n.preferences().commodity,
        },
      ],
    })
    showDraft(id, 'newDraft')
  }

  const duplicateToDrafts = (source, reverse = false) => {
    const id = `draft-${nextId++}`
    transactions.unshift(
      reverse ? createCorrection(source, id, today()) : {
        id,
        status: 'draft',
        date: today(),
        description: source.description,
        legs: source.legs.map((leg, index) => ({
          ...structuredClone(leg),
          id: `${id}-${index + 1}`,
        })),
      },
    )
    showDraft(
      id,
      reverse ? 'correctionCreated' : 'copied',
    )
  }

  const removeDraft = (id) => {
    if (!transactions.some((item) => item.id === id && item.status === 'draft')) return
    transactions = transactions.filter((transaction) => transaction.id !== id)
    checkedDrafts.delete(id)
    selectedId = visible()[0]?.id ?? ''
  }

  const reviewPosting = (drafts) => {
    if (!drafts.length || drafts.some((draft) => draftReadiness(draft) !== 'ready')) return
    reviewError = ''
    reviewIds = drafts.map(({ id }) => id)
  }

  const confirmPosting = (event) => {
    try {
      transactions = postDrafts(transactions, reviewIds)
      reviewIds.forEach((id) => checkedDrafts.delete(id))
      notice = { key: 'postedNotice', params: { count: reviewIds.length } }
      postedNotice = true
      selectedId = visible()[0]?.id ?? ''
    } catch {
      event.preventDefault()
      reviewError = 'postingError'
    }
  }

  const selectTransaction = (id) => {
    if (!id) return
    selectedId = id
    const tab = activeTab()
    const request = ++selectionScrollRequest
    // Sin resolves this shared promise after the batched DOM update, including dom hooks.
    s.redraw().then(() => {
      if (
        request !== selectionScrollRequest || selectedId !== id ||
        activeArea() !== 'transactions' || activeTab() !== tab
      ) return
      const row = shell?.querySelector('article[data-selected="true"]')
      if (!row) return
      // A tall expanded transaction cannot fit: keep its identifying header visible instead.
      // Allow 52px for the sticky topbar and 12px breathing room on either edge.
      const availableHeight = row.ownerDocument.defaultView.innerHeight - 76
      const target = row.getBoundingClientRect().height > availableHeight
        ? row.querySelector('header')
        : row
      target?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'instant' })
    })
  }

  const moveSelection = (direction) => {
    const rows = visible()
    if (!rows.length) return
    const current = rows.findIndex(({ id }) => id === selectedId)
    const next = current < 0 ? 0 : Math.min(rows.length - 1, Math.max(0, current + direction))
    selectTransaction(rows[next].id)
  }

  const onkeydown = (event) => {
    if (
      reviewIds.length || event.defaultPrevented || event.target.closest('dialog, [role="menu"]')
    ) {
      goPressedAt = 0
      return
    }
    const typing = ['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName) ||
      event.target.isContentEditable

    if (
      (event.metaKey || event.ctrlKey) && event.key === 'Enter' &&
      activeArea() === 'transactions' && activeTab() === 'drafts'
    ) {
      event.preventDefault()
      reviewPosting(selectedDrafts())
      s.redraw()
      return
    }

    if (event.key === 'Escape' && filtersOpen) {
      goPressedAt = 0
      filtersOpen = false
      s.redraw()
      return
    }
    if (typing || event.metaKey || event.ctrlKey || event.altKey) {
      goPressedAt = 0
      return
    }

    const canNavigate = activeArea() === 'transactions' &&
      !event.target.closest('button, a, [role="tablist"]')
    const goPending = goPressedAt && Date.now() - goPressedAt < 1200

    if (event.key === 'g') {
      event.preventDefault()
      if (event.repeat) return
      if (goPending) {
        goPressedAt = 0
        if (canNavigate) selectTransaction(visible()[0]?.id)
      } else goPressedAt = Date.now()
      return
    }
    goPressedAt = 0
    if (goPending && ['d', 'l'].includes(event.key)) {
      event.preventDefault()
      navigateTab(event.key === 'd' ? 'drafts' : 'ledger')
      return
    }

    if (event.key === 'n') {
      event.preventDefault()
      addDraft()
      s.redraw()
    } else if (!canNavigate) {
      return
    } else if (event.key === 'G') {
      event.preventDefault()
      selectTransaction(visible().at(-1)?.id)
    } else if (event.key === 'f') {
      event.preventDefault()
      filtersOpen = !filtersOpen
      s.redraw()
    } else if (event.key === '/') {
      event.preventDefault()
      filtersOpen = true
      s.redraw()
      requestAnimationFrame(() => shell?.querySelector('[data-filter-text]')?.focus())
    } else if (event.key === 'j' || event.key === 'ArrowDown') {
      event.preventDefault()
      moveSelection(1)
    } else if (event.key === 'k' || event.key === 'ArrowUp') {
      event.preventDefault()
      moveSelection(-1)
    } else if ((event.key === 'h' || event.key === 'l') && selectedId) {
      event.preventDefault()
      event.key === 'h' ? collapsed.add(selectedId) : collapsed.delete(selectedId)
      selectTransaction(selectedId)
    } else if (event.key === 'Enter' && selectedId) {
      event.preventDefault()
      collapsed.has(selectedId) ? collapsed.delete(selectedId) : collapsed.add(selectedId)
      s.redraw()
    }
  }

  const topbar = () =>
    Topbar(
      { data: { sidebarVisible: i18n.preferences().sidebarVisible } },
      TopbarStart(
        SidebarToggle({
          type: 'button',
          'aria-label': t(i18n.preferences().sidebarVisible ? 'hideSidebar' : 'showSidebar'),
          title: t(i18n.preferences().sidebarVisible ? 'hideSidebar' : 'showSidebar'),
          'aria-expanded': String(i18n.preferences().sidebarVisible),
          'aria-controls': 'accounts-sidebar',
          onclick: () => i18n.update({ sidebarVisible: !i18n.preferences().sidebarVisible }),
        }, s`img`({ src: SIDEBAR_ICON, alt: '', 'aria-hidden': 'true' })),
        Brand(
          { onclick: () => navigateTab(lastTab), 'aria-label': t('goTransactions') },
          Mark('E'),
          Wordmark('ENTX'),
        ),
      ),
      Nav(
        { 'aria-label': t('mainNavigation') },
        ['transactions', 'accounts', 'files'].map((area) =>
          NavButton({
            key: area,
            href: area === 'transactions' ? `/transactions/${lastTab}` : `/${area}`,
            'aria-current': activeArea() === area ? 'page' : undefined,
          }, t(area))
        ),
      ),
      TopbarEnd(
        SyncDot(),
        s`span`(t('localPrototype')),
        NavButton({
          href: '/settings',
          'aria-current': activeArea() === 'settings' ? 'page' : undefined,
        }, t('settings')),
      ),
    )

  const sidebar = (visibleTransactions) => {
    const committed = visibleTransactions.filter(({ status }) => status === 'committed')
    const drafts = visibleTransactions.filter(({ status }) => status === 'draft')
    const draftKeys = new Set(accountBalances(drafts, tree).map(balanceKey))
    const balances = accountBalances(includeDrafts ? [...committed, ...drafts] : committed, tree)

    return Sidebar(
      {
        id: 'accounts-sidebar',
        hidden: !i18n.preferences().sidebarVisible,
        'aria-label': t('liveBalance'),
      },
      SidebarHeader(
        SidebarTitleRow(
          SidebarTitle(t('liveBalance')),
          TreeToggle(
            s`input`({
              type: 'checkbox',
              checked: tree,
              onchange: (event) => tree = event.target.checked,
            }),
            t('tree'),
          ),
        ),
        SidebarMeta(
          `${periodLabel(filters)} · ${t('postedCount', { count: committed.length })}${
            includeDrafts && drafts.length ? ` + ${t('draftCount', { count: drafts.length })}` : ''
          }`,
        ),
        IncludeToggle(
          s`input`({
            type: 'checkbox',
            role: 'switch',
            checked: includeDrafts,
            onchange: (event) => includeDrafts = event.target.checked,
          }),
          s`span`({ 'aria-hidden': 'true' }),
          t('includeDrafts'),
        ),
      ),
      AccountList(
        balances
          .filter(({ account }) =>
            !tree ||
            !account.slice(0, -1).some((_, index) =>
              collapsedAccounts.has(accountLabel(account.slice(0, index + 1)))
            )
          )
          .map(({ account, commodity, amount }) => {
            const name = accountLabel(account)
            const key = balanceKey({ account, commodity })
            const indent = tree ? Math.max(0, account.length - 1) * 12 : 0
            const hasChildren = tree &&
              balances.some((candidate) => isDescendant(candidate.account, account))
            const isCollapsed = collapsedAccounts.has(name)

            return AccountRow(
              { key, data: { root: tree && account.length === 1 } },
              AccountBranch(
                { style: { paddingLeft: `${indent}px` } },
                tree
                  ? hasChildren
                    ? AccountToggle(
                      {
                        'aria-label': t(isCollapsed ? 'expandAccount' : 'collapseAccount', {
                          account: name,
                        }),
                        'aria-expanded': String(!isCollapsed),
                        onclick: () =>
                          isCollapsed
                            ? collapsedAccounts.delete(name)
                            : collapsedAccounts.add(name),
                      },
                      ChevronIcon({
                        src: CHEVRON_ICON,
                        alt: '',
                        'aria-hidden': 'true',
                        data: { expanded: !isCollapsed },
                      }),
                    )
                    : AccountIndent()
                  : null,
                AccountName(
                  { title: name },
                  tree ? account.at(-1) : name,
                ),
              ),
              AccountValue(
                {
                  data: { staged: includeDrafts && draftKeys.has(key) },
                  title: includeDrafts && draftKeys.has(key)
                    ? t('includesDrafts')
                    : t('postedBalance'),
                },
                s`span`(
                  formatAmount(amount),
                  commodity === i18n.preferences().commodity ? null : s`em`(commodity),
                ),
              ),
            )
          }),
      ),
      SidebarFooter(
        s`span`(s`strong`(i18n.preferences().commodity), ' · ', t('defaultCommodity')),
        s`span`(t(includeDrafts ? 'draftEffects' : 'postedOnly')),
      ),
    )
  }

  const filterPanel = () =>
    FilterPanel(
      Field(
        t('year'),
        s`select`(
          {
            value: filters.year,
            onchange: (event) => patchFilters({ year: event.target.value, day: '' }),
          },
          s`option`({ value: '' }, t('anyYear')),
          s`option`({ value: '2026' }, '2026'),
          s`option`({ value: '2025' }, '2025'),
        ),
      ),
      Field(
        t('month'),
        s`select`(
          {
            value: filters.month,
            onchange: (event) => patchFilters({ month: event.target.value, day: '' }),
          },
          s`option`({ value: '' }, t('anyMonth')),
          ...Array.from({ length: 12 }, (_, index) => {
            const month = String(index + 1).padStart(2, '0')
            return s`option`({ value: month }, i18n.date(`2026-${month}-01`, { month: 'short' }))
          }),
        ),
      ),
      Field(
        t('day'),
        s`input`({
          type: 'date',
          value: filters.day,
          oninput: (event) =>
            patchFilters({
              day: event.target.value,
              ...(event.target.value ? { year: '', month: '' } : {}),
            }),
        }),
      ),
      Field(
        t('account'),
        s`input`({
          value: filters.account,
          placeholder: 'Assets:Bank',
          oninput: (event) => patchFilters({ account: event.target.value }),
        }),
      ),
      Field(
        t('text'),
        s`input`({
          data: { filterText: true },
          value: filters.text,
          placeholder: t('descriptionContains'),
          oninput: (event) => patchFilters({ text: event.target.value }),
        }),
      ),
      Button({
        disabled: !activeFilters(),
        onclick: () => filters = { year: '', month: '', day: '', account: '', text: '' },
      }, t('clear')),
    )

  const filterChips = () => {
    const chips = [
      filters.year && ['year', filters.year],
      filters.month &&
      [
        'month',
        i18n.date(`2026-${filters.month}-01`, { month: 'long' }),
      ],
      filters.day && ['day', i18n.date(filters.day)],
      filters.account && ['account', filters.account],
      filters.text && ['text', `“${filters.text}”`],
    ].filter(Boolean)

    return chips.length
      ? FilterChips(
        chips.map(([key, label]) =>
          Chip(
            {
              key,
              onclick: () => patchFilters({ [key]: '' }),
              title: t('removeFilter', { filter: t(key) }),
            },
            label,
            '×',
          )
        ),
      )
      : null
  }

  const transactionMenu = (transaction) =>
    Dropdown(
      Dropdown.Trigger({
        size: '1',
        variant: 'ghost',
        color: 'gray',
        'aria-label': t('actionsFor', { description: transaction.description }),
      }, MenuDots('•••')),
      Dropdown.Content(
        { size: '1', align: 'end', color: 'gray' },
        Dropdown.Label(t('transaction')),
        Dropdown.Item({ onselect: () => duplicateToDrafts(transaction) }, t('duplicate')),
        transaction.status === 'committed'
          ? Dropdown.Item(
            { onselect: () => duplicateToDrafts(transaction, true) },
            t('correction'),
          )
          : Dropdown.Item(
            { color: 'red', onselect: () => removeDraft(transaction.id) },
            t('discard'),
          ),
      ),
    )

  const committedLegs = (transaction) =>
    Legs(
      transaction.legs.map((leg) =>
        Leg(
          { key: leg.id },
          LegAccount(accountLabel(leg.account)),
          LegAmount({ data: { negative: leg.amount < 0 } }, formatAmount(leg.amount)),
          Commodity(leg.commodity),
          s`span`(),
        )
      ),
    )

  const amountInput = (leg) => {
    const edit = amountEdits.get(leg.id)
    const finishEdit = () => {
      const current = amountEdits.get(leg.id)
      if (!current || ['valid', 'empty'].includes(current.state)) amountEdits.delete(leg.id)
    }
    const invalid = edit && ['partial', 'invalid'].includes(edit.state)
    const errorId = `amount-error-${leg.id}`
    const error = edit?.state === 'partial' ? t('unfinishedAmount') : t('invalidAmount', {
      example: displayAmount(1234.56, edit?.locale || i18n.preferences().locale),
    })
    return s`span min-width 0 position relative`(
      s`input`({
        dom: () => finishEdit,
        data: { amount: true },
        type: 'text',
        inputmode: 'decimal',
        value: edit ? edit.raw : leg.amount === '' ? '' : formatAmount(leg.amount),
        'aria-label': t('amount'),
        'aria-invalid': invalid ? 'true' : undefined,
        'aria-describedby': invalid ? errorId : undefined,
        title: invalid ? error : undefined,
        style: invalid ? { color: '#b6374f', textDecoration: 'underline dotted' } : undefined,
        onfocus: () => {
          if (amountEdits.has(leg.id)) return
          const locale = i18n.preferences().locale
          amountEdits.set(leg.id, {
            locale,
            raw: leg.amount === '' ? '' : displayAmount(leg.amount, locale),
            state: leg.amount === '' ? 'empty' : 'valid',
          })
        },
        oninput: (event) => {
          const locale = amountEdits.get(leg.id)?.locale || i18n.preferences().locale
          const raw = event.target.value
          const parsed = parseAmount(raw, locale)
          amountEdits.set(leg.id, { locale, raw, state: parsed.state })
          leg.amount = parsed.value
        },
        onblur: finishEdit,
      }),
      invalid && s`span position absolute width 1 height 1 overflow hidden clip-path inset(50%)`(
        { id: errorId },
        error,
      ),
    )
  }

  const draftLegs = (transaction) =>
    Legs(
      transaction.legs.map((leg) =>
        DraftLeg(
          { key: leg.id },
          s`input`({
            value: accountLabel(leg.account),
            'aria-label': t('account'),
            oninput: (event) => leg.account = parseAccount(event.target.value),
          }),
          amountInput(leg),
          s`input`({
            value: leg.commodity,
            'aria-label': t('commodity'),
            oninput: (event) => leg.commodity = event.target.value.toUpperCase(),
          }),
          RemoveButton({
            'aria-label': t('removeLeg'),
            onclick: () => transaction.legs = transaction.legs.filter(({ id }) => id !== leg.id),
          }, '×'),
        )
      ),
      DraftFooter(
        QuietButton({
          onclick: () =>
            transaction.legs.push({
              id: `${transaction.id}-${nextId++}`,
              account: ['Expenses', 'Uncategorized'],
              amount: '',
              commodity: i18n.preferences().commodity,
            }),
        }, t('addLeg')),
        DraftActions(
          BalanceMessage(
            { data: { balanced: draftReadiness(transaction) === 'ready' } },
            draftReadiness(transaction) === 'incomplete'
              ? t('completeDraft')
              : draftReadiness(transaction) === 'ready'
              ? t('balanced')
              : transactionTotals(transaction).filter(({ amount }) => amount !== 0)
                .map(({ amount, commodity }) =>
                  t(amount < 0 ? 'missing' : 'over', {
                    amount: formatAmount(Math.abs(amount)),
                    commodity,
                  })
                ).join(' · '),
          ),
          Button({
            data: { primary: true },
            disabled: draftReadiness(transaction) !== 'ready',
            onclick: () => reviewPosting([transaction]),
          }, t('post')),
        ),
      ),
    )

  const transactionRow = (transaction) => {
    const isDraft = transaction.status === 'draft'
    const isCollapsed = collapsed.has(transaction.id)
    const readiness = isDraft ? draftReadiness(transaction) : 'posted'

    return Transaction(
      {
        key: transaction.id,
        data: {
          selected: selectedId === transaction.id,
          draft: isDraft,
          transactionId: transaction.id,
        },
        onclick: () => selectedId = transaction.id,
      },
      TransactionHeader(
        SelectionCell(
          isDraft && s`input`({
            type: 'checkbox',
            checked: checkedDrafts.has(transaction.id),
            'aria-label': t('selectDraft', {
              description: transaction.description || t('untitled'),
            }),
            onclick: (event) => event.stopPropagation(),
            onchange: (event) =>
              event.target.checked
                ? checkedDrafts.add(transaction.id)
                : checkedDrafts.delete(transaction.id),
          }),
          CollapseButton(
            {
              'aria-label': t(isCollapsed ? 'expandTransaction' : 'collapseTransaction'),
              'aria-expanded': String(!isCollapsed),
              onclick: (event) => {
                event.stopPropagation()
                isCollapsed ? collapsed.delete(transaction.id) : collapsed.add(transaction.id)
              },
            },
            ChevronIcon({
              src: CHEVRON_ICON,
              alt: '',
              'aria-hidden': 'true',
              data: { expanded: !isCollapsed },
            }),
          ),
        ),
        isDraft
          ? DraftHeaderInput({
            type: 'date',
            value: transaction.date,
            'aria-label': t('transactionDate'),
            oninput: (event) => transaction.date = event.target.value,
          })
          : DateText({ datetime: transaction.date }, i18n.date(transaction.date)),
        isDraft
          ? DraftHeaderInput({
            value: transaction.description,
            data: { description: true },
            placeholder: t('describeTransaction'),
            'aria-label': t('transactionDescription'),
            oninput: (event) => transaction.description = event.target.value,
          })
          : Description(transaction.description),
        StateBadge({
          data: {
            balanced: readiness === 'ready',
            unbalanced: readiness === 'unbalanced',
          },
        }, t(readiness)),
        transactionMenu(transaction),
      ),
      transaction.correctionOf && CorrectionNote(
        t('correctionOf'),
        ' ',
        s`button`({
          onclick: (event) => {
            event.stopPropagation()
            filters = { year: '', month: '', day: '', account: '', text: '' }
            selectedId = transaction.correctionOf
            collapsed.delete(selectedId)
            navigateTab('ledger')
            requestAnimationFrame(() =>
              shell?.querySelector(`[data-transaction-id="${selectedId}"]`)?.scrollIntoView({
                block: 'center',
              })
            )
          },
        }, transaction.correctionOf),
        ' · ',
        t('opposingEntries'),
      ),
      !isCollapsed && (isDraft ? draftLegs(transaction) : committedLegs(transaction)),
    )
  }

  const transactionsView = (visibleTransactions) => {
    const isDrafts = activeTab() === 'drafts'
    const draftCount = transactions.filter(({ status }) => status === 'draft').length
    const selected = selectedDrafts()
    const ready = visibleTransactions.filter((transaction) =>
      isDrafts && draftReadiness(transaction) === 'ready'
    )
    const postableSelection = selected.length &&
      selected.every((transaction) => draftReadiness(transaction) === 'ready')

    return [
      MainHeader(
        TitleGroup(
          Title(t('transactions')),
          Subtitle(
            t(isDrafts ? 'prepare' : 'authoritative'),
          ),
        ),
        Toolbar(
          Button(
            {
              data: { active: filtersOpen || activeFilters() },
              onclick: () => filtersOpen = !filtersOpen,
            },
            t('filter'),
            activeFilters() ? `· ${i18n.number(activeFilters())}` : null,
            Key('F'),
          ),
          Button({ data: { primary: true }, onclick: addDraft }, t('newTransaction'), Key('N')),
        ),
      ),
      TransactionTabs(
        { role: 'tablist', 'aria-label': t('transactionWorkspace') },
        ['drafts', 'ledger'].map((tab) =>
          TransactionTab({
            key: tab,
            id: `tab-${tab}`,
            href: `/transactions/${tab}`,
            role: 'tab',
            'aria-selected': String(activeTab() === tab),
            'aria-controls': 'transaction-panel',
            tabindex: activeTab() === tab ? 0 : -1,
            onclick: (event) => {
              if (
                event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button
              ) return
              event.preventDefault()
              navigateTab(tab)
            },
            onkeydown: (event) => {
              if (!['ArrowLeft', 'ArrowRight', 'Home', 'End', ' '].includes(event.key)) return
              event.preventDefault()
              event.stopPropagation()
              const next = event.key === 'Home'
                ? 'drafts'
                : event.key === 'End'
                ? 'ledger'
                : event.key === ' '
                ? tab
                : tab === 'drafts'
                ? 'ledger'
                : 'drafts'
              navigateTab(next)
              requestAnimationFrame(() => shell?.querySelector(`#tab-${next}`)?.focus())
            },
          }, tab === 'drafts' ? [t('drafts'), s`span`(i18n.number(draftCount))] : t('ledger'))
        ),
      ),
      Notice(
        { role: 'status', 'aria-live': 'polite' },
        notice && t(notice.key, notice.params),
        notice?.filtersCleared && [' ', t('filtersCleared')],
        postedNotice && QuietButton({ onclick: () => navigateTab('ledger') }, t('viewLedger')),
      ),
      filtersOpen && filterPanel(),
      filterChips(),
      s`section`(
        {
          id: 'transaction-panel',
          role: 'tabpanel',
          'aria-labelledby': `tab-${activeTab()}`,
          tabindex: 0,
        },
        isDrafts && PostingToolbar(
          s`label`(
            s`input`({
              type: 'checkbox',
              checked: visibleTransactions.length > 0 &&
                selected.length === visibleTransactions.length,
              indeterminate: selected.length > 0 && selected.length < visibleTransactions.length,
              disabled: !visibleTransactions.length,
              onchange: (event) =>
                visibleTransactions.forEach(({ id }) =>
                  event.target.checked ? checkedDrafts.add(id) : checkedDrafts.delete(id)
                ),
            }),
            t('selectVisible'),
          ),
          s`span`(
            selected.length
              ? t('selectedCount', { count: selected.length })
              : t('readyCount', { count: ready.length }),
          ),
          Button({
            disabled: !postableSelection,
            title: selected.length && !postableSelection
              ? t('selectionIncomplete')
              : t('reviewSelected'),
            onclick: () => reviewPosting(selected),
          }, t('postSelected')),
          Button(
            { disabled: !ready.length, onclick: () => reviewPosting(ready) },
            t('postReady'),
          ),
        ),
        SectionHeader(
          SectionLabel(periodLabel(filters), s`span`(i18n.number(visibleTransactions.length))),
          s`span`({ style: { color: '#929298', fontSize: '10px' } }, t('newestFirst')),
        ),
        Ledger(
          visibleTransactions.length ? visibleTransactions.map(transactionRow) : EmptyState(s`div`(
            s`p`(
              t(
                activeFilters()
                  ? isDrafts ? 'noDraftMatches' : 'noPostedMatches'
                  : isDrafts
                  ? 'emptyDrafts'
                  : 'emptyLedger',
              ),
            ),
            activeFilters() &&
              QuietButton({
                onclick: () => filters = { year: '', month: '', day: '', account: '', text: '' },
              }, t('clearFilters')),
          )),
        ),
      ),
      KeyboardHint(
        s`span`(Key('g d'), t('drafts')),
        s`span`(Key('g l'), t('ledger')),
        s`span`(Key('J'), Key('K'), t('navigate')),
        s`span`(Key('h'), t('collapse')),
        s`span`(Key('l'), t('expand')),
        s`span`(Key('g g'), t('firstTransaction')),
        s`span`(Key('⇧ G'), t('lastTransaction')),
        s`span`(Key('↵'), t('collapseExpand')),
        s`span`(Key('/'), t('search')),
        s`span`(Key('N'), t('newTransaction')),
        isDrafts && s`span`(Key('⌘ / Ctrl ↵'), t('reviewSelectedHint')),
      ),
    ]
  }

  const postingReview = () =>
    AlertDialog(
      {
        id: 'posting-review',
        open: reviewIds.length > 0,
        onopenchange: (open) => {
          if (!open) {
            reviewIds = []
            s.redraw()
          }
        },
      },
      AlertDialog.Content(
        { size: '2', color: 'indigo' },
        AlertDialog.Title(
          t('postQuestion', { count: reviewIds.length }),
        ),
        AlertDialog.Description(
          t('postingExplanation'),
        ),
        ReviewList(
          transactions.filter(({ id }) => reviewIds.includes(id)).map((transaction) =>
            s`li`(
              { key: transaction.id },
              s`strong`(transaction.description),
              s`time`(
                `${i18n.date(transaction.date)} · ${
                  t('legCount', { count: transaction.legs.length })
                } · ${t('ready')}`,
              ),
            )
          ),
        ),
        reviewError && s`p`({ role: 'alert' }, t(reviewError)),
        Toolbar(
          AlertDialog.Close({ autofocus: true, variant: 'soft', color: 'gray' }, t('cancel')),
          AlertDialog.Close(
            { variant: 'solid', color: 'indigo', onclick: confirmPosting },
            t('postLedger'),
          ),
        ),
      ),
    )

  const placeholder = () => [
    MainHeader(
      TitleGroup(
        Title(t(activeArea())),
        Subtitle(t('nextPass')),
      ),
    ),
    Placeholder(
      s`div`(
        s`strong`(t('comesNext', { area: t(activeArea()) })),
        s`p`(t('placeholder')),
      ),
    ),
  ]

  return () => {
    const visibleTransactions = visible()
    if (!visibleTransactions.some(({ id }) => id === selectedId)) {
      selectedId = visibleTransactions[0]?.id ?? ''
    }

    return Shell(
      {
        dom: (element) => {
          shell = element
          i18n.load()
          const keydown = (event) => {
            if (element.contains(event.target) || event.target === element.ownerDocument.body) {
              onkeydown(event)
            }
          }
          try {
            const saved = localStorage.getItem('entx.transactions.tab')
            if (saved === 'drafts' || saved === 'ledger') lastTab = saved
          } catch { /* Continue without a persisted navigation preference. */ }
          if (route.has('/transactions/drafts') || route.has('/transactions/ledger')) rememberTab()
          else if (activeArea() === 'transactions') {
            route(`/transactions/${lastTab}`, { replace: true, scroll: false })
          }
          element.ownerDocument.addEventListener('keydown', keydown)
          element.ownerDocument.defaultView.addEventListener('popstate', rememberTab)
          return () => {
            shell = undefined
            element.ownerDocument.removeEventListener('keydown', keydown)
            element.ownerDocument.defaultView.removeEventListener('popstate', rememberTab)
          }
        },
      },
      topbar(),
      Workspace(
        { data: { sidebarVisible: i18n.preferences().sidebarVisible } },
        sidebar(filterTransactions(transactions, filters)),
        Main(route({
          '/': () => transactionsView(visible()),
          '/transactions': () => transactionsView(visible()),
          '/transactions/drafts': () => transactionsView(visible()),
          '/transactions/ledger': () => transactionsView(visible()),
          '/accounts': placeholder,
          '/files': placeholder,
          '/settings': () => import('./settings.js'),
        })),
      ),
      postingReview(),
    )
  }
})

export default App

function balanceKey({ account, commodity }) {
  return `${accountLabel(account)}\u0000${commodity}`
}

function isDescendant(account, ancestor) {
  return account.length > ancestor.length &&
    ancestor.every((segment, index) => account[index] === segment)
}

function today() {
  const date = new Date()
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${
    String(date.getDate()).padStart(2, '0')
  }`
}
