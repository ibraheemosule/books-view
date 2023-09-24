// Import necessary helper functions and data from external modules
import {
  concatList,
  getElement,
  displayElement,
  elementText,
  addClass,
  hideElement,
} from './helpers';
import { recentlyAddedBooks } from './books-list';
import BooksGroup from '../components/books-group/BooksGroup';

// Maps an array of books to an array of book info objects
export const mapBooksToInfo = (books) =>
  books.map((book) => ({
    bookString: `${book.title} - ${concatList(book.authors)}`,
    bookDetails: book,
  }));

// Generates a search result string with highlighted search parameter
export const generateHighlightedSearchResult = (book, searchParam) => {
  const paramIndex = book.toLowerCase().indexOf(searchParam.toLowerCase());
  let bookResult = '';

  // Handle different search parameter positions within the book string
  if (paramIndex === 0) {
    // Search parameter at the beginning
    bookResult += `<strong>${book.substr(
      paramIndex,
      searchParam.length
    )}</strong>`;
    bookResult += book.substr(paramIndex + searchParam.length);
    return bookResult;
  } else if (paramIndex === book.length - searchParam.length) {
    // Search parameter at the end
    bookResult += book.substr(0, paramIndex);
    bookResult += `<strong>${book.substr(
      paramIndex,
      searchParam.length
    )}</strong>`;
    return bookResult;
  } else {
    // Search parameter within the book string
    bookResult += book.substr(0, paramIndex);
    bookResult += `<strong>${book.substr(
      paramIndex,
      searchParam.length
    )}</strong>`;
    bookResult += book.substr(paramIndex + searchParam.length);
    return bookResult;
  }
};

// Event handler for search input
export function onSearchInput() {
  // Generate initial search list from recently added books
  const bookList = mapBooksToInfo(recentlyAddedBooks);

  // Get DOM elements for rendering search results
  const searchField = getElement('#search-input');
  const searchResultsContainer = getElement('#search-result');
  const mainViewElement = getElement('.main-view');
  const filteredViewElement = getElement('.filter-view');
  const filteredBooksListElement = getElement('.filtered-books ul');
  const filteredBooksHeader = getElement('.filtered-books h2');

  // Utility function to clear the content of an element
  const clearElement = (element) => {
    element.innerHTML = '';
  };

  // Utility function to remove a CSS class from an element
  const removeClass = (element, className) => {
    element.classList.remove(className);
  };

  // eslint-disable-next-line no-unused-vars
  let searchResultsList;
  let value;

  // Show search suggestions as the user types in the input field
  searchField.addEventListener('input', (e) => {
    value = e.target.value.trim();

    // Clear previous search results
    clearElement(searchResultsContainer);

    if (!value) {
      // If search input field is empty, render all books and hide search results
      removeClass(searchResultsContainer, 'active');
      clearElement(filteredBooksListElement);
      clearElement(filteredBooksHeader);
      resetFilterDisplay();

      return;
    }

    // Generate a filtered book list containing the search parameter
    const filteredbookList = bookList.filter((book) =>
      book.bookString.toLowerCase().includes(value.toLowerCase())
    );

    // Render search results in the search results container
    searchResultsContainer.innerHTML = filteredbookList
      .map((book) => {
        const { bookString, bookDetails } = book;
        // Generate unique autocomplete option
        const bookResult = generateHighlightedSearchResult(bookString, value);

        return `
            <button onclick="renderFilterBook('${bookDetails.title}', '${value}')">${bookResult}</button>
          `;
      })
      .join('');

    displayElement(searchResultsContainer);
    addClass(searchResultsContainer, 'active');

    // Store results for Filtered View
    searchResultsList = filteredbookList.map((book) => book.bookDetails);
  });

  // Event listener for clicking the back button
  getElement('#back').addEventListener('click', function () {
    // Return to Default View and reset the search
    resetFilterDisplay();
  });

  // Close the search results when another element is clicked
  document.addEventListener('click', function () {
    hideElement(searchResultsContainer);
    removeClass(searchResultsContainer, 'active');
    clearElement(searchResultsContainer);
  });

  // Functions for manipulating the DOM based on search results
  function resetFilterDisplay() {
    displayElement(mainViewElement);
    hideElement(filteredViewElement);
    clearElement(searchResultsContainer);
    removeClass(searchResultsContainer, 'active');
    elementText(filteredBooksHeader, '');
    clearElement(filteredBooksListElement);
  }
}

// Function for rendering filtered books
window.renderFilterBook = function renderFilterBook(title, searchValue) {
  const result = recentlyAddedBooks.filter((book) => book.title === title);
  const filterView = getElement('.filter-view');

  displayElement(filterView);
  filterView.innerHTML = BooksGroup({
    [`"${searchValue}" Search result`]: result,
  });
  hideElement(getElement('.main-view'));
};
