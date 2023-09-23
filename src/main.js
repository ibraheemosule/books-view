import "./assets/global-styles/global.css";
import Screen from "./components/screen";

document.querySelector("#app").innerHTML = `
  ${Screen()}
`;
