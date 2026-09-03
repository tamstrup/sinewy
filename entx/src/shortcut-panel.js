import s from 'sin'
import { ButtonBase } from './controls.js'

// This is a shortcut guide, not a menu: opening it must not steal focus from
// the ledger. Native popover dismissal and Sinewy buttons supply the basics.
const Surface = s`section
  position fixed
  inset auto 20px 20px auto
  margin 0
  width min(340px, calc(100vw - 32px))
  max-height calc(100svh - 80px)
  overflow auto
  padding 10
  border 1px solid #e0dfe7
  border-radius 12
  background #fcfcfd
  color #292930
  box-shadow 0 12px 44px #29233b24, 0 2px 8px #29233b12

  &[hidden] { display none }
`

const Header = s`header
  display flex
  align-items center
  justify-content space-between
  gap 8
  padding 2px 4px 8px
  border-bottom 1px solid #edecf1
  font-size 12
  font-weight 650
`

const Trail = s`span
  display flex
  align-items center
  gap 7
  flex-wrap wrap
`
const Keys = s`kbd
  display inline-grid
  place-items center
  min-width 23
  height 23
  padding 0 4
  border 1px solid #e3e0ee
  border-radius 5
  background #f2f0f8
  color #6054b5
  font-family inherit
  font-size 11
  font-weight 550
`

const Choices = s`div
  display grid
  gap 2
  padding-top 6
`
const Hint = s`p
  margin 9px 4px 2px
  color #85838d
  font-size 10
  line-height 1.5
`
const ChoiceLabel = s`span
  flex 1
  text-align start
`

export default s(() => {
  let element

  return ({ open, entries, crumbs, t, source, onchoose, onback, onclose }) => {
    queueMicrotask(() => {
      if (!element?.isConnected) return
      const shown = element.matches(':popover-open')
      if (open && !shown) element.showPopover({ source })
      else if (!open && shown) element.hidePopover()
    })

    return Surface(
      {
        id: 'shortcut-panel',
        popover: 'auto',
        role: 'region',
        'aria-label': t('shortcuts'),
        hidden: !open,
        dom: (node) => {
          element = node
          return () => {
            element = undefined
            if (node.matches(':popover-open')) node.hidePopover()
          }
        },
        onbeforetoggle: (event) => {
          // Reflect light dismissal before another redraw can reopen the panel.
          // Closing during a render/removal must not enqueue a nested redraw.
          event.redraw = false
          if (element && open && event.newState === 'closed') onclose(false)
        },
      },
      Header(
        Trail(
          { 'aria-live': 'polite', 'aria-atomic': 'true' },
          Keys('g'),
          t('shortcuts'),
          crumbs.map((
            entry,
          ) => [s`span`({ 'aria-hidden': 'true' }, '›'), Keys(entry.key), t(entry.label)]),
        ),
        ButtonBase({
          'aria-label': t('closeShortcuts'),
          onclick: () => onclose(true),
          size: '1',
          style: { padding: '0 6px' },
        }, '×'),
      ),
      crumbs.length
        ? ButtonBase(
          { onclick: onback, size: '1', style: { marginTop: '6px' } },
          '← ',
          t('shortcutBack'),
        )
        : null,
      Choices(entries.map((entry) =>
        ButtonBase(
          {
            key: entry.key,
            disabled: entry.disabled,
            data: { shortcutKey: entry.key },
            'aria-label': t(entry.label),
            onclick: () => onchoose(entry),
            size: '1',
            color: 'indigo',
            style: {
              width: '100%',
              minHeight: '36px',
              padding: '4px 7px',
              justifyContent: 'start',
              fontWeight: 450,
            },
          },
          Keys({ 'aria-hidden': 'true' }, entry.key),
          ChoiceLabel(t(entry.label)),
          entry.children ? s`span color #98949f`({ 'aria-hidden': 'true' }, '›') : null,
        )
      )),
      Hint(t('shortcutHelp')),
    )
  }
})
