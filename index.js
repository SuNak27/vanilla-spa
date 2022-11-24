const root = document.getElementById("root")

function Link(props) {
  const link = document.createElement("a")
  link.href = props.href
  link.textContent = props.label
  link.onclick = function (event) {
    event.preventDefault()
    const component = props.Component()
    root.innerHTML = ""
    root.append(component)
    history.pushState(null, "", event.target.href)
  }

  return link
}

function Navbar() {
  const linkHome = Link({
    href: "#home",
    label: "Home",
    Component: HomeScreen,
  })

  const linkAbout = Link({
    href: "#about",
    label: "About",
    Component: AboutScreen,
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
    Component: HomeScreen,
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

  const input = document.createElement("input")
  input.placeholder = "Enter your name"

  input.oninput = function (event) {
    textPreview.textContent = event.target.value
  }

  const div = document.createElement("div")
  div.append(navbar)
  div.append(input)
  div.append(textPreview)

  return div
}

if (location.hash === "#about") {
  root.innerHTML = ""
  const aboutScreen = AboutScreen()
  root.append(aboutScreen)
} else {
  const homeScreen = HomeScreen()
  root.innerHTML = ""
  root.append(homeScreen)
}

