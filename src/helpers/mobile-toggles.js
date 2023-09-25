import { getElement, hideElement, displayElement } from './helpers';
import headerStyles from '../components/header/header.module.css';
import coverCardStyles from '../components/reusables/cover-card/cover-card.module.css';

export const mobileToggles = () => {
  const searchbar = getElement('#search-container');
  const avatarAlert = getElement('#avatar');
  const carousel = getElement('.books-carousel') || getElement('.filter-view');

  carousel.addEventListener('click', (e) => {
    //Cover card button toggle on mobile
    const target = e.target || e.srcElement;
    const el = target.parentNode;
    const card = el.parentNode;
    console.log(el)
    el.classList.contains('detail') &&
      el.querySelectorAll('div').forEach((e) => e.classList.toggle('hide'));
    card.classList.toggle(coverCardStyles.mobile);
  });

  //Open the search
  const open = headerStyles.search_container;

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

export default mobileToggles;
