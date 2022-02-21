"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.default = (absoluteFilePath) => {
    const file = (0, fs_1.readFileSync)(absoluteFilePath);
    if (!file)
        return null;
    const data = file.toString();
    const name = absoluteFilePath.slice(-1)[0];
    return {
        data,
        name,
        path: absoluteFilePath,
    };
};
