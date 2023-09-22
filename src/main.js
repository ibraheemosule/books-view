import "./assets/global-styles/global.css";
import Header from "./components/header/header";

document.querySelector("#app").innerHTML = `
  <main>
  ${Header()}
  </main>
`;
