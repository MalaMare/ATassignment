import { type Locator, type Page } from "@playwright/test";

export class GetStartedPage {

    readonly page: Page;
    readonly boardNameInput: Locator;
    readonly logInButton: Locator;
    readonly logoutButton: Locator;
    readonly invalidUserPopup: Locator;
    readonly invalidEmailFormatPopup: Locator;
  
    constructor(page: Page) {
        this.page = page;
        this.boardNameInput = page.getByPlaceholder('Name of your first board');
        this.logInButton = page.locator('//nav//span[contains(text(),"Log")]');
        this.logoutButton = page.locator('//div[contains(text(),"@mail.com")]');
        this.invalidUserPopup = page.getByText('Cannot find user');
        this.invalidEmailFormatPopup = page.getByText('Email format is invalid');
    }

    async createBoardStartPage(boardName: string) {
        await this.boardNameInput.click();
        await this.boardNameInput.fill(boardName);
        await this.boardNameInput.press('Enter');
    }

}