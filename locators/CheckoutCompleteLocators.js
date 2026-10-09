// locators/CheckoutCompleteLocators.js
class CheckoutCompleteLocators {
  constructor(page) {
    this.page = page;
    this.pageTitle = page.getByText('Checkout: Complete!');
  }

  confirmationHeading(headingText) {
    return this.page.getByRole('heading', { name: headingText });
  }

  confirmationMessage(messageText) {
    return this.page.getByText(messageText);
  }
}

module.exports = { CheckoutCompleteLocators };
