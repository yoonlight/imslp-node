import * as Koa from 'koa';
import * as Router from '@koa/router';
import api from './router';

const router = new Router();
const app = new Koa();

router.use('/api', api.routes())

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.log(err);
    ctx.status = err.statusCode || err.status || 400;
    ctx.body = err.message
  }
})

app
  .use(router.routes())
  .use(router.allowedMethods());

app.use((ctx) => {

})

app.listen(3000, () => {
  console.log(`Server Listening to ${3000}`);
});
