"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI_COMPONENT_DOC_DIR = exports.UI_BASE_DOC_DIR = exports.UI_DOCS_DIR = exports.UI_EXAMPLE_DIR = exports.UI_ES_DIR = exports.UI_LIB_DIR = exports.UI_SRC_DIR = exports.UI_PACKAGE_JSON = exports.UI_TYPES_DIR = exports.ComponentDir = exports.ComponentDocsEjs = exports.ComponentExampleEjs = exports.ComponentPropsEjs = exports.ComponentIndexEjs = exports.ComponentLessEjs = exports.ComponentTemplateEjs = exports.EJS = exports.UI_CONFIG_DIR = exports.CWD = exports.UI_NAME = void 0;
var path_1 = require("path");
exports.UI_NAME = 'lin-ui-vue';
exports.CWD = process.cwd();
exports.UI_CONFIG_DIR = (0, path_1.resolve)(exports.CWD, ".".concat(exports.UI_NAME));
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
exports.UI_SRC_DIR = (0, path_1.resolve)(exports.CWD, 'src');
exports.UI_LIB_DIR = (0, path_1.resolve)(exports.CWD, 'lib');
exports.UI_ES_DIR = (0, path_1.resolve)(exports.CWD, 'es');
exports.UI_EXAMPLE_DIR = 'example';
exports.UI_DOCS_DIR = 'docs';
exports.UI_BASE_DOC_DIR = (0, path_1.resolve)(exports.CWD, 'site/docs');
exports.UI_COMPONENT_DOC_DIR = (0, path_1.resolve)(exports.CWD, 'src');
