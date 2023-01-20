import React from "react";
import routes from "../router/index.js";
import Link from "./Link.js";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar-link">
        {routes.map((route) => {
          return (
            <Link key={route.path} href={route.path} text={route.label} active={props.active} onClick={props.onClick} />
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;