function SearchInput(props) {
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'search';
  input.placeholder = 'Search...';
  input.value = props.value;
  input.oninput = (e) => {
    props.onInput(e.target.value);
  };

  return input;
}

export default SearchInput;
