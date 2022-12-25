import About from "../view/About.js";
import Home from "../view/Home.js";

const routes = [
  {
    path: '/',
    label: 'Home',
    component: Home
  },
  {
    path: '/about',
    label: 'About',
    component: About
  }
]

export default routes;