const { Frame, ElementHandle } = require("puppeteer");
const BasePage = require("./basePage");

class RegistrationPage extends BasePage {
  async fillRegistrationForm(page, userData) {
    console.log(userData);
    const loggedIn = await page.evaluate(() => {
      const usernameEl = document.querySelector(
        ".headerElement__status--login"
      );
      const loginEl = document.querySelector(".headerElement__text--hidden");
      return (usernameEl && usernameEl.innerText !== "") || !loginEl;
    });
    // Filling the Registration form fields
    if (loggedIn) {
      await page.click("span.headerElement__icon.headerElement__icon--login");
      await page.waitForSelector(".sidebarNavigation__rootChild");
      await page.click(".sidebarNavigation__rootChild");
    }
    await page.waitForSelector("#registerAccount");
    const button = await page.$("#registerAccount");
    const isDisabled = await button.evaluate((el) => el.disabled);
    if (!isDisabled) {
      await button.click();
      console.log("Button is clicked");
    } else {
      console.log("Button is disabled");
    }

    await page.waitForSelector("#salutation");
    await page.select("#salutation", "male");
    console.log(userData.select);
    await this.type(page, "#firstName", userData.firstName);
    await this.type(page, "#lastName", userData.lastName);
    await this.type(page, "#email", userData.email);
    console.log(userData.email);
    await this.type(page, "#password", userData.password);
    console.log(userData.password);
    await this.type(page, "#password2", userData.password);
    console.log(userData.password);
    await page.click(
      "div.accountNew__agbCheckbox span.checkbox__checkbox.checkbox__checkbox--alignTop"
    );
    await page.click("#register-submit");
  }
}

module.exports = RegistrationPage;
