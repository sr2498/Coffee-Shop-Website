// @ts-check
const { test, expect } = require("@playwright/test");

const localUrl = "http://localhost:3000";

test("Check for button with text - Decline", async ({ page }) => {
  const declineText = "Decline";

  await page.goto(process.env.URL || localUrl);

  const h1Selector = `button:has-text("${declineText}")`;
  await expect(page.locator(h1Selector)).toBeVisible();
});

test("Check for button with text - Allow Cookies", async ({ page }) => {
  const allowCookiesText = "Allow Cookies";

  await page.goto(process.env.URL || localUrl);

  const h1Selector = `button:has-text("${allowCookiesText}")`;
  await expect(page.locator(h1Selector)).toBeVisible();
});

test('Check Privacy Policy elemnt ot have text: "See Cookie Policy"', async ({
  page,
}) => {
  await page.goto(process.env.URL || localUrl);

  await expect(page.locator(".cookiePrivacy")).toHaveText("See Cookie Policy");
});

test("Check Privacy Policy Link existance it should be 2", async ({ page }) => {
  await page.goto(process.env.URL || localUrl);

  await expect(page.locator('a[href*="privacy-policy"]')).toHaveCount(2);
});
