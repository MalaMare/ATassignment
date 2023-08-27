import { test, expect } from '@playwright/test';
import { TrelloAppDemo } from './pages/trelloAppDemo.page';
import { TrelloAppHome } from './pages/trelloAppHome.page';

test('get started link', async ({ page }) => {

  const trelloAppDemo = new TrelloAppDemo(page);
  const trelloAppHome = new TrelloAppHome(page);
  
  await page.goto('http://localhost:3000/');
  
  // await trelloAppDemo.boardNameInput.click();
  // await trelloAppDemo.boardNameInput.fill('Board-1');
  // await trelloAppDemo.boardNameInput.press('Enter');
  await trelloAppDemo.createBoard('Board-1');

  // await page.getByPlaceholder('Enter list title...').fill('List-1');
  // await page.getByPlaceholder('Enter list title...').press('Enter');
  // await page.locator('[data-cy="new-card"]').click();
  await trelloAppHome.createList('List-1');

  // await page.getByPlaceholder('Enter a title for this card...').fill('Card-1');
  // await page.getByRole("button", { name: "Add card"}).click();
  await trelloAppHome.createCard('Card-1');

  // await expect(page.locator('[data-cy="card-text"]')).toHaveText('Card-1');
  await expect(trelloAppHome.cardName).toHaveText('Card-1');

  // await page.locator('[data-cy="board-options"]').click();
  // await page.locator('[data-cy="delete-board"]').click();
  await trelloAppHome.deleateBoard();
  
  // await expect(page.getByText('Board was deleted')).toBeVisible();
  await expect(trelloAppHome.boardDeletedPopup).toBeVisible();

   // await expect(page.locator('[data-cy="list-name"]')).toHaveText('List-1');

});
