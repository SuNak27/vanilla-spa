let state = {
  inputValue: "",
  hash: location.hash
}

function setState(newState) {
  state = { ...state, ...newState }
  render()
}

function Link(props) {
  const link = document.createElement("a")
  link.href = props.href
  link.textContent = props.label
  link.onclick = function (event) {
    event.preventDefault()
    history.pushState(null, "", event.target.href)
    const url = new URL(event.target.href)
    setState({ hash: url.hash })
    render()
  }

  return link
}

function Navbar() {
  const linkHome = Link({
    href: "#home",
    label: "Home",
  })

  const linkAbout = Link({
    href: "#about",
    label: "About",
  })

  const div = document.createElement("div")
  div.append(linkHome)
  div.append(linkAbout)

  return div
}


function AboutScreen() {
  const linkHome = Link({
    href: "#home",
    label: "Kembali ke Home",
  })

  const text = document.createElement("p")
  text.textContent = "Welcome to About"

  const div = document.createElement("div")
  div.append(linkHome)
  div.append(text)

  return div
}

function HomeScreen() {
  const navbar = Navbar()
  const textPreview = document.createElement("p")
  textPreview.textContent = state.inputValue

  const input = document.createElement("input")
  input.id = "input"
  input.value = state.inputValue
  input.placeholder = "Enter your name"

  input.oninput = function (event) {
    setState({
      inputValue: event.target.value,
    })
  }

  const clearButton = document.createElement("button")
  clearButton.textContent = "Clear"
  clearButton.onclick = function () {
    setState({ inputValue: "" })
  }

  const div = document.createElement("div")
  div.append(navbar)
  div.append(input)
  div.append(clearButton)
  div.append(textPreview)

  return div
}

function App() {
  const homeScreen = HomeScreen()
  const aboutScreen = AboutScreen()

  if (state.hash === "#about") {
    return aboutScreen
  } else if (state.hash === "#home") {
    return homeScreen
  }
}

function render() {
  const root = document.getElementById("root")

  const focusedElementId = document.activeElement.id;
  const focusedElementSelectionStart = document.activeElement.selectionStart;
  const focusedElementSelectionEnd = document.activeElement.selectionEnd;

  const app = App()
  root.innerHTML = ""
  root.append(app)

  if (focusedElementId) {
    const focusedElement = document.getElementById(focusedElementId);
    focusedElement.focus();
    focusedElement.selectionStart = focusedElementSelectionStart;
    focusedElement.selectionEnd = focusedElementSelectionEnd;
  }
}

render()


