const puppeteer = require('puppeteer');
const { expect } = require('chai');
const userFactory = require('../utils/userFactory');
// const LoginPage = require('../pages/loginPage');
const ShoppingPage = require('../pages/shoppingPage');
require("dotenv").config()

describe('Shopping Test', () => {
  let browser;
  let page;
  let loginPage;
  let shoppingPage;
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

    // loginPage = new LoginPage();
    shoppingPage = new ShoppingPage();
  });

  after(async () => {
    await browser.close();
  });

  it('should perform a shopping scenario', async () => {
    const user = userFactory.createUser();
    await shoppingPage.visit(page, process.env.BASE_URL);

    await page.click('div.consentForm__acceptButtons div[data-accept-action="all"] button');
    await page.click("span.headerElement__icon.headerElement__icon--login");

    await shoppingPage.fillShoppingForm(page, user);
    await shoppingPage.submitShoppingLoginForm(page);

    await page.evaluate(() => {
      const elements = document.querySelectorAll('span');
      for (let element of elements) {
        if (element.innerText === 'Möbel') {
          element.click();
          break;
        }
      }
    });
    
    // Add necessary navigation and actions to select five items randomly
    // and add them to the wishlist
    // await shoppingPage.addToWishlist(page, 'item-selector-1');
    // await shoppingPage.addToWishlist(page, 'item-selector-2');
    // await shoppingPage.addToWishlist(page, 'item-selector-3');
    // await shoppingPage.addToWishlist(page, 'item-selector-4');
    // await shoppingPage.addToWishlist(page, 'item-selector-5');

    // // Navigate to the wishlist, add all items to the basket, and verify
    // await shoppingPage.openWishlist(page);
    // await shoppingPage.addAllToBasketFromWishlist(page);
    // await shoppingPage.openBasket(page);

    // Add any necessary assertions to verify that the basket contains all
    // items selected and the merchandise value is correct (excluding shipping)
  }).timeout(50000);
});