import { React } from "../react/react.js";
import routes from "../router/index.js";
import Link from "./Link.js";

const Navbar = (props) => {
  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");

  const navbarBrand = document.createElement("div");
  navbarBrand.classList.add("navbar-brand");

  routes.forEach((route) => {
    const navbarItem = Link({
      href: route.path,
      text: route.label,
      onClick: (e) => {
        props.onClick(e);
      },
    });
    navbarBrand.appendChild(navbarItem);
  });

  navbar.appendChild(navbarBrand);

  return navbar;
}

export default Navbar;