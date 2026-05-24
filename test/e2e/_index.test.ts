import { expect, test } from "@playwright/test";

test("homepage loads without errors", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Jan Lavička/);
});
