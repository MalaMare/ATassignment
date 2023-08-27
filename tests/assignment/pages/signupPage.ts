import { type Locator, type Page } from "@playwright/test";

export class SignupPage {

    readonly page: Page;
    readonly logInButton: Locator;
    readonly goToSignupLink: Locator;
    readonly signupEmailField: Locator;
    readonly signupPasswordField: Locator;
    readonly welcomeEmailCheckbox: Locator;
    readonly signupButton: Locator;
    readonly backTologinLink: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logInButton = page.locator('//nav//span[contains(text(),"Log")]');
        this.goToSignupLink = page.locator('//a[contains(text(),"Don’t have an account? Sign up here.")]');
        this.signupEmailField =page.getByPlaceholder('Email');
        this.signupPasswordField =page.getByPlaceholder('Password');
        // this.welcomeEmailCheckbox =page.locator('//input');
        this.signupButton = page.locator('//button[contains(text(),"Create account")]');
        this.backTologinLink = page.locator('//a[contains(text(),"Already have an account? Log in here")]');
        this.logoutButton = page.locator('//div[contains(text(),"@mail.com")]');
    }

    async signupUser(signupEmail: string, signupPassword: string) {
        await this.logInButton.click();
        await this.goToSignupLink.click();
        await this.signupEmailField.fill(signupEmail);
        await this.signupPasswordField.fill(signupPassword);
        await this.signupButton.click();
    }

}