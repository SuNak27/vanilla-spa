import "./assets/style.css";
import { Layout } from "./component/Layout";
import Navbar from "./component/Navbar";
import { ReactDOM, React } from "./react/React";
import routes from "./router/index";
import NotFound from "./view/NotFound";

type RouteProps = {
  path: string;
  currentPath: string;
  component: HTMLElement | any;
};

function App() {
  const [path, setPath] = React.useState(window.location.pathname);
  const navbar = Navbar({
    active: path,
    onClick: (e: any) => {
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

function Route(props: RouteProps) {
  const component = props.component()
  const empty = document.createElement("div")

  if (props.path === props.currentPath) {
    return component
  } else {
    return empty
  }
}

function Content(props: { currentPath: string; }) {
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