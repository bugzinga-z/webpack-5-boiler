import "../styles/index.scss";
import { Product } from "./product";

import { render } from "react-dom";

function draw() {
  const el = document.createElement("div");
  el.innerHTML = "Hello Webpack.";
  return el;
}

document.body.appendChild(draw());

const p: Product = {
  id: 1,
  name: "Prova",
};

console.log(p);

render(<h1>Hello React!</h1>, document.getElementById("root"));
