"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
var ejs_1 = __importDefault(require("ejs"));
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = require("path");
var utils_1 = require("../utils");
var componentVuePath = (0, path_1.resolve)(__dirname, '../../template/component/component.ejs');
function create(name) {
    console.log(name);
    var res = fs_extra_1.default.readFileSync(componentVuePath);
    var content = ejs_1.default.render(res.toString(), { componentName: name });
    var outputPath = (0, path_1.resolve)(process.cwd(), 'src', name);
    // 组件已存在 询问是否覆盖
    if (fs_extra_1.default.pathExistsSync(outputPath)) {
        console.log('组件已存在');
    }
    else {
        fs_extra_1.default.ensureDirSync(outputPath);
        fs_extra_1.default.writeFileSync((0, path_1.resolve)(outputPath, "".concat((0, utils_1.bigCamel)(name), ".vue")), content);
    }
    // console.log(content)
    // 生成 Component.vue component.less index.ts props.ts docs example
}
exports.create = create;
