import s from './screen.module.css';
import Header from './header/header';
import BooksGroup from './books-group/BooksGroup';
import SideMenu from './side-menu/SideMenu';
import { booksGroupList, addClass, booksFeatured } from '../helpers/helpers';

const Screen = () => `
  <main>
    ${Header()}

    <article ${addClass(s.main)}>
        ${SideMenu()}
      <section ${addClass(s.content, 'main-view')}>
      <div ${addClass(s.wrapper)}>
        ${BooksGroup(booksFeatured)}
        ${booksGroupList.map((obj) => BooksGroup(obj)).join('')}
        </div>
      </section>
      <section ${addClass(s.content, 'filter-view', 'hide')}>
      <div class="filtered-books">
            <div>
            </div>
            <h2></h2>
            <ul></ul>
          </div>
      </article>
    </section>
  </main>
`;

export default Screen;
