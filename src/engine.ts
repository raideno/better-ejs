import compile from './compiler';
import { Application } from 'express';
import readfile from './utils/readfile';
/*import DataInterface from './types/DataInterface';*/

export default (app: Application) => {
  app.engine('bjs', (filepath: string, options: any, callback: any): void => {
    const file = readfile(filepath);
    if (!file) return;
    const compiled = compile(file, options);
    if (!compiled) return callback('Something went wrong', '505 Error');
    else return callback(null, compiled);
  });
};
