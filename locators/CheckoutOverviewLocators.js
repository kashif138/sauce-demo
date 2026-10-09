// locators/CheckoutOverviewLocators.js
const { CartItemLocators } = require('./CartItemLocators');

class CheckoutOverviewLocators extends CartItemLocators {
  constructor(page) {
    super(page);
    this.pageTitle = page.getByText('Checkout: Overview');
    this.subtotalLabel = page.locator('.summary_subtotal_label');
    this.taxLabel = page.locator('.summary_tax_label');
    this.totalLabel = page.locator('.summary_total_label');
    this.finishButton = page.getByRole('button', { name: 'Finish' });
  }
}

module.exports = { CheckoutOverviewLocators };
