export const getParentLiElement = (element, n) => {
  while (n > 0 && element.parentNode) {
    element = element.parentNode;
    n--;
  }
  return n === 0 ? element : null;
};

export const isAvailable = (status) => {
  if (status === 'Available') {
    return 'green';
  }
  return 'red';
};

export const concatList = (list) => {
  return list.join(', ');
};
