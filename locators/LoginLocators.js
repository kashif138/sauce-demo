// locators/LoginLocators.js
class LoginLocators {
  constructor(page) {
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }
}

module.exports = { LoginLocators };
