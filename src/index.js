"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var puppeteer = require("puppeteer");
var Koa = require("koa");
var app = new Koa();
app.listen(3000, function () {
    console.log("Server Listening to " + 3000);
});
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var browser, page, imslpUrl, title, navigationPromise, v, content, result, contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, puppeteer.launch({ headless: false, devtools: true })];
            case 1:
                browser = _a.sent();
                return [4 /*yield*/, browser.newPage()];
            case 2:
                page = _a.sent();
                imslpUrl = 'https://imslp.org/wiki/';
                title = 'Symphony_No.5%2C_Op.67_(Beethoven%2C_Ludwig_van)';
                navigationPromise = page.waitForNavigation();
                return [4 /*yield*/, page.goto(imslpUrl + title)];
            case 3:
                _a.sent();
                return [4 /*yield*/, page.setViewport({ width: 1920, height: 937 })
                    // await page.emulate(puppeteer.devices['iPhone 6']);
                ];
            case 4:
                _a.sent();
                // await page.emulate(puppeteer.devices['iPhone 6']);
                return [4 /*yield*/, navigationPromise];
            case 5:
                // await page.emulate(puppeteer.devices['iPhone 6']);
                _a.sent();
                return [4 /*yield*/, page.waitForSelector('#wpscore_tabs > .jsonly > #tabScore2_tab > b > a')];
            case 6:
                _a.sent();
                return [4 /*yield*/, page.click('#wpscore_tabs > .jsonly > #tabScore2_tab > b > a')];
            case 7:
                _a.sent();
                v = '#wiki-body > div.body > div.mw-content-ltr > div.wi_body > table > tbody > tr';
                return [4 /*yield*/, page.evaluate(function (v) {
                        var anchors = Array.from(document.querySelectorAll(v));
                        return anchors.map(function (anchor) {
                            var _a;
                            var th = anchor.querySelector('th').textContent.trim();
                            var td = anchor.querySelector('td');
                            return _a = {}, _a[th] = td, _a;
                        });
                    }, v)];
            case 8:
                content = _a.sent();
                result = {
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
                };
                console.log(content);
                contents = content.filter(function (x) { return result.hasOwnProperty(Object.keys(x)[0]) ? Object.keys(x)[0] : undefined; });
                contents.map(function (content) {
                    var key = Object.keys(content)[0];
                    var value = Object.values(content);
                    result[key] = value;
                });
                console.log(contents);
                // result['악장/섹션'] = result['악장/섹션'].split('\n')
                console.log(result);
                return [2 /*return*/];
        }
    });
}); })();
