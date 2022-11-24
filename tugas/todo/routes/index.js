import TodoPage from "../view/Home.js"
import NotFound from "../view/NotFound.js"

const routes = [
  {
    path: "#",
    component: TodoPage,
  },
  {
    path: "#not-found",
    component: NotFound,
  }
]

export default routes