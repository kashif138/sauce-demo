// locators/CheckoutInformationLocators.js
class CheckoutInformationLocators {
  constructor(page) {
    this.pageTitle = page.getByText('Checkout: Your Information');
    this.firstNameInput = page.getByPlaceholder('First Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');
    this.postalCodeInput = page.getByPlaceholder('Zip/Postal Code');
    this.continueButton = page.getByRole('button', { name: 'Continue' });
  }
}

module.exports = { CheckoutInformationLocators };
