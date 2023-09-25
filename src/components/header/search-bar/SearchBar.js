import s from './search-bar.module.css';
import { addClass } from '../../../helpers/helpers';
import search_icon from '../../../assets/images/search-icon.svg';

const SearchBar = () => {
  return `
  <div ${addClass(s.search)}>
    <div  ${addClass('mobile', s.close_wrapper)}>
    </div>
    <div id="searchbar" ${addClass(s['searchbar'])}>
      <input
        placeholder="Search books, genres, authors, etc."
        type="text"
        id="search-input"
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
