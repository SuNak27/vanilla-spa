function increaseCount(props) {
  const button = document.createElement("button");
  button.textContent = "+";
  button.onclick = function () {
    props.onButtonIncreaseClick();
  };

  return button;
}

function decreaseCount(props) {
  const button = document.createElement("button");
  button.textContent = "-";
  button.disabled = props.count === 0;
  button.onclick = function () {
    props.onButtonDecreaseClick();
  };

  return button;
}

function count(props) {
  const div = document.createElement("div");
  div.textContent = props.count;
  return div;
}

function Button(props) {
  const div = document.createElement("div");
  div.append(count(props));
  div.append(increaseCount(props));
  div.append(decreaseCount(props));
  return div;
}

export default Button;