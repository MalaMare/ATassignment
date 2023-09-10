import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/logInPage';
import { GetStartedPage } from './pages/getStartedPage';
import users from "../data/users-data";

test.describe('Log in Tests', () => {
  let loginPage: LoginPage;
  let getStartedPage: GetStartedPage;

  test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    loginPage = new LoginPage(page);
    getStartedPage = new GetStartedPage(page);
    await page.goto('/');
  });

  test('Log in with the existing user and log out', async () => {
    await loginPage.loginUser(users.loginUser.email, users.loginUser.password);
    await expect(getStartedPage.logoutButton).toBeVisible();
    await getStartedPage.logoutButton.click();
    await expect(getStartedPage.logInButton).toBeVisible();
  });

  test('Log in with the non existing user', async () => {
    await loginPage.loginUser(users.unregisteredEmail, users.invalidUser.password);
    await expect(getStartedPage.invalidUserPopup).toBeVisible();
    await expect(getStartedPage.logInButton).toBeVisible();
  });

  test('Log in with the invalid email format', async () => {
    await loginPage.loginUser(users.invalidUser.emailFormat, users.invalidUser.password);
    await expect(getStartedPage.invalidEmailFormatPopup).toBeVisible();
    await expect(getStartedPage.logInButton).toBeVisible();
  });

});