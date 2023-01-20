import React from "react";

const ButtonCounter = (props) => {
  return (
    <div className="button-counter">
      <button onClick={props.onAdd}>+</button>
      <button onClick={props.onSub} disabled={props.count === 0}>-</button>
      <button onClick={props.onReset} disabled={props.count === 0}>Reset</button>
    </div>
  );
};

export default ButtonCounter;