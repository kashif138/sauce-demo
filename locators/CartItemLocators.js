// locators/CartItemLocators.js
// Line-item locators shared by the Cart and Checkout Overview pages (same markup).
class CartItemLocators {
  constructor(page) {
    this.cartItems = page.locator('.cart_item');
    this.itemName = this.cartItems.locator('.inventory_item_name');
    this.itemPrice = this.cartItems.locator('.inventory_item_price');
  }
}

module.exports = { CartItemLocators };
