// Import necessary helper functions and data from external modules
import {
  concatList,
  getElement,
  displayElement,
  elementText,
  addClass,
  getAllElement,
  hideElement,
} from './helpers';
import { recentlyAddedBooks } from './books-list';
import BooksGroup from '../components/books-group/BooksGroup';
import mobileToggles from './mobile-toggles';

// Maps an array of books to an array of book info objects
export const mapBooksToInfo = (books) =>
  books.map((book) => ({
    bookString: `${book.title} - ${concatList(book.authors)}`,
    bookDetails: book,
  }));

// Generates a search result string with highlighted search parameter
export const generateHighlightedSearchResult = (book, searchParam) => {
  const lowerCaseBook = book.toLowerCase();
  const lowerCaseSearchParam = searchParam.toLowerCase();

  const paramIndex = lowerCaseBook.indexOf(lowerCaseSearchParam);

  if (paramIndex === -1) {
    // If the searchParam is not found in the book, return the original book
    return book;
  }

  const beforeParam = book.slice(0, paramIndex);
  const matchedParam = book.slice(paramIndex, paramIndex + searchParam.length);
  const afterParam = book.slice(paramIndex + searchParam.length);

  const highlightedResult = `${beforeParam}<strong>${matchedParam}</strong>${afterParam}`;

  return highlightedResult;
};

// Event handler for search input
export const onSearchInput = () => {
  // Generate the initial search list from recently added books
  const bookList = mapBooksToInfo(recentlyAddedBooks);

  // Get DOM elements for rendering search results and views
  const searchField = getElement('#search-input');
  const searchResultsContainer = getElement('#search-result');
  const mainViewElement = getElement('.main-view');
  const filteredViewElement = getElement('.filter-view');
  const filteredBooksListElement = getElement('.filtered-books ul');
  const filteredBooksHeader = getElement('.filtered-books h2');

  //function to clear the content of an element
  const clearElement = (element) => {
    element.innerHTML = '';
  };

  //function to remove a CSS class from an element
  const removeClass = (element, className) => {
    element.classList.remove(className);
  };

  // Function to reset the filter display to the default view
  const resetFilterDisplay = () => {
    displayElement(mainViewElement);
    hideElement(filteredViewElement);
    clearElement(searchResultsContainer);
    removeClass(searchResultsContainer, 'active');
    elementText(filteredBooksHeader, '');
    clearElement(filteredBooksListElement);
  };

  const hideBackBtnOnMobile = (value) => {
    const backBtn = getElement('#close-search');
    if (!value) displayElement(backBtn);
    else hideElement(backBtn);
  };

  // Function to show search results based on the user's input
  const showSearchResults = (filteredbookList, value) => {
    clearElement(searchResultsContainer);

    //hide and show back button on mobile
    hideBackBtnOnMobile(value);

    if (!value) {
      resetFilterDisplay();
      return;
    }

    for (const { bookString } of filteredbookList) {
      const bookResult = generateHighlightedSearchResult(bookString, value);
      searchResultsContainer.innerHTML += `<button class="search-options">${bookResult}</button>`;
    }

    displayElement(searchResultsContainer);
    addClass(searchResultsContainer, 'active');

    const searchOptionButtons = getAllElement('.search-options');

    searchOptionButtons.forEach((btn, i) => {
      const { bookDetails } = filteredbookList[i];

      btn.addEventListener('click', () => {
        const result = recentlyAddedBooks.filter(
          (book) => book.title === bookDetails.title
        );

        const filterView = getElement('.filter-view');
        displayElement(filterView);
        filterView.innerHTML = BooksGroup({
          [`"${value}" Search result`]: result,
        });
        hideElement(mainViewElement);
   
      });
    });
    mobileToggles()
  };

  // Event listener for input changes in the search field
  searchField.addEventListener('input', (e) => {
    const value = e.target.value.trim();
    showSearchResults(
      bookList.filter((book) =>
        book.bookString.toLowerCase().includes(value.toLowerCase())
      ),
      value
    );
  });

  // Event listener for clicking the back button
  getElement('#back').addEventListener('click', () => {
    resetFilterDisplay();
  });

  // Close the search results when another element is clicked
  document.addEventListener('click', () => {
    hideElement(searchResultsContainer);
    removeClass(searchResultsContainer, 'active');
    clearElement(searchResultsContainer);
  });
};
