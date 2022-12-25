import FormSearch from "../component/FormSearch.js";
import { React } from "../react/React.js";

const FetchData = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [inputValue, setInputValue] = React.useState("");
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = () => {
      try {
        fetch("https://dummyjson.com/products/search?q=" + inputValue)
          .then((response) => response.json())
          .then((json) => setData(json.products))
          .catch((error) => setError(error.message));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (loading) { fetchData() };
  }, [loading, inputValue]);

  const handleChange = (e) => {
    clearTimeout(window.debounce);
    window.debounce = setTimeout(() => {
      setInputValue(e.target.value);
      setLoading(true);
    }, 500);
  };

  const handleSubmit = () => {
    setLoading(true);
  };

  const div = document.createElement("div");
  div.classList.add("home");

  const h1 = document.createElement("h1");
  h1.innerText = "Fetch Data";

  const form = FormSearch({
    value: inputValue,
    onInput: handleChange,
    onSubmit: handleSubmit,
  })

  const p = document.createElement("p");
  p.innerText = inputValue === "" ? "" : "Search: " + inputValue;

  const ul = document.createElement("ul");


  if (loading) {
    ul.innerText = "Loading...";
  } else if (error) {
    const li = document.createElement("li");
    li.innerText = error;
    ul.appendChild(li);
  } else {
    data.length === 0 ? ul.innerText = "No data" :
      data.forEach((item) => {
        const li = document.createElement("li");
        li.innerText = item.title;
        ul.appendChild(li);
      });
  }

  div.appendChild(h1);
  div.appendChild(form);
  div.appendChild(p);
  div.appendChild(ul);

  return div;


};

export default FetchData;