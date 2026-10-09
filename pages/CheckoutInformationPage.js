// pages/CheckoutInformationPage.js
const { BasePage } = require('./BasePage');
const { CheckoutInformationLocators } = require('../locators/CheckoutInformationLocators');

class CheckoutInformationPage extends BasePage {
  constructor(page) {
    super(page);
    this.locators = new CheckoutInformationLocators(page);
  }

  async expectLoaded() {
    await this.expectOnPage(
      /checkout-step-one\.html/,
      this.locators.pageTitle,
      'checkout information page'
    );
  }

  async submitCustomerInformation({ firstName, lastName, postalCode }) {
    await this.locators.firstNameInput.fill(firstName);
    await this.locators.lastNameInput.fill(lastName);
    await this.locators.postalCodeInput.fill(postalCode);
    await this.locators.continueButton.click();
  }
}

module.exports = { CheckoutInformationPage };
