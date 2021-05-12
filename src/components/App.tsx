import "Styles/index.scss";
import { ReactElement } from "react";
import Recipes from "./Recipes";

const App = (): ReactElement => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Hey, React</h1>
        </section>
        <section>
          <Recipes />
        </section>
      </main>
    </>
  );
};

export default App;
