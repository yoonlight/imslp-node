import * as Router from "@koa/router";
import { service } from "../service";

const router = new Router()
const chrome = service.chrome

router.get('/', async (ctx) => {
  await chrome.on()
  const isConnected = chrome.isConnected
  ctx.body = isConnected
})

export default router