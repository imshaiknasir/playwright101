export async function locadGooglePage(page) {
    await page.goto('https://google.com/')
}

export async function takeFullpageScreenshot(page) {
    await page.screenshot({ path: "screenshot.png" , fullPage: true })
}