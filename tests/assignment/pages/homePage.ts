import { type Locator, type Page } from "@playwright/test";
export class HomePage {
    readonly page: Page;
    readonly listTitleInput: Locator;
    readonly addListButton: Locator;
    readonly newCardButton: Locator;
    readonly addCardButton: Locator;
    readonly cardName: Locator;
    readonly boardOptionsButton: Locator;
    readonly deleteBoardButon: Locator;
    readonly boardDeletedPopup: Locator;
    readonly nextBoard: Locator;
    readonly newBoardHomePage: Locator;
    readonly addBoardTitle: Locator;
    readonly createBoardButton: Locator;
    readonly homeBoardName: Locator;

    readonly dueDate: Locator;
    readonly calendarDropdown: Locator;
    readonly headerMonth: Locator;
    readonly selectMonth: Locator;
    readonly selectDate: Locator;
    readonly cardDescription: Locator;
    readonly cardCheckbox: Locator;
    readonly cancelCardDetailBackdrop: Locator;

    constructor(page: Page) {
        this.page = page;
        this.listTitleInput = page.getByPlaceholder('Enter list title...');
        this.addListButton = page.locator('[data-cy="new-card"]');
        this.newCardButton = page.getByPlaceholder('Enter a title for this card...');
        this.addCardButton = page.getByRole("button", { name: "Add card" });
        this.cardName = page.locator('[data-cy="card-text"]');
        this.boardOptionsButton = page.locator('[data-cy="board-options"]');
        this.deleteBoardButon = page.locator('[data-cy="delete-board"]');
        this.boardDeletedPopup = page.getByText('Board was deleted');
        this.nextBoard = page.locator('//div[1]/h2');
        this.newBoardHomePage = page.getByText('Create new board');
        this.addBoardTitle = page.locator('//input');
        this.createBoardButton = page.locator('//button[contains(text(),"Create board")]');
        this.homeBoardName = page.locator('[data-cy="board-title"]');

        this.dueDate = page.locator('[data-cy="due-date"]');
        this.calendarDropdown = page.locator('[data-cy="calendar-dropdown"]');
        this.headerMonth = page.locator('[data-cy="header-month"]');
        this.selectMonth = page.locator('[data-cy="month"]');
        this.selectDate = page.locator('[data-cy="day"]');
        this.cardDescription = page.locator('[data-cy="card-description"]')
        this.cardCheckbox = page.locator('div[data-cy="card-detail"] input[data-cy="card-checkbox"]');
        this.cancelCardDetailBackdrop = page.locator('[data-cy="cancel"]');
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

    async createBoard(boardName: string) {
        await this.newBoardHomePage.click();
        await this.addBoardTitle.fill(boardName);
        await this.createBoardButton.click();
        await this.page.waitForTimeout(2000);
    }

    async deleateBoard() {
        await this.boardOptionsButton.click();
        await this.deleteBoardButon.click();
    }

    async deleteAllBoards() {
        while (await this.nextBoard.isVisible()) {
            await this.nextBoard.click();
            await this.boardOptionsButton.click();
            await this.deleteBoardButon.click();
            await this.page.waitForTimeout(1000);
        }
    }

    async pickDueDate(days: number) {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var date = new Date();
        console.log(date);
        date.setDate(date.getDate() + days);
        console.log(date);

        var mm = date.getMonth();
        var dd = date.getDate().toString();
        var choosenMonth = months[mm];

        console.log(mm);
        console.log(dd);
        console.log(choosenMonth);

        await this.dueDate.click();
        await this.calendarDropdown.click();
        await this.headerMonth.click();
        await this.selectMonth.getByText(choosenMonth).click();
        await this.selectDate.getByText(dd, { exact: true }).click();
    }

    async openBoardFromHomepage() {
        await this.nextBoard.click();
    }

    async checkDueDate() {
        await this.cardCheckbox.click();
    }

    async fillDescription(description: string) {
        await this.cardDescription.fill(description);
        await this.cancelCardDetailBackdrop.click();
    }

}
