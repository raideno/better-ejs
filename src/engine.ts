import compile from './compiler';
import readfile from './utils/readfile';
import DataInterface from './types/DataInterface';

export default (filepath: string, options: DataInterface, callback: any): void => {
  const file = readfile(filepath);
  if (!file) return;
  const compiled = compile(file, options);
  if (!compiled) return callback('Something went wrong', '505 Error');
  else return callback(null, compiled);
};
