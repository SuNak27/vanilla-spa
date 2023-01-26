import React from "react";

const InputText = (props) => {
  return (
    <form method="POST" onSubmit={(e) => { props.onSubmit(e) }}>
      <input type={props.type} placeholder={props.placeholder} value={props.value} id={props.id} onInput={(e) => {
        props.onInput(e);
      }} />

      <button type="submit">Search</button>
    </form >
  )
}

export default InputText;