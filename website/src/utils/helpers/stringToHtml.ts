import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

export default (data: string[]): string => {
  const result: string[] = [];
  data.forEach((line) => {
    const div = document.createElement('div');
    div.innerText = line;
    const highlighted = hljs.highlight(line, { language: 'javascript' }).value;
    div.innerHTML = highlighted;
    if (div.innerHTML) result.push(div.outerHTML);
    else result.push('<br>');
  });
  return result.join('');
};
