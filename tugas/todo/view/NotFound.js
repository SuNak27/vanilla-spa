import createElement from "../component/CreateElement.js"
import RouterLink from "../component/RouterLink.js"

function NotFound() {
  const div = createElement("div", ["not-found"], { id: 'not-found-page' })
  const notFound = createElement("h1", ["d-block", "text-center", "mt-5"], null, null, null, "404 Not Found")

  const goToHome = RouterLink({
    classList: ["d-block", "text-center", "mt-5"],
    to: "#",
    label: "Go to Home",
  })

  div.append(notFound, goToHome)
  return div
}

export default NotFound