import { recentlyAddedBooks, allBooks, featuredBooks } from './books-list';
import Flickity from 'flickity';
import s from '../components/reusables/cover-card/cover-card.module.css';
import BooksGroup from '../components/books-group/BooksGroup';

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

//Flickity Setup
export const startFlickity = () => {
  const carouselContainer = document.querySelector('.books-carousel');

  new Flickity(carouselContainer, {
    cellAlign: 'left',
    cellSelector: '.' + s['cover-card'],
    contain: true,
    adaptiveHeight: true,
    freeScroll: true,
    pageDots: true,
    percentPosition: false,
    arrowShape: 'M 49.74,100 L 47.7250,6.092 L 4.52,55.0433 L 49.74,100 Z',
  });
};

export function generateSearchList(books) {
  const searchList = books.map((book) => ({
    bookString: `${book.title} - ${concatList(book.authors)}`,
    bookDetails: book,
  }));

  return searchList;
}

export function generateBookResult(book, searchParam) {
  const paramIndex = book.toLowerCase().indexOf(searchParam.toLowerCase());
  let bookResult = '';

  // If search paramater is at the beginning of the book string
  if (paramIndex === 0) {
    bookResult += `<strong>${book.substr(
      paramIndex,
      searchParam.length
    )}</strong>`;
    bookResult += book.substr(paramIndex + searchParam.length);

    return bookResult;
  }

  // If search paramater is at the end of the book string
  if (paramIndex === book.length - searchParam.length) {
    bookResult += book.substr(0, paramIndex);
    bookResult += `<strong>${book.substr(
      paramIndex,
      searchParam.length
    )}</strong>`;

    return bookResult;
  }

  // If search parameter is within the book string
  bookResult += book.substr(0, paramIndex);
  bookResult += `<strong>${book.substr(
    paramIndex,
    searchParam.length
  )}</strong>`;
  bookResult += book.substr(paramIndex + searchParam.length);

  return bookResult;
}

export function onSearchInput() {
  // Generate initial search list
  const bookList = generateSearchList(recentlyAddedBooks);

  //Get elements for rendering list result form teh dom
  const searchField = getElement('#search-input');
  const searchResults = getElement('#search-result');
  const defaultView = getElement('.main-view');
  const filteredView = getElement('.filter-view');
  const filteredBooksList = getElement('.filtered-books ul');
  const filteredBooksHeader = getElement('.filtered-books h2');
  const clearElement = (element) => {
    element.innerHTML = '';
  };
  const removeClass = (element, className) => {
    element.classList.remove(className);
  };
  let searchResultsList;
  let value;

  //Show suggestions when a user types in the input field
  searchField.addEventListener('input', function (e) {
    value = e.target.value;

    // clear previous results
    clearElement(searchResults);

    if (!value) {
      //if search input field is empty, render all books and hide search results from view
      removeClass(searchResults, 'active');
      clearFilterView();
      return;
    }

    // Generate filtered book list that contains search parameter
    const filteredbookList = bookList.filter((book) =>
      book.bookString.toLowerCase().includes(value.toLowerCase())
    );

    searchResults.innerHTML = filteredbookList
      .map((book) => {
        const { bookString, bookDetails } = book;
        // Generate unique autocomplete option look
        const bookResult = generateBookResult(bookString, value);

        return `
          <button onclick="filterBookDetail('${bookDetails.title}', '${value}')">${bookResult}</button>
        `;
      })
      .join('');

    displayElement(searchResults);
    addClass(searchResults, 'active');

    // Set results for Filtered View
    searchResultsList = filteredbookList.map((book) => book.bookDetails);
  });

  getElement('#search-icon').addEventListener('click', function () {
    // Switch to Filtered View with results
    filterBooks(searchResultsList);
  });

  getElement('#back').addEventListener('click', function () {
    // Return to Default View and reset search
    clearFilterView();
  });

  // Close Search Results another element is clicked
  document.addEventListener('click', function () {
    hideElement(searchResults);
    removeClass(searchResults, 'active');
    clearElement(searchResults);
  });

  // Utility functions
  function clearFilterView() {
    displayElement(defaultView);
    hideElement(filteredView);
    clearElement(searchResults);
    removeClass(searchResults, 'active');
    elementText(filteredBooksHeader, '');
    clearElement(filteredBooksList);
  }

  function filterBooks(resultsList) {
    if (!value) {
      hideElement(filteredView);
      displayElement(defaultView);
      return;
    }

    const searchResult = { 'search result': resultsList };

    BooksGroup(searchResult);
    displayElement(filteredView);
    hideElement(defaultView);
    elementText(
      filteredBooksHeader,
      `${resultsList.length ? '' : 'No '}Results for "${value}"`
    );
  }
}

window.filterBookDetail = function filterBookDetail(title, searchValue) {
  const result = recentlyAddedBooks.filter((book) => book.title === title);
  const filterView = getElement('.filter-view');

  displayElement(filterView);
  filterView.innerHTML = BooksGroup({
    [`"${searchValue}" Search result`]: result,
  });
  hideElement(getElement('.main-view'));
};
