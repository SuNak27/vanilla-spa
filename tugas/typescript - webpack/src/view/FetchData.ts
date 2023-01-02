import FormSearch from "../component/FormSearch";
import { React, reducer } from "../react/React";

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
};

const FetchData = () => {
  const [state, send] = React.useReducer(reducer, {
    inputValue: "",
    tag: "idle",
    errorMessage: "",
    products: [],
  });

  React.useEffect(() => {
    switch (state.tag) {
      case "idle": {
        send({ type: "FETCH" });
        break;
      }
      case "loading": {
        fetch("https://dummyjson.com/products/search?q=" + state.inputValue)
          .then((res) => res.json())
          .then((data) => {
            if (data.products.length === 0) {
              send({ type: "FETCH_EMPTY" });
            } else {
              send({
                type: "FETCH_SUCCESS",
                payload: { products: data.products },
              });
            }
          })
          .catch((err) => {
            send({
              type: "FETCH_ERROR",
              payload: { errorMessage: err.message },
            });
          });
        break;
      }
    }
  }, [state.tag, state.inputValue]);

  const handleChange = (e: any) => {
    send({
      type: "CHANGE_INPUT",
      // @ts-ignore
      payload: { inputValue: e.target.value },
    });
    console.log(e.target.value);
    // @ts-ignore
    clearTimeout(window.debounce);
    // @ts-ignore
    window.debounce = setTimeout(() => {
      send({ type: "FETCH" });
    }, 500);
  };

  const handleSubmit = () => {
    send({ type: "FETCH" });
  };

  const div = document.createElement("div");
  div.classList.add("home");

  const h1 = document.createElement("h1");
  h1.innerText = "Fetch Data";

  const form = FormSearch({
    value: state.inputValue,
    onInput: handleChange,
    onSubmit: handleSubmit,
  })

  const p = document.createElement("p");
  p.innerText = state.inputValue === "" ? "" : "Search: " + state.inputValue;

  const ul = document.createElement("ul");

  if (state.tag === "loading" || state.tag === "idle") {
    ul.innerText = "Loading...";
  } else if (state.tag === "error") {
    const li = document.createElement("li");
    li.innerText = state.errorMessage;
    ul.appendChild(li);
  } else {
    state.tag === "empty" ? ul.innerText = "No data" :
      state.products.forEach((item) => {
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