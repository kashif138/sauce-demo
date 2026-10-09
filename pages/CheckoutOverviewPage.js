// pages/CheckoutOverviewPage.js
const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');
const { CheckoutOverviewLocators } = require('../locators/CheckoutOverviewLocators');
const { parseCurrencyToCents } = require('../utils/currency');

class CheckoutOverviewPage extends BasePage {
  constructor(page) {
    super(page);
    this.locators = new CheckoutOverviewLocators(page);
  }

  async expectLoaded() {
    await this.expectOnPage(
      /checkout-step-two\.html/,
      this.locators.pageTitle,
      'checkout overview page'
    );
  }

  async expectSingleProduct(product) {
    await this.expectSingleLineItem(this.locators, product);
  }

  /** Validates subtotal, tax and total (total = subtotal + tax). */
  async expectOrderTotals(expectedSubtotalCents) {
    const subtotalCents = parseCurrencyToCents(await this.locators.subtotalLabel.innerText());
    const taxCents = parseCurrencyToCents(await this.locators.taxLabel.innerText());
    const totalCents = parseCurrencyToCents(await this.locators.totalLabel.innerText());

    expect(subtotalCents, 'Item subtotal should equal the captured product price').toBe(
      expectedSubtotalCents
    );
    expect(taxCents, 'Tax should be a positive amount').toBeGreaterThan(0);
    expect(totalCents, 'Total should equal subtotal + tax').toBe(subtotalCents + taxCents);
  }

  async finishOrder() {
    await this.locators.finishButton.click();
  }
}

module.exports = { CheckoutOverviewPage };
