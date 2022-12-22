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


function Todo() {
  const [todos, setTodos] = React.useState([]);
  const [text, setText] = React.useState(
    localStorage.getItem("text") || "",
  );

  React.useEffect(() => {
    localStorage.setItem("textTodo", text);
  }, [text]);

  React.useEffect(() => {
    localStorage.setItem("todos", todos);
  }, [todos]);

  const div = document.createElement("div");

  div.append(addTodo({
    value: text,
    onTextChange: props => setText(props),
    onButtonAddClick: () => {
      setTodos([...todos, text])
      setText("");
    },
  }));
  div.append(todoList({
    todos,

  }));

  return div;
}

export default Todo;