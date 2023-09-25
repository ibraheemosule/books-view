import s from './cover-card.module.css';
import BookStats from '../book-stats/BookStats';
import menu_icon from '../../../assets/images/cover-card-menu.svg';
import close_icon from '../../../assets/images/cover-card-close.svg';
import {
  isAvailable,
  addClass,
  concatList,
} from '../../../helpers/helpers';
import imgLinks from '../../../helpers/image-links';

const CoverCard = (book) => `

    <li ${addClass(s['cover-card'])}>
        <div ${addClass(s['cover-card__image'])}>
            <img src="${imgLinks[book.title]}" alt="${book.title}" />
        </div>
        <div ${addClass(s['cover-card__content'])}>
            <div>
      <p ${addClass(
        s['cover-card__status'],
        s[`cover-card__status--${isAvailable(book.status)}`]
      )}>${book.status}</p>
      <article ${addClass(s['cover-card__details'])}>
        <h4>${book.title}</h4>
        <p ${addClass(s['cover-card__details-authors'])}>
          ${concatList(book.authors)}
          <br/>
          ${book.year ? book.year : ''}
        </p>
        <p  ${addClass(s['cover-card__details-genre'], 'desktop')}>
          <span ${addClass(s['cover-card__details--bold'])}>Genre: </span>
          ${concatList(book.genre)}
          <br/>
          <span  ${addClass(s['cover-card__details--bold'])}>Labels: </span>
          ${concatList(book.labels)}
        </p>
       ${BookStats(book.stats)}
        </div>
      </article>
    </div>
  </div>
  <div  ${addClass(s['cover-card__control'], 'detail', 'mobile')}>
    <div>
      <button  ${addClass(s.open, 'flex-center')}>
      <img src="${menu_icon}" alt="show card details"/>
      </button>
    </div>
    <div  ${addClass('hide')}>
      <button>
      <img src="${close_icon}" alt="close card details"/>
      </button>
    </div>
    <button aria-hidden="true"></button>
  </div>
</li>


`;

export default CoverCard;
