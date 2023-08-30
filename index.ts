import puppeteer from 'puppeteer';

const getBooks = async () => {
  const browser = await puppeteer.launch({
    headless: 'new', // set to 'new' for hidden browser, new Headless
    defaultViewport: null,
  });

  const page = await browser.newPage();

  await page.goto('https://books.toscrape.com/', {
    waitUntil: 'domcontentloaded',
  });
};

getBooks();
