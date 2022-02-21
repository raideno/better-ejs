"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const error_1 = require("./error");
const readfile_1 = require("../utils/readfile");
const extractVariables_1 = require("./extractVariables");
let calls = [];
function out(...data) {
    calls.push(data.join(' ') + ' ');
}
const compile = (file, data) => {
    function include(componentRelativePath, data) {
        const componentAbsolutePath = path.join(file.path, componentRelativePath);
        const component = (0, readfile_1.default)(componentAbsolutePath);
        if (!component)
            return;
        const compiledComponent = compile({ data: component.data, path: component.path }, data);
        out(compiledComponent);
    }
    file.data = file.data.replaceAll(/\n/g, '');
    const evalvariables = (0, extractVariables_1.default)(data);
    const regex = /(?<=\{\{\s*).*?(?=\s*\}\})/gs;
    const inputs = file.data.match(regex);
    if (!inputs)
        return file.data;
    const outputs = inputs.map((result) => {
        calls = [];
        try {
            eval(evalvariables + result);
        }
        catch (err) {
            (0, error_1.default)(err.message, result, file.path);
        }
        return calls.join('');
    });
    inputs.forEach((input, index) => {
        file.data = file.data.replace(input, outputs[index]);
    });
    file.data = file.data.replaceAll('{{', '');
    file.data = file.data.replaceAll('}}', '');
    return file.data;
};
exports.default = compile;
