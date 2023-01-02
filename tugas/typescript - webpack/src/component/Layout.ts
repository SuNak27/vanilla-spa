type LayoutProps = {
  navbar: HTMLElement;
  children: HTMLElement;
};

export const Layout = (props: LayoutProps) => {
  const layout = document.createElement("div");
  layout.classList.add("layout");

  const container = document.createElement("div");
  container.classList.add("container");

  container.appendChild(props.children);

  layout.append(props.navbar, container);

  return layout;
};