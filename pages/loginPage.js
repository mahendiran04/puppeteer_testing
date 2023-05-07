const BasePage = require("./basePage");

class LoginPage extends BasePage {
  async fillLoginForm(page, userData) {
    console.log(userData);
    await page.click("span.headerElement__icon.headerElement__icon--login");
    await this.type(page, "#loginEmail", userData.emaillog);
    await this.type(page, "#loginPassword", userData.passwordlog);
    await page.click("#login-submit");
  }

  async fillInvLoginForm(page, userData) {
    console.log(userData);
    const loggedIn = await page.evaluate(() => {
      const usernameEl = document.querySelector(
        ".headerElement__status--login"
      );
      const loginEl = document.querySelector(".headerElement__text--hidden");
      return (usernameEl && usernameEl.innerText !== "") || !loginEl;
    });
    // Filling the Login form fields
    if (loggedIn) {
      await page.click("span.headerElement__icon.headerElement__icon--login");
      await page.waitForSelector(".sidebarNavigation__rootChild");
      await page.click(".sidebarNavigation__rootChild");
    } else {
      await page.click("span.headerElement__icon.headerElement__icon--login");
    }
    await this.type(page, "#loginEmail", userData.emaillog);
    await this.type(page, "#loginPassword", userData.invalidPasswordlog);
    await page.click("#login-submit");
  }
}

module.exports = LoginPage;
