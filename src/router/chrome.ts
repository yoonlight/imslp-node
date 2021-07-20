import * as Router from "@koa/router";
import { service } from "../service";

const router = new Router()

router.get('/', (ctx) => {
  ctx.body = 'Chrome'
})

export default router