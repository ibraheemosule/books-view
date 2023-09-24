import s from './header.module.css';
import { sticky_container } from '../../assets/global-styles/reusables.module.css';
import { addClass } from '../../helpers/helpers';
import HeaderLogo from './header-logo/HeaderLogo';
import SearchBar from './search-bar/SearchBar';
import AlertAvatar from './alert-avatar.js/AlertAvatar';

const Header = () => {
  return `
<header id="header" ${addClass(s.header, sticky_container)}>
  <nav ${addClass(s.nav)}>
    <ul ${addClass(s.nav_menu, 'flex-items-center')}>
      <li>
        ${HeaderLogo()}
      </li>
      <li  ${addClass('desktop')}>
        ${SearchBar()}
      </li>
      <li>
        ${AlertAvatar()}
      </li>
    </ul>
  </nav>
  </header>
        `;
};

export default Header;
