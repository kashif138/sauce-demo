// pages/CheckoutCompletePage.js
const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');
const { CheckoutCompleteLocators } = require('../locators/CheckoutCompleteLocators');

class CheckoutCompletePage extends BasePage {
  constructor(page) {
    super(page);
    this.locators = new CheckoutCompleteLocators(page);
  }

  async expectOrderConfirmed({ heading, message }) {
    await this.expectOnPage(
      /checkout-complete\.html/,
      this.locators.pageTitle,
      'order confirmation page'
    );
    await expect(
      this.locators.confirmationHeading(heading),
      'Confirmation heading should be visible'
    ).toBeVisible();
    await expect(
      this.locators.confirmationMessage(message),
      'Success message should be visible'
    ).toBeVisible();
  }
}

module.exports = { CheckoutCompletePage };
