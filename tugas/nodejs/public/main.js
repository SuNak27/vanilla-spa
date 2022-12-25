import Layout from "./component/Layout.js";
import Navbar from "./component/Navbar.js";
import { ReactDOM, React } from "./react/React.js";
import routes from "./router/index.js";
import NotFound from "./view/NotFound.js";

function App() {
  const [path, setPath] = React.useState(window.location.pathname);
  const navbar = Navbar({
    onClick: (e) => {
      e.preventDefault();
      const url = new URL(e.target.href);
      history.pushState({}, "", url.pathname);
      setPath(url.pathname);
    },
  })
  const component = routes.find((route) => route.path === path)?.component() ?? NotFound();

  const layout = Layout({
    navbar: navbar,
    children: component,
  });

  return layout;
}

const app = document.getElementById("app");
ReactDOM.render(app, App);