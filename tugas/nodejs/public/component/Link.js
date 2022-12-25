const Link = (props) => {
  const a = document.createElement('a');
  a.href = props.href;
  a.innerText = props.text;
  a.onclick = (e) => {
    props.onClick(e);
  };

  return a;
};

export default Link;