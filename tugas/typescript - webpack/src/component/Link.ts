export type LinkProps = {
  href: string;
  text: string;
  active: string;
  onClick: (e: Event) => void;
};

const Link = (props: LinkProps) => {
  const a = document.createElement('a');
  a.href = props.href;
  a.innerText = props.text;
  a.onclick = (e: Event) => {
    props.onClick(e);
  };

  if (props.active === props.href) {
    a.classList.add('active');
  }

  return a;
};

export default Link;