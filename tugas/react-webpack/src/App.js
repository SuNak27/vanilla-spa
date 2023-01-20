import React, { useState } from "react";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import routes from "./router";
import NotFound from "./view/NotFound";


function App() {
  const [path, setPath] = useState(window.location.pathname);
  const navbar = (
    <Navbar active={path} onClick={(e) => {
      e.preventDefault();
      const url = new URL(e.target.href);
      history.pushState({}, "", url.pathname);
      setPath(url.pathname);
    }} />
  )
  const NotFoundPage = <NotFound />
  const isFound = routes.some((route) => route.path === path)
  return (
    <Layout navbar={navbar}>
      {isFound ? Content({ currentPath: path }) : NotFoundPage()}
    </Layout>
  );;
}

function Route(props) {
  const component = props.component()
  const empty = <div></div>

  if (props.path === props.currentPath) {
    return <div>{component}</div>
  } else {
    return empty
  }
}

function Content(props) {
  return (
    <div>
      {routes.map((route) => {
        return (
          <Route key={route.path}
            path={route.path} currentPath={props.currentPath} component={route.component} />
        )
      })}
    </div>
  );
}

export default App;