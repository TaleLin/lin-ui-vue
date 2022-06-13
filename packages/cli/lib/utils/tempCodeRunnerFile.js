"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bigSmallCamel = exports.smallCamel = void 0;
function smallCamel(str, separator) {
    if (separator === void 0) { separator = '-'; }
    var reg = new RegExp("".concat(separator, "([a-z])"), 'g');
    return str.replace(reg, function (p, m) { return m.toUpperCase(); });
}
exports.smallCamel = smallCamel;
function bigSmallCamel(str, separator) {
    if (separator === void 0) { separator = '-'; }
    var s = smallCamel(str, separator);
    return s.replace(s.charAt(0), s.charAt(0).toUpperCase());
}
exports.bigSmallCamel = bigSmallCamel;
console.log(bigSmallCamel('form-list-app'));
