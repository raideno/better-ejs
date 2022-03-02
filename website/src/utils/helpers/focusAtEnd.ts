export default (element: HTMLElement): void => {
  const selection = window.getSelection();
  const range = document.createRange();
  selection.removeAllRanges();
  range.selectNodeContents(element);
  range.collapse(false);
  selection.addRange(range);
  element.focus();
};
