import { test, expect } from '@playwright/test';
import { SignupPage } from './pages/signupPage';
import { GetStartedPage } from './pages/getStartedPage';
import { Utils } from './pages/utils';

const signupEmail = `ipfolio${Utils.getRandomNumber()}@mail.com`;
const signupPassword = `Password${Utils.getRandomNumber()}`;
const invalidEmailFormat = "invalidEmailFormat.com";
const invalidPassword = "invalidPassword";

test.describe('Sign up tests', () => {
  let signupPage: SignupPage;
  let getStartedPage: GetStartedPage;

  test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    signupPage = new SignupPage(page);
    getStartedPage = new GetStartedPage(page);
    await page.goto('/');
  });

  test('Sign up with the valid credentials and log out', async ({ page }) => {
    await signupPage.signupUser(signupEmail, signupPassword);
    await expect(getStartedPage.logoutButton).toBeVisible();
    await getStartedPage.logoutButton.click();
    await expect(getStartedPage.logInButton).toBeVisible();
  });

  test('Sign up with the invalid email format', async ({ page }) => {
    await signupPage.signupUser(invalidEmailFormat, invalidPassword);
    await expect(getStartedPage.invalidEmailFormatPopup).toBeVisible();
    await expect(getStartedPage.logInButton).toBeVisible();
  });

});
