import { test, expect } from '@playwright/test';

test.only('Google page @searchEngine', async ({ page }) => {
  await page.goto('https://google.com/');
  await expect(page).toHaveTitle("Google");

  //store the element
  const googleImage = await page.locator("(//img)[1]")
  await googleImage.screenshot({ path: "googleImage.png" }) //capture the screenshot of the element
});

test('Youtube Page', async ({ page }) => {
  await page.goto('https://youtube.com/');
  await expect(page).toHaveTitle("YouTube");
});

test('Bing page @searchEngine', async ({ page }) => {
  await page.goto('https://bing.com/');
  await expect(page).toHaveTitle("Bing");
});

test.skip('Flipkart page', async ({ page }) => {
  await page.goto('https://flipkart.com/');
  await expect(page).toHaveTitle("Flipkart");
});