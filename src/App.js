import "./assets/global-styles/global.css";
import {visible} from './components/side-menu/side-menu.module.css';
import { getElement, displayElement, hideElement } from "./components/reusables/helpers";
import App from "./components/screen";

export const actions = () => {
  //Get elements in the DOM
  const hamburgerMenu = getElement('#hamburger')

  //Open the vertical nav on mobile
   hamburgerMenu.addEventListener('click', () => {
    getElement('#sidebar').classList.add(visible);
    displayElement(getElement('#overlay'));
  });

  // Close the vertical nav on mobile
  getElement("#close-nav").addEventListener('click',  () => {
    getElement('#sidebar').classList.remove(visible);
    hideElement(getElement('#overlay'));
  });
}

export default App

