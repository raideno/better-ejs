"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error = (message, position, filepath) => {
    console.log('\x1b[33m' + '[Error]:' + '\x1b[0m', message);
    console.log('         ' + '\x1b[4m' + 'Error At:' + '\x1b[0m', position);
    console.log('         ' + '\x1b[4m' + 'File:' + '\x1b[0m', filepath ? filepath : 'Unvailable');
};
exports.default = error;
