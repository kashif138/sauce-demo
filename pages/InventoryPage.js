// pages/InventoryPage.js
const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');
const { InventoryLocators } = require('../locators/InventoryLocators');
const { parseCurrencyToCents } = require('../utils/currency');

class InventoryPage extends BasePage {
  constructor(page) {
    super(page);
    this.locators = new InventoryLocators(page);
  }

  async expectLoaded() {
    await this.expectOnPage(/inventory\.html/, this.locators.pageTitle, 'inventory page');
  }

  /** Reads the product's name and price from the UI. */
  async getProductDetails(productName) {
    await expect(
      this.locators.productCard(productName),
      `${productName} should be listed`
    ).toBeVisible();

    const name = (await this.locators.productName(productName).innerText()).trim();
    const priceText = (await this.locators.productPrice(productName).innerText()).trim();
    return { name, priceText, priceCents: parseCurrencyToCents(priceText) };
  }

  async addToCart(productName) {
    await this.locators.addToCartButton(productName).click();
    await expect(
      this.locators.removeButton(productName),
      'Button should change to Remove after adding'
    ).toBeVisible();
  }

  async expectCartBadgeCount(count) {
    await expect(this.locators.cartBadge, `Cart badge should show ${count}`).toHaveText(
      String(count)
    );
  }

  async openCart() {
    await this.locators.cartLink.click();
  }
}

module.exports = { InventoryPage };
