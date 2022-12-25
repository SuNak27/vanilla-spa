const Home = () => {
  const div = document.createElement("div");
  div.classList.add("home");

  const h1 = document.createElement("h1");
  h1.innerText = "Home";

  div.appendChild(h1);

  return div;
}


export default Home;