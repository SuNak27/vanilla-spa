import Input from "../view/Input";
import Counter from "../view/Counter";
import FetchData from "../view/FetchData";

type Route = {
  path: string;
  label: string;
  component: HTMLElement | (() => HTMLElement);
};

const routes: Route[] = [
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