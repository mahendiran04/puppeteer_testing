const { Frame, ElementHandle } = require("puppeteer");
const BasePage = require("./basePage");

class ShoppingPage extends BasePage {
  async fillShoppingForm(page, userData) {
    console.log(userData);
    const loggedIn = await page.evaluate(() => {
      const usernameEl = document.querySelector(
        ".headerElement__status--login"
      );
      const loginEl = document.querySelector(".headerElement__text--hidden");
      return (usernameEl && usernameEl.innerText !== "") || !loginEl;
    });
    // Filling the shopping form fields
    // await page.click('div.consentForm__acceptButtons div[data-accept-action="all"] button');
    if (loggedIn) {
      await page.click("span.headerElement__icon.headerElement__icon--login");
      await page.waitForSelector(".sidebarNavigation__rootChild");
      await page.click(".sidebarNavigation__rootChild");
    } else {
      await page.click("span.headerElement__icon.headerElement__icon--login");
    }
    await this.type(page, "#loginEmail", userData.emaillog);
    await this.type(page, "#loginPassword", userData.passwordlog);
    await page.click("#login-submit");

    await page.waitForNavigation({ waitUntil: "networkidle0", timeout: 60000 });
    // await page.waitForSelector("")
    // await page.hover('span.menuLinkTitles.menuLinkTitles--default');
    // await page.click('span.menuLinkTitles.menuLinkTitles--default');

    // await page.type(page,'#searchFieldInputId', userData.searchSofa);
    await page.waitForSelector(".headerElement--login");

    // const frame = page.mainFrame();
    await page.goto(process.env.SHOPPING_URL);
    // console.log(process.env.SHOPPING_URL);
    await page.waitForSelector('.ccm-content-slider a[href="/sofas"]', {
      visible: true,
    });
    await page.click('.ccm-content-slider a[href="/sofas"]');
    await page.waitForSelector(".sc-105y4a6-10", { timeout: 60000 });
    const elements = await page.$$(".sc-105y4a6-10");
    console.log(elements.length);
    for (var i = 0; i < elements.length; i++) {
      if (i <= 5) {
        await elements[i].click();
      }
    }
    // await page.waitForNavigation({ waitUntil: 'networkidle0', timeout:60000 });

    // await page.waitForSelector('div.headerBrand--default .headerElement__link--wishlist');
    // const wishlistElem = await page.$$(".headerElement__link--wishlist")
    // // console.log(wishlistElem.length)
    // for(var i=0;i<wishlistElem.length;i++){
    //   if(i==0){
    //     await wishlistElem[i].click()
    //   }
    // }
    // await page.click('div.headerBrand--default .headerElement__link--wishlist');

    await page.goto(process.env.WISHLIST_PAGE);
    await page.waitForNavigation({ waitUntil: "networkidle0", timeout: 90000 });
    await page.waitForSelector("#addAddToWishlist");
    await page.click("#addAddToWishlist");

    await page.waitForSelector("button[data-testid='cartOverlayToCartButton']");
    // await page.click('button.button--addToCart');
    const continueToCardButtons = await page.$$(
      "button[data-testid='cartOverlayToCartButton']"
    );
    // for(var i=0;i<continueToCardButtons.length;i++){
    console.log("cart button length=" + continueToCardButtons.length);
    if (continueToCardButtons.length > 0) {
      await continueToCardButtons[0].click();
    }
    // }
    await page.waitForNavigation({ waitUntil: "networkidle0", timeout: 60000 });
    // await Promise.all(elements.slice(0, 5).map(e => e.click()));
  }
}

module.exports = ShoppingPage;
