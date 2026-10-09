// tests/saucedemo-checkout.spec.js
const { test } = require('../fixtures/pages');
const { users, customer, product, confirmation } = require('../data/testData');

test('standard_user can purchase a product end-to-end', async ({
  loginPage,
  inventoryPage,
  cartPage,
  checkoutInformationPage,
  checkoutOverviewPage,
  checkoutCompletePage,
}) => {
  let selectedProduct;

  await test.step('Login', async () => {
    await loginPage.open();
    await loginPage.login(users.standard);
    await inventoryPage.expectLoaded();
    await inventoryPage.pause();
  });

  await test.step('Add product to cart', async () => {
    selectedProduct = await inventoryPage.getProductDetails(product.name);
    await inventoryPage.addToCart(product.name);
    await inventoryPage.expectCartBadgeCount(1);
    await inventoryPage.pause();
  });

  await test.step('Verify cart', async () => {
    await inventoryPage.openCart();
    await cartPage.expectLoaded();
    await cartPage.expectSingleProduct(selectedProduct);
    await cartPage.proceedToCheckout();
    await cartPage.pause();
  });

  await test.step('Enter checkout information', async () => {
    await checkoutInformationPage.expectLoaded();
    await checkoutInformationPage.submitCustomerInformation(customer);
    await checkoutCompletePage.pause();
  });

  await test.step('Verify order overview', async () => {
    await checkoutOverviewPage.expectLoaded();
    await checkoutOverviewPage.expectSingleProduct(selectedProduct);
    await checkoutOverviewPage.expectOrderTotals(selectedProduct.priceCents);
    await checkoutOverviewPage.finishOrder();
    await checkoutCompletePage.pause();
  });

  await test.step('Verify order confirmation', async () => {
    await checkoutCompletePage.expectOrderConfirmed(confirmation);
  });
});
