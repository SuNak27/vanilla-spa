import { getProduct, renderApp, setState } from "./store/index.js";

setState({ isLoading: true });
renderApp();