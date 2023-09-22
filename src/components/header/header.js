import s from "./header.module.css";
import { addClass } from "../reusables/helpers";

const Header = () => {
  return `
  <header ${addClass(s.header)}>
  this is the header
  </header>
        `;
};

export default Header;
