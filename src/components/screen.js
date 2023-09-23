import s from './screen.module.css';
import Header from "./header/header";
import { addClass } from "./reusables/helpers";

import SideMenu from './side-menu/SideMenu';

const Screen = () => `
  <main>
    ${Header()}

    <section ${addClass(s.main)}>
      ${SideMenu()}
    </section>
  </main>
`;

export default Screen
