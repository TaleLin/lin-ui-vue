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
var constant_1 = require("../constant");
// const componentVuePath = resolve(
//   __dirname,
//   '../../template/component/component.vue.ejs'
// )
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
function create(name) {
    var outputPath = (0, constant_1.ComponentDir)(name);
    if (fs_extra_1.default.pathExistsSync(outputPath)) {
        //
    }
    else {
        fs_extra_1.default.ensureDirSync(outputPath);
        generateComponentVue(name, outputPath);
        generateComponentLess(name, outputPath);
        generateComponentIndex(name, outputPath);
        generateComponentProps(name, outputPath);
        generateComponentDocs(name, outputPath);
        generateComponentExample(name, outputPath);
    }
    // const res = fs.readFileSync(ComponentTemplateEjs)
    // const content = ejs.render(res.toString(), { componentName: name })
    // const outputPath = ComponentDir(name)
    // // 组件已存在 询问是否覆盖
    // if (fs.pathExistsSync(outputPath)) {
    //   console.log('组件已存在')
    // } else {
    //   fs.ensureDirSync(outputPath)
    //   fs.writeFileSync(resolve(outputPath, `${bigCamel(name)}.vue`), content)
    // }
    // console.log(content)
    // 生成 Component.vue component.less index.ts props.ts docs example
}
exports.create = create;
