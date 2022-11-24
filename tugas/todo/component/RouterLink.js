import { setState } from "../store/index.js";
import createElement from "./CreateElement.js";

/**
 * 
 * @param {Object} props clastList, to, label
 * @returns 
 */
function RouterLink(props) {
  const link = createElement("router-link", props.classList, {
    to: props.to,
  }, null, {
    click: (event) => {
      event.preventDefault();
      setState({ path: props.to });
    },
  },
    props.label
  )

  return link
}

export default RouterLink