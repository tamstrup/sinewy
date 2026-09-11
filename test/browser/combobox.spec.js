import { test, expect } from '@playwright/test'

test.use({ hasTouch: true })

test.beforeEach(async({ page }) => {
  await page.goto('/test/browser/combobox.html')
  await expect(page.getByRole('combobox')).toHaveAttribute('aria-expanded', 'false')
})

test('clicking an unfocused input opens only after the gesture, without flicker', async({ page }) => {
  const input = page.getByRole('combobox')
  await pointAtInput(page)
  await page.mouse.down()
  await settle(page)
  await expect(input).toBeFocused()
  await expect(input).toHaveAttribute('aria-expanded', 'false')
  expect(await transitions(page)).toEqual([])
  await page.mouse.up()
  await expectOpen(page)
  expect(await transitions(page)).toEqual(['open'])
  expect(await page.evaluate(() => window.events.filter(x => ['pointerdown', 'focus', 'pointerup', 'click'].includes(x.type)).every(x => x.trusted))).toBe(true)
})

test('Tab focus opens immediately and connects keyboard navigation and selection', async({ page }) => {
  await page.locator('#before').focus()
  await page.keyboard.press('Tab')
  await expectOpen(page)
  expect(await transitions(page)).toEqual(['open'])
  await page.keyboard.press('ArrowDown')
  const first = page.getByRole('option', { name: 'Assets account' })
  await expect(page.getByRole('combobox')).toHaveAttribute('aria-activedescendant', await first.getAttribute('id'))
  await page.keyboard.press('Enter')
  await expectClosed(page)
  await expect(page.getByRole('combobox')).toHaveValue('Assets account')
  await expect(page.getByRole('combobox')).toBeFocused()
})

test('repeated clicks on a focused input preserve the popup and query', async({ page }) => {
  const input = page.getByRole('combobox')
  await input.click()
  await expectOpen(page)
  await input.pressSequentially('be')
  for (let i = 0; i < 3; i++) {
    await input.click()
    await expectOpen(page)
  }
  await expect(input).toHaveValue('be')
  expect(await transitions(page)).toEqual(['open'])
})

test('Tab leaves the control and closes the popup without trapping focus', async({ page }) => {
  await page.getByRole('combobox').click()
  await expectOpen(page)
  await page.keyboard.press('Tab')
  await expectClosed(page)
  await expect(page.locator('#outside')).toBeFocused()
})

test('Escape from a focused option dismisses and restores input focus', async({ page }) => {
  await page.getByRole('combobox').click()
  await page.getByRole('option', { name: 'Beta account' }).focus()
  await page.keyboard.press('Escape')
  await expectClosed(page)
  await expect(page.getByRole('combobox')).toBeFocused()
})

test('outside clicks dismiss and a new input click reopens', async({ page }) => {
  await page.getByRole('combobox').click()
  await expectOpen(page)
  await page.locator('#outside').click()
  await expectClosed(page)
  await expect(page.locator('#outside')).toBeFocused()
  await page.getByRole('combobox').click()
  await expectOpen(page)
  expect(await transitions(page)).toEqual(['open', 'closed', 'open'])
})

test('mouse selection retains focus and a focused, closed input can reopen', async({ page }) => {
  await page.getByRole('combobox').click()
  await page.getByRole('option', { name: 'Beta account' }).click()
  await expectClosed(page)
  await expect(page.getByRole('combobox')).toHaveValue('Beta account')
  await expect(page.getByRole('combobox')).toBeFocused()
  await page.getByRole('combobox').click()
  await expectOpen(page)
  await page.keyboard.press('Escape')
  await expectClosed(page)
  await expect(page.getByRole('combobox')).toBeFocused()
})

test('touch tap opens without flicker and repeated taps keep it open', async({ page }) => {
  await page.getByRole('combobox').tap()
  await expectOpen(page)
  await page.getByRole('combobox').tap()
  await expectOpen(page)
  expect(await transitions(page)).toEqual(['open'])
  expect(await page.evaluate(() => window.events.some(x => x.type === 'pointerdown' && x.pointerType === 'touch' && x.trusted))).toBe(true)
  await page.locator('#outside').tap()
  await expectClosed(page)
})

test('cancelled touch does not open later or suppress subsequent keyboard focus', async({ page }) => {
  const session = await page.context().newCDPSession(page)
  const { x, y } = await inputPoint(page)
  await session.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] })
  await session.send('Input.dispatchTouchEvent', { type: 'touchCancel', touchPoints: [] })
  await settle(page)
  await expectClosed(page)
  expect(await transitions(page)).toEqual([])
  expect(await page.evaluate(() => window.events.some(x => x.type === 'pointercancel' && x.trusted))).toBe(true)
  await page.locator('#before').focus()
  await page.keyboard.press('Tab')
  await expectOpen(page)
  await session.detach()
})

test('release outside the input does not open and clears deferred focus', async({ page }) => {
  await pointAtInput(page)
  await page.mouse.down()
  await settle(page)
  await page.locator('#outside').hover()
  await page.mouse.up()
  await settle(page)
  await expectClosed(page)
  expect(await transitions(page)).toEqual([])
  await page.locator('#before').focus()
  await page.keyboard.press('Tab')
  await expectOpen(page)
})

test('removal during a gesture leaves no delayed opening or stale pointer guard', async({ page }) => {
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  await pointAtInput(page)
  await page.mouse.down()
  await page.evaluate(() => window.fixture.remove())
  await expect(page.getByRole('combobox')).toHaveCount(0)
  await page.mouse.up()
  await settle(page)
  expect(await transitions(page)).toEqual([])
  await page.evaluate(() => window.fixture.mount())
  await page.getByRole('combobox').click()
  await expectOpen(page)
  expect(errors).toEqual([])
})

test('disabling during a gesture prevents deferred opening', async({ page }) => {
  await pointAtInput(page)
  await page.mouse.down()
  await page.evaluate(() => window.fixture.disable())
  await expect(page.getByRole('combobox')).toBeDisabled()
  await page.mouse.up()
  await settle(page)
  await expectClosed(page)
  expect(await transitions(page)).toEqual([])
})

async function inputPoint(page) {
  const box = await page.getByRole('combobox').boundingBox()
  return { x: box.x + 20, y: box.y + box.height / 2 }
}

async function pointAtInput(page) {
  const { x, y } = await inputPoint(page)
  await page.mouse.move(x, y)
}

async function settle(page) {
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))))
}

async function transitions(page) {
  await settle(page)
  // beforetoggle is synchronous: unlike toggle it cannot coalesce away flicker.
  return page.evaluate(() => window.events.filter(x => x.type === 'beforetoggle').map(x => x.newState))
}

async function expectOpen(page) {
  await expect(page.getByRole('combobox')).toHaveAttribute('aria-expanded', 'true')
  await expect(page.locator('[role="listbox"]')).toBeVisible()
  await expect(page.locator(':popover-open')).toHaveCount(1)
  await expect(page.getByRole('combobox')).toBeFocused()
}

async function expectClosed(page) {
  await expect(page.getByRole('combobox')).toHaveAttribute('aria-expanded', 'false')
  await expect(page.locator(':popover-open')).toHaveCount(0)
}
