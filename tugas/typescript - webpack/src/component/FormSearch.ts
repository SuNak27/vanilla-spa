type FormProps = {
  value: string;
  onInput: (e: Event) => void;
  onSubmit: () => void;
};

const FormSearch = (props: FormProps) => {
  const form = document.createElement("form");
  form.classList.add("form-search");
  form.onsubmit = (e) => {
    e.preventDefault();
    props.onSubmit();
  };

  const input = document.createElement("input");
  input.type = "text";
  input.id = "searchInput";
  input.placeholder = "Search";
  input.value = props.value;
  input.oninput = (e: Event) => {
    props.onInput(e);
  };

  const button = document.createElement("button");
  button.type = "submit";
  button.innerText = "Search";

  form.appendChild(input);
  form.appendChild(button);

  return form;
};

export default FormSearch;