"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compiler_1 = require("./compiler");
const readfile_1 = require("./utils/readfile");
/*import DataInterface from './types/DataInterface';*/
exports.default = (app) => {
    app.engine('bjs', (filepath, options, callback) => {
        const file = (0, readfile_1.default)(filepath);
        if (!file)
            return;
        const compiled = (0, compiler_1.default)(file, options);
        if (!compiled)
            return callback('Something went wrong', '505 Error');
        else
            return callback(null, compiled);
    });
};
