// @ts-check
const { test, expect } = require("@playwright/test");

const localUrl = "http://localhost:3000";

/* This test checks that the meta description for SEO is not empty */
test("Check SEO Meta Description", async ({ page }) => {
  await page.goto(process.env.URL || localUrl);
  const metaDescription = await page.getAttribute(
    'meta[name="description"]',
    "content"
  );
  await expect(metaDescription).not.toBe("");
});

/* This test checks that the meta keywords for SEO are not empty */
test("Check SEO Meta Keywords", async ({ page }) => {
  await page.goto(process.env.URL || localUrl);
  const metaKeywords = await page.getAttribute(
    'meta[name="keywords"]',
    "content"
  );
  await expect(metaKeywords).not.toBe("");
});

test("Check Twitter title Meta Keywords", async ({ page }) => {
  await page.goto(process.env.URL || localUrl);
  const metaKeywords = await page.getAttribute(
    'meta[name="twitter:title"]',
    "content"
  );
  await expect(metaKeywords).not.toBe("");
});

test("Check Twitter Image Meta Keywords", async ({ page }) => {
  await page.goto(process.env.URL || localUrl);
  const metaKeywords = await page.getAttribute(
    'meta[name="twitter:image"]',
    "content"
  );
  await expect(metaKeywords).not.toBe("");
});

test("Check Twitter URL Meta Keywords", async ({ page }) => {
  await page.goto(process.env.URL || localUrl);
  const metaKeywords = await page.getAttribute(
    'meta[property="twitter:url"]',
    "content"
  );
  await expect(metaKeywords).not.toBe("");
});

test("Check OG URL Meta Keywords", async ({ page }) => {
  await page.goto(process.env.URL || localUrl);
  const metaKeywords = await page.getAttribute(
    'meta[property="og:url"]',
    "content"
  );
  await expect(metaKeywords).not.toBe("");
});

test("Check OG Image Meta Keywords", async ({ page }) => {
  await page.goto(process.env.URL || localUrl);
  const metaKeywords = await page.getAttribute(
    'meta[property="og:image"]',
    "content"
  );
  await expect(metaKeywords).not.toBe("");
});

test("Check OG title Meta Keywords", async ({ page }) => {
  await page.goto(process.env.URL || localUrl);
  const metaKeywords = await page.getAttribute(
    'meta[property="og:title"]',
    "content"
  );
  await expect(metaKeywords).not.toBe("");
});

test("Check OG type Meta Keywords", async ({ page }) => {
  await page.goto(process.env.URL || localUrl);
  const metaKeywords = await page.getAttribute(
    'meta[property="og:type"]',
    "content"
  );
  await expect(metaKeywords).not.toBe("");
});

/* This test checks that the responsive meta tag is present */
test("Check Responsive Meta Tag", async ({ page }) => {
  await page.goto(process.env.URL || localUrl);
  const viewportMeta = await page.getAttribute(
    'meta[name="viewport"]',
    "content"
  );
  await expect(viewportMeta).toBe("width=device-width, initial-scale=1");
});
