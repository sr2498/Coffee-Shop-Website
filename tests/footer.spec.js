// @ts-check
const { test, expect } = require("@playwright/test");

const localUrl = "http://localhost:3000";

/* This test checks that the Facebook link is visible on the page */
test("Check Facebook Link in footer", async ({ page }) => {
  await page.goto(process.env.URL || localUrl);
  await expect(page.locator('a[href*="facebook.com"]')).toBeVisible();
});

/* This test checks that the Twitter link is visible on the page */
test("Check Twitter Link in footer", async ({ page }) => {
  await page.goto(process.env.URL || localUrl);
  await expect(page.locator('a[href*="twitter.com"]')).toBeVisible();
});

/* This test checks that the Instagram link is visible on the page */
test("Check Instagram Link in footer", async ({ page }) => {
  await page.goto(process.env.URL || localUrl);
  await expect(page.locator('a[href*="instagram.com"]')).toBeVisible();
});

test("Rewards link exists in footer", async ({ page }) => {
  const resp = await page.goto(process.env.URL || localUrl);
  await page.locator('div > a:has-text("Rewards")').isVisible();
});

test("Test for navigating to Blog and is clickable from the footer of website and reachable", async ({
  page,
}) => {
  const resp = await page.goto(process.env.URL || localUrl);
  await page.locator('div > a:has-text("Blog")').click();
  await page.waitForURL(`${process.env.URL || localUrl}/blog`);
  const currentURL = await page.url();
  const expectedURL = `${process.env.URL || localUrl}/blog`;
  expect(resp.status()).toBe(200);
  expect(currentURL).toBe(expectedURL);
});
