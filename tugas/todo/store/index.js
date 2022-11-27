import Routes from "../routes/index.js"
import NotFound from "../view/NotFound.js"

let currentState = {
  todoList: JSON.parse(localStorage.getItem("todoList")) || [],
  path: location.hash || "#",
  newTodoList: {
    title: "",
    status: ""
  }
}

function setState(newState) {
  const prevState = { ...currentState }
  const nextState = { ...currentState, ...newState }
  currentState = nextState
  renderApp()
  onStateChange(prevState, nextState)
}

function onStateChange(prevState, nextState) {
  if (prevState.todoList !== nextState.todoList) {
    localStorage.setItem("todoList", JSON.stringify(nextState.todoList))
  }

  if (prevState.path !== nextState.path) {
    history.pushState(null, "", nextState.path)
  }

  if (prevState.newTodoList !== nextState.newTodoList) {
    localStorage.setItem("newTodoList", JSON.stringify(nextState.newTodoList))
  }
}

function App() {
  const component = Routes.find((route) => route.path == currentState.path).component() ?? NotFound()

  return component
}

function renderApp() {
  const root = document.getElementById("app")

  const focusedElementId = document.activeElement.id;
  const focusedElementSelectionStart = document.activeElement.selectionStart;
  const focusedElementSelectionEnd = document.activeElement.selectionEnd;

  const app = App()
  root.innerHTML = ""
  root.append(app)

  if (focusedElementId) {
    const focusedElement = document.getElementById(focusedElementId);
    focusedElement.focus();
    focusedElement.selectionStart = focusedElementSelectionStart;
    focusedElement.selectionEnd = focusedElementSelectionEnd;
  }
}

export {
  currentState,
  setState,
  renderApp
}