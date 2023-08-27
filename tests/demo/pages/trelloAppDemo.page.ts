import { type Locator, type Page } from "@playwright/test";

export class TrelloAppDemo {
    readonly page: Page;
    readonly boardNameInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.boardNameInput = page.getByPlaceholder('Name of your first board');
    }

    async createBoard(boardName: string) {
        await this.boardNameInput.click();
        await this.boardNameInput.fill(boardName);
        await this.boardNameInput.press('Enter');
    }

}