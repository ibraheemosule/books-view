import s from './search-bar.module.css';
import { close_btn } from '../../../assets/global-styles/reusables.module.css';
import { addClass } from '../../../helpers/helpers';
import search_icon from '../../../assets/images/search-icon.svg';
import back_icon from '../../../assets/images/back.svg';

const SearchBar = () => {
  return `
  <div ${addClass(s.search)}>
    <div  ${addClass('mobile', s.close_wrapper)}>
      <div  ${addClass(close_btn, 'flex-center')}>
        <button id="close-search">
          <img src="${back_icon}"  alt="Back icon" />
        </button>
      </div>
    </div>
    <div id="searchbar" ${addClass(s['searchbar'])}>
      <label for="search-input" ${addClass('invisible')}
        >Search</label
      >
      <input
        placeholder="Search books, genres, authors, etc."
        type="search"
        id="search-input"
        aria-label="Search"
      />

      <button id="search-icon"  ${addClass(s['searchbar-icon'])}>
        <img src="${search_icon}"  alt="searchbar icon" />
      </button>

      <div id="search-result" ${addClass(s.searchbar__results, 'hide')}></div>
    </div>
  </div>
        `;
};

export default SearchBar;
