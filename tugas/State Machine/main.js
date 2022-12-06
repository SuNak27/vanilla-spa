import { renderApp, send } from "./store/index.js";

send({ type: "FETCH" });
renderApp();