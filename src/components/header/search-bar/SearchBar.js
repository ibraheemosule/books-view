import s from './search-bar.module.css';
import { close_btn } from '../../../assets/global-styles/reusables.module.css';
import { addClass } from '../../../helpers/helpers';
import search_icon from '../../../assets/images/search-icon.svg';
import back_icon from '../../../assets/images/back.svg';

const SearchBar = () => {
  return `
  <span ${addClass(s.search)}>
  <div  ${addClass('mobile')}>
    <div  ${addClass(close_btn, 'flex-center')}>
      <button>
        <img src="${back_icon}"  alt="Back icon" />
      </button>
    </div>
  </div>
  <div ${addClass(s['searchbar'])}>
    <label  for="search-input" ${addClass('invisible')}
      >Search</label
    >
    <input
      placeholder="Search books, genres, authors, etc."
      type="search"
      id="search-input"
      aria-label="Search"
    />

    <button  ${addClass(s['searchbar-icon'])}>
      <img src="${search_icon}"  alt="searchbar icon" />
    </button>

    <div  ${addClass(s.searchbar__results, 'hide')}></div>
  </div>
  </span>
        `;
};

export default SearchBar;
