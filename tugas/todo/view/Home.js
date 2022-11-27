import createElement from "../component/CreateElement.js"
import TodoList from "../component/Todo/TodoList.js"
import { currentState, setState } from "../store/index.js"

function InputElement() {
  const input = createElement("input", ["mx-auto"], {
    id: "input", placeholder: "Enter title",
    value: currentState.newTodoList.title
  }, null, {
    input: (event) => {
      currentState.newTodoList.title = event.target.value
    }
  })

  return input
}

function statusElement() {
  const status = createElement("select", null, { id: "status" }, {
    value: currentState.newTodoList.status,
  }, {
    change: (event) => {
      currentState.newTodoList.status = event.target.value
    }
  },
    createElement("option", null, null, null, null, "Choose status"),
    createElement("option", null, null, null, null, "Done"),
    createElement("option", null, null, null, null, "Progress")
  )

  return status
}

function addButton() {
  const addButton = createElement("button", ["mx-3"], { id: "add-button", type: "submit" }, null, {
    click: (event) => {
      event.preventDefault();
      setState({
        todoList: [...currentState.todoList, currentState.newTodoList],
        newTodoList: { title: "", status: "" }
      })
    },
  }, "Tambah")

  return addButton
}

function Home() {
  const todo = createElement("form", ["d-block", "text-center"], { id: 'form' })
  const title = createElement("h1", null, { id: "title" }, null, null, "Todo List")
  const input = InputElement()
  const status = statusElement()
  const button = addButton()
  const todoList = TodoList()

  todo.append(title, input, status, button, todoList)
  return todo
}

export default Home