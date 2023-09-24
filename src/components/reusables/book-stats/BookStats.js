import s from './book-stats.module.css';
import { addClass } from '../../../helpers/helpers';
import { getStars, likeSvg, readersSvg } from './u_book-stats';

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
  ${readersSvg()}
    <p>${readers}</p>
  </div>
  <div ${addClass('flex-items-center')}>
  ${likeSvg()}

    <p>${likes}</p>
  </div>
</div>

`;

export default BookStats;
