function input(props) {
  const input = document.createElement("input");
  input.type = "text";
  input.id = "input";
  input.value = props.value;
  input.oninput = function (event) {
    props.onTextChange(event.target.value);
  };

  return input;
}

function text(props) {
  const div = document.createElement("div");
  div.textContent = props.value;
  return div;
}

function Text(props) {
  const div = document.createElement("div");
  div.append(input(props));
  div.append(text(props));
  return div;
}

export default Text;