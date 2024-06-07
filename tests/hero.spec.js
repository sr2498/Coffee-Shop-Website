// @ts-check
const { test, expect } = require("@playwright/test");

const localUrl = "http://localhost:3000/";

// Checking hero sections main sentence
test("Check for hero section h1 main sentence", async ({ page }) => {
  const mainSlogan = "Discover and Create the Perfect Coffee";

  await page.goto(process.env.URL || localUrl);

  const h1Selector = `h1:has-text("${mainSlogan}")`;
  await expect(page.locator(h1Selector)).toBeVisible();
  await expect(page.locator(h1Selector)).toHaveText(mainSlogan);
});

// Checking hero sections slogan
test("Check for hero section sub slogan", async ({ page }) => {
  const slogan = "Embrace the Journey, Discover the Brew";

  await page.goto(process.env.URL || localUrl);

  const h1Selector = `h3:has-text("${slogan}")`;
  await expect(page.locator(h1Selector)).toBeVisible();
  await expect(page.locator(h1Selector)).toHaveText(slogan);
});

// Checking hero sections order now button
// test('Check for button with text - Order Now on hero section', async ({page}) => {
// 	const orderNowText = 'Order Now';

// 	await page.goto(process.env.URL || url);

// 	const h1Selector = `button:has-text("${orderNowText}")`;
// 	await expect(page.locator(h1Selector)).toBeVisible();
// 	await expect(page.locator(h1Selector)).toHaveText(orderNowText);
// });

// Checking hero sections button with text
test("Check for button with text - Explore Our Coffee on hero section", async ({
  page,
}) => {
  const exploreOurCoffeeText = "Explore Our Coffee";

  await page.goto(process.env.URL || localUrl);

  const h1Selector = `button:has-text("${exploreOurCoffeeText}")`;
  await expect(page.locator(h1Selector)).toBeVisible();
  await expect(page.locator(h1Selector)).toHaveText(exploreOurCoffeeText);
});

// Checking hero sections button with text
// test('Check for button with text - Join Now on hero section', async ({page}) => {
// 	const joinNowText = 'Join Now';

// 	await page.goto(url);

// 	const h1Selector = `button:has-text("${joinNowText}")`;
// 	await expect(page.locator(h1Selector)).toBeVisible();
// 	await expect(page.locator(h1Selector)).toHaveText(joinNowText);
// });
