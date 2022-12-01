import routes from "../routes/index.js";

let state = {
  products: JSON.parse(localStorage.getItem("product")) ?? [],
  search: localStorage.getItem("search") || "",
  path: location.hash || "#",
  isLoading: false,
  isError: false,
  ErrorMessage: null,
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

  if (nextState.isLoading) {
    getProduct();
  }

  if (nextState.isError == true && prevState.isError == false) {
    alert(nextState.ErrorMessage);
  }
};

function reducer(prevState, action) {
  switch (action.type) {
    case "FETCH":
      return { ...prevState, isLoading: true };
    case "SEARCH":
      return { ...prevState, search: action.payload.search };
    case "RESET_SEARCH":
      return { ...prevState, search: "", isLoading: true };
    case "FETCH_ERROR":
      return {
        ...prevState,
        isError: true,
        ErrorMessage: action.payload.error,
        isLoading: false
      };
    case "GET_PRODUCTS":
      return {
        ...prevState,
        products: action.payload.products,
        isLoading: false
      };
    default:
      return prevState;
  }
}

function send(action) {
  const newState = reducer(state, action);
  setState(newState);
}

const getProduct = () => {
  fetch(`https://dummyjson.com/products/search?q=${state.search}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        send({ type: "FETCH_ERROR", payload: { error: response.statusText } });
      }
    })
    .then((data) => {
      send({ type: "GET_PRODUCTS", payload: { products: data.products } });
    })
    .catch((err) => {
      send({ type: "FETCH_ERROR", payload: { error: err.message } });
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
  send,
  getProduct,
  renderApp,
}