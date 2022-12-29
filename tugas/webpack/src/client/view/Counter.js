import ButtonCounter from "../component/ButtonCounter.js";
import { React } from "../react/React.js";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const div = document.createElement("div");
  div.classList.add("home");

  const h1 = document.createElement("h1");
  h1.innerText = "Counter";

  const h2 = document.createElement("h2");
  h2.innerText = count;

  const button = ButtonCounter({
    count: count,
    onAdd: () => {
      setCount(count + 1);
    },
    onSub: () => {
      setCount(count - 1);
    },
    onReset: () => {
      setCount(0);
    }
  })



  div.appendChild(h1);
  div.appendChild(h2);
  div.appendChild(button);

  return div;
}


export default Counter;