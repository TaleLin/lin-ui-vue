"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var glob_1 = __importDefault(require("glob"));
function default_1(pattern) {
    return new Promise(function (resolve, reject) {
        (0, glob_1.default)(pattern, function (error, files) {
            if (error) {
                reject(error);
            }
            else {
                resolve(files);
            }
        });
    });
}
exports.default = default_1;
