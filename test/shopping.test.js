const puppeteer = require("puppeteer");
const { expect } = require("chai");
const userFactory = require("../utils/userFactory");
const ShoppingPage = require("../pages/shoppingPage");
require("dotenv").config();

describe("Shopping Test", () => {
  let browser;
  let page;
  let shoppingPage;
  let pass = process.env.PASSWORD;
  let email = process.env.EMAIL;

  before(async () => {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: false,
      ignoreHTTPSErrors: true,
      userDataDir: "./tmp",
    });
    page = await browser.newPage();
    shoppingPage = new ShoppingPage();
  });

  after(async () => {
    await browser.close();
  });

  it("should perform a shopping scenario", async () => {
    const user = userFactory.createUser();
    await shoppingPage.visit(page, process.env.BASE_URL);
    await shoppingPage.fillShoppingForm(page, user, shoppingPage);
  }).timeout(90000);
});
