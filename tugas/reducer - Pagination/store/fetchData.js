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
        send({ type: "FETCH_ERROR", payload: { error: response.statusText } });
      }
    })
    .then((data) => {
      send({ type: state.actionType, payload: { data: data } });
    })
    .catch((err) => {
      send({ type: "FETCH_ERROR", payload: { error: err.message } });
    });
};

export default {
  getData,
  queryString,
};