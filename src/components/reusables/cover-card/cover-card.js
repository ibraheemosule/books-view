import s from './cover-card.module.css';
import { addClass } from '../helpers';
import img from '../../../assets/images/effective python.png';
import BookStats from '../book-stats/BookStats'
import menu_icon from '../../../assets/images/cover-card-menu.svg'
import close_icon from '../../../assets/images/cover-card-close.svg'

  function isAvailable(status) {
    if (status === 'Available') {
      return 'green';
    }
    return 'red';
  }

  function concatList(list) {
    return list.join(', ');
  }

const CoverCard = (val) => `

    <li ${addClass(s["cover-card"])}>
        <div ${addClass(s["cover-card__image"])}>
            <img src="${img}" alt="${val.title}" />
        </div>
        <div ${addClass(s['cover-card__content'])}>
            <div>
      <p ${addClass(s['cover-card__status'],  s[`cover-card__status--${isAvailable(val.status)}`])}>${val.status}</p>
      <article ${addClass(s["cover-card__details"])}>
        <h4>${val.title}</h4>
        <p ${addClass(s["cover-card__details-authors"])}>
          ${concatList(val.authors)}
          <br/>
          ${val.year ? val.year : ''}
        </p>
        <p  ${addClass(s['cover-card__details-genre'], 'desktop')}>
          <span ${addClass(s['cover-card__details--bold'])}>Genre: </span>
          ${concatList(val.genre)}
          <br/>
          <span  ${addClass(s['cover-card__details--bold'])}>Labels: </span>
          ${concatList(val.labels)}
        </p>
       ${BookStats(val.stats)}
        </div>
      </article>
    </div>
  </div>
  <div  ${addClass(s['cover-card__control'], 'mobile')}>
    <div>
      <button ${addClass(s.cog, 'flex-center')}>
      <img src="${menu_icon}" />
      </button>
    </div>
    <div  ${addClass("hide")}>
      <button  ${addClass("close")}>
      <img src="${close_icon}" />
      </button>
    </div>
    <button aria-hidden="true"></button>
  </div>
</li>


`;

export default CoverCard
