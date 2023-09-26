import './assets/global-styles/global.css';
import { visible } from './components/side-menu/side-menu.module.css';
import {
  getElement,
  displayElement,
  hideElement,
  startGlider,
} from './helpers/helpers';
import { onSearchInput } from './helpers/search-functionality';
import App from './components/screen';
import mobileToggles from './helpers/mobile-toggles';

export const actions = () => {
  //Get elements in the DOM
  const hamburgerMenu = getElement('#hamburger');

  //Open the vertical nav on mobile
  hamburgerMenu.addEventListener('click', () => {
    getElement('#sidebar').classList.add(visible);
    displayElement(getElement('#overlay'));
  });

  // Close the vertical nav on mobile
  getElement('#close-nav').addEventListener('click', () => {
    getElement('#sidebar').classList.remove(visible);
    hideElement(getElement('#overlay'));
  });

    // Close the vertical nav on mobile
  getElement('#overlay').addEventListener('click', (e) => {
    getElement('#sidebar').classList.remove(visible);
    hideElement(e.target);
  });

  // run the search input functonality
  onSearchInput();

  // initialize the Glider carousel
  startGlider();

  //Initialize toggles on mobile
  mobileToggles();
};

export default App;
