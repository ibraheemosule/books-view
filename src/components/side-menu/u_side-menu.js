import s from './side-menu.module.css';
import {
  notification,
  flex_list,
} from '../../assets/global-styles/reusables.module.css';
import { addClass } from '../../helpers/helpers';

const topMenu = {
  Home: [],
  Profile: [],
  Notifications: ['3', true],
};

const exploreNav = {
  Books: ['273'],
  Genres: ['42'],
  Authors: ['106'],
};

const myBooksNav = {
  Queued: ['3'],
  'Currently Borrowed': ['0'],
  Favourites: ['19'],
  History: [],
};

const adminNav = {
  'Book Requests': ['2', true],
  Members: ['34'],
  'Library Settings': [],
};

const navItem = (menu) => {
  const arr = Object.entries(menu).map(([key, value]) => {
    const info = value[0];

    return `
            <li  ${addClass(s['sub-menu-item'], info ? flex_list : '')}>
                <a href="#">${key}</a>
                ${
                  info
                    ? `
                    <span  ${addClass(
                      s.oval,
                      value[1] ? notification : '',
                      ['Home', 'Profile'].includes(key)
                        ? ''
                        : s['sub-menu-item__value']
                    )}>
                        ${value[0]}
                        </span>
                    `
                    : ''
                }
            </li>
        `;
  });
  return arr.join('');
};

export const navList = new Map([
  ['', navItem(topMenu)],
  ['Explore', navItem(exploreNav)],
  ['My Books', navItem(myBooksNav)],
  ['Admin', navItem(adminNav)],
]);

export const navGroup = (list) => {
  const arr = [];
  for (const [nav, navList] of list) {
    const li = `
        <li  ${addClass(s['menu-item'])}>
              ${nav ? `<h4>${nav}</h4>` : ''}
              <ul  ${addClass(s['sub-menu'])}>
                ${navList}
              </ul>
            </li>`;

    arr.push(li);
  }

  return arr.join('');
};
