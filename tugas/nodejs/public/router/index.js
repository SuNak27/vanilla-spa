import Input from "../view/Input.js";
import Counter from "../view/Counter.js";

const routes = [
  {
    path: '/',
    label: 'Counter',
    component: Counter
  },
  {
    path: '/input',
    label: 'Input',
    component: Input
  }
]

export default routes;