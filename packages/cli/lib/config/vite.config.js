"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.viteConfig = void 0;
var plugin_vue_1 = __importDefault(require("@vitejs/plugin-vue"));
var path_1 = __importDefault(require("path"));
var markdown_to_vue_1 = __importDefault(require("@lin-ui-vue/markdown-to-vue"));
var plugin_vue_jsx_1 = __importDefault(require("@vitejs/plugin-vue-jsx"));
exports.viteConfig = {
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
