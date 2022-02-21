"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (data) => {
    let result = ``;
    for (const key in data)
        result += `let ${key} = ${JSON.stringify(data[key])};`;
    return result;
};
