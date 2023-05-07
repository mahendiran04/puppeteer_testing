class BasePage {
  async visit(page, url) {
    console.log(url);
    await page.goto(url, { waitUntil: "networkidle0" });
  }

  async click(page, selector) {
    await page.waitForSelector(selector);
    // console.log("selector found");
    await page.click(selector);
  }

  async type(page, selector, text) {
    await page.waitForSelector(selector);
    await page.type(selector, text);
  }

  async locatorClick(page, selector) {
    await page.waitForSelector(selector);
    await page.click(selector);
  }

  async salutationSelectBox(page, selector, text) {
    await page.waitForSelector(selector);
    await page.select(selector);
  }
}

module.exports = BasePage;
