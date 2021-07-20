"use strict";
exports.__esModule = true;
var Router = require("@koa/router");
var router = new Router();
router.get('/', function (ctx) {
    ctx.body = 'Chrome';
});
exports["default"] = router;
