import { setState, state } from "./index.js";


function reducer(prevState, action) {
  switch (action.type) {
    case "FETCH":
      return {
        ...prevState,
        isLoading: true,
        page: 1,
        skip: 0,
      };
    case "SEARCH":
      return { ...prevState, q: action.payload.search };
    case "RESET_SEARCH":
      return { ...prevState, q: "", isLoading: true };
    case "FETCH_ERROR":
      return {
        ...prevState,
        isError: true,
        ErrorMessage: action.payload.error,
        isLoading: false
      };
    case "GET_PRODUCTS":
      const totalPage = Math.ceil(action.payload.data.total / prevState.limit);
      const pages = [];
      for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
      }
      return {
        ...prevState,
        products: action.payload.data.products,
        totalData: action.payload.data.total,
        totalPage: totalPage,
        pages: pages,
        isLoading: false
      };
    case "SELECT_LIMIT":
      return {
        ...prevState,
        limit: action.payload.limit,
        isLoading: true,
        page: 1,
        skip: 0
      };
    case "PREV_PAGE":
      return {
        ...prevState,
        page: prevState.page - 1,
        skip: prevState.skip - prevState.limit,
        isLoading: true
      };
    case "NEXT_PAGE":
      return {
        ...prevState,
        page: prevState.page + 1,
        skip: prevState.skip + prevState.limit,
        isLoading: true
      };
    case "SELECT_PAGE":
      return {
        ...prevState,
        page: action.payload.page,
        skip: (action.payload.page - 1) * prevState.limit,
        isLoading: true
      };
    case "FIRST_PAGE":
      return {
        ...prevState,
        page: 1,
        skip: 0,
        isLoading: true
      };
    case "LAST_PAGE":
      return {
        ...prevState,
        page: prevState.totalPage,
        skip: (prevState.totalPage - 1) * prevState.limit,
        isLoading: true
      };
    default:
      return prevState;
  }
}

function send(action) {
  const newState = reducer(state, action);
  setState(newState);
}

export default send;