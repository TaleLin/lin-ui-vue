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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAppConfig = exports.getComponentsDoc = exports.getBaseDoc = void 0;
var path_1 = require("path");
var gray_matter_1 = __importDefault(require("gray-matter"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var glob_1 = __importDefault(require("../utils/glob"));
var baseDoc = (0, path_1.resolve)(process.cwd(), 'site/docs');
var componentsDoc = (0, path_1.resolve)(process.cwd(), 'src');
function getBaseDoc() {
    return __awaiter(this, void 0, void 0, function () {
        var files;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, glob_1.default)("".concat(baseDoc, "/*.md"))];
                case 1:
                    files = _a.sent();
                    return [2 /*return*/, files];
            }
        });
    });
}
exports.getBaseDoc = getBaseDoc;
function getComponentsDoc() {
    return __awaiter(this, void 0, void 0, function () {
        var files;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, glob_1.default)("".concat(componentsDoc, "/**/*.md"))];
                case 1:
                    files = _a.sent();
                    return [2 /*return*/, files];
            }
        });
    });
}
exports.getComponentsDoc = getComponentsDoc;
function getRouteConfig(docPath) {
    var docContent = fs_extra_1.default.readFileSync(docPath).toString();
    var data = (0, gray_matter_1.default)(docContent).data;
    var routePath = data.routePath;
    if (!routePath) {
        var _a = __read(docPath.match(/\/docs\/([-\w]+)\.md/) || [], 2), _ = _a[1];
        routePath = "/".concat(_);
    }
    return {
        path: "".concat(routePath.toLowerCase()),
        meta: {
            parent: data.parent,
        },
    };
}
function getMenuConfig(docPath) {
    var docContent = fs_extra_1.default.readFileSync(docPath).toString();
    var data = (0, gray_matter_1.default)(docContent).data;
    return data;
}
function generateAppRoutes(base, components) {
    var baseDocsRoutes = base.map(function (docPath) {
        var _a = getRouteConfig(docPath), path = _a.path, meta = _a.meta;
        return "\n  {\n    path: '".concat(path, "',\n    component: () => import('").concat(docPath, "'),\n    meta: {\n      parent: '").concat(meta.parent, "'\n    }\n  }");
    });
    var componentDocsRoutes = components.map(function (docPath) {
        var _a = getRouteConfig(docPath), path = _a.path, meta = _a.meta;
        return "\n  {\n    path: '".concat(path, "',\n    component: () => import('").concat(docPath, "'),\n    meta: {\n      parent: '").concat(meta.parent, "'\n    }\n  }");
    });
    var source = "export default [    ".concat(baseDocsRoutes, ",\n    ").concat(componentDocsRoutes, "\n]");
    var configPath = (0, path_1.resolve)(process.cwd(), 'site/pc/route.ts');
    fs_extra_1.default.outputFileSync(configPath, source);
}
function generateMobileRoutes() {
    var dirs = fs_extra_1.default.readdirSync((0, path_1.resolve)(process.cwd(), 'src'));
    var componentDocsRoutes = dirs.map(function (dir) {
        var path = (0, path_1.resolve)(process.cwd(), "src/".concat(dir, "/example/index.vue"));
        return "\n  {\n    path: '/".concat(dir, "',\n    component: () => import('").concat(path, "')\n  }");
    });
    var source = "export default [    ".concat(componentDocsRoutes, "\n]");
    var configPath = (0, path_1.resolve)(process.cwd(), 'site/mobile/route.ts');
    fs_extra_1.default.outputFileSync(configPath, source);
}
function formatMenuGroup(list) {
    var menuGroup = {};
    for (var i = 0; i < list.length; i++) {
        var parent_1 = list[i].parent;
        var order = list[i].order;
        if (!parent_1) {
            continue;
        }
        if (!menuGroup[parent_1]) {
            menuGroup[parent_1] = [];
        }
        menuGroup[parent_1].push(list[i]);
    }
    for (var key in menuGroup) {
        menuGroup[key] = menuGroup[key].sort(function (a, b) { return a.order - b.order; });
    }
    return menuGroup;
}
function generateAppMenu(docs) {
    var menuList = docs.map(function (item) {
        var _a = getMenuConfig(item), title = _a.title, order = _a.order, routePath = _a.routePath, parent = _a.parent;
        return {
            title: title,
            order: order,
            routePath: routePath,
            parent: parent,
        };
    });
    var configPath = (0, path_1.resolve)(process.cwd(), 'site/pc/menu.json');
    fs_extra_1.default.writeJSONSync(configPath, formatMenuGroup(menuList), { spaces: 2 });
}
function generateAppConfig() {
    return __awaiter(this, void 0, void 0, function () {
        var baseDoc, componentsDoc;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getBaseDoc()];
                case 1:
                    baseDoc = _a.sent();
                    return [4 /*yield*/, getComponentsDoc()];
                case 2:
                    componentsDoc = _a.sent();
                    generateAppRoutes(baseDoc, componentsDoc);
                    generateAppMenu(__spreadArray(__spreadArray([], __read(baseDoc), false), __read(componentsDoc), false));
                    generateMobileRoutes();
                    return [2 /*return*/];
            }
        });
    });
}
exports.generateAppConfig = generateAppConfig;
