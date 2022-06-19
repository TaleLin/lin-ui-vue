"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
var ejs_1 = __importDefault(require("ejs"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = require("path");
var componentVuePath = (0, path_1.resolve)(__dirname, '../../template/component/component.ejs');
function create() {
    var res = fs_extra_1.default.readFileSync(componentVuePath);
    var content = ejs_1.default.render(res.toString(), { componentName: 'menu' });
    console.log(content);
    // 生成 Component.vue component.less index.ts props.ts docs example
}
exports.create = create;
