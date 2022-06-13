"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEntry = void 0;
var fs_extra_1 = __importDefault(require("fs-extra"));
var path_1 = __importDefault(require("path"));
var index_1 = require("../utils/index");
function generateEntry() {
    var importComponents = [];
    var components = [];
    var dirs = fs_extra_1.default.readdirSync(path_1.default.resolve(process.cwd(), 'src'));
    dirs.forEach(function (dir) {
        var componentName = (0, index_1.bigCamel)(dir);
        components.push(componentName);
        importComponents.push("import ".concat(componentName, " from './src/").concat(dir, "/index'"));
    });
    var componentsArr = "\nconst components = [\n  ".concat(components.join('\n'), "\n]");
    var install = "\nfunction install(app: any) {\n  components.forEach(component => {\n    app.use(component);\n  })\n}";
    var entryContent = "".concat(importComponents.join('\n'), "\n").concat(componentsArr, "\n").concat(install, "\n\nexport default {\n  install,\n  ").concat(components.join(',\n'), "\n}");
    fs_extra_1.default.writeFileSync(path_1.default.resolve(process.cwd(), 'index.ts'), entryContent, 'utf-8');
}
exports.generateEntry = generateEntry;
