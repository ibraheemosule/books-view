import { addClass } from '../../helpers/helpers';
import DetailsCard from '../reusables/details-card/DetailsCard';
import CoverCard from '../reusables/cover-card/CoverCard';
import s from './books-group.module.css';

const BooksGroup = (obj) => {
  const title = Object.keys(obj)[0];
  const books = Object.values(obj)[0];
  const isFeature = title.includes('featured');
  const Render = isFeature ? CoverCard : DetailsCard;

  return `
    <section id="${s[title.split(' ').join('-')] || ''}" ${addClass(
      s.category,
      s[title.split(' ').join('-')]
    )}>
      <h2 ${isFeature ? addClass('desktop') : ''}>${title}</h2>
      <ul ${addClass(isFeature ? 'books-carousel' : 'books-group')}>
      ${books.map((book) => Render(book)).join('')}
      </ul>
      <div ${addClass('dots')}></div>
    </section>
`;
};

export default BooksGroup;
