const InputText = (props) => {
  const input = document.createElement('input');
  input.type = props.type;
  input.placeholder = props.placeholder;
  input.value = props.value;
  input.id = props.id;
  input.oninput = (e) => {
    props.onInput(e);
  };

  return input;
}

export default InputText;