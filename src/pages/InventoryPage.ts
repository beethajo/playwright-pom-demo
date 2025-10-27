import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly title: Locator;
  readonly inventoryItems: Locator;
  readonly burgerMenu: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.locator('.title');
    this.inventoryItems = page.locator('.inventory_item');
    this.burgerMenu = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  async assertLoaded() {
    await expect(this.title).toHaveText('Products');
    await expect(this.inventoryItems).toHaveCountGreaterThan(0);
  }

  async logout() {
    await this.burgerMenu.click();
    await this.logoutLink.click();
  }
}

declare global {
  namespace PlaywrightTest {
    interface Matchers<R, T> {
      toHaveCountGreaterThan(expected: number): R;
    }
  }
}
