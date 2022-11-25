import routes from "../routes/index.js"
import NotFound from "../view/NotFound.js"

let currentState = {
  todoList: JSON.parse(localStorage.getItem("todoList")) || [],
  path: location.hash || "#",
}

var newTodoList = {
  title: "",
  status: ""
}

function setState(newState) {
  const prevState = { ...currentState }
  const nextState = { ...currentState, ...newState }
  currentState = nextState
  onStateChange(prevState, nextState)
  renderApp()
}

function onStateChange(prevState, nextState) {
  localStorage.setItem("todoList", JSON.stringify(nextState.todoList))

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

function resetForm() {
  const form = document.getElementById("form")
  form.reset()
  newTodoList = {
    title: "",
    status: ""
  }
}

function addTodo(newState) {
  const todoList = currentState.todoList
  todoList.push(newState)
  setState({ todoList })
  resetForm()
}

export {
  setState,
  addTodo,
  renderApp,
  currentState,
  newTodoList,
}