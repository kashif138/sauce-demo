// locators/CartLocators.js
const { CartItemLocators } = require('./CartItemLocators');

class CartLocators extends CartItemLocators {
  constructor(page) {
    super(page);
    this.pageTitle = page.getByText('Your Cart', { exact: true });
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  }
}

module.exports = { CartLocators };
