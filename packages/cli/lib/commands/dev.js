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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dev = void 0;
var vite_1 = require("vite");
var plugin_vue_1 = __importDefault(require("@vitejs/plugin-vue"));
var path_1 = __importDefault(require("path"));
var markdown_to_vue_1 = __importDefault(require("@lin-ui-vue/markdown-to-vue"));
var plugin_vue_jsx_1 = __importDefault(require("@vitejs/plugin-vue-jsx"));
var generateAppConfig_1 = require("../generate/generateAppConfig");
var generateEntry_1 = require("../generate/generateEntry");
var server;
var viteConfig = {
    root: path_1.default.resolve(__dirname, '../../../ui/site'),
    // configFile: false,
    plugins: [
        (0, plugin_vue_1.default)({
            include: [/\.vue$/, /\.md$/],
        }),
        (0, plugin_vue_jsx_1.default)(),
        (0, markdown_to_vue_1.default)(),
    ],
    server: { force: true, port: 9527 },
};
function startServer() {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = server;
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, server.close()];
                case 1:
                    _a = (_b.sent());
                    _b.label = 2;
                case 2:
                    _a;
                    return [4 /*yield*/, (0, generateAppConfig_1.generateAppConfig)()];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, (0, generateEntry_1.generateEntry)()];
                case 4:
                    _b.sent();
                    return [4 /*yield*/, (0, vite_1.createServer)(viteConfig)];
                case 5:
                    server = _b.sent();
                    return [4 /*yield*/, server.listen()];
                case 6:
                    _b.sent();
                    server.printUrls();
                    return [2 /*return*/];
            }
        });
    });
}
function dev() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    process.env.NODE_ENV = 'development';
                    return [4 /*yield*/, startServer()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.dev = dev;
