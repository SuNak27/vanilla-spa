const getName = (params: { first: string; last?: string }) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

console.log(getName({ first: "Alfad Sabil", last: "Haq" }));
console.log(getName({ first: "Alfad Sabil" }));