import { test, expect } from '@playwright/test';
import './_matchers';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { users } from '../utils/testData';

test.describe('Login', () => {
  test('valid user can log in and see inventory', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(users.valid.username, users.valid.password);

    const inventory = new InventoryPage(page);
    await inventory.assertLoaded();
    await inventory.logout();
    await loginPage.assertUrlContains('saucedemo.com');
  });


  test.only('[@regression] invalid user sees an error', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(users.invalid.username, users.invalid.password);
    await loginPage.assertErrorContains('Epic sadface');
    await page.waitForTimeout(10000)
  });
});
