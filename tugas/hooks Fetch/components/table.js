function Table(props) {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const tr = document.createElement('tr');
  const th = document.createElement('th');
  console.log(props.data);
  th.textContent = 'Nama Produk';
  tr.append(th);
  thead.append(tr);
  table.append(thead);

  props.data.forEach((item) => {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = item.title;
    tr.append(td);
    tbody.append(tr);
  });

  table.append(tbody);

  return table;
}

export default Table;