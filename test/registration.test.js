const puppeteer = require("puppeteer");
const { expect } = require("chai");
const userFactory = require("../utils/userFactory");
const RegistrationPage = require("../pages/registrationPage");
require("dotenv").config();

describe("Registration Test", () => {
  let browser;
  let page;
  let registrationPage;

  before(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();

    await page.setViewport({
      width: 1366,
      height: 768,
      deviceScaleFactor: 1,
      isLandscape: true,
    });
    registrationPage = new RegistrationPage();
  });

  after(async () => {
    await browser.close();
  });

  it("should register a new user", async () => {
    const user = userFactory.createUser();
    await registrationPage.visit(page, process.env.BASE_URL);
    await page.click('div.consentForm__acceptButtons div[data-accept-action="all"] button');
    await page.click("span.headerElement__icon.headerElement__icon--login");
    await page.waitForSelector('#registerAccount')
    await page.click('#registerAccount');
    // await page.waitForSelector('#registerAccount');
    // await page.click('#registerAccount');

    await registrationPage.fillRegistrationForm(page, user);
    
    await page.click('span.checkbox__checkbox.checkbox__checkbox--alignTop');
    await page.click('#register-submit');
    
    await registrationPage.submitRegistrationForm(page);
    // Add any necessary assertions to verify successful registration
  }).timeout(50000);
});
