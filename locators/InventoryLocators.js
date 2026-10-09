// locators/InventoryLocators.js
class InventoryLocators {
  constructor(page) {
    this.page = page;
    this.pageTitle = page.getByText('Products', { exact: true });
    this.cartLink = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  /** Product card (container) found by its exact product name. */
  productCard(productName) {
    return this.page
      .locator('.inventory_item')
      .filter({ has: this.page.getByText(productName, { exact: true }) });
  }

  productName(productName) {
    return this.productCard(productName).locator('.inventory_item_name');
  }

  productPrice(productName) {
    return this.productCard(productName).locator('.inventory_item_price');
  }

  addToCartButton(productName) {
    return this.productCard(productName).getByRole('button', { name: 'Add to cart' });
  }

  removeButton(productName) {
    return this.productCard(productName).getByRole('button', { name: 'Remove' });
  }
}

module.exports = { InventoryLocators };
