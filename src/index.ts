import { Product } from "./product"
import "../styles/index.scss"

function draw() {
  const el = document.createElement("div")
  el.innerHTML = "Hello Webpack."
  return el
}

document.body.appendChild(draw())

const p: Product = {
  id: 1,
  name: "Prova"
}

console.log(p)
