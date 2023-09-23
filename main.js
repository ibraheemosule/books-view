import App, {actions} from './src/App.js';

document.querySelector("#app").innerHTML = `${App()}`;
actions()
