// @ts-check
const { test, expect } = require("@playwright/test");

const localUrl = "http://localhost:3000";

const MENU_ITEMS = ["Menu", "Blog", "About", "", "Join"];

/* This test checks that the page title is not empty and has desired value */
test("Check Page Title", async ({ page }) => {
  await page.goto(process.env.URL || localUrl);
  const title = await page.title();
  await expect(title).toBe("Journey Bean's Coffee");
});

/* This test checks that the page has company name - that is absoulte pos and is at the top */
test("Check for company's name is there", async ({ page }) => {
  const name = "Journey Bean's Coffee";

  await page.goto(process.env.URL || localUrl);

  const divSelector = `div span:has-text("${name}")`;
  await expect(page.locator(divSelector)).toBeVisible();
});

/* Test if all menu items are there and are in order */
test("Check for all menu items ", async ({ page }) => {
  await page.goto(process.env.URL || localUrl);

  await expect(page.locator("div > ul > li > a > span")).toHaveText(MENU_ITEMS);
});

// Test navigation to About Us page from navigation/menubar
test("Test for navigating to About Us page and is clickable", async ({
  page,
}) => {
  const resp = await page.goto(process.env.URL || localUrl);
  await page.locator('span:has-text("About")').click();
  await page.waitForURL(`${process.env.URL || localUrl}/about`);
  const currentURL = await page.url();
  const expectedURL = `${process.env.URL || localUrl}/about`;
  expect(resp.status()).toBe(200);
  expect(currentURL).toBe(expectedURL);
});

// Test navigation to menu page from navigation/menubar
test("Test for navigating to Menu page and is clickable", async ({ page }) => {
  const resp = await page.goto(process.env.URL || localUrl);
  await page.locator('span:has-text("Menu")').click();
  await page.waitForURL(`${process.env.URL || localUrl}/menu`);
  const currentURL = await page.url();
  const expectedURL = `${process.env.URL || localUrl}/menu`;
  expect(resp.status()).toBe(200);
  expect(currentURL).toBe(expectedURL);
});

// Test navigation to Blog page from navigation/menubar
test("Test for navigating to Blog page and is clickable", async ({ page }) => {
  const resp = await page.goto(process.env.URL || localUrl);
  await page.locator('span:has-text("Blog")').click();
  await page.waitForURL(`${process.env.URL || localUrl}/blog`);
  const currentURL = await page.url();
  const expectedURL = `${process.env.URL || localUrl}/blog`;
  expect(resp.status()).toBe(200);
  expect(currentURL).toBe(expectedURL);
});
