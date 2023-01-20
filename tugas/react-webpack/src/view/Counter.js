import React, { useState } from "react";
import ButtonCounter from "../components/ButtonCounter.js";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="home">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <ButtonCounter
        count={count}
        onAdd={() => {
          setCount(count + 1);
        }}
        onSub={() => {
          setCount(count - 1);
        }}
        onReset={() => {
          setCount(0);
        }}
      />
    </div>
  );
}


export default Counter;