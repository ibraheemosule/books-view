import s from './screen.module.css';
import Header from './header/header';
import { addClass } from '../helpers';
import RecentlyAdded from './recently-added/RecentlyAdded';

import SideMenu from './side-menu/SideMenu';

const Screen = () => `
  <main>
    ${Header()}

    <section ${addClass(s.main)}>
      ${SideMenu()}
      <section ${addClass(s.content)}>
        <section id="recently-added" ${addClass(
          s.category,
          s['recently-added']
        )}>
          ${RecentlyAdded()}
        </section>
      </section>
    </section>
  </main>
`;

export default Screen;
