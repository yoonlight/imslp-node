import * as Router from '@koa/router';
import chrome from './chrome';

const api = new Router()

api.use('/chrome', chrome.routes())

export default api