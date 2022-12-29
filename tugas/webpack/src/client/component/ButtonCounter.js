const ButtonCounter = (props) => {
  const div = document.createElement("div");
  div.classList.add("button-counter");

  const addButton = document.createElement("button");
  addButton.innerText = "+";
  addButton.onclick = () => {
    props.onAdd();
  };

  const subButton = document.createElement("button");
  subButton.innerText = "-";
  subButton.disabled = props.count === 0;
  subButton.onclick = () => {
    props.onSub();
  };

  const resetButton = document.createElement("button");
  resetButton.innerText = "Reset";
  resetButton.disabled = props.count === 0;
  resetButton.onclick = () => {
    props.onReset();
  };


  div.appendChild(addButton);
  div.appendChild(subButton);
  div.appendChild(resetButton);

  return div;
};

export default ButtonCounter;