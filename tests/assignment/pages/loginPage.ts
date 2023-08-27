import { type Locator, type Page } from "@playwright/test";

export class LoginPage {

    readonly page: Page;
    readonly logInButton: Locator;
    readonly loginEmailField: Locator;
    readonly loginPasswordField: Locator;
    readonly loginButton: Locator;
    readonly signUpLink: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logInButton = page.locator('//nav//span[contains(text(),"Log")]');
        this.loginEmailField = page.locator('//input[1]');
        this.loginPasswordField = page.locator('//input[2]');
        this.loginButton = page.locator('//button[contains(text(),"Log in")]');
        this.signUpLink = page.locator('//a[contains(text(),"Don’t have an account? Sign up here.")]');
        this.logoutButton = page.locator('//div[contains(text(),"@mail.com")]');
    }

    async loginUser(loginEmail: string, loginPassword: string) {
        await this.logInButton.click();
        await this.loginEmailField.fill(loginEmail);
        await this.loginPasswordField.fill(loginPassword);
        await this.loginButton.click();
    }

}