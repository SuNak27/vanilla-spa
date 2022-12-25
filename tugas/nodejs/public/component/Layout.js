const Layout = (props) => {
  const layout = document.createElement("div");
  layout.classList.add("layout");

  layout.append(props.navbar, props.children);

  return layout;
};

export default Layout;