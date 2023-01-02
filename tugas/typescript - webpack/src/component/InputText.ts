type InputTextProps = {
  type: string;
  placeholder: string;
  value: string;
  id: string;
  onInput: (e: Event) => void;
};

const InputText = (props: InputTextProps) => {
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