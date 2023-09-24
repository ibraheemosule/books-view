import { addClass } from '../../helpers';
import CoverCard from '../reusables/cover-card/CoverCard';
import DetailsCard from '../reusables/details-card/DetailsCard';

const val = {
  id: 3,
  status: 'Available',
  title: 'Effective Python',
  authors: ['Diomidis Spinellis'],
  year: null,
  genre: ['Motivational'],
  labels: ['Creative', 'Self-help'],
  stats: {
    ratings: 4.0,
    readers: 31,
    likes: 29,
  },
};

const RecentlyAdded = () => `

  <h2>Recently Added</h2>
  <ul  ${addClass('books-group')}>
   ${CoverCard(val)}
   ${DetailsCard(val)}

  </ul>

`;

export default RecentlyAdded;
