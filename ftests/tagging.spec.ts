import { test, expect } from '@playwright/test';

// import the functions
import {locadGooglePage, takeFullpageScreenshot} from '../ftests/helper'

test('Google image screenshot', async ({ page }) => {

  // calling function
  await locadGooglePage(page) // pass `page` as parameter

  await expect(page).toHaveTitle("Google");
  const searchBar = await page.locator("//div[@class='RNNXgb']")
  searchBar.type("test 1")

  //calling function
  await takeFullpageScreenshot(page) //pass `page` as parameter
});
