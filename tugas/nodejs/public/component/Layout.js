const Layout = (props) => {
  const layout = document.createElement("div");
  layout.classList.add("layout");

  const container = document.createElement("div");
  container.classList.add("container");

  container.appendChild(props.children);

  layout.append(props.navbar, container);

  return layout;
};

export default Layout;