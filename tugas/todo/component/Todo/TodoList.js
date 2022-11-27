import createElement from "../CreateElement.js";
import { currentState, setState } from "../../store/index.js";

function TodoList() {
  const table = createElement("table", ["table", "table-striped", "table-hover", "table-bordered", "table-sm", "mt-3"], { id: "todo-list" });
  const thead = createElement("thead", ["thead-dark"]);
  const tr = createElement("tr");
  const thNumber = createElement("th", null, null, null, null, "No");
  const thTitle = createElement("th", null, null, null, null, "Title");
  const thStatus = createElement("th", null, null, null, null, "Status");
  const thAction = createElement("th", null, null, null, null, "Action");
  const tbody = createElement("tbody", null, { id: "todo-list-body" });

  currentState.todoList.forEach((todo, index) => {
    const tr = createElement("tr");
    const number = createElement("td", null, null, null, null, index + 1);
    const title = createElement("td", null, null, null, null, todo.title);
    const status = createElement("td", null, null, null, null, todo.status);
    const action = createElement("td", null, null, null, null, createElement("button", ["btn", "btn-danger", "btn-sm"], { id: "delete-button" }, null, {
      click: (event) => {
        event.preventDefault();
        const todoList = [...currentState.todoList];
        todoList.splice(index, 1);
        setState({ todoList: todoList });
      }
    }, "Delete"), " ", createElement("button", ["btn", "btn-warning", "btn-sm"], { id: "edit-button" }, null, {
      click: (event) => {
        event.preventDefault();
        setState({
          newTodoList: {
            title: todo.title,
            status: todo.status
          }
        });
        const todoList = [...currentState.todoList];
        todoList.splice(index, 1);
        setState({ todoList: todoList });
      }
    }, "Edit"));
    tr.append(number, title, status, action);
    tbody.append(tr);
  });

  tr.append(thNumber, thTitle, thStatus, thAction);
  thead.append(tr);
  table.append(thead, tbody);

  return table;
}

export default TodoList;