const greyStar = import('../../../assets/images/grey-star.svg');
import darkStar from '../../../assets/images/dark-star.svg';
import yellowStar from '../../../assets/images/yellow-star.svg';

const imgHtml = (path) => `<img src="${path}" alt="star rating"/>`;

export const getStars = (ratings, type) =>
  Array(5)
    .fill('')
    .map((_, i) => {
      if (i < ratings) return imgHtml(yellowStar);
      if (type === 'card') return imgHtml(greyStar);
      return imgHtml(darkStar);
    })
    .join('');
