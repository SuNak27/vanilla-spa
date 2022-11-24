import routes from "../routes/index.js"
import NotFound from "../view/NotFound.js"

let currentState = {
  inputValue: localStorage.getItem("inputValue") || "",
  path: location.hash || "#",
}

function setState(newState) {
  const prevState = { ...currentState }
  const nextState = { ...currentState, ...newState }
  currentState = nextState
  renderApp()
  onStateChange(prevState, nextState)
}

function onStateChange(prevState, nextState) {
  if (prevState.inputValue !== nextState.inputValue) {
    localStorage.setItem("inputValue", nextState.inputValue)
  }

  if (prevState.path !== nextState.path) {
    history.pushState(null, "", nextState.path)
  }
}

function App() {
  const component = routes.find((route) => route.path === currentState.path)?.component
  if (component) {
    return component
  } else {
    return NotFound
  }
}

function renderApp() {
  const root = document.getElementById("app")

  const app = App()
  root.innerHTML = ""
  root.append(app)
}

export { currentState, setState, renderApp }