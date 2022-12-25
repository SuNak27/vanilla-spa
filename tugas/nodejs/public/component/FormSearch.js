const FormSearch = (props) => {
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
  input.oninput = (e) => {
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