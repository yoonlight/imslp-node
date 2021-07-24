import * as Router from "@koa/router"
import { service } from "../service"

const chrome = service.chrome
const imslpUrl = 'https://imslp.org/wiki/'
const title = 'Symphony_No.5%2C_Op.67_(Beethoven%2C_Ludwig_van)'
const api = new Router()

api.get('/', async (ctx) => {
  if (!chrome.isConnected) throw Error('Please Turn on Chrome')
  await chrome.load(imslpUrl + title)
})

export default api