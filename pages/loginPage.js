const BasePage = require('./basePage');

class LoginPage extends BasePage {
  async fillLoginForm(page, userData) {
    console.log(userData)
    // Fill the login form fields
    // Replace the selectors with the actual ones from the website
    await this.type(page, '#loginEmail', userData.emaillog);
    await this.type(page, '#loginPassword', userData.passwordlog);
  }

  async submitLoginForm(page) {
    // Click the login button
    // Replace the selector with the actual one from the website
    await page.click('#login-submit');
  }

  // async fillInvalidLoginForm(page, userData) {
  //   console.log(userData)
  //   // Fill the login form fields
  //   // Replace the selectors with the actual ones from the website
  //   await this.type(page, '#loginEmail', userData.emaillog);
  //   await this.type(page, '#loginPassword', userData.invalidPasswordlog);
  // }

  // async submitInvalidLoginForm(page) {
  //   // Click the login button
  //   // Replace the selector with the actual one from the website
  //   await page.click('#login-submit');
  // }
}

module.exports = LoginPage;