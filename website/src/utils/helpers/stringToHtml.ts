export default (data: string[]): string => {
  const result: string[] = [];
  data.forEach((line) => {
    const div = document.createElement('div');
    div.innerText = line;
    result.push(div.outerHTML);
  });
  return result.join('');
};
