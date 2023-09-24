import s from "./alert-avatar.module.css";
import { addClass } from "../../../helpers";
import notification_icon from "../../../assets/images/notification.svg";
import avatar_icon from "../../../assets/images/avatar.svg";
import books_icon from "../../../assets/images/books.svg";
import search_icon from "../../../assets/images/search-icon.svg";

const AlertAvatar = () => {
  return `
  <span ${addClass( s["alert-avatar"])}>
    <ul  ${addClass("flex-items-center")}>
      <li
        
        ${addClass( 
          "mobile",
          "mobile-search-toggle"
        )}
      >
        <button  ${addClass("flex-center")}>
          <img
            src="${search_icon}" 
            alt="searchbar icon"
            
            ${addClass(s["search-icon"])}
          />
        </button>
      </li>
      <li>
        <button  ${addClass("flex-center")}>
          <img src="${books_icon}"  alt="books icon" />
        </button>
      </li>
      <li>
        <button  ${addClass(s.alert, "flex-center")}>
          <img src="${notification_icon}" alt="notification icon" />
          <span>3</span>
        </button>
      </li>
      <li>
        <button  ${addClass(s.avatar)}>
          <img src="${avatar_icon}" alt="avatar" />
        </button>
      </li>
    </ul>
  </span>
        `;
};

export default AlertAvatar;
