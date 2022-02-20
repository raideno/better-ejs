import DataInterface from '../types/DataInterface';

export default (data: DataInterface) => {
  let result: string = ``;
  for (const key in data) result += `let ${key} = ${JSON.stringify(data[key])};`;
  return result;
};
