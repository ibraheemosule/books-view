import { addClass } from '../../helpers/helpers';
import DetailsCard from '../reusables/details-card/DetailsCard';
import s from './books-group.module.css';

const RecentlyAdded = (obj) => {
  const title = Object.keys(obj)[0];
  const books = Object.values(obj)[0];

  return `
    <section id="recently-added" ${addClass(
      s.category,
      title.split(' ').join('-')
    )}>
      <h2>${title}</h2>
      <ul ${addClass('books-group')}>
      ${books.map((book) => DetailsCard(book)).join('')}
      </ul>
    </section>
`;
};

export default RecentlyAdded;
