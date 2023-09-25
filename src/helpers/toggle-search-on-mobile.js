import { getElement, hideElement, displayElement } from './helpers';
import headerStyles from '../components/header/header.module.css';

const open = headerStyles.search_container;

const toggleSearchOnMobile = () => {
  const searchbar = getElement('#search-container');
  const avatarAlert = getElement('#avatar');

  //Open the search
  getElement('#open-search').addEventListener('click', () => {
    searchbar.classList.remove('desktop');
    searchbar.classList.add(open);
    hideElement(avatarAlert);
  });

  //Close the search
  getElement('#close-search').addEventListener('click', () => {
    searchbar.classList.add('desktop');
    searchbar.classList.remove(open);
    displayElement(avatarAlert);
  });
};

export default toggleSearchOnMobile;
