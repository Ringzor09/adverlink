const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://google.com');
  const title = await page.title();
  console.log('Title:', title);
  await browser.close();
})();
