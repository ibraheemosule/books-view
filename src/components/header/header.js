import s from './header.module.css';
import { addClass } from '../../helpers/helpers';
import HeaderLogo from './header-logo/HeaderLogo';
import SearchBar from './search-bar/SearchBar';
import AlertAvatar from './alert-avatar.js/AlertAvatar';

const Header = () => {
  return `
<header id="header" ${addClass(s.header)}>
  <nav ${addClass(s.nav)}>
    <ul ${addClass(s.nav_menu, 'flex-items-center')}>
      <li class="nav-item">
        ${HeaderLogo()}
      </li>
      <li id="search-container" ${addClass('desktop', 'nav-item')}>
        ${SearchBar()}
      </li>
      <li id="avatar" class="nav-item">
        ${AlertAvatar()}
      </li>
    </ul>
  </nav>
  </header>
        `;
};

export default Header;
