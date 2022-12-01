import { send, state } from "../store/index.js";

const Home = () => {
  const div = document.createElement("div");
  div.innerHTML = `<h1>Home</h1>`;

  const form = document.createElement("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    send({ type: "FETCH" });
  });
  form.addEventListener("reset", (event) => {
    event.preventDefault();
    send({ type: "RESET_SEARCH" });
  });

  const input = document.createElement("input");
  input.id = "search";
  input.value = state.search;
  input.addEventListener("input", (event) => {
    send({ type: "SEARCH", payload: { search: event.target.value } });
  });

  const searchButton = document.createElement("button");
  searchButton.id = "button";
  searchButton.innerHTML = "Search";
  searchButton.type = "submit";
  searchButton.disabled = state.isLoading

  const resetButton = document.createElement("button");
  resetButton.id = "reset";
  resetButton.innerHTML = "Reset";
  resetButton.type = "reset";

  const text = document.createElement("p");
  if (state.search) {
    text.innerHTML = "Search: " + state.search;
  }

  const loadings = document.createElement("tr");
  loadings.innerHTML = `<td colspan="5">Loading...</td>`;
  loadings.style.display = state.isLoading ? "table-row" : "none";

  const table = document.createElement("table");
  table.innerHTML = `
    <thead>
      <tr>
        <th>Image</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Category</th>
      </tr>
    </thead>
  `;

  if (!state.isLoading) {
    table.innerHTML += `
    <tbody>
      ${state.products.map((product) => `
        <tr>
          <td><img src="${product.thumbnail}" alt="${product.title}" width="100px"></td>
          <td>${product.title}</td>
          <td>${product.price}</td>
          <td>${product.stock}</td>
          <td>${product.category}</td>
        </tr>
      `).join("")}
    </tbody>
    `;

    if (state.products.length === 0) {
      table.innerHTML += `
        <tfoot>
          <tr>
            <td colspan="5">No Data</td>
          </tr>
        </tfoot>
      `;
    }
  } else {
    table.appendChild(loadings);
  }

  form.append(input, searchButton, resetButton, text);
  div.append(form, text, table);
  return div;
};

export default Home;