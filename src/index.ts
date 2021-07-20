import * as puppeteer from 'puppeteer';
import * as Koa from 'koa';
import * as Router from '@koa/router';

const router = new Router();
const app = new Koa();

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log(`Server Listening to ${3000}`);
});
(async () => {
  const browser = await puppeteer.launch({ headless: false, devtools: true })
  const page = await browser.newPage()
  const imslpUrl = 'https://imslp.org/wiki/'
  const title = 'Symphony_No.5%2C_Op.67_(Beethoven%2C_Ludwig_van)'
  const navigationPromise = page.waitForNavigation()

  await page.goto(imslpUrl + title)

  await page.setViewport({ width: 1920, height: 937 })
  // await page.emulate(puppeteer.devices['iPhone 6']);
  await navigationPromise
  await page.waitForSelector('#wpscore_tabs > .jsonly > #tabScore2_tab > b > a')
  await page.click('#wpscore_tabs > .jsonly > #tabScore2_tab > b > a')
  const v = '#wiki-body > div.body > div.mw-content-ltr > div.wi_body > table > tbody > tr'
  const content = await page.evaluate((v) => {
    const anchors = Array.from(document.querySelectorAll(v));
    return anchors.map((anchor) => {
      const th: string = anchor.querySelector('th').textContent.trim();
      const td: string = anchor.querySelector('td');
      return { [th]: td };
    });
  }, v);

  const result = {
    '곡 제목': '',
    '작곡가': '',
    'Opus/Catalogue 번호': '',
    '조': '',
    '악장/섹션': [],
    '작곡년월': '',
    '평균 길이': '',
    '작곡시기': '',
    '곡 스타일': '',
    '악기별': ''
  }
  console.log(content);
  const contents = content.filter(x => result.hasOwnProperty(Object.keys(x)[0]) ? Object.keys(x)[0] : undefined)
  contents.map((content) => {
    const key = Object.keys(content)[0]
    const value = Object.values(content)
    result[key] = value
  })
  console.log(contents);
  // result['악장/섹션'] = result['악장/섹션'].split('\n')
  console.log(result);
  // const content = await page.content()

  // await browser.close()
})()