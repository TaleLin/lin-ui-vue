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
exports.create = void 0;
var ejs_1 = __importDefault(require("ejs"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = require("path");
var inquirer_1 = __importDefault(require("inquirer"));
var component_1 = require("../utils/component");
var utils_1 = require("../utils");
var constant_1 = require("../constant");
function generateComponentVue(name, outputPath) {
    var res = fs_extra_1.default.readFileSync(constant_1.ComponentTemplateEjs);
    var content = ejs_1.default.render(res.toString(), {
        name: name,
        bigCamelName: (0, utils_1.bigCamel)(name),
    });
    fs_extra_1.default.writeFileSync((0, path_1.resolve)(outputPath, "".concat((0, utils_1.bigCamel)(name), ".vue")), content);
}
function generateComponentLess(name, outputPath) {
    var res = fs_extra_1.default.readFileSync(constant_1.ComponentLessEjs);
    var content = ejs_1.default.render(res.toString(), { name: name });
    fs_extra_1.default.writeFileSync((0, path_1.resolve)(outputPath, "".concat(name, ".less")), content);
}
function generateComponentIndex(name, outputPath) {
    var res = fs_extra_1.default.readFileSync(constant_1.ComponentIndexEjs);
    var content = ejs_1.default.render(res.toString(), {
        name: name,
        bigCamelName: (0, utils_1.bigCamel)(name),
    });
    fs_extra_1.default.writeFileSync((0, path_1.resolve)(outputPath, "index.ts"), content);
}
function generateComponentProps(name, outputPath) {
    var res = fs_extra_1.default.readFileSync(constant_1.ComponentPropsEjs);
    var content = ejs_1.default.render(res.toString());
    fs_extra_1.default.writeFileSync((0, path_1.resolve)(outputPath, "props.ts"), content);
}
function generateComponentDocs(name, outputPath) {
    var res = fs_extra_1.default.readFileSync(constant_1.ComponentDocsEjs);
    var content = ejs_1.default.render(res.toString(), { name: name });
    fs_extra_1.default.ensureDirSync((0, path_1.resolve)(outputPath, 'docs'));
    fs_extra_1.default.writeFileSync((0, path_1.resolve)(outputPath, "docs/README.md"), content);
}
function generateComponentExample(name, outputPath) {
    var res = fs_extra_1.default.readFileSync(constant_1.ComponentExampleEjs);
    var content = ejs_1.default.render(res.toString(), { name: name });
    fs_extra_1.default.ensureDirSync((0, path_1.resolve)(outputPath, 'example'));
    fs_extra_1.default.writeFileSync((0, path_1.resolve)(outputPath, "example/index.vue"), content);
}
function appendComponentList(name) {
    (0, component_1.addComponent)(name);
}
function create(name) {
    return __awaiter(this, void 0, void 0, function () {
        var outputPath, cover;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    outputPath = (0, constant_1.ComponentDir)(name);
                    if (!fs_extra_1.default.pathExistsSync(outputPath)) return [3 /*break*/, 2];
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                type: 'confirm',
                                name: 'cover',
                                message: '该组件文件夹已存在，是否要覆盖？',
                                default: false,
                            },
                        ])];
                case 1:
                    cover = (_a.sent()).cover;
                    if (!cover) {
                        process.exit(1);
                    }
                    fs_extra_1.default.emptyDirSync(outputPath);
                    _a.label = 2;
                case 2:
                    fs_extra_1.default.ensureDirSync(outputPath);
                    generateComponentVue(name, outputPath);
                    generateComponentLess(name, outputPath);
                    generateComponentIndex(name, outputPath);
                    generateComponentProps(name, outputPath);
                    generateComponentDocs(name, outputPath);
                    generateComponentExample(name, outputPath);
                    appendComponentList(name);
                    return [2 /*return*/];
            }
        });
    });
}
exports.create = create;
