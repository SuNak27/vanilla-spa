import renderApp from "../main.js";

let state = {
  products: localStorage.getItem("product") ?? [],
  search: localStorage.getItem("search") || "",
  path: location.hash || "#",
  isLoading: false,
};

const setState = (callback) => {
  callback();
  onStateChange();
  renderApp()
}

const onStateChange = () => {
  if (state.search !== localStorage.getItem("search")) {
    localStorage.setItem("search", state.search);
  }
  if (state.products !== JSON.parse(localStorage.getItem("product"))) {
    localStorage.setItem("product", JSON.stringify(state.products));
  }
};

export default {
  state,
  setState,
  onStateChange,
}