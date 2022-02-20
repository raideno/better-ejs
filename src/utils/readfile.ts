import { readFileSync } from 'fs';

export default (absoluteFilePath: string): { data: string; name: string; path: string } | null => {
  const file = readFileSync(absoluteFilePath);
  if (!file) return null;
  const data = file.toString();
  const name = absoluteFilePath.slice(-1)[0];
  return {
    data,
    name,
    path: absoluteFilePath,
  };
};
