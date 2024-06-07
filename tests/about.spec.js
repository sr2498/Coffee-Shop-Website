// @ts-check
const { test, expect } = require("@playwright/test");

const localUrl = "http://localhost:3000";

/* This test checks that the  about section has main textual header */
test("Check About Section Main Header Element", async ({ page }) => {
  await page.goto(`${process.env.URL || localUrl}/about`);
  await expect(page.locator(".aboutContainer h1")).toBeVisible();
});

// This test checks if the <h1> exists and has text "About Journey Bean's Coffee in About section"
test("Check <h1> in <div> with the content About Journey Bean's Coffee", async ({
  page,
}) => {
  await page.goto(`${process.env.URL || localUrl}/about`);
  const expectedContent = "About Journey Bean's Coffee";
  const headerSelector = `div h1:has-text("${expectedContent}")`;

  await expect(page.locator(headerSelector)).toBeVisible();
});

// This test checks if the <h2> exists and has text "Our Values in About section"
test("Check <h1> in <div> with the content: Our Values", async ({ page }) => {
  await page.goto(`${process.env.URL || localUrl}/about`);
  const expectedContent = "Our Values";
  const headerSelector = `div h2:has-text("${expectedContent}")`;

  await expect(page.locator(headerSelector)).toBeVisible();
});

// This test checks if the <h2> exists and has text "Our Coffee in About section"
test("Check <h1> in <div> with the content: Our Coffee", async ({ page }) => {
  await page.goto(`${process.env.URL || localUrl}/about`);
  const expectedContent = "Our Coffee";
  const headerSelector = `div h2:has-text("${expectedContent}")`;

  await expect(page.locator(headerSelector)).toBeVisible();
});

// This test checks if the <h2> exists and has text "Join the Journey in About section"
test("Check <h1> in <div> with the content: Join the Journey", async ({
  page,
}) => {
  await page.goto(`${process.env.URL || localUrl}/about`);
  const expectedContent = "Join the Journey";
  const headerSelector = `div h2:has-text("${expectedContent}")`;

  await expect(page.locator(headerSelector)).toBeVisible();
});
