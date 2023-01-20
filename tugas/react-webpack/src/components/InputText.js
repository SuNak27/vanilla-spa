import React from "react";

const InputText = (props) => {
  return (
    <input type={props.type} placeholder={props.placeholder} value={props.value} id={props.id} onInput={(e) => {
      props.onInput(e);
    }} />
  )
}

export default InputText;