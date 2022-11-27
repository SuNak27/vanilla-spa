let state = {
  products: localStorage.getItem("product") ?? [],
  search: localStorage.getItem("search") || "",
};

const Home = () => {
  const div = document.createElement("div");
  div.innerHTML = `<h1>Home</h1>`;

  const input = document.createElement("input");
  input.id = "search";
  input.value = state.search;

  const searchButton = document.createElement("button");
  searchButton.id = "button";
  searchButton.innerHTML = "Search";
  searchButton.addEventListener("click", () => {
    setState(() => state.search = input.value);
    renderApp();
  });

  const loadings = document.createElement("tr");
  loadings.innerHTML = `<td>Loading...</td>`;

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

  fetch(`https://dummyjson.com/prssdoducts/search?q=${state.search}`)
    .then((response) => response.json())
    .then((data) => {
      setState(() => state.products = data.products);
      if (state.products.length) {
        state.products.forEach((product) => {
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


const App = () => {
  const home = Home;

  return home();
}


const onStateChange = () => {
  if (state.search !== localStorage.getItem("search")) {
    localStorage.setItem("search", state.search);
  }
  if (state.products !== JSON.parse(localStorage.getItem("product"))) {
    localStorage.setItem("product", JSON.stringify(state.products));
  }

};


const setState = (callback) => {
  callback();
  onStateChange();
}

const renderApp = () => {
  const root = document.getElementById("app");

  const app = App();
  root.innerHTML = "";
  return root.append(app);
};

renderApp();