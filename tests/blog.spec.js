// @ts-check
const { test, expect } = require("@playwright/test");

const localUrl = "http://localhost:3000";

test("Navigate and interact with blog elements", async ({ page }) => {
  const baseUrl = `${process.env.URL || localUrl}`;

  // Check if Blog Page is working by goign to blog page
  await page.goto(baseUrl);
  await page.getByRole("menuitem", { name: "Blog" }).click();

  // Check 'Welcome to Journey Bean's Coffee Blog' heading
  const welcomeHeading = "Welcome to Journey Bean's Coffee Blog";
  await expect(page.locator(`h1:has-text("${welcomeHeading}")`)).toBeVisible();

  // Check Hero section
  await page
    .getByText(
      "Welcome, coffee enthusiasts, to The Journey Bean's Coffee Blog – a cozy corner w"
    )
    .click();
  await page.getByText("The Journey Bean's Coffee Blog").click();
  await page.getByRole("link", { name: "Read our Blogs" }).click();
  await page.getByText("In our blog, you'll discover:").click();
  await page
    .locator("div")
    .filter({
      hasText:
        "Welcome, coffee enthusiasts, to The Journey Bean's Coffee Blog – a cozy corner w",
    })
    .nth(3)
    .click();
  await page.getByRole("img", { name: "Hero Image" }).click();
  await page.getByRole("link", { name: "Read our Blogs" }).click();

  // Check Blog Section
  await page
    .getByRole("heading", { name: "Journey Bean's Coffee Blogs" })
    .click();
  await page.getByText("October 1, 2023").click();

  // Check if Blog 1 is working
  await page
    .getByRole("link", {
      name: "The Coffee Connection: A Journey from Bean to Cup",
    })
    .click();
  await page
    .getByText(
      "The Coffee Connection is more than just a place to grab a cup of coffee. It's a "
    )
    .click();
});
