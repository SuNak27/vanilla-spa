import createElement from "../component/CreateElement.js"
import RouterLink from "../component/RouterLink.js"

function TodoPage() {
  const todo = createElement("div", ["d-block", "text-center"], { id: 'todo-page' })
  const title = createElement("h1", null, { id: "title" }, null, null, "Todo List")
  const input = createElement("input", ["mx-auto"], { id: "input", placeholder: "Enter your name", })
  const addButton = createElement("button", ["mx-3"], { id: "add-button" }, null, null, "Tambah")

  // const goToNotFound = RouterLink({
  //   classList: ["d-block", "text-center", "mt-5"],
  //   to: "#not-found",
  //   label: "Go to Not Found",
  // })

  todo.append(title, input, addButton)
  return todo
}

export default TodoPage()