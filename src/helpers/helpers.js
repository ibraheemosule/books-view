import { recentlyAddedBooks, allBooks, featuredBooks } from './books-list';
import Glider from 'glider-js';

// Helper functions for Dom manipulation
export const addClass = (...args) => `class="${args.join(' ')}"`;
export const displayElement = (el) => el.classList.remove('hide');
export const hideElement = (el) => el.classList.add('hide');
export const getElement = (attr) => document.querySelector(attr);
export const getAllElement = (attr) => document.querySelectorAll(attr);

export const imgFilePath = (img) =>
  new URL(`../assets/images/${img}.png`, import.meta.url).href;

export const elementText = (element, text) => {
  element.textContent = text;
};

export const concatList = (list) => {
  return list.join(', ');
};

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

export const booksFeatured = { 'featured books': featuredBooks };

//Glider Setup
export const startGlider = () => {
  new Glider(document.querySelector('.books-carousel'), {
    slidesToShow: 5,
    slidesToScroll: 5,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next',
    },
  });
};
