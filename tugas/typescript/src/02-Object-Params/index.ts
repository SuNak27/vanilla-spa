const count = (params: { first: number, second: number }) => {
  return params.first + params.second;
};

console.log(count({ first: 1, second: 2 }));