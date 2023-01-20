import React from "react";

const Link = (props) => {
  return (
    <a href={props.href} onClick={props.onClick} className={props.active === props.href ? 'active' : ''}>
      {props.text}
    </a>
  );
};

export default Link;