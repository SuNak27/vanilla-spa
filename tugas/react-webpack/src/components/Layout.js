import React from "react";

const Layout = (props) => {
  return (
    <div className="layout">
      {props.navbar}
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Layout;