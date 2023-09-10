import { test, expect } from '@playwright/test';
import { SignupPage } from './pages/signupPage';
import { GetStartedPage } from './pages/getStartedPage';
import users from "../data/users-data";

test.describe('Sign up tests', () => {
  let signupPage: SignupPage;
  let getStartedPage: GetStartedPage;

  test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    signupPage = new SignupPage(page);
    getStartedPage = new GetStartedPage(page);
    await page.goto('/');
  });

  test('Sign up with the valid credentials and log out', async () => {
    await signupPage.signupUser(users.signupEmail, users.signupPassword);
    await expect(getStartedPage.logoutButton).toBeVisible();
    await getStartedPage.logoutButton.click();
    await expect(getStartedPage.logInButton).toBeVisible();
  });

  test('Sign up with the invalid email format', async () => {
    await signupPage.signupUser(users.invalidEmailFormat, users.invalidPassword);
    await expect(getStartedPage.invalidEmailFormatPopup).toBeVisible();
    await expect(getStartedPage.logInButton).toBeVisible();
  });

});
