import { React } from "../react/index.js";

function addTodo(props) {
  const div = document.createElement("div");
  const input = document.createElement("input");
  input.type = "text";
  input.id = "inputTodo";
  input.value = props.value;
  input.oninput = function (event) {
    props.onTextChange(event.target.value);
  };

  const button = document.createElement("button");
  button.textContent = "Add";
  button.disabled = props.value === "";
  button.onclick = function () {
    props.onButtonAddClick();
  };

  div.append(input);
  div.append(button);

  return div;
}

function todoList(props) {
  const ul = document.createElement("ul");
  props.todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo;
    ul.append(li);
  });
  return ul;
}


function Todo(props) {
  const div = document.createElement("div");
  div.append(addTodo({
    value: props.value,
    onTextChange: props.onTextChange,
    onButtonAddClick: props.onButtonAddClick,
  }));
  div.append(todoList({
    todos: props.todos,
  }));

  return div;
}

export default Todo;