import { Product } from "./product"
import "../styles/index.scss"
import { render } from "react-dom"
import React from "react"

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

render(<h1>Hello React!</h1>, document.getElementById("root"))
