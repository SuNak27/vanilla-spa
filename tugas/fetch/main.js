import routes from "./routes/index.js";
import store from "./store/index.js";


const App = () => {
  const component = routes.find((route) => route.path === store.state.path)?.component();

  return component;
}

const renderApp = () => {
  const root = document.getElementById("app");

  const app = App();
  root.innerHTML = "";
  return root.append(app);
};

renderApp();

export default renderApp;