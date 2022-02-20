/* tslint:disable */

import * as path from 'path';
import error from './error';
import readfile from '../utils/readfile';
import FileInterface from '../types/FileInterface';
import DataInterface from '../types/DataInterface';
import extractVariables from './extractVariables';

let calls: string[] = [];
function out(...data: string[] | number[]): void {
  calls.push(data.join(' ') + ' ');
}

const compile = (file: FileInterface, data: DataInterface): string => {
  function include(componentRelativePath: string, data: DataInterface) {
    const componentAbsolutePath = path.join(file.path, componentRelativePath);
    const component = readfile(componentAbsolutePath);
    if (!component) return;
    const compiledComponent = compile({ data: component.data, path: component.path }, data);
    out(compiledComponent);
  }

  file.data = file.data.replaceAll(/\n/g, '');

  const evalvariables = extractVariables(data);

  const regex = /(?<=\{\{\s*).*?(?=\s*\}\})/gs;

  const inputs = file.data.match(regex);
  if (!inputs) return file.data;

  const outputs = inputs.map((result) => {
    calls = [];
    try {
      eval(evalvariables + result);
    } catch (err: any) {
      error(err.message, result, file.path);
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

export default compile;
