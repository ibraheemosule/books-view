

import Header from "./header/header";
import { addClass } from "./reusables/helpers";

const Screen = () => `
  <main>
    ${Header()}
    <section ${addClass('content')}></section>
  </main>
`;

export default Screen
