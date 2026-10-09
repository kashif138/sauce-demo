// pages/CartPage.js
const { BasePage } = require('./BasePage');
const { CartLocators } = require('../locators/CartLocators');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.locators = new CartLocators(page);
  }

  async expectLoaded() {
    await this.expectOnPage(/cart\.html/, this.locators.pageTitle, 'cart page');
  }

  async expectSingleProduct(product) {
    await this.expectSingleLineItem(this.locators, product);
  }

  async proceedToCheckout() {
    await this.locators.checkoutButton.click();
  }
}

module.exports = { CartPage };
