import { addClass } from '../../helpers/helpers';
import DetailsCard from '../reusables/details-card/DetailsCard';
import CoverCard from '../reusables/cover-card/CoverCard';
import s from './books-group.module.css';

const BooksGroup = (obj) => {
  const title = Object.keys(obj)[0];
  const books = Object.values(obj)[0];
  const cardType = ['all books', 'recently added'].includes(title);
  const Render = cardType?  DetailsCard: CoverCard;

  return `
    <section id="${s[title.split(' ').join('-')] || ''}" ${addClass(
      s.category,
      s[title.split(' ').join('-')]
    )}>
      <h2 ${cardType ? addClass('desktop') : ''}>${title}</h2>
      <ul ${addClass(title === 'featured books' ? 'books-carousel' : 'books-group')}>
      ${books.map((book) => Render(book)).join('')}
      </ul>
      <div ${addClass('dots')}></div>
    </section>
`;
};

export default BooksGroup;
