const puppeteer = require('puppeteer');
const { expect } = require('chai');
const userFactory = require('../utils/userFactory');
const LoginPage = require('../pages/loginPage');
require("dotenv").config()

describe('Login Test', () => {
  let browser;
  let page;
  let loginPage;
  let pass=process.env.PASSWORD;
  let email=process.env.EMAIL;

  before(async () => {
    browser = await puppeteer.launch({headless:false});
    page = await browser.newPage();
    await page.setViewport({
      width: 1366,
      height: 768,
      deviceScaleFactor: 1,
      isLandscape: true,
    });

    loginPage = new LoginPage();
  });

  after(async () => {
    await browser.close();
  });

  it('should log in with a valid user', async () => {
    const user = userFactory.createUser();
    await loginPage.visit(page, process.env.BASE_URL);

    await page.click('div.consentForm__acceptButtons div[data-accept-action="all"] button');
    await page.click("span.headerElement__icon.headerElement__icon--login");

    await loginPage.fillLoginForm(page, user);
    await loginPage.submitLoginForm(page);

    await page.waitForSelector('.headerElement__icon.headerElement__icon--login');
    // await page.waitForNavigation('.headerElement__icon.headerElement__icon--login');
    await page.click('.headerElement__icon.headerElement__icon--login');
    // await page.click('a[href="/bestellung/logout"]');
    

    // Add any necessary assertions to verify successful login
  }).timeout(50000);

  // it('should not log in with an invalid user', async () => {
  //   const user = userFactory.createUser();
  //   // user.invalidPasswordlog = 'wrongpassword';
  //   await loginPage.visit(page, process.env.BASE_URL);

  //   await page.click('div.consentForm__acceptButtons div[data-accept-action="all"] button');
  //   await page.click("span.headerElement__icon.headerElement__icon--login");
    
  //   await loginPage.fillInvalidLoginForm(page, user);
  //   await loginPage.submitInvalidLoginForm(page);

  //   // Add any necessary assertions to verify unsuccessful login

  // }).timeout(50000);
});