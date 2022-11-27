import { renderApp } from "../main.js"

let state = {
  products: JSON.parse(localStorage.getItem("product")) ?? [],
  path: location.hash || "#",
  search: localStorage.getItem("search") || "",
}

function setState(newState) {
  // onStateChange(state, newState)
  // state = { ...state, ...newState }
  renderApp()
}

function onStateChange(prevState, nextState) {
  if (prevState.path !== nextState.path) {
    history.pushState(null, "", nextState.path)
  }

  if (prevState.product !== nextState.product) {
    localStorage.setItem("product", JSON.stringify(nextState.product))
  }

  if (prevState.search !== nextState.search) {
    localStorage.setItem("search", nextState.search)
  }
}



export default {
  state,
  setState,
}