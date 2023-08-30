import { test, expect, Page } from '@playwright/test';
import { GetStartedPage } from './pages/getStartedPage';
import { HomePage } from './pages/homePage';

test.describe('Board, List and Card tests', () => {
  test.describe.configure({ mode: 'serial' });
  let homePage: HomePage;
  let getStartedPage: GetStartedPage;
  
  test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    getStartedPage = new GetStartedPage(page);
    homePage = new HomePage(page);
    await page.goto('/');
  });

  test('Create Board, List and Card', async ({ page }) => {
    await getStartedPage.createBoardStartPage('Board-1');
    await homePage.createList('List-1');
    await homePage.createCard('Card-1');
    await expect(homePage.cardName).toHaveText('Card-1');
  });

  test('Create one more board', async ({ page }) => {
    await homePage.createBoard('Board-2');
  });

  test('Delete all boards', async ({ page }) => {
    await homePage.deleteAllBoards();
    await expect(homePage.boardDeletedPopup).toBeVisible();
  });

});
