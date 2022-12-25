import Layout from "./component/Layout.js";
import Navbar from "./component/Navbar.js";
import { ReactDOM, React } from "./react/React.js";
import routes from "./router/index.js";
import Counter from "./view/Counter.js";
import Input from "./view/Input.js";
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

  /**
   * Bagaimana cara memanggil component sesuai dengan path?
   * 
   * Contoh:
   * path: / -> CounterPage
   * path: /input -> InputPage
   * path: /not-found -> NotFoundPage
   * 
   * Selain menggunakan switch case, bagaimana cara lainnya?
   * menggunakan file routes.js yang sudah disediakan di folder router misalnya
   */

  const CounterPage = Counter()
  const InputPage = Input()
  const NotFoundPage = NotFound()

  let component
  switch (path) {
    case "/":
      component = CounterPage
      break;
    case "/input":
      component = InputPage
      break;
    default:
      component = NotFoundPage
      break;
  }

  /**
   * const component = routes.find((route) => route.path === path)?.component || NotFoundPage
   * 
   * Menggunakan cara ini ternyata tidak bisa, kenapa?
   */


  const layout = Layout({
    navbar: navbar,
    children: component,
  });

  return layout;
}

const app = document.getElementById("app");
ReactDOM.render(app, App);