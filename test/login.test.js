const puppeteer = require("puppeteer");
const { expect } = require("chai");
const userFactory = require("../utils/userFactory");
const LoginPage = require("../pages/loginPage");
require("dotenv").config();

describe("Login Test", () => {
  let browser;
  let page;
  let loginPage;
  let pass = process.env.PASSWORD;
  let email = process.env.EMAIL;
  let invalidPasswordlog = process.env.INVPASSWORD;

  before(async () => {
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: false,
      ignoreHTTPSErrors: true,
      userDataDir: "./tmp",
    });
    page = await browser.newPage();
    loginPage = new LoginPage();
  });

  after(async () => {
    await browser.close();
  });

  it("should log in with a valid user", async () => {
    const user = userFactory.createUser();
    await loginPage.visit(page, process.env.BASE_URL);
    console.log(process.env.BASE_URL);
    await loginPage.fillLoginForm(page, user, loginPage);
  }).timeout(90000);

  it("should not log in with an invalid user", async () => {
    const user = userFactory.createUser();
    await loginPage.visit(page, process.env.BASE_URL);
    console.log(process.env.BASE_URL);
    await loginPage.fillInvLoginForm(page, user, loginPage);
  }).timeout(90000);
});
