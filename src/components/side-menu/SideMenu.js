import s from './side-menu.module.css';
import {
  close_btn,
  logo_group,
} from '../../assets/global-styles/reusables.module.css';
import { addClass } from '../../helpers/helpers';
import logo_icon from '../../assets/images/kora-logo.png';
import close from '../../assets/images/back.svg';
import { navGroup, navList } from './u_side-menu';

const SideMenu = () => `
      <section id="overlay" ${addClass(s['overlay'], 'hide')}></section>

      <section id="sidebar" ${addClass(s.sidebar)}>
        <div class="mobile">
          <div ${addClass(close_btn, 'flex-center')}">
            <button id="close-nav">
              <img src="${close}" alt="Back icon" />
            </button>
          </div>
          <div ${addClass(s['logo-group'], logo_group, 'flex-items-center')}">
            <img src="${logo_icon}" alt="Logo" />
            <div>
              <h1>Book Club</h1>
              <p>Admin</p>
            </div>
          </div>
        </div>

        <div>
          <ul ${addClass(s.menu)}>
          ${navGroup(navList)}
            
          </ul>
        </div>
      </section>

`;

export default SideMenu;
