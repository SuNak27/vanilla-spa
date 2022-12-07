import { state, send } from "./index.js";

const baseUrl = "https://dummyjson.com";

const queryString = (params) => {
  let queryString = "";
  params?.forEach((param) => {
    queryString += `${param}=${state[param]}&`;
  });
  return queryString;
};

const getData = () => {
  fetch(`${baseUrl}${state.apiUrl}${queryString(state.params)}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        send({
          type: "FETCH_ERROR", payload: {
            error: response.statusText,
          }
        });
      }
    })
    .then((data) => {
      const totalPage = Math.ceil(data.total / state.limit);
      const pages = [];
      for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
      }
      send({
        type: state.actionType, payload: {
          data: data,
          pages: pages,
          totalPage: totalPage,
        }
      });
    })
    .catch((err) => {
      send({ type: "FETCH_ERROR", payload: { error: err.message } });
    });
};

export default {
  getData,
  queryString,
};