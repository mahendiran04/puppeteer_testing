const puppeteer = require('puppeteer');

async function clearCookies() {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  
  await page.goto('https://www.example.com/');
  
  // Wait for the element that triggers cookie acceptance
  await page.waitForSelector('.cookie-accept-button');
  
  // Click on the cookie acceptance button
  await page.click('.cookie-accept-button');
  
  // Clear the cookies
  const cookies = await page.cookies();
  for (const cookie of cookies) {
    await page.deleteCookie(cookie);
  }
  
  await browser.close();
}