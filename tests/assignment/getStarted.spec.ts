import { test, expect } from '@playwright/test';
import { GetStartedPage } from './pages/getStartedPage';
import { HomePage } from './pages/homePage';

test.describe('Board, List and Card tests', () => {

  test('Create Board, List and Card', async ({ page }) => {

    const getStartedPage = new GetStartedPage(page);
    const homePage = new HomePage(page);

    await page.goto('/');
    await getStartedPage.createBoardStartPage('Board-1');
    await homePage.createList('List-1');
    await homePage.createCard('Card-1');
    await expect(homePage.cardName).toHaveText('Card-1');
    // await homePage.deleateBoard();
    // await expect(homePage.boardDeletedPopup).toBeVisible();
  });

  test('Create one more board', async ({ page }) => {

    const homePage = new HomePage(page);
    
    await page.goto('/');
    await homePage.createBoard('Board-2');
  });

  test('Delete all boards', async ({ page }) => {

    const homePage = new HomePage(page);
    
    await page.goto('/');
    await homePage.deleteAllBoards();
    await expect(homePage.boardDeletedPopup).toBeVisible();
  });

});
