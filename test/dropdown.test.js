import s from 'sin'
import t from 'sin/test'
import dropdown from '../src/dropdown.js'

t.timeout = 2000
const Anchor = s((attrs, children) => s`a`(attrs, children))
const StyledCheckbox = dropdown.checkbox`
  color inherit
`

t`dropdown`(
  t`structure`(
    t`connects trigger and content`(() => withMenu({}, ({ trigger, content, items }) => {
      t.is('menu', trigger.getAttribute('aria-haspopup'))
      t.is(content.id, trigger.getAttribute('aria-controls'))
      t.is(trigger.id, content.getAttribute('aria-labelledby'))
      t.is('false', trigger.getAttribute('aria-expanded'))
      t.is('closed', trigger.dataset.state)
      t.is('closed', content.dataset.state)
      t.is('menu', content.getAttribute('role'))
      t.is('menuitem', items[0].getAttribute('role'))
      t.is(trigger.style.getPropertyValue('anchor-name'), content.style.getPropertyValue('position-anchor'))
      return [true, trigger.id.endsWith('-trigger') && content.id.endsWith('-content')]
    })),

    t`exposes disabled and placement state`(() => withMenu({}, ({ content, items }) => {
      t.is('bottom', content.dataset.side)
      t.is('start', content.dataset.align)
      t.is('true', items[2].getAttribute('aria-disabled'))
      return [true, items[2].hasAttribute('data-disabled')]
    })),

    t`warns about duplicate root parts in development`(() => {
      const host = document.createElement('div')
      document.body.append(host)
      const warnings = []
      const warn = console.warn
      console.warn = message => warnings.push(message)
      const mounted = s.mount(host, () => dropdown(
        dropdown.trigger('First trigger'),
        dropdown.trigger('Second trigger'),
        dropdown.content(dropdown.item('First item')),
        dropdown.content(dropdown.item('Second item'))
      ))

      try {
        t.is(2, warnings.length)
        return [true, warnings.every(message => message.includes('should only be rendered once'))]
      } finally {
        console.warn = warn
        mounted.unmount()
        host.remove()
      }
    })
  ),

  t`positioning`(
    t`maps default placement to anchor CSS`(() => withMenu({}, ({ content }) => {
      t.is('block-end span-inline-end', content.style.getPropertyValue('position-area'))
      t.is([
        'flip-block',
        'flip-inline',
        'flip-block flip-inline',
        '--sinewy-dropdown-fit-block',
        '--sinewy-dropdown-fit-block flip-block',
        '--sinewy-dropdown-fit-block flip-inline',
        '--sinewy-dropdown-fit-block flip-block flip-inline'
      ].join(', '), content.style.getPropertyValue('position-try-fallbacks'))
      t.is('normal', content.style.getPropertyValue('position-try-order'))
      t.is('anchor-size(width)', content.style.getPropertyValue('--sinewy-trigger-width'))
      return ['left top', content.style.getPropertyValue('--sinewy-transform-origin')]
    })),

    t`maps side, alignment, and offsets`(() => withMenu({
      content: {
        side: 'right',
        align: 'end',
        offset: 7,
        alignOffset: '0.25rem',
        avoidCollisions: false
      }
    }, ({ content }) => {
      t.is('span-block-start inline-end', content.style.getPropertyValue('position-area'))
      t.is('7px', content.style.getPropertyValue('margin-inline-start'))
      t.is('0.25rem', content.style.getPropertyValue('margin-block-start'))
      t.is('none', content.style.getPropertyValue('position-try-fallbacks'))
      return ['left bottom', content.style.getPropertyValue('--sinewy-transform-origin')]
    })),

    t`orders vertical fallbacks by block space when requested`(() => withMenu({
      content: { collisionStrategy: 'most-space' }
    }, ({ content }) =>
      ['most-block-size', content.style.getPropertyValue('position-try-order')]
    )),

    t`orders horizontal fallbacks by inline space when requested`(() => withMenu({
      content: { side: 'left', collisionStrategy: 'most-space' }
    }, ({ content }) => {
      t.is(true, content.style.getPropertyValue('position-try-fallbacks').includes('--sinewy-dropdown-fit-inline'))
      return ['most-inline-size', content.style.getPropertyValue('position-try-order')]
    })),

    t`keeps a fitting preferred side`(() => withMenu({
      trigger: { style: { position: 'fixed', inset: '100px auto auto 100px' } },
      content: { side: 'top', style: { width: '120px', height: '40px' } }
    }, async menu => {
      await open(menu)
      const trigger = menu.trigger.getBoundingClientRect()
      const content = menu.content.getBoundingClientRect()
      return [true, content.bottom <= trigger.top]
    })),

    t`chooses the roomier side when requested`(() => withMenu({
      trigger: { style: { position: 'fixed', inset: '100px auto auto 100px' } },
      content: {
        side: 'top',
        collisionStrategy: 'most-space',
        style: { width: '120px', height: '40px' }
      }
    }, async menu => {
      await open(menu)
      const trigger = menu.trigger.getBoundingClientRect()
      const content = menu.content.getBoundingClientRect()
      return [true, content.top >= trigger.bottom]
    })),

    t`flips away from the viewport edge`(() => withMenu({
      trigger: { style: { position: 'fixed', inset: 'auto auto 4px 100px' } },
      content: { side: 'bottom', style: { width: '120px', height: '160px' } }
    }, async menu => {
      await open(menu)
      const trigger = menu.trigger.getBoundingClientRect()
      const content = menu.content.getBoundingClientRect()
      return [true, content.bottom <= trigger.top]
    })),

    t`tracks trigger movement while open`(() => withMenu({
      trigger: { style: { position: 'fixed', inset: '100px auto auto 100px' } },
      content: { style: { width: '120px', height: '40px' } }
    }, async menu => {
      await open(menu)
      const before = menu.content.getBoundingClientRect().left
      menu.trigger.style.left = '300px'
      await settle()
      const after = menu.content.getBoundingClientRect().left
      return [200, Math.round(after - before)]
    })),

    t`tracks its trigger through scrolling`(() => withMenu({
      trigger: { style: { position: 'absolute', inset: '300px auto auto 100px' } },
      content: { style: { width: '120px', height: '40px' } }
    }, async menu => {
      menu.host.style.height = '1200px'
      try {
        await open(menu)
        const before = menu.content.getBoundingClientRect().top
        scrollTo(0, 100)
        await settle()
        const after = menu.content.getBoundingClientRect().top
        return [-100, Math.round(after - before)]
      } finally {
        scrollTo(0, 0)
      }
    })),

    t`constrains oversized content to available block space`(() => withMenu({
      trigger: { style: { position: 'fixed', inset: '50% auto auto 100px' } },
      content: {
        style: { width: '160px', overflow: 'auto' }
      },
      items: () => dropdown.item({ style: { height: '1000px' } }, 'Tall item')
    }, async menu => {
      await open(menu)
      const content = menu.content.getBoundingClientRect()
      t.is(true, content.top >= 0 && content.bottom <= innerHeight)
      return [true, menu.content.scrollHeight > menu.content.clientHeight]
    })),

    t`constrains oversized content to available inline space`(() => withMenu({
      trigger: { style: { position: 'fixed', inset: '100px auto auto 50%' } },
      content: {
        side: 'right',
        style: { height: '80px', overflow: 'auto' }
      },
      items: () => dropdown.item({ style: { width: '1600px' } }, 'Wide item')
    }, async menu => {
      await open(menu)
      const content = menu.content.getBoundingClientRect()
      t.is(true, content.left >= 0 && content.right <= innerWidth)
      return [true, menu.content.scrollWidth > menu.content.clientWidth]
    }))
  ),

  t`opening`(
    ...['Enter', ' ', 'ArrowDown'].map(keyName =>
      t`${keyName === ' ' ? 'Space' : keyName} focuses first`(() => withMenu({}, async ({ trigger, content }) => {
        key(trigger, keyName)
        await settle()
        return ['Alpha', content.matches(':popover-open') && activeValue()]
      }))
    ),

    t`ArrowUp focuses last`(() => withMenu({}, async ({ trigger, content }) => {
      key(trigger, 'ArrowUp')
      await settle()
      return ['Bravo', content.matches(':popover-open') && activeValue()]
    })),

    t`defaultOpen opens after mount`(() => withMenu({ root: { defaultOpen: true } }, async ({ content }) => {
      await settle()
      return ['Alpha', content.matches(':popover-open') && activeValue()]
    })),

    t`controlled open reconciles native interaction`(() => {
      const changes = []
      return withMenu({
        root: {
          open: true,
          onopenchange: next => changes.push(next)
        }
      }, async menu => {
        await settle()
        t.is(true, menu.content.matches(':popover-open'))
        menu.trigger.click()
        await settle()
        t.is(true, menu.content.matches(':popover-open'))
        return ['false', changes.join(',')]
      })
    }),

    t`controlled open follows prop redraws`(async() => {
      const host = document.createElement('div')
      document.body.append(host)
      let visible = false
      const mounted = s.mount(host, () => dropdown({ open: visible },
        dropdown.trigger('Options'),
        dropdown.content(dropdown.item('Alpha'))
      ))

      try {
        const content = host.querySelector('[role="menu"]')
        visible = true
        await s.redraw.force()
        await settle()
        t.is(true, content.matches(':popover-open'))

        visible = false
        await s.redraw.force()
        await settle()
        return [false, content.matches(':popover-open')]
      } finally {
        mounted.unmount()
        host.remove()
      }
    }),

    t`live open binding synchronizes in both directions`(() => {
      const visible = s.live(true)
      return withMenu({ root: { bind: visible } }, async menu => {
        await settle()
        t.is(true, menu.content.matches(':popover-open'))
        menu.trigger.click()
        await settle()
        t.is(false, visible())

        visible(true)
        await settle()
        t.is(true, menu.content.matches(':popover-open'))
        return ['true', menu.trigger.getAttribute('aria-expanded')]
      })
    }),

    t`short pointer sequence opens a live-bound menu`(() => {
      const visible = s.live(false)
      return withMenu({ root: { bind: visible } }, async menu => {
        quickClick(menu.trigger)
        t.is(true, menu.content.matches(':popover-open'))
        await settle()
        t.is(true, visible())
        return ['true', menu.trigger.getAttribute('aria-expanded')]
      })
    }),

    t`native trigger waits for toggle before redrawing`(async() => {
      const host = document.createElement('div')
      document.body.append(host)
      let renders = 0
      const View = s(() => () => {
        renders++
        return dropdown(
          dropdown.trigger('Options'),
          dropdown.content(dropdown.item('Alpha'))
        )
      })
      const mounted = s.mount(host, View)

      try {
        const trigger = host.querySelector('[aria-haspopup="menu"]')
        const content = host.querySelector('[role="menu"]')
        trigger.click()
        t.is(1, renders)
        await settle()
        t.is(true, content.matches(':popover-open'))
        return [2, renders]
      } finally {
        mounted.unmount()
        host.remove()
      }
    }),

    t`before open change can cancel opening`(() => {
      const before = []
      const changes = []
      return withMenu({
        root: {
          onbeforeopenchange: (open, event) => {
            before.push(open)
            open && event.preventDefault()
          },
          onopenchange: open => changes.push(open)
        }
      }, async menu => {
        key(menu.trigger, 'ArrowDown')
        await settle()
        t.is(false, menu.content.matches(':popover-open'))
        t.is('', changes.join(','))
        return ['true', before.join(',')]
      })
    }),

    t`before open change reports non-cancelable closing`(() => {
      const before = []
      return withMenu({
        root: {
          onbeforeopenchange: (open, event) => before.push(open + ':' + event.cancelable)
        }
      }, async menu => {
        await open(menu)
        key(document.activeElement, 'Escape')
        await settle()
        return ['true:true,false:false', before.join(',')]
      })
    })
  ),

  t`navigation`(
    t`arrows loop and skip disabled items`(() => withMenu({}, async menu => {
      await open(menu)
      key(document.activeElement, 'ArrowDown')
      t.is('Beta', activeValue())
      key(document.activeElement, 'ArrowDown')
      t.is('Bravo', activeValue())
      key(document.activeElement, 'ArrowDown')
      t.is('Alpha', activeValue())
      key(document.activeElement, 'ArrowUp')
      return ['Bravo', activeValue()]
    })),

    t`arrows stop at edges when loop is false`(() => withMenu({ root: { loop: false } }, async menu => {
      await open(menu)
      key(document.activeElement, 'ArrowUp')
      t.is('Alpha', activeValue())
      key(document.activeElement, 'End')
      key(document.activeElement, 'ArrowDown')
      return ['Bravo', activeValue()]
    })),

    t`Home and End focus edges`(() => withMenu({}, async menu => {
      await open(menu)
      key(document.activeElement, 'End')
      t.is('Bravo', activeValue())
      key(document.activeElement, 'Home')
      return ['Alpha', activeValue()]
    })),

    t`pointer and keyboard share highlight`(() => withMenu({}, async menu => {
      await open(menu)
      menu.items[1].dispatchEvent(new PointerEvent('pointermove', { bubbles: true }))
      t.is('Beta', activeValue())
      t.is(true, menu.items[1].hasAttribute('data-highlighted'))
      key(document.activeElement, 'ArrowDown')
      t.is(false, menu.items[1].hasAttribute('data-highlighted'))
      return ['Bravo', activeValue()]
    })),

    t`recovers when the focused item is removed`(async() => {
      const host = document.createElement('div')
      document.body.append(host)
      let showFirst = true
      const mounted = s.mount(host, () => dropdown(
        dropdown.trigger('Options'),
        dropdown.content(
          showFirst && dropdown.item({ textValue: 'Alpha' }, 'Alpha'),
          dropdown.item({ textValue: 'Beta' }, 'Beta')
        )
      ))

      try {
        const trigger = host.querySelector('[aria-haspopup="menu"]')
        key(trigger, 'ArrowDown')
        await settle()
        t.is('Alpha', activeValue())

        showFirst = false
        await s.redraw.force()
        const content = host.querySelector('[role="menu"]')
        key(content, 'ArrowDown')
        return ['Beta', activeValue()]
      } finally {
        mounted.unmount()
        host.remove()
      }
    })
  ),

  t`typeahead`(
    t`matches multi-character prefixes`(() => withMenu({}, async menu => {
      await open(menu)
      key(document.activeElement, 'b')
      key(document.activeElement, 'r')
      return ['Bravo', activeValue()]
    })),

    t`repeated characters cycle matches`(() => withMenu({}, async menu => {
      await open(menu)
      key(document.activeElement, 'b')
      t.is('Beta', activeValue())
      key(document.activeElement, 'b')
      return ['Bravo', activeValue()]
    }))
  ),

  t`dismissal`(
    t`Escape closes and restores focus`(() => withMenu({}, async menu => {
      await open(menu)
      key(document.activeElement, 'Escape')
      await settle()
      t.is(false, menu.content.matches(':popover-open'))
      return [menu.trigger, document.activeElement]
    })),

    t`Tab closes without forcing trigger focus`(() => withMenu({}, async menu => {
      await open(menu)
      key(document.activeElement, 'Tab')
      await settle()
      t.is(false, menu.content.matches(':popover-open'))
      return [false, document.activeElement === menu.trigger]
    }))
  ),

  t`selection`(
    t`ordinary selection closes and restores focus`(() => {
      let selections = 0
      return withMenu({
        items: () => dropdown.item({ onselect: () => selections++ }, 'Select')
      }, async menu => {
        await open(menu)
        menu.items[0].click()
        await settle()
        t.is(1, selections)
        t.is(false, menu.content.matches(':popover-open'))
        return [menu.trigger, document.activeElement]
      })
    }),

    t`prevented selection stays open`(() => withMenu({
      items: () => dropdown.item({ onselect: event => event.preventDefault() }, 'Keep open')
    }, async menu => {
      await open(menu)
      menu.items[0].click()
      await settle()
      return [true, menu.content.matches(':popover-open')]
    })),

    t`prevented onclick suppresses selection`(() => {
      let selections = 0
      return withMenu({
        items: () => dropdown.item({
          onclick: event => event.preventDefault(),
          onselect: () => selections++
        }, 'Intercept')
      }, async menu => {
        await open(menu)
        menu.items[0].click()
        await settle()
        t.is(true, menu.content.matches(':popover-open'))
        return [0, selections]
      })
    }),

    ...['Enter', ' '].map(keyName =>
      t`${keyName === ' ' ? 'Space' : keyName} activates once`(() => {
        let selections = 0
        return withMenu({
          items: () => dropdown.item({ onselect: () => selections++ }, 'Select')
        }, async menu => {
          await open(menu)
          key(document.activeElement, keyName)
          await settle()
          t.is(false, menu.content.matches(':popover-open'))
          return [1, selections]
        })
      })
    ),

    t`disabled items suppress activation`(() => {
      let clicks = 0
      let selections = 0
      return withMenu({
        items: () => dropdown.item({
          disabled: true,
          onclick: () => clicks++,
          onselect: () => selections++
        }, 'Disabled')
      }, async menu => {
        menu.trigger.click()
        await settle()
        menu.items[0].click()
        await settle()
        t.is(true, menu.content.matches(':popover-open'))
        return ['0:0', clicks + ':' + selections]
      })
    })
  ),

  t`composition`(
    t`composes Sin handler arrays and event-listener objects`(() => {
      const calls = []
      const listener = {
        handleEvent(event, element) {
          calls.push('object:' + event.type + ':' + element.tagName)
        }
      }

      return withMenu({
        trigger: {
          as: Anchor,
          onclick: [
            function(event, element) {
              calls.push('function:' + event.type + ':' + (this === element))
            },
            listener
          ]
        }
      }, async menu => {
        menu.trigger.click()
        await settle()
        t.is(true, menu.content.matches(':popover-open'))
        return [
          'function:click:true,object:click:A',
          calls.join(',')
        ]
      })
    }),

    t`custom trigger opens non-button element`(() => withMenu({
      trigger: { as: Anchor, href: '#menu-trigger' }
    }, async menu => {
      menu.trigger.click()
      await settle()
      t.is('A', menu.trigger.tagName)
      t.is('#menu-trigger', menu.trigger.getAttribute('href'))
      return [true, menu.content.matches(':popover-open')]
    })),

    t`disabled trigger suppresses custom activation`(() => withMenu({
      trigger: { as: Anchor, disabled: true, href: '#disabled-trigger' }
    }, async menu => {
      menu.trigger.click()
      await settle()
      t.is(true, menu.trigger.hasAttribute('data-disabled'))
      return [false, menu.content.matches(':popover-open')]
    })),

    t`custom item forwards attributes and navigates`(() => {
      let selections = 0
      const previous = location.href
      return withMenu({
        items: () => dropdown.item({
          as: Anchor,
          href: '#composed-item',
          title: 'Composed item',
          data: { custom: 'yes' },
          onselect: () => selections++
        }, 'Composed')
      }, async menu => {
        await open(menu)
        menu.items[0].click()
        await settle()
        t.is('A', menu.items[0].tagName)
        t.is('Composed item', menu.items[0].title)
        t.is('yes', menu.items[0].dataset.custom)
        t.is(1, selections)
        return ['#composed-item', location.hash]
      }).finally(() => history.replaceState(null, '', previous))
    })
  ),

  t`checkbox items`(
    t`expose checked state and an indicator`(() => withMenu({
      items: () => dropdown.checkbox({ defaultChecked: true },
        dropdown.indicator('✓'),
        'Notifications'
      )
    }, ({ items }) => {
      t.is('menuitemcheckbox', items[0].getAttribute('role'))
      t.is('true', items[0].getAttribute('aria-checked'))
      t.is('checked', items[0].dataset.state)
      return ['✓', items[0].querySelector('span').textContent]
    })),

    t`uncontrolled activation toggles and closes`(() => {
      let changed
      return withMenu({
        items: () => dropdown.checkbox({
          defaultChecked: false,
          oncheckedchange: next => changed = next
        }, 'Notifications')
      }, async menu => {
        await open(menu)
        menu.items[0].click()
        await settle()
        t.is(false, menu.content.matches(':popover-open'))
        t.is(true, changed)
        t.is('true', menu.items[0].getAttribute('aria-checked'))
        return ['checked', menu.items[0].dataset.state]
      })
    }),

    t`indeterminate activation becomes checked`(() => withMenu({
      items: () => dropdown.checkbox({ defaultChecked: 'indeterminate' },
        dropdown.indicator('−'),
        'Mixed'
      )
    }, async menu => {
      t.is('mixed', menu.items[0].getAttribute('aria-checked'))
      t.is('indeterminate', menu.items[0].dataset.state)
      await open(menu)
      menu.items[0].click()
      await settle()
      return ['true:checked', menu.items[0].getAttribute('aria-checked') + ':' + menu.items[0].dataset.state]
    })),

    t`prevented selection toggles without closing`(() => withMenu({
      items: () => dropdown.checkbox({
        onselect: event => event.preventDefault()
      }, 'Persistent')
    }, async menu => {
      await open(menu)
      menu.items[0].click()
      await settle()
      t.is('true', menu.items[0].getAttribute('aria-checked'))
      return [true, menu.content.matches(':popover-open')]
    })),

    t`controlled state only reports changes`(() => {
      let nextValue
      return withMenu({
        items: () => dropdown.checkbox({
          checked: false,
          oncheckedchange: next => nextValue = next
        }, 'Controlled')
      }, async menu => {
        await open(menu)
        menu.items[0].click()
        await settle()
        t.is(true, nextValue)
        return ['false', menu.items[0].getAttribute('aria-checked')]
      })
    }),

    t`live binding synchronizes in both directions`(() => {
      const checked = s.live(false)
      return withMenu({
        items: () => dropdown.checkbox({ bind: checked },
          dropdown.indicator('✓'),
          'Bound'
        )
      }, async menu => {
        await open(menu)
        menu.items[0].click()
        await settle()
        t.is(true, checked())
        t.is('true', menu.items[0].getAttribute('aria-checked'))

        checked(false)
        await settle()
        t.is('false', menu.items[0].getAttribute('aria-checked'))
        return [null, menu.items[0].querySelector('span')]
      })
    }),

    t`forceMount keeps an unchecked indicator mounted`(() => withMenu({
      items: () => dropdown.checkbox(
        dropdown.indicator({ forceMount: true }, '✓'),
        'Mounted'
      )
    }, ({ items }) => {
      const indicator = items[0].querySelector('span')
      t.is('true', indicator.getAttribute('aria-hidden'))
      return ['unchecked', indicator.dataset.state]
    })),

    t`styled checkbox unmounts a direct indicator when unchecked`(() => {
      const checked = s.live(true)
      return withMenu({
        items: () => StyledCheckbox({ bind: checked },
          dropdown.indicator({ style: { width: '16px' } }, '✓'),
          'Styled'
        )
      }, async menu => {
        t.is('✓', menu.items[0].querySelector('span').textContent)
        await open(menu)
        menu.items[0].click()
        await settle()
        t.is(false, checked())
        return [null, menu.items[0].querySelector('span')]
      })
    })
  ),

  t`radio items`(
    t`expose exclusive state and an indicator`(() => withMenu({
      items: () => dropdown.radioGroup({ defaultValue: 'comfortable', ariaLabel: 'Density' },
        dropdown.radio({ value: 'compact' },
          dropdown.indicator('•'),
          'Compact'
        ),
        dropdown.radio({ value: 'comfortable' },
          dropdown.indicator('•'),
          'Comfortable'
        )
      )
    }, ({ host, items }) => {
      t.is('Density', host.querySelector('[role="group"]').getAttribute('aria-label'))
      t.is('false', items[0].getAttribute('aria-checked'))
      t.is('true', items[1].getAttribute('aria-checked'))
      t.is(null, items[0].querySelector('span'))
      return ['•', items[1].querySelector('span').textContent]
    })),

    t`uncontrolled activation changes the value and closes`(() => {
      let changed
      return withMenu({
        items: () => dropdown.radioGroup({
          defaultValue: 'one',
          onvaluechange: next => changed = next
        },
          dropdown.radio({ value: 'one' }, 'One'),
          dropdown.radio({ value: 'two' }, 'Two')
        )
      }, async menu => {
        await open(menu)
        menu.items[1].click()
        await settle()
        t.is('two', changed)
        t.is(false, menu.content.matches(':popover-open'))
        t.is('false', menu.items[0].getAttribute('aria-checked'))
        return ['true', menu.items[1].getAttribute('aria-checked')]
      })
    }),

    t`prevented selection changes the value without closing`(() => withMenu({
      items: () => dropdown.radioGroup({ defaultValue: 'one' },
        dropdown.radio({ value: 'one' }, 'One'),
        dropdown.radio({
          value: 'two',
          onselect: event => event.preventDefault()
        }, 'Two')
      )
    }, async menu => {
      await open(menu)
      menu.items[1].click()
      await settle()
      t.is('true', menu.items[1].getAttribute('aria-checked'))
      return [true, menu.content.matches(':popover-open')]
    })),

    t`controlled group only reports changes`(() => {
      let nextValue
      return withMenu({
        items: () => dropdown.radioGroup({
          value: 'one',
          onvaluechange: next => nextValue = next
        },
          dropdown.radio({ value: 'one' }, 'One'),
          dropdown.radio({ value: 'two' }, 'Two')
        )
      }, async menu => {
        await open(menu)
        menu.items[1].click()
        await settle()
        t.is('two', nextValue)
        t.is('true', menu.items[0].getAttribute('aria-checked'))
        return ['false', menu.items[1].getAttribute('aria-checked')]
      })
    }),

    t`live group binding synchronizes in both directions`(() => {
      const value = s.live('one')
      return withMenu({
        items: () => dropdown.radioGroup({ bind: value },
          dropdown.radio({ value: 'one' }, 'One'),
          dropdown.radio({ value: 'two' }, 'Two')
        )
      }, async menu => {
        await open(menu)
        menu.items[1].click()
        await settle()
        t.is('two', value())
        t.is('true', menu.items[1].getAttribute('aria-checked'))

        value('one')
        await settle()
        t.is('true', menu.items[0].getAttribute('aria-checked'))
        return ['false', menu.items[1].getAttribute('aria-checked')]
      })
    }),

    t`selecting the current value does not report a change`(() => {
      let changes = 0
      return withMenu({
        items: () => dropdown.radioGroup({
          defaultValue: 'one',
          onvaluechange: () => changes++
        }, dropdown.radio({ value: 'one' }, 'One'))
      }, async menu => {
        await open(menu)
        menu.items[0].click()
        await settle()
        return [0, changes]
      })
    })
  ),

  t`submenus`(
    t`connect trigger and nested content`(() => withSubmenu(({ subtrigger, subcontent }) => {
      t.is('menuitem', subtrigger.getAttribute('role'))
      t.is('menu', subtrigger.getAttribute('aria-haspopup'))
      t.is(subcontent.id, subtrigger.getAttribute('aria-controls'))
      t.is(subtrigger.id, subcontent.getAttribute('aria-labelledby'))
      t.is('false', subtrigger.getAttribute('aria-expanded'))
      t.is('right', subcontent.dataset.side)
      t.is(subtrigger.style.getPropertyValue('anchor-name'), subcontent.style.getPropertyValue('position-anchor'))
      return ['closed', subcontent.dataset.state]
    })),

    t`parent navigation excludes nested items`(() => withSubmenu(async menu => {
      await open(menu)
      t.is('Before', activeValue())
      key(document.activeElement, 'ArrowDown')
      t.is('More', activeValue())
      key(document.activeElement, 'ArrowDown')
      return ['After', activeValue()]
    })),

    t`forward arrow opens and focuses the first child`(() => withSubmenu(async menu => {
      await focusSubtrigger(menu)
      key(menu.subtrigger, 'ArrowRight')
      await settle()
      t.is(true, menu.subcontent.matches(':popover-open'))
      t.is('true', menu.subtrigger.getAttribute('aria-expanded'))
      const triggerRect = menu.subtrigger.getBoundingClientRect()
      const contentRect = menu.subcontent.getBoundingClientRect()
      t.is(true, contentRect.left >= triggerRect.right - 1)
      return ['Nested one', activeValue()]
    })),

    t`Enter opens the submenu`(() => withSubmenu(async menu => {
      await focusSubtrigger(menu)
      key(menu.subtrigger, 'Enter')
      await settle()
      return ['Nested one', menu.subcontent.matches(':popover-open') && activeValue()]
    })),

    t`back arrow closes and restores subtrigger focus`(() => withSubmenu(async menu => {
      await openSubmenu(menu)
      key(document.activeElement, 'ArrowLeft')
      await settle()
      t.is(false, menu.subcontent.matches(':popover-open'))
      t.is(true, menu.content.matches(':popover-open'))
      return [menu.subtrigger, document.activeElement]
    })),

    t`Escape closes only the current submenu`(() => withSubmenu(async menu => {
      await openSubmenu(menu)
      key(document.activeElement, 'Escape')
      await settle()
      t.is(false, menu.subcontent.matches(':popover-open'))
      t.is(true, menu.content.matches(':popover-open'))
      return [menu.subtrigger, document.activeElement]
    })),

    t`nested selection closes the whole menu tree`(() => withSubmenu(async menu => {
      await openSubmenu(menu)
      menu.subitems[0].click()
      await settle()
      t.is(false, menu.subcontent.matches(':popover-open'))
      t.is(false, menu.content.matches(':popover-open'))
      return [menu.trigger, document.activeElement]
    })),

    t`RTL reverses submenu directional keys`(() => withSubmenu(async menu => {
      await focusSubtrigger(menu)
      key(menu.subtrigger, 'ArrowLeft')
      await settle()
      t.is('rtl', menu.content.dir)
      t.is('rtl', menu.subcontent.dir)
      t.is(true, menu.subcontent.matches(':popover-open'))

      key(document.activeElement, 'ArrowRight')
      await settle()
      t.is(false, menu.subcontent.matches(':popover-open'))
      return [menu.subtrigger, document.activeElement]
    }, { root: { dir: 'rtl' } })),

    t`pointer movement opens after the configured delay`(() => withSubmenu(async menu => {
      await open(menu)
      menu.subtrigger.dispatchEvent(new PointerEvent('pointermove', { bubbles: true }))
      t.is(false, menu.subcontent.matches(':popover-open'))
      await wait(30)
      t.is(true, menu.subcontent.matches(':popover-open'))
      return ['More', activeValue()]
    }, { sub: { openDelay: 10 } })),

    t`entering submenu content cancels delayed close`(() => withSubmenu(async menu => {
      await openSubmenu(menu)
      menu.subtrigger.dispatchEvent(new PointerEvent('pointerleave', { bubbles: true }))
      menu.subcontent.dispatchEvent(new PointerEvent('pointerenter', { bubbles: true }))
      await wait(50)
      return [true, menu.subcontent.matches(':popover-open')]
    }, { sub: { closeDelay: 20 } })),

    t`preserves focus while moving diagonally into submenu content`(() => withSubmenu(async menu => {
      await openSubmenu(menu)
      const trigger = menu.subtrigger.getBoundingClientRect()
      const content = menu.subcontent.getBoundingClientRect()
      const origin = {
        x: trigger.right,
        y: trigger.top + trigger.height / 2
      }
      const destination = {
        x: content.left,
        y: content.top + 2
      }

      menu.subtrigger.dispatchEvent(new PointerEvent('pointerleave', {
        bubbles: true,
        clientX: origin.x,
        clientY: origin.y
      }))
      menu.after.dispatchEvent(new PointerEvent('pointermove', {
        bubbles: true,
        clientX: (origin.x + destination.x) / 2,
        clientY: (origin.y + destination.y) / 2
      }))
      t.is('Nested one', activeValue())

      menu.subcontent.dispatchEvent(new PointerEvent('pointerenter', { bubbles: true }))
      await wait(50)
      return [true, menu.subcontent.matches(':popover-open')]
    }, { sub: { closeDelay: 20 } })),

    t`releases pointer grace outside the diagonal path`(() => withSubmenu(async menu => {
      await openSubmenu(menu)
      const trigger = menu.subtrigger.getBoundingClientRect()
      menu.subtrigger.dispatchEvent(new PointerEvent('pointerleave', {
        bubbles: true,
        clientX: trigger.right,
        clientY: trigger.top + trigger.height / 2
      }))
      menu.after.dispatchEvent(new PointerEvent('pointermove', {
        bubbles: true,
        clientX: 0,
        clientY: 0
      }))
      t.is('After', activeValue())
      await wait(40)
      return [false, menu.subcontent.matches(':popover-open')]
    }, { sub: { closeDelay: 20 } })),

    t`leaving a submenu closes it after the configured delay`(() => withSubmenu(async menu => {
      await openSubmenu(menu)
      menu.subcontent.dispatchEvent(new PointerEvent('pointerleave', { bubbles: true }))
      t.is(true, menu.subcontent.matches(':popover-open'))
      await wait(40)
      t.is(false, menu.subcontent.matches(':popover-open'))
      t.is(true, menu.content.matches(':popover-open'))
      return [menu.subtrigger, document.activeElement]
    }, { sub: { closeDelay: 20 } })),

    t`Escape unwinds a three-level menu one layer at a time`(() => withDeepSubmenu(async menu => {
      await openDeepSubmenu(menu)
      key(document.activeElement, 'Escape')
      await settle()
      t.is(false, menu.contents[2].matches(':popover-open'))
      t.is(true, menu.contents[1].matches(':popover-open'))
      t.is(true, menu.contents[0].matches(':popover-open'))

      key(document.activeElement, 'Escape')
      await settle()
      t.is(false, menu.contents[1].matches(':popover-open'))
      return [true, menu.contents[0].matches(':popover-open')]
    })),

    t`deep selection closes every ancestor`(() => withDeepSubmenu(async menu => {
      await openDeepSubmenu(menu)
      menu.deepItem.click()
      await settle()
      return ['false,false,false', menu.contents.map(content => content.matches(':popover-open')).join(',')]
    }))
  )
)

async function withMenu(options, run) {
  const host = document.createElement('div')
  document.body.append(host)
  const defaultItems = () => [
    dropdown.item({ textValue: 'Alpha' }, 'Alpha'),
    dropdown.item({ textValue: 'Beta' }, 'Beta'),
    dropdown.item({ disabled: true, textValue: 'Blocked' }, 'Blocked'),
    dropdown.item({ textValue: 'Bravo' }, 'Bravo')
  ]
  const mounted = s.mount(host, () => dropdown(options.root || {},
    dropdown.trigger(options.trigger || {}, 'Options'),
    dropdown.content(options.content || {},
      options.items ? options.items() : defaultItems()
    )
  ))

  const menu = {
    host,
    trigger: host.querySelector('[aria-haspopup="menu"]'),
    content: host.querySelector('[role="menu"]'),
    items: Array.from(host.querySelectorAll([
      '[role="menuitem"]',
      '[role="menuitemcheckbox"]',
      '[role="menuitemradio"]'
    ].join(',')))
  }

  try {
    return await run(menu)
  } finally {
    menu.content.matches(':popover-open') && menu.content.hidePopover()
    mounted.unmount()
    host.remove()
  }
}

async function open(menu) {
  key(menu.trigger, 'ArrowDown')
  await settle()
}

async function withSubmenu(run, options = {}) {
  const host = document.createElement('div')
  document.body.append(host)
  const mounted = s.mount(host, () => dropdown(options.root || {},
    dropdown.trigger('Options'),
    dropdown.content(
      dropdown.item({ textValue: 'Before' }, 'Before'),
      dropdown.sub(options.sub || {},
        dropdown.subtrigger({ textValue: 'More', ...options.subtrigger }, 'More'),
        dropdown.subcontent(options.subcontent || {},
          dropdown.item({ textValue: 'Nested one' }, 'Nested one'),
          dropdown.item({ textValue: 'Nested two' }, 'Nested two')
        )
      ),
      dropdown.item({ textValue: 'After' }, 'After')
    )
  ))
  const contents = Array.from(host.querySelectorAll('[role="menu"]'))
  const menu = {
    host,
    trigger: host.querySelector('[aria-haspopup="menu"]'),
    content: contents[0],
    subtrigger: host.querySelector('[role="menuitem"][aria-haspopup="menu"]'),
    subcontent: contents[1],
    subitems: Array.from(contents[1].querySelectorAll('[role="menuitem"]')),
    after: host.querySelector('[data-text-value="After"]')
  }

  try {
    return await run(menu)
  } finally {
    menu.subcontent.matches(':popover-open') && menu.subcontent.hidePopover()
    menu.content.matches(':popover-open') && menu.content.hidePopover()
    mounted.unmount()
    host.remove()
  }
}

async function focusSubtrigger(menu) {
  await open(menu)
  key(document.activeElement, 'ArrowDown')
}

async function openSubmenu(menu) {
  await focusSubtrigger(menu)
  key(menu.subtrigger, 'ArrowRight')
  await settle()
}

async function withDeepSubmenu(run) {
  const host = document.createElement('div')
  document.body.append(host)
  const mounted = s.mount(host, () => dropdown(
    dropdown.trigger('Options'),
    dropdown.content(
      dropdown.sub(
        dropdown.subtrigger({ textValue: 'First level' }, 'First level'),
        dropdown.subcontent(
          dropdown.sub(
            dropdown.subtrigger({ textValue: 'Second level' }, 'Second level'),
            dropdown.subcontent(
              dropdown.item({ textValue: 'Deep action' }, 'Deep action')
            )
          )
        )
      )
    )
  ))
  const contents = Array.from(host.querySelectorAll('[role="menu"]'))
  const subtriggers = Array.from(host.querySelectorAll('[role="menuitem"][aria-haspopup="menu"]'))
  const menu = {
    host,
    trigger: host.querySelector(':scope > [aria-haspopup="menu"]'),
    contents,
    subtriggers,
    deepItem: host.querySelector('[data-text-value="Deep action"]')
  }

  try {
    return await run(menu)
  } finally {
    contents.slice().reverse().forEach(content =>
      content.matches(':popover-open') && content.hidePopover()
    )
    mounted.unmount()
    host.remove()
  }
}

async function openDeepSubmenu(menu) {
  key(menu.trigger, 'ArrowDown')
  await settle()
  key(menu.subtriggers[0], 'ArrowRight')
  await settle()
  key(menu.subtriggers[1], 'ArrowRight')
  await settle()
}

function key(element, keyName, options = {}) {
  element.dispatchEvent(new KeyboardEvent('keydown', {
    key: keyName,
    bubbles: true,
    cancelable: true,
    ...options
  }))
}

function quickClick(element) {
  element.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }))
  element.dispatchEvent(new PointerEvent('pointerup', { bubbles: true }))
  element.click()
}

function activeValue() {
  return document.activeElement && document.activeElement.dataset.textValue
}

function settle() {
  return new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
