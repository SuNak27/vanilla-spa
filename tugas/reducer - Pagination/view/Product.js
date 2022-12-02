import { state, send } from "../store/index.js";

const FormElement = () => {
  const form = document.createElement("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    send({ type: "FETCH" });
  });
  form.addEventListener("reset", (event) => {
    event.preventDefault();
    send({ type: "RESET_SEARCH" });
  });

  return form;
}

const SelectLimit = () => {
  const select = document.createElement("select");
  select.id = "limit";
  select.addEventListener("change", (event) => {
    send({ type: "SELECT_LIMIT", payload: { limit: event.target.value } });
  });

  select.innerHTML = `
    <option value="5" ${state.limit === "5" ? "selected" : ""}>5</option>
    <option value="10" ${state.limit === "10" ? "selected" : ""}>10</option>
    <option value="20" ${state.limit === "20" ? "selected" : ""}>20</option>
    <option value="30" ${state.limit === "30" ? "selected" : ""}>30</option>
    <option value="40" ${state.limit === "40" ? "selected" : ""}>40</option>
    <option value="50" ${state.limit === "50" ? "selected" : ""}>50</option>
  `;

  return select;
}

const paginationNumberWithDots = (start, end) => {
  const paginationNumber = document.createElement("span");
  paginationNumber.id = "pagination-number";

  for (let i = start; i <= end; i++) {
    const page = document.createElement("button");
    page.innerHTML = i;
    page.disabled = state.page === i || state.isLoading;
    page.addEventListener("click", () => {
      send({ type: "SELECT_PAGE", payload: { page: i } });
    });

    if (i <= state.totalPage - 1) {
      paginationNumber.append(page);
    } else {
      break;
    }
  }

  const dots = document.createElement("span");
  dots.innerHTML = "...";

  if (state.page < state.totalPage - 3) {
    paginationNumber.appendChild(dots);
  }

  const lastPage = document.createElement("button");
  lastPage.innerHTML = state.totalPage;
  lastPage.disabled = state.page === state.totalPage || state.isLoading;
  lastPage.addEventListener("click", () => {
    send({ type: "LAST_PAGE" });
  });

  paginationNumber.appendChild(lastPage);

  return paginationNumber;
}

const Pagination = () => {
  const pagination = document.createElement("div");
  pagination.id = "pagination";

  const firstPage = document.createElement("button");
  firstPage.innerHTML = "First";
  firstPage.addEventListener("click", () => {
    send({ type: "FIRST_PAGE" });
  });

  const prev = document.createElement("button");
  prev.innerHTML = "Prev";
  prev.addEventListener("click", () => {
    send({ type: "PREV_PAGE" });
  });

  const pages = paginationNumberWithDots(state.page, state.page + 2);

  const next = document.createElement("button");
  next.innerHTML = "Next";
  next.addEventListener("click", () => {
    send({ type: "NEXT_PAGE" });
  });

  const lastPage = document.createElement("button");
  lastPage.innerHTML = "Last";
  lastPage.addEventListener("click", () => {
    send({ type: "LAST_PAGE" });
  });

  pagination.append(firstPage, prev, pages, next, lastPage);

  return pagination;
}

const InputSearch = () => {
  const input = document.createElement("input");
  input.id = "search";
  input.value = state.q;
  input.addEventListener("input", (event) => {
    send({ type: "SEARCH", payload: { search: event.target.value } });
  });

  return input;
}

const SearchButton = () => {
  const searchButton = document.createElement("button");
  searchButton.id = "button";
  searchButton.innerHTML = "Search";
  searchButton.type = "submit";
  searchButton.disabled = state.isLoading

  return searchButton;
}

const ResetButton = () => {
  const resetButton = document.createElement("button");
  resetButton.id = "reset";
  resetButton.innerHTML = "Reset";
  resetButton.type = "reset";

  return resetButton;
}

const TextSearch = () => {
  const text = document.createElement("p");
  if (state.search) {
    text.innerHTML = "Search: " + state.search;
  }

  return text;
}

const Loading = () => {
  const loadings = document.createElement("tr");
  loadings.innerHTML = `<td colspan="5">Loading...</td>`;
  loadings.style.display = state.isLoading ? "table-row" : "none";

  return loadings;
}

const Table = () => {
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
    table.appendChild(Loading());
  }

  return table;
}

const Product = () => {
  const div = document.createElement("div");
  div.innerHTML = `<h1>Home</h1>`;

  const form = FormElement();
  const inputSearch = InputSearch();
  const searchButton = SearchButton();
  const resetButton = ResetButton();
  const textSearch = TextSearch();
  const table = Table();
  const selectLimit = SelectLimit();
  const pagination = Pagination();

  form.append(inputSearch, searchButton, resetButton, textSearch, selectLimit);
  div.append(form, pagination, textSearch, table);
  return div;
};

export default Product;