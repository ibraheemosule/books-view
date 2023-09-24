import s from './book-stats.module.css';
import { addClass } from '../../../helpers';
import { getStars } from './u_book-stats';
import book_readers_icon from '../../../assets/images/book-readers.svg';
import book_likes_icon from '../../../assets/images/book-likes.svg';

const BookStats = ({ readers, ratings, likes }) => `

<div  ${addClass(s['stats'], s['overlay'], 'flex-items-center')}>
<div  ${addClass(s['stats__ratings'])}>
  <p>
    <span  ${addClass(s['book-overlay__details--bold'])}>Ratings: </span>
    ${ratings.toFixed(1)}
  </p>
  <div  ${addClass(s['stats__stars'], 'flex-items-center')}>
    ${getStars(ratings, 'overlay')}
  </div>
</div>
<div  ${addClass(s['stats__users'], 'flex-items-center')}">
  <div  ${addClass('flex-items-center')}>
    <img src="${book_readers_icon}" alt="number of readers"/>
    <p>${readers}</p>
  </div>
  <div  ${addClass('flex-items-center')}>
    <img src="${book_likes_icon}" alt="number of likes"/>
    <p>${likes}</p>
  </div>
</div>

`;

export default BookStats;
