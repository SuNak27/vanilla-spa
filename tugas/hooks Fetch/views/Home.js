import SearchInput from "../components/search.js";
import Table from "../components/table.js";
import { React } from "../react/index.js";

function HomePage() {
  const [loading, setLoading] = React.useState(false);

  const [data, setData] = React.useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  const [textInput, setTextInput] = React.useState("");

  const [error, setError] = React.useState("");

  const [empty, setEmpty] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
  }, []);

  React.useEffect(() => {
    if (loading) {
      fetch("https://dummyjson.com/products/search?q=" + textInput)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setData(data.products);
          setError("");
          if (data.products.length === 0) {
            setEmpty(true);
          } else {
            setEmpty(false);
          }
        })
        .catch((err) => {
          setLoading(false);
          setData([]);
          setError(err.message);
        });
    }
  }, [loading, textInput]);

  const h1 = document.createElement("h1");
  h1.textContent = "Hook";

  const input = SearchInput({
    value: textInput,
    onInput: (value) => {
      clearTimeout(window.debounce);
      window.debounce = setTimeout(() => {
        setTextInput(value);
        setLoading(true);
      }, 500);
    },
  })

  const table = Table({
    data: data,
  });

  const div = document.createElement("div");
  div.append(h1);

  const p = document.createElement("p");
  div.append(input);
  if (loading) {
    p.textContent = "Loading...";
    div.append(p);
  } else if (error) {
    p.textContent = error;
    div.append(p);
  } else if (empty) {
    p.textContent = "Data tidak ditemukan";
    div.append(p);
  } else {
    div.append(table);
  }


  return div;
}

export default HomePage;