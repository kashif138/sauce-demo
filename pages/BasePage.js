// pages/BasePage.js
const { expect } = require('@playwright/test');

/** Behaviour shared by every page object. */
class BasePage {
  constructor(page) {
    this.page = page;
  }

  /** Asserts the URL and that the page title is visible. */
  async expectOnPage(urlPattern, titleLocator, pageDescription) {
    await expect(this.page, `Should be on the ${pageDescription}`).toHaveURL(urlPattern);
    await expect(titleLocator, `${pageDescription} title should be visible`).toBeVisible();
  }

  /** Asserts a list contains exactly one line item matching the captured product. */
  async expectSingleLineItem(itemLocators, product) {
    await expect(itemLocators.cartItems, 'Should contain exactly one item').toHaveCount(1);
    await expect(itemLocators.itemName, 'Item name should match inventory').toHaveText(product.name);
    await expect(itemLocators.itemPrice, 'Item price should match inventory').toHaveText(
      product.priceText
    );
  }
  async pause(ms = 3000) {
    if (process.env.DEMO_PAUSE) {
      await this.page.waitForTimeout(ms);
    }
  }
}

module.exports = { BasePage };
