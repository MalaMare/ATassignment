import { test, expect } from '@playwright/test';
import { GetStartedPage } from './pages/getStartedPage';
import { HomePage } from './pages/homePage';

test.describe('Board, List and Card tests', () => {

  test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    await page.goto('/');
  });

  test('Create Board, List and Card', async ({ page }) => {

    const getStartedPage = new GetStartedPage(page);
    const homePage = new HomePage(page);

    await getStartedPage.createBoardStartPage('Board-1');
    await homePage.createList('List-1');
    await homePage.createCard('Card-1');
    await expect(homePage.cardName).toHaveText('Card-1');
    // await homePage.deleateBoard();
    // await expect(homePage.boardDeletedPopup).toBeVisible();
  });

  test('Create one more board', async ({ page }) => {

    const homePage = new HomePage(page);
    
    await homePage.createBoard('Board-2');
  });

  test('Delete all boards', async ({ page }) => {

    const homePage = new HomePage(page);
    
    await homePage.deleteAllBoards();
    await expect(homePage.boardDeletedPopup).toBeVisible();
  });

});
