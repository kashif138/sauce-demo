// data/testData.js
// Central place for test data. Credentials can be overridden with environment variables.
const users = {
  standard: {
    username: process.env.SAUCE_USERNAME || 'standard_user',
    password: process.env.SAUCE_PASSWORD || 'secret_sauce',
  },
};

const customer = {
  firstName: 'John',
  lastName: 'Doe',
  postalCode: '10001',
};

// Only the product name is fixed; its price is always read from the UI.
const product = {
  name: 'Sauce Labs Backpack',
};

const confirmation = {
  heading: 'Thank you for your order!',
  message:
    'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
};

module.exports = { users, customer, product, confirmation };
