export const getParentLiElement = (element, n) => {
  while (n > 0 && element.parentNode) {
    element = element.parentNode;
    n--;
  }
  return n === 0 ? element : null;
};
