import s from "./header-logo.module.css";
import { addClass } from "../../reusables/helpers";
import hamburger_icon from '../../../assets/images/hamburger.svg'
import logo_icon from "../../../assets/images/users.svg";

const HeaderLogo = () =>
  `
<div ${addClass("mobile")}>
  <button  ${addClass(s["side-nav-btn"], "flex-center")}>
    <img src="${hamburger_icon}" alt="Logo" />
  </button>
</div>
<div  ${addClass(s["logo-group"], "flex-items-center")}>
  <img
  src="${logo_icon}" 
    alt="Logo"
    
    ${addClass(s["nav__menu-logo"])}
  />
  <div  ${addClass("desktop")}>
    <h1>Korapay Book Club</h1>
    <p>Admin</p>
  </div>
</div>
        `;

export default HeaderLogo;
