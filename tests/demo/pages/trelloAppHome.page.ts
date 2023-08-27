import { type Locator, type Page } from "@playwright/test";

export class TrelloAppHome {
    readonly page: Page;
    readonly listTitleInput: Locator;
    readonly addListButton: Locator;
    readonly newCardButton: Locator;
    readonly addCardButton: Locator;
    readonly cardName: Locator;
    readonly boardOptionsButton: Locator;
    readonly deleteBoardButon: Locator;
    readonly boardDeletedPopup: Locator;

    constructor(page: Page) {
        this.page = page;
        this.listTitleInput = page.getByPlaceholder('Enter list title...');
        this.addListButton = page.locator('[data-cy="new-card"]');
        this.newCardButton = page.getByPlaceholder('Enter a title for this card...');
        this.addCardButton = page.getByRole("button", { name: "Add card"});
        this.cardName = page.locator('[data-cy="card-text"]');
        this.boardOptionsButton = page.locator('[data-cy="board-options"]');
        this.deleteBoardButon = page.locator('[data-cy="delete-board"]');
        this.boardDeletedPopup = page.getByText('Board was deleted');
    }

    async createList(listName: string) {
        await this.listTitleInput.fill(listName);
        await this.listTitleInput.press('Enter');
        await this.addListButton.click();
    }

    async createCard(cardName: string) {
        await this.newCardButton.fill(cardName);
        await this.addCardButton.click();
    }

    async deleateBoard() {
        await this.boardOptionsButton.click();
        await this.deleteBoardButon.click();
    }

}