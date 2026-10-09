// pages/LoginPage.js
const { BasePage } = require('./BasePage');
const { LoginLocators } = require('../locators/LoginLocators');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.locators = new LoginLocators(page);
  }

  async open() {
    await this.page.goto('/');
  }

  async login({ username, password }) {
    await this.locators.usernameInput.fill(username);
    await this.locators.passwordInput.fill(password);
    await this.locators.loginButton.click();
  }
}

module.exports = { LoginPage };
