import s from './details-card.module.css';
import { addClass } from '../../../helpers';
import img from '../../../assets/images/effective python.png';
import BookStats from '../book-stats/BookStats';
import { isAvailable } from '../../../helpers';

const DetailsCard = (val) => `
    <li$ ${addClass(s['details-card'])}>
    <div  ${addClass(s['details-card__image'])}>
    <img src="${img}" alt="${val.title}" />
    </div>
    <div  ${addClass(s['details-card__content'])}>
    <p  ${addClass(
      s['details-card__status'],
      s[`details-card__status--${isAvailable(val.status)}`]
    )}>
        ${val.status}</p>
    <article  ${addClass(s['details-card__details'])}>
        <h4>${val.title}</h4>
        <p>${val.authors} - ${val.year ? val.year : ''}</p>
        <p>${val.genre}</p>
        ${BookStats(val.stats)}
    </article>
    </div>
    </li>
`;

export default DetailsCard;
