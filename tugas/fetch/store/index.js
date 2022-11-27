import routes from "../routes/index.js";

let state = {
  products: JSON.parse(localStorage.getItem("product")) ?? [],
  search: localStorage.getItem("search") || "",
  path: location.hash || "#",
  isLoading: false,
};

const setState = (newState) => {
  const prevState = { ...state };
  const nextState = { ...state, ...newState };
  state = nextState;
  renderApp();
  onStateChange(prevState, nextState);

}

const onStateChange = (prevState, nextState) => {
  if (prevState.search !== nextState.search) {
    localStorage.setItem("search", nextState.search);
  }

  if (prevState.products !== nextState.products) {
    localStorage.setItem("product", JSON.stringify(nextState.products));
  }
};

const getProduct = () => {
  setState({ isLoading: true });
  fetch(`https://dummyjson.com/products/search?q=${state.search}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        alert("Error " + response.status);
      }
    })
    .then((data) => {
      setState({ products: data.products, isLoading: false });
    })
    .catch(() => {
      setState({ isLoading: false });
    });
};

const App = () => {
  const component = routes.find((route) => route.path === state.path)?.component();
  return component;
}

const renderApp = () => {
  const root = document.getElementById("app");

  const focusedElementId = document.activeElement.id;
  const focusedElementSelectionStart = document.activeElement.selectionStart;
  const focusedElementSelectionEnd = document.activeElement.selectionEnd;

  const app = App();
  root.innerHTML = "";
  root.append(app);

  if (focusedElementId) {
    const focusedElement = document.getElementById(focusedElementId);
    focusedElement.focus();
    focusedElement.selectionStart = focusedElementSelectionStart;
    focusedElement.selectionEnd = focusedElementSelectionEnd;
  }
};

export {
  state,
  setState,
  onStateChange,
  getProduct,
  renderApp,
}