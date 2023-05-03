const BasePage = require('./basePage');

class ShoppingPage extends BasePage {
  async fillShoppingForm(page, userData) {
    console.log(userData)
    // Fill the login form fields
    // Replace the selectors with the actual ones from the website
    await this.type(page, '#loginEmail', userData.emaillog);
    await this.type(page, '#loginPassword', userData.passwordlog);
  }

  async submitShoppingLoginForm(page) {
    // Click the login button
    // Replace the selector with the actual one from the website
    await page.click('#login-submit');
  }

  // async addToWishlist(page, itemSelector) {
  //   await this.click(page, itemSelector);
  // }

  // async openWishlist(page) {
  //   // Click on the wishlist link/button
  //   // Replace the selector with the actual one from the website
  //   await this.click(page, '#wishlistButton');
  // }

  // async addAllToBasketFromWishlist(page) {
  //   // Click on the "Add all to basket" button in the wishlist
  //   // Replace the selector with the actual one from the website
  //   await this.click(page, '#addAllToBasketButton');
  // }

  // async openBasket(page) {
  //   // Click on the basket link/button
  //   // Replace the selector with the actual one from the website
  //   await this.click(page, '#basketButton');
  // }
}

module.exports = ShoppingPage;