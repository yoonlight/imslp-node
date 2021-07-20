"use strict";
exports.__esModule = true;
var Router = require("@koa/router");
var chrome_1 = require("./chrome");
var api = new Router();
api.use('/chrome', chrome_1["default"].routes());
exports["default"] = api;
