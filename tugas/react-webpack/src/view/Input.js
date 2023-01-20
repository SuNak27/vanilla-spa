import React, { useState } from "react";
import InputText from "../components/InputText.js";

const Input = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <h1>Input</h1>
      <InputText id="inputText" type="text" placeholder="Input Text" value={input} onInput={(e) => {
        setInput(e.target.value);
      }} />
      <p>{input}</p>
    </div>
  )
}

export default Input