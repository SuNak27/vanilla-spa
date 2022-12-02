import fetchData from "../store/fetchData.js"
import Product from "../view/Product.js"

const routes = [
  {
    path: '#',
    apiURL: `/products/search?`,
    params: ["q", "limit", "skip"],
    actionType: 'GET_PRODUCTS',
    component: Product
  }
]

export default routes