import { addClass } from '../../helpers/helpers';
import DetailsCard from '../reusables/details-card/DetailsCard';
import CoverCard from '../reusables/cover-card/CoverCard';
import s from './books-group.module.css';
import prev_icon from '../../assets/images/previous.svg';
import next_icon from '../../assets/images/next.svg';

const BooksGroup = (obj) => {
  const title = Object.keys(obj)[0];
  const books = Object.values(obj)[0];
  const cardType = ['all books', 'recently added'].includes(title);
  const isFeature = title === 'featured books';
  const Render = cardType ? DetailsCard : CoverCard;

  return `
    <section id="${s[title.split(' ').join('-')] || ''}" ${addClass(
      s.category,
      s[title.split(' ').join('-')]
    )}>
      <h2 ${cardType ? addClass('desktop') : ''}>${title}</h2>
      <div ${isFeature ? addClass('glider-contain') : ''}>
      <ul ${addClass(!cardType ? 'books-carousel glider' : 'books-group')}>
      ${books.map((book) => Render(book)).join('')}
      </ul>
      <span ${addClass(!isFeature && 'hide')}>
      <button aria-label="Previous" class="glider-prev glider-btn">
      <img src="${prev_icon}" alt="previous icon"/>
      </button>
      <button aria-label="Next" class="glider-next glider-btn">
      <img src="${next_icon}" alt="next icon"/>
      </button>
      <div ${addClass('dots')}></div>
      </span>
      </div>
    </section>
`;
};

export default BooksGroup;
