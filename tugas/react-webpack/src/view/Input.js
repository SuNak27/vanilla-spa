import React, { useContext } from "react";
import InputText from "../components/InputText.js";
import { Context } from "../utils/context.js";

const Input = () => {
  const context = useContext(Context);
  const onSubmit = (e) => {
    e.preventDefault();
    const url = new URL('http://localhost:3000/fetch');
    history.pushState({}, "", url.pathname);
    context.setPath(url.pathname);
  }
  return (
    <>
      <h1>Input</h1>
      <InputText id="inputText" type="text" placeholder="Input Text" value={context.input} onInput={(e) => {
        context.setInput(e.target.value);
      }} onSubmit={onSubmit} />
      <p>{context.input}</p>

    </>
  )
}

export default Input