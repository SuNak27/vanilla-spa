import Input from "../view/Input.js";
import Counter from "../view/Counter.js";
import FetchData from "../view/FetchData.js";

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
  },
  {
    path: '/fetch',
    label: 'Fetch',
    component: FetchData
  },
]

export default routes;