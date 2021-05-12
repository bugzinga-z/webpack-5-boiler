import "Styles/index.scss";
import Recipes from "./Recipes";

const App = () => {
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
