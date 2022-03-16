* Annotations
  - [Skip Annotation](#skip-annotation)
  - [Only Annotation](#only-annotation)
  - [Describe](#describe)

* Tagging
  - [Execute tests that contains the tag](#execute-tests-that-contains-the-tag)
  - [Execute tests that does not contains the tag](#execute-tests-that-does-not-contains-the-tag)

* Report
  - [HTML Report](#html-reporter)

* Screenshot
  - [Fullpage Screenshot](#taking-fullpage-screenshot)
  - [Element Screenshot](#element-screenshot)

* Hooks
  - [BeforeEach Hook](#before-each)
  - [AfterEach Hook](#after-each)

* [Custom Function](#custom-function)


### Skip Annotation

> A test can be skipped by adding `.skip` into that particular test

```js
import { test, expect } from '@playwright/test';

test.skip('Google page', async ({ page }) => { // this test will be skipped
  await page.goto('https://google.com/');
  await expect(page).toHaveTitle("Google");
});

test('Youtube Page', async ({ page }) => {
  await page.goto('https://youtube.com/');
  await expect(page).toHaveTitle("YouTube");
});

test('Bing page', async ({ page }) => {
  await page.goto('https://bing.com/');
  await expect(page).toHaveTitle("Bing");
});

test.skip('Flipkart page', async ({ page }) => { // this test will be skipped
  await page.goto('https://flipkart.com/');
  await expect(page).toHaveTitle("Flipkart");
});
```

Output:

```sh

Running 4 tests using 1 worker

  -  tests/tagging.spec.ts:3:6 › Google page
  ✓  tests/tagging.spec.ts:8:1 › Youtube Page (3s)
  ✓  tests/tagging.spec.ts:13:1 › Bing page (774ms)
  -  tests/tagging.spec.ts:18:6 › Flipkart page


  2 skipped
  2 passed (4s)

```


### Only Annotation

> `Only` annotation is helpful when only a partical test needs tobe executed


```ts
import { test, expect } from '@playwright/test';

test.only('Google page', async ({ page }) => { // only this test will get executed
  await page.goto('https://google.com/');
  await expect(page).toHaveTitle("Google");
});

test('Youtube Page', async ({ page }) => {
  await page.goto('https://youtube.com/');
  await expect(page).toHaveTitle("YouTube");
});

test('Bing page', async ({ page }) => {
  await page.goto('https://bing.com/');
  await expect(page).toHaveTitle("Bing");
});

test('Flipkart page', async ({ page }) => {
  await page.goto('https://flipkart.com/');
  await expect(page).toHaveTitle("Flipkart");
});
```

Output:

```sh

Running 1 test using 1 worker

  ✓  tests/tagging.spec.ts:3:6 › Google page (2s)


  1 passed (2s)

```

### Describe

> `describe` helps in grouping the test into a suite.

```ts
import { test, expect } from '@playwright/test';

test.describe('complete suite run', () => { // this wraps all the tests as a complete suite

  test('Google page', async ({ page }) => {
    await page.goto('https://google.com/');
    await expect(page).toHaveTitle("Google");
  });

  test('Youtube Page', async ({ page }) => {
    await page.goto('https://youtube.com/');
    await expect(page).toHaveTitle("YouTube");
  });

  test('Bing page', async ({ page }) => {
    await page.goto('https://bing.com/');
    await expect(page).toHaveTitle("Bing");
  });

  test.skip('Flipkart page', async ({ page }) => {
    await page.goto('https://flipkart.com/');
    await expect(page).toHaveTitle("Flipkart");
  });

})
```

Output:

```sh

Running 4 tests using 1 worker

  ✓  tests/tagging.spec.ts:4:3 › complete suite run › Google page (2s)
  ✓  tests/tagging.spec.ts:9:3 › complete suite run › Youtube Page (3s)
  ✓  tests/tagging.spec.ts:14:3 › complete suite run › Bing page (894ms)
  -  tests/tagging.spec.ts:19:8 › complete suite run › Flipkart page


  1 skipped
  3 passed (6s)

```

### Execute tests that contains the tag:

> Execute test which contain the tags

```ts
import { test, expect } from '@playwright/test';

  test('Google page @searchEngine', async ({ page }) => { //this will be executed
    await page.goto('https://google.com/');
    await expect(page).toHaveTitle("Google");
  });

  test('Youtube Page', async ({ page }) => {
    await page.goto('https://youtube.com/');
    await expect(page).toHaveTitle("YouTube");
  });

  test('Bing page @searchEngine', async ({ page }) => { // this will be executed
    await page.goto('https://bing.com/');
    await expect(page).toHaveTitle("Bing");
  });

  test.skip('Flipkart page', async ({ page }) => {
    await page.goto('https://flipkart.com/');
    await expect(page).toHaveTitle("Flipkart");
  });
```

How to execute:

$ `npx playwright test --grep @searchEngine`

Output:
```sh
Running 2 tests using 1 worker

  ✓  tests/tagging.spec.ts:3:3 › Google page @searchEngine (2s)
  ✓  tests/tagging.spec.ts:13:3 › Bing page @searchEngine (824ms)


  2 passed (3s)
```

### Execute tests that does not contains the tag:

```ts
import { test, expect } from '@playwright/test';

  test('Google page @searchEngine', async ({ page }) => {
    await page.goto('https://google.com/');
    await expect(page).toHaveTitle("Google");
  });

  test('Youtube Page', async ({ page }) => { // this will be execute
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
```

How to run:

$ `npx playwright test --grep-invert @searchEngine`

Output:

```sh
Running 2 tests using 1 worker

  ✓  tests/tagging.spec.ts:8:3 › Youtube Page (3s)
  -  tests/tagging.spec.ts:18:8 › Flipkart page


  1 skipped
  1 passed (3s)
```

### HTML Reporter

> Generate HTML report.

Code:

$ `npx playwright test --reporter=html`

- _This will generate a playwright-report directory, and an index.html report will be present._



Output:

```sh
Running 4 tests using 1 worker

  1 skipped
  3 passed (5s)

To open last HTML report run:

  npx playwright show-report
```

### Taking fullpage screenshot

```ts
import { test, expect } from '@playwright/test';

test.only('Google page @searchEngine', async ({ page }) => {
  await page.goto('https://google.com/');
  await expect(page).toHaveTitle("Google");
  await page.screenshot({ path: "screenshot.png", fullPage: true }) //capture fullpage screenshot
});
```

### Element screenshot

```ts
import { test, expect } from '@playwright/test';

test.only('Google page @searchEngine', async ({ page }) => {
  await page.goto('https://google.com/');
  await expect(page).toHaveTitle("Google");

  //store the element
  const googleImage = await page.locator("(//img)[1]")
  await googleImage.screenshot({ path: "googleImage.png" }) //capture the screenshot of the element
});
```

### Before each

```ts
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://google.com/')
})

test('Google image screenshot', async ({ page }) => {
  await expect(page).toHaveTitle("Google");

  //store the element
  const googleImage = await page.locator("(//img)[1]")
  await googleImage.screenshot({ path: "googleImage.png" }) //capture the screenshot of the element
});

test('Google searchbar screenshot', async ({ page }) => {
  await expect(page).toHaveTitle("Google");

  //store the element
  const googleImage = await page.locator("//div[@class='RNNXgb']")
  await googleImage.screenshot({ path: "googleSearchImage.png" }) //capture the screenshot of the element
});
```

Output:

```sh
Running 2 tests using 1 worker

  ✓  ftests/tagging.spec.ts:7:1 › Google image screenshot (2s)
  ✓  ftests/tagging.spec.ts:15:1 › Google searchbar screenshot (2s)


  2 passed (4s)
```

### After Each

```ts
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://google.com/')
})

test.afterEach(async ({ page }) => {
  await page.screenshot({ path: "screenshot.png" , fullPage: true })
})

test('Google image screenshot', async ({ page }) => {
  await expect(page).toHaveTitle("Google");

  //store the element
  const searchBar = await page.locator("//div[@class='RNNXgb']")
  searchBar.type("test 1")
});

test('Google searchbar screenshot', async ({ page }) => {
  await expect(page).toHaveTitle("Google");

  //store the element
  const searchBar = await page.locator("//div[@class='RNNXgb']")
  searchBar.type("test 2")
});
```
### Custom Function

> helper.ts

```ts
export async function locadGooglePage(page) {
    await page.goto('https://google.com/')
}

export async function takeFullpageScreenshot(page) {
    await page.screenshot({ path: "screenshot.png" , fullPage: true })
}
```

> test.spec.ts

```ts
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
```

Output:

```
Running 1 test using 1 worker

  ✓  ftests/tagging.spec.ts:6:1 › Google image screenshot (2s)


  1 passed (2s)
```
