import { ReactDOM } from "./react/index.js";
import HomePage from "./views/Home.js";

function App() {
  const home = HomePage()
  return home;
}

const root = document.getElementById("root");
ReactDOM.render(root, App);