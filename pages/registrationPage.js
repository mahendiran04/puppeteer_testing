const BasePage = require('./basePage');

class RegistrationPage extends BasePage {
  async fillRegistrationForm(page, userData) {
    // Fill the registration form fields
    // Replace the selectors with the actual ones from the website
    
    // await page.select('#salutation', 'male');
    // console.log(userData.select);
    await this.type(page, '#firstName', userData.firstName);
    await this.type(page, '#lastName', userData.lastName);
    await this.type(page, '#email', userData.email);
    console.log(userData.email);
    await this.type(page, '#password', userData.password);
    console.log(userData.password);
    await this.type(page, '#password2', userData.password);
 
  }

  async submitRegistrationForm(page) {
    // Click the submit button
    // Replace the selector with the actual one from the website
    // await this.click(page, '#registerButton');
    await page.click('span.checkbox__checkbox.checkbox__checkbox--alignTop');
    await page.click('#register-submit');
  }
}

module.exports = RegistrationPage;