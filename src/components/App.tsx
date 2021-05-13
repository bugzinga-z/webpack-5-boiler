import "Styles/index.scss";
import { ReactElement } from "react";
import Recipes from "./Recipes";
import sword from "Images/swc-sword.png";
import swordSvg from "Images/sword.svg";

const App = (): ReactElement => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hey, React</h1>
        </section>
        <section>
          <img src={sword as string} alt="sword" width="250" />
          <img src={swordSvg as string} alt="sword" width="250" />
          <Recipes />
        </section>
      </main>
    </>
  );
};

export default App;
