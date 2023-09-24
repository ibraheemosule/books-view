import s from './screen.module.css';
import Header from './header/header';
import { addClass } from '../helpers';
import BooksGroup from './books-group/BooksGroup';
import SideMenu from './side-menu/SideMenu';
import { booksGroupList } from '../helpers/helpers';

const Screen = () => `
  <main>
    ${Header()}

    <section ${addClass(s.main)}>
        ${SideMenu()}
      <section ${addClass(s.content)}>
        ${booksGroupList.map((obj) => BooksGroup(obj)).join('')}
      </section>
    </section>
  </main>
`;

export default Screen;
