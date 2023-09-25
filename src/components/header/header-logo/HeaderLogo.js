import s from './header-logo.module.css';
import { logo_group } from '../../../assets/global-styles/reusables.module.css';
import { addClass } from '../../../helpers/helpers';
import hamburger_icon from '../../../assets/images/hamburger.svg';
import logo_icon from '../../../assets/images/kora-logo.png';

const HeaderLogo = () =>
  `
<div ${addClass('mobile')}>
  <button id="hamburger" ${addClass(s['side-nav-btn'], 'flex-center')}>
    <img src="${hamburger_icon}" alt="Logo" />
  </button>
</div>
<div  ${addClass(logo_group, 'flex-items-center')}>
  <img
  src="${logo_icon}" 
    alt="Logo"
    
    ${addClass(s['nav__menu-logo'])}
  />
  <div  ${addClass('desktop')}>
    <h1>Korapay Book Club</h1>
    <p>Admin</p>
  </div>
</div>
        `;

export default HeaderLogo;
