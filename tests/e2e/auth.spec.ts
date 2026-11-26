import { expect, test, type Page } from "@playwright/test";

// Run against a TEST database (.env.test copied to .env for the dev server, or a test deploy).
const unique = () => `0700${Math.floor(1000000 + Math.random() * 8999999)}`;

async function register(page: Page, name: string, phone: string, password = "correct-password") {
  await page.goto("/register");
  await page.fill("#name", name);
  await page.fill("#phone", phone);
  await page.selectOption("#sex", "FEMALE");
  await page.fill("#age", "29");
  await page.fill("#password", password);
  await page.click("button[type=submit]");
}

test("1 and 3. a visitor registers, lands on their account, logs out and logs back in", async ({ page }) => {
  const phone = unique();
  await register(page, "Ada Eze", phone);
  await expect(page).toHaveURL(/\/account/);
  await expect(page.getByTestId("account-name")).toHaveText("Ada Eze");
  await page.getByRole("button", { name: "Log out" }).click();
  await expect(page).toHaveURL("/");
  await page.goto("/login");
  await page.fill("#phone", phone);
  await page.fill("#password", "correct-password");
  await page.click("button[type=submit]");
  await expect(page).toHaveURL(/\/account/);
});

test("4. wrong credentials show a message that does not say which field was wrong", async ({ page }) => {
  await page.goto("/login");
  await page.fill("#phone", "07000000000");
  await page.fill("#password", "whatever123");
  await page.click("button[type=submit]");
  await expect(page.locator('p[role="alert"]')).toHaveText("Wrong phone number or password.");
});

test("5. logged-out visitors are sent to log in for protected pages", async ({ page }) => {
  for (const path of ["/account", "/book", "/results"]) {
    await page.goto(path);
    await expect(page).toHaveURL(/\/login/);
  }
});

test("6. a patient only sees their own details", async ({ page }) => {
  await register(page, "Patient One", unique());
  await expect(page.getByTestId("account-name")).toHaveText("Patient One");
  await page.getByRole("button", { name: "Log out" }).click();
  await expect(page).toHaveURL("/");
  await register(page, "Patient Two", unique());
  await expect(page.getByTestId("account-name")).toHaveText("Patient Two");
  await expect(page.getByText("Patient One")).toHaveCount(0);
});
