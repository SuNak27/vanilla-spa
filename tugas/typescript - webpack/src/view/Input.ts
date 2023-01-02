import InputText from "../component/InputText";
import { React } from "../react/React";

const Input = () => {
  const [input, setInput] = React.useState("");
  const div = document.createElement("div");

  const inputText = InputText({
    id: "inputText",
    type: "text",
    placeholder: "Input Text",
    value: input,
    onInput: (e: Event) => {
      // @ts-ignore
      setInput(e.target.value);
    },
  })

  const h1 = document.createElement("h1");
  h1.innerText = "Input";

  const p = document.createElement("p");
  p.innerText = input;

  div.appendChild(h1);
  div.appendChild(inputText);
  div.appendChild(p);

  return div;
}

export default Input