import s from 'sin'
import t from 'sin/test'
import dropdown from '../src/dropdown.js'

t.timeout = 2000

const closedHtml = '<!--h--><!--[2--><button id="sinewy-dropdown-1-trigger" type="button" popovertarget="sinewy-dropdown-1-content" popovertargetaction="toggle" aria-haspopup="menu" aria-controls="sinewy-dropdown-1-content" aria-expanded="false" aria-disabled="false" data-state="closed" style="anchor-name:--sinewy-dropdown-1-anchor">Actions</button><div class="skkp7hd" id="sinewy-dropdown-1-content" popover="auto" role="menu" dir="ltr" aria-labelledby="sinewy-dropdown-1-trigger" data-state="closed" data-side="bottom" data-align="start" style="position-anchor:--sinewy-dropdown-1-anchor;position-area:block-end span-inline-end;position-try-fallbacks:flip-block, flip-inline, flip-block flip-inline, --sinewy-dropdown-fit-block, --sinewy-dropdown-fit-block flip-block, --sinewy-dropdown-fit-block flip-inline, --sinewy-dropdown-fit-block flip-block flip-inline;position-try-order:normal;margin-block-start:0px;margin-inline-start:0px;--sinewy-trigger-width:anchor-size(width);--sinewy-trigger-height:anchor-size(height);--sinewy-transform-origin:left top"><button type="button" role="menuitem" tabIndex="-1" aria-disabled="false">Alpha</button></div>'
const openHtml = closedHtml
  .replaceAll('data-state="closed"', 'data-state="open"')
  .replace('aria-expanded="false"', 'aria-expanded="true"')

t`dropdown hydration`(
  t`reuses initially closed server nodes`(() => withHydration(closedHtml, false, async menu => {
    await settle()
    t.is(menu.serverTrigger, menu.trigger)
    t.is(menu.serverContent, menu.content)
    t.is(false, menu.content.matches(':popover-open'))
    return ['false', menu.trigger.getAttribute('aria-expanded')]
  })),

  t`reuses and opens initially open server nodes`(() => withHydration(openHtml, true, async menu => {
    await settle()
    t.is(menu.serverTrigger, menu.trigger)
    t.is(menu.serverContent, menu.content)
    t.is(true, menu.content.matches(':popover-open'))
    return ['true', menu.trigger.getAttribute('aria-expanded')]
  }))
)

function withHydration(html, defaultOpen, run) {
  const host = document.createElement('div')
  host.innerHTML = html
  document.body.append(host)
  const serverTrigger = host.querySelector('[aria-haspopup="menu"]')
  const serverContent = host.querySelector('[role="menu"]')
  const mounted = s.mount(host, () => dropdown({ defaultOpen },
    dropdown.trigger('Actions'),
    dropdown.content(dropdown.item('Alpha'))
  ))
  const menu = {
    host,
    serverTrigger,
    serverContent,
    trigger: host.querySelector('[aria-haspopup="menu"]'),
    content: host.querySelector('[role="menu"]')
  }

  return Promise.resolve()
    .then(() => run(menu))
    .finally(() => {
      menu.content.matches(':popover-open') && menu.content.hidePopover()
      mounted.unmount()
      host.remove()
    })
}

function settle() {
  return new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
}
