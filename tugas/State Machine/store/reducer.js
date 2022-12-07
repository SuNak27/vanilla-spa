import { setState, state } from "./index.js";

const idle = (prevState, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...prevState,
        appState: 'loading',
        page: 1,
        skip: 0,
      };
    default:
      return prevState;
  }
};

const loading = (prevState, action) => {
  switch (action.type) {
    case "FETCH_ERROR":
      return {
        ...prevState,
        ErrorMessage: action.payload.error,
        products: [],
        appState: 'error',
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
        appState: 'success',
      };
    default:
      return prevState;
  }
};

const success = (prevState, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...prevState,
        appState: 'loading',
        page: 1,
        skip: 0,
      };
    case "SEARCH":
      return {
        ...prevState,
        q: action.payload.search,
      };
    case "RESET_SEARCH":
      return {
        ...prevState,
        q: "",
        appState: 'loading',
      };
    case "SELECT_LIMIT":
      return {
        ...prevState,
        limit: action.payload.limit,
        appState: 'loading',
        page: 1,
        skip: 0
      };
    case "SELECT_PAGE":
      return {
        ...prevState,
        page: action.payload.page,
        skip: (action.payload.page - 1) * prevState.limit,
        appState: 'loading',
      };
    case "PREV_PAGE":
      return {
        ...prevState,
        page: prevState.page - 1,
        skip: prevState.skip - prevState.limit,
        appState: 'loading',
      };
    case "NEXT_PAGE":
      return {
        ...prevState,
        page: prevState.page + 1,
        skip: prevState.skip + prevState.limit,
        appState: 'loading',
      };
    case "FIRST_PAGE":
      return {
        ...prevState,
        page: 1,
        skip: 0,
        appState: 'loading',
      };
    case "LAST_PAGE":
      return {
        ...prevState,
        page: prevState.totalPage,
        skip: (prevState.totalPage - 1) * prevState.limit,
        appState: 'loading',
      };
    default:
      return prevState;
  }
};

const error = (prevState, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...prevState,
        appState: 'loading',
        page: 1,
        skip: 0,
      };
    case "SEARCH":
      return {
        ...prevState,
        q: action.payload.search,
      };
    case "RESET_SEARCH":
      return {
        ...prevState,
        q: "",
        appState: 'loading',
      };
    case "SELECT_LIMIT":
      return {
        ...prevState,
        limit: action.payload.limit,
        appState: 'loading',
        page: 1,
        skip: 0
      };
    default:
      return prevState;
  }
};


function reducer(prevState, action) {
  switch (prevState.appState) {
    case "idle":
      return idle(prevState, action);
    case "loading":
      return loading(prevState, action);
    case "success":
      return success(prevState, action);
    case "error":
      return error(prevState, action);
    default:
      return prevState;
  }

  // switch (action.type) {
  //   case "FETCH":
  //     return {
  //       ...prevState,
  //       appState: 'loading',
  //       page: 1,
  //       skip: 0,
  //     };
  //   case "SEARCH":
  //     return {
  //       ...prevState,
  //       q: action.payload.search,
  //     };
  //   case "RESET_SEARCH":
  //     return { ...prevState, q: "", isLoading: true };
  //   case "FETCH_ERROR":
  //     return {
  //       ...prevState,
  //       isError: true,
  //       ErrorMessage: action.payload.error,
  //       isLoading: false
  //     };
  //   case "GET_PRODUCTS":
  //     const totalPage = Math.ceil(action.payload.data.total / prevState.limit);
  //     const pages = [];
  //     for (let i = 1; i <= totalPage; i++) {
  //       pages.push(i);
  //     }
  //     return {
  //       ...prevState,
  //       products: action.payload.data.products,
  //       totalData: action.payload.data.total,
  //       totalPage: totalPage,
  //       pages: pages,
  //       isLoading: false
  //     };
  //   case "SELECT_LIMIT":
  //     return {
  //       ...prevState,
  //       limit: action.payload.limit,
  //       appState: 'loading',
  //       page: 1,
  //       skip: 0
  //     };
  //   case "PREV_PAGE":
  //     return {
  //       ...prevState,
  //       page: prevState.page - 1,
  //       skip: prevState.skip - prevState.limit,
  //       isLoading: true
  //     };
  //   case "NEXT_PAGE":
  //     return {
  //       ...prevState,
  //       page: prevState.page + 1,
  //       skip: prevState.skip + prevState.limit,
  //       isLoading: true
  //     };
  //   case "SELECT_PAGE":
  //     return {
  //       ...prevState,
  //       page: action.payload.page,
  //       skip: (action.payload.page - 1) * prevState.limit,
  //       isLoading: true
  //     };
  //   case "FIRST_PAGE":
  //     return {
  //       ...prevState,
  //       page: 1,
  //       skip: 0,
  //       isLoading: true
  //     };
  //   case "LAST_PAGE":
  //     return {
  //       ...prevState,
  //       page: prevState.totalPage,
  //       skip: (prevState.totalPage - 1) * prevState.limit,
  //       isLoading: true
  //     };
  //   default:
  //     return prevState;
  // }
}

function send(action) {
  const newState = reducer(state, action);
  setState(newState);
}

export default send;

/*
  type yang bisa digunakan dalam idle state:
  - FETCH
  - SEARCH
  - RESET_SEARCH
  - SELECT_LIMIT
  - SELECT_PAGE
  - FIRST_PAGE
  - LAST_PAGE
  - PREV_PAGE
  - NEXT_PAGE

  type yang bisa digunakan dalam loading state: 
  - FETCH_ERROR
  - GET_PRODUCTS

  type yang bisa digunakan dalam success state:
  - FETCH
  - SEARCH
  - RESET_SEARCH
  - SELECT_LIMIT
  - SELECT_PAGE
  - FIRST_PAGE  
  - LAST_PAGE
  - PREV_PAGE
  - NEXT_PAGE

  type yang bisa digunakan dalam error state:
  - FETCH
  - SEARCH
  - RESET_SEARCH
  - SELECT_LIMIT
  - SELECT_PAGE
  - FIRST_PAGE
  - LAST_PAGE
  - PREV_PAGE
  - NEXT_PAGE
*/