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
    browser = await puppeteer.launch({
      headless: false,
      defaultViewport: false,
      ignoreHTTPSErrors: true,
      userDataDir: "./tmp",
    });
    page = await browser.newPage();
    registrationPage = new RegistrationPage();
  });

  after(async () => {
    await browser.close();
  });

  it("should register a new user", async () => {
    const user = userFactory.createUser();
    await registrationPage.visit(page, process.env.BASE_URL);
    await registrationPage.fillRegistrationForm(page, user, registrationPage);
  }).timeout(90000);
});
