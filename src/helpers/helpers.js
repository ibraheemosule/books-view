import recentlyAddedBooks from './recently-added-books';
import allBooks from './all-books';
// Helper functions for Dom manipulation
export const addClass = (...args) => `class="${args.join(' ')}"`;
export const displayElement = (el) => el.classList.remove('hide');
export const hideElement = (el) => el.classList.add('hide');
export const getElement = (attr) => document.querySelector(attr);
export const getAllElement = (attr) => document.querySelectorAll(attr);

export const isAvailable = (status) => {
  if (status === 'Available') {
    return 'green';
  }
  return 'red';
};

export const booksGroupList = [
  { 'recently added': recentlyAddedBooks },
  { 'all books': allBooks },
];
