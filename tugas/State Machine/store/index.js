import routes from "../routes/index.js";
import fetchData from "./fetchData.js";
import send from "./reducer.js";

let state = {
  // Finity State Machine
  appState: "idle" /* idle | loading | success | error */,

  products: JSON.parse(localStorage.getItem("product")) ?? [],
  q: localStorage.getItem("search") || "",
  path: location.hash || "#",
  apiUrl: routes.find((route) => route.path === (location.hash || "#"))?.apiURL || "",
  actionType: routes.find((route) => route.path === (location.hash || "#"))?.actionType || "",
  params: routes.find((route) => route.path === (location.hash || "#"))?.params || [],
  ErrorMessage: null,
  limit: 5,
  pages: [],
  totalData: 0,
  totalPage: 0,
  page: 1,
  skip: 0,
};

const setState = (newState) => {
  const prevState = { ...state };
  const nextState = { ...state, ...newState };
  state = nextState;
  renderApp();
  onStateChange(prevState, nextState);
}

const onStateChange = (prevState, nextState) => {
  if (prevState.q !== nextState.q) {
    clearTimeout(window.debounce);
    window.debounce = setTimeout(() => {
      send({ type: "FETCH" });
    }, 500);
    localStorage.setItem("search", nextState.q);
  }

  if (prevState.products !== nextState.products) {
    localStorage.setItem("product", JSON.stringify(nextState.products));
  }

  if (nextState.appState === "loading") {
    fetchData.getData(routes.find((route) => route.path === state.path)?.apiURL);
  }

  if (nextState.appState === "error") {
    alert(nextState.ErrorMessage);
  }
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
  renderApp,
}