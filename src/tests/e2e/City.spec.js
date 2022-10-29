import { test, expect } from '@playwright/test';

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('http://localhost:3000/demo-playwright-component-testing');

  // create a locator
  const cityInputField = page.locator('.sc-bcXHqe > input:nth-child(1)');
  const submitBtn = page.locator('.sc-bcXHqe > button:nth-child(2)');
  const cityName = page.locator('.sc-hLBbgP');

  await cityInputField.fill('Hanoi');
  await submitBtn.click();

  // Expect an attribute "to be strictly equal" to the value.
  await expect(await cityName.textContent()).toEqual('Hanoi, VN');
});