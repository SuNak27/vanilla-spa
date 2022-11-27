import createElement from "../component/CreateElement.js";
import store from "../store/index.js";

function getData(search) {
  fetch(`https://dummyjson.com/products/search?q=${search}`)
    .then((response) => response.json())
    .then((data) => store.setState({ product: data.products }))
    .catch((error) => console.log(error));

  // console.log(search);
}

const Table = (product) => {
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

  product.forEach((product) => {
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
  return table;
}

const Product = () => {
  const div = document.createElement("div");
  div.innerHTML = `<h1>Product</h1>`;
  const product = store.state.products;
  const input = document.createElement("input");
  input.id = "search";
  input.type = "text";
  input.value = store.state.search;
  input.placeholder = "Search Product";
  input.oninput = (event) => {
    store.setState({ search: event.target.value });
  };
  const searchButton = createElement("button", ["btn", "btn-primary"], { type: "submit" }, null, {
    click: (event) => {
      event.preventDefault();
      getData(store.state.search);
    }
  }, "Search");
  const table = Table(product);

  div.append(input);
  div.append(searchButton);
  div.append(table);
  return div;
}

export default Product