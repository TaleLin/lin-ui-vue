"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI_PACKAGE_JSON = exports.UI_TYPES_DIR = exports.ComponentDir = exports.ComponentDocsEjs = exports.ComponentExampleEjs = exports.ComponentPropsEjs = exports.ComponentIndexEjs = exports.ComponentLessEjs = exports.ComponentTemplateEjs = exports.EJS = exports.CWD = void 0;
var path_1 = require("path");
exports.CWD = process.cwd();
exports.EJS = (0, path_1.resolve)(__dirname, '../../template');
exports.ComponentTemplateEjs = (0, path_1.resolve)(exports.EJS, 'component/component.vue.ejs');
exports.ComponentLessEjs = (0, path_1.resolve)(exports.EJS, 'component/component.less.ejs');
exports.ComponentIndexEjs = (0, path_1.resolve)(exports.EJS, 'component/index.ejs');
exports.ComponentPropsEjs = (0, path_1.resolve)(exports.EJS, 'component/props.ejs');
exports.ComponentExampleEjs = (0, path_1.resolve)(exports.EJS, 'component/example/index.ejs');
exports.ComponentDocsEjs = (0, path_1.resolve)(exports.EJS, 'component/docs/README.ejs');
var ComponentDir = function (componentName) {
    return (0, path_1.resolve)(exports.CWD, "src/".concat(componentName));
};
exports.ComponentDir = ComponentDir;
exports.UI_TYPES_DIR = (0, path_1.resolve)(exports.CWD, 'types');
exports.UI_PACKAGE_JSON = (0, path_1.resolve)(exports.CWD, 'package.json');
