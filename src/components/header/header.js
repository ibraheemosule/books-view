import s from "./header.module.css";
import { addClass } from "../reusables/helpers";
import HeaderLogo from "./header-logo/header-logo";
import SearchBar from "./search-bar/search-bar";
import AlertAvatar from "./alert-avatar.js/alert-avatar";

const Header = () => {
  return `
<header ${addClass(s.header)}>
  <nav ${addClass(s.nav)}>
    <ul ${addClass(s.nav_menu, "flex-items-center")}>
      <li>
        ${HeaderLogo()}
      </li>
      <li  ${addClass("desktop")}>
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
