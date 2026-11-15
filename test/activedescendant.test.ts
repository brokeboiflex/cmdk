import { expect, test } from '@playwright/test'

test.describe('aria-activedescendant', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/activedescendant')
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveText('Banana')
  })

  test('names the selected item, not a group whose heading has the same value', async ({ page }) => {
    await page.locator(`[cmdk-input]`).type('apple')
    const selected = page.locator(`[cmdk-item][aria-selected="true"]`)
    await expect(selected).toHaveText('Apple')
    await expect(page.locator(`[cmdk-input]`)).toHaveAttribute(
      'aria-activedescendant',
      await selected.getAttribute('id'),
    )
  })

  test('names the rendered item when a filtered-out item has the same value', async ({ page }) => {
    await page.locator(`[cmdk-input]`).type('beta')
    const selected = page.locator(`[cmdk-item][aria-selected="true"]`)
    await expect(selected).toHaveText('Twin beta')
    await expect(page.locator(`[cmdk-input]`)).toHaveAttribute(
      'aria-activedescendant',
      await selected.getAttribute('id'),
    )
  })
})
