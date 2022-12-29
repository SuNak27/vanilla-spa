import css from "./assets/style.css";
import Layout from "./component/Layout.js";
import Navbar from "./component/Navbar.js";
import { ReactDOM, React } from "./react/React.js";
import routes from "./router/index.js";
import NotFound from "./view/NotFound.js";

function App() {
  const [path, setPath] = React.useState(window.location.pathname);
  const navbar = Navbar({
    active: path,
    onClick: (e) => {
      e.preventDefault();
      const url = new URL(e.target.href);
      history.pushState({}, "", url.pathname);
      setPath(url.pathname);
    },
  })

  const NotFoundPage = NotFound()
  const isFound = routes.some((route) => route.path === path)

  const layout = Layout({
    navbar: navbar,
    children: isFound ? Content({ currentPath: path }) : NotFoundPage,
  });

  return layout;
}

function Route(props) {
  const component = props.component()
  const empty = document.createElement("div")

  if (props.path === props.currentPath) {
    return component
  } else {
    return empty
  }
}

function Content(props) {
  const div = document.createElement("div");
  const children = routes.map((route) => {
    return Route({
      path: route.path,
      currentPath: props.currentPath,
      component: route.component,
    })
  })

  div.append(...children);

  return div;
}

const app = document.getElementById("app");
ReactDOM.render(app, App);