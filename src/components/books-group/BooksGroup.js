import { addClass } from '../../helpers/helpers';
import DetailsCard from '../reusables/details-card/DetailsCard';
import CoverCard from '../reusables/cover-card/CoverCard';
import s from './books-group.module.css';

const BooksGroup = (obj) => {
  const title = Object.keys(obj)[0];
  const books = Object.values(obj)[0];
  const cardType = ['all books', 'recently added'].includes(title);
  const Render = cardType ? DetailsCard : CoverCard;

  return `
    <section id="${s[title.split(' ').join('-')] || ''}" ${addClass(
      s.category,
      s[title.split(' ').join('-')]
    )}>
      <h2 ${cardType ? addClass('desktop') : ''}>${title}</h2>
      <div class="glider-contain">
      <ul ${addClass(!cardType ? 'books-carousel glider' : 'books-group')}>
      ${books.map((book) => Render(book)).join('')}
      </ul>
      <span ${addClass(title !== 'featured books' && 'hide')}>
      <button aria-label="Previous" class="glider-prev">«</button>
      <button aria-label="Next" class="glider-next">»</button>
      <div ${addClass('dots')}></div>
      </span>
      </div>
    </section>
`;
};

export default BooksGroup;
