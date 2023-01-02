import routes from "../router/index";
import Link from "./Link";

export type NavProps = {
  active: string;
  onClick: (e: Event) => void;
}

const Navbar = (props: NavProps) => {
  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");

  const navbarBrand = document.createElement("div");
  navbarBrand.classList.add("navbar-link");

  routes.forEach((route) => {
    const navbarItem = Link({
      href: route.path,
      text: route.label,
      active: props.active,
      onClick: (e: Event) => {
        props.onClick(e);
      },
    });
    navbarBrand.appendChild(navbarItem);
  });

  navbar.appendChild(navbarBrand);

  return navbar;
}

export default Navbar;