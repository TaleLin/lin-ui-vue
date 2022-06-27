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
Object.defineProperty(exports, "__esModule", { value: true });
exports.dev = void 0;
var vite_1 = require("vite");
var component_1 = require("../utils/component");
var generateAppConfig_1 = require("../generate/generateAppConfig");
var generateEntry_1 = require("../generate/generateEntry");
var vite_config_1 = require("../config/vite.config");
var server;
function startServer(cmd) {
    return __awaiter(this, void 0, void 0, function () {
        var simple, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    simple = cmd.simple;
                    _a = server;
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, server.close()];
                case 1:
                    _a = (_b.sent());
                    _b.label = 2;
                case 2:
                    _a;
                    if (!!simple) return [3 /*break*/, 5];
                    (0, component_1.ensureUIConfig)();
                    return [4 /*yield*/, (0, generateAppConfig_1.generateUIDoc)()];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, (0, generateEntry_1.generateEntry)()];
                case 4:
                    _b.sent();
                    _b.label = 5;
                case 5: return [4 /*yield*/, (0, vite_1.createServer)(vite_config_1.viteConfig)];
                case 6:
                    server = _b.sent();
                    return [4 /*yield*/, server.listen()];
                case 7:
                    _b.sent();
                    server.printUrls();
                    return [2 /*return*/];
            }
        });
    });
}
function dev(cmd) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    process.env.NODE_ENV = 'development';
                    return [4 /*yield*/, startServer(cmd)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.dev = dev;
