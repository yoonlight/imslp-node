import * as puppeteer from 'puppeteer';

class Chrome {
  browser!: puppeteer.Browser
  page!: puppeteer.Page
  constructor() { }

  async on() {
    this.browser = await puppeteer.launch({ headless: false, devtools: true })
    this.page = await this.browser.newPage()
  }

  async load(url: string) {
    const navigationPromise = this.page.waitForNavigation()
    await this.page.goto(url)
    await this.page.setViewport({ width: 1920, height: 937 })
    // await this.page.emulate(puppeteer.devices['iPhone 6']);
    await navigationPromise
  }

  async off() { await this.browser.close() }

  async act() {
    const v = '#wiki-body > div.body > div.mw-content-ltr > div.wi_body > table > tbody > tr'
    await this.page.waitForSelector('#wpscore_tabs > .jsonly > #tabScore2_tab > b > a')
    await this.page.click('#wpscore_tabs > .jsonly > #tabScore2_tab > b > a')
    const anchors = await this.page.evaluate(() => Array.from(document.querySelectorAll(v)), v);
    return anchors
  }
}

export const chrome = new Chrome()