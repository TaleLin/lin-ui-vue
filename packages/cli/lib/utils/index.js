"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.smartAppendFileSync = exports.isLess = exports.isTS = exports.isSFC = exports.isFileType = exports.isDir = exports.bigCamel = exports.smallCamel = exports.replaceExt = void 0;
var fs_extra_1 = require("fs-extra");
var path_1 = require("path");
var replaceExt = function (file, ext) {
    return file.replace((0, path_1.extname)(file), ext);
};
exports.replaceExt = replaceExt;
function smallCamel(str, separator) {
    if (separator === void 0) { separator = '-'; }
    var reg = new RegExp("".concat(separator, "([a-z])"), 'g');
    return str.replace(reg, function (p, m) { return m.toUpperCase(); });
}
exports.smallCamel = smallCamel;
function bigCamel(str, separator) {
    if (separator === void 0) { separator = '-'; }
    var s = smallCamel(str, separator);
    return s.replace(s.charAt(0), s.charAt(0).toUpperCase());
}
exports.bigCamel = bigCamel;
var isDir = function (file) {
    return (0, fs_extra_1.pathExistsSync)(file) && (0, fs_extra_1.lstatSync)(file).isDirectory();
};
exports.isDir = isDir;
var isFileType = function (file, ext) {
    return (0, fs_extra_1.pathExistsSync)(file) && (0, path_1.extname)(file) === ".".concat(ext);
};
exports.isFileType = isFileType;
var isSFC = function (file) { return (0, exports.isFileType)(file, 'vue'); };
exports.isSFC = isSFC;
var isTS = function (file) { return (0, exports.isFileType)(file, 'ts'); };
exports.isTS = isTS;
var isLess = function (file) { return (0, exports.isFileType)(file, 'less'); };
exports.isLess = isLess;
function smartAppendFileSync(file, code) {
    if ((0, fs_extra_1.pathExistsSync)(file)) {
        var content = (0, fs_extra_1.readFileSync)(file, 'utf-8');
        if (!content.includes(code)) {
            (0, fs_extra_1.appendFileSync)(file, code);
        }
    }
}
exports.smartAppendFileSync = smartAppendFileSync;
