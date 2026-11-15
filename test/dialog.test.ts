import { expect, test } from '@playwright/test'

test.describe('dialog', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/dialog')
  })

  test('dialog renders in portal', async ({ page }) => {
    await expect(page.locator(`[cmdk-dialog]`)).toHaveCount(1)
    await expect(page.locator(`[cmdk-overlay]`)).toHaveCount(1)
  })

  test('dialog has no title without a label', async ({ page }) => {
    await expect(page.locator(`[cmdk-dialog]`)).toHaveCount(1)
    await expect(page.locator(`[cmdk-dialog] h2`)).toHaveCount(0)
  })
})

test('dialog is named by its label', async ({ page }) => {
  await page.goto('/dialog?label=Global%20Command%20Menu')
  await expect(page.getByRole('dialog', { name: 'Global Command Menu' })).toHaveCount(1)
  await expect(page.locator(`[cmdk-dialog] h2`)).toHaveText('Global Command Menu')
})
