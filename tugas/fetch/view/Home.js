import renderApp from "../main.js";
import store from "../store/index.js";

const Home = () => {
  const div = document.createElement("div");
  div.innerHTML = `<h1>Home</h1>`;

  const input = document.createElement("input");
  input.id = "search";
  input.value = store.state.search;

  const searchButton = document.createElement("button");
  searchButton.id = "button";
  searchButton.innerHTML = "Search";
  searchButton.addEventListener("click", () => {
    store.setState(() => store.state.search = input.value);
    renderApp();
  });

  const loadings = document.createElement("tr");
  loadings.innerHTML = `<td colspan="5">Loading...</td>`;

  const table = document.createElement("table");
  table.innerHTML = `
    <tr>
      <th>Product Name</th>
      <th>Price</th>
      <th>Stock</th>
      <th>Category</th>
      <th>Image</th>
    </tr>
  `;

  table.append(loadings);

  fetch(`https://dummyjson.com/products/search?q=${store.state.search}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        loadings.innerHTML = `<td colspan="5">${response.statusText}</td>`;
      }
    })
    .then((data) => {
      store.setState(() => store.state.products = data.products);
      if (store.state.products.length) {
        store.state.products.forEach((product) => {
          const tr = document.createElement("tr");
          tr.innerHTML = `
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.stock}</td>
            <td>${product.category}</td>
            <td><img src="${product.thumbnail}" alt="${product.title}" width="100px"></td>
          `;
          table.append(tr);
        });
        table.removeChild(loadings);
      } else {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td colspan="5">Data Empty</td>
        `;
        table.append(tr);
        table.removeChild(loadings);
      }
    })
    .catch((error) => {
      alert("Terjadi kesalahan");
      console.error(error);
    });


  div.append(input);
  div.append(searchButton);
  div.append(table);

  return div;
};

export default Home;