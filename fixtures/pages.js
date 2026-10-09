// fixtures/pages.js
// Custom fixtures: tests receive ready-made page objects instead of building them.
const base = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutInformationPage } = require('../pages/CheckoutInformationPage');
const { CheckoutOverviewPage } = require('../pages/CheckoutOverviewPage');
const { CheckoutCompletePage } = require('../pages/CheckoutCompletePage');

const test = base.test.extend({
  loginPage: async ({ page }, use) => use(new LoginPage(page)),
  inventoryPage: async ({ page }, use) => use(new InventoryPage(page)),
  cartPage: async ({ page }, use) => use(new CartPage(page)),
  checkoutInformationPage: async ({ page }, use) => use(new CheckoutInformationPage(page)),
  checkoutOverviewPage: async ({ page }, use) => use(new CheckoutOverviewPage(page)),
  checkoutCompletePage: async ({ page }, use) => use(new CheckoutCompletePage(page)),
});

module.exports = { test, expect: base.expect };
