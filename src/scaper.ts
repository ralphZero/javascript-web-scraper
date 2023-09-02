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

  // Get page data
  const books = await page.evaluate(() => {
    const bookList: NodeListOf<HTMLElement> =
      document.querySelectorAll('.product_pod');
    let result: any[] = [];
    bookList.forEach((book, index) => {
      const id = index;
      const title = (book.querySelector('h3 > a') as HTMLElement)?.title;
      const price = (book.querySelector('.product_price > p') as HTMLElement)
        ?.innerText;
      result.push({ id, title, price });
    });
    return result;
  });

  // Display the books
  console.log(books);

  // Close the browser
  await browser.close();
};

getBooks();
