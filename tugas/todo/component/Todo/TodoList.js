import createElement from "../CreateElement.js";
import { currentState } from "../../store/index.js";

function TodoList() {
  // const currentState = currentState?.todoList;
  // consol
  // alert(currentState.todoList);
  const table = createElement("table", ["table", "table-striped", "table-hover", "table-bordered", "table-sm", "mt-3"], { id: "todo-list" });
  const thead = createElement("thead", ["thead-dark"]);
  const tr = createElement("tr");
  const th1 = createElement("th", null, null, null, null, "No");
  const th2 = createElement("th", null, null, null, null, "Title");
  const th3 = createElement("th", null, null, null, null, "Status");
  const th4 = createElement("th", null, null, null, null, "Action");
  const tbody = createElement("tbody", null, { id: "todo-list-body" });

  currentState.todoList.forEach((todo, index) => {
    const tr = createElement("tr");
    const td1 = createElement("td", null, null, null, null, index + 1);
    const td2 = createElement("td", null, null, null, null, todo.title);
    const td3 = createElement("td", null, null, null, null, todo.status);
    const td4 = createElement("td", null, null, null, null, createElement("button", ["btn", "btn-danger", "btn-sm"], { id: "delete-button" }, null, {
      click: (event) => {
        event.preventDefault();
        const todoList = currentState.todoList;
        todoList.splice(index, 1);
        localStorage.setItem("todoList", JSON.stringify(todoList));
        window.location.reload();
      }
    }, "Delete"));
    tr.append(td1, td2, td3, td4);
    tbody.append(tr);
  });

  tr.append(th1, th2, th3, th4);
  thead.append(tr);
  table.append(thead, tbody);

  return table;
}

export default TodoList;