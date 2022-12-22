import Button from "../components/button.js";
import Text from "../components/inputText.js";
import { React } from "../react/index.js";
import Todo from "./Todo.js";

function HomePage() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState(
    localStorage.getItem("text") || "",
  );
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    localStorage.setItem("text", text);
  }, [text]);

  React.useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const h1 = document.createElement("h1");
  h1.textContent = "Hook";

  const button = Button({
    count,
    onButtonIncreaseClick: () => setCount(count + 1),
    onButtonDecreaseClick: () => setCount(count - 1),
  })

  const input = Text({
    value: text,
    onTextChange: (newText) => setText(newText),
  });

  const todo = Todo({
    value: text,
    onTextChange: (newText) => setText(newText),
    onButtonAddClick: () => setTodos([...todos, text]),
  })

  const div = document.createElement("div");
  div.append(h1);
  div.append(button);
  div.append(input);
  div.append(todo);

  return div;
}

export default HomePage;