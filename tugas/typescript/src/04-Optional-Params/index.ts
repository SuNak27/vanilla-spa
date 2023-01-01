const getNameParam = (first?: string, last?: string) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};

console.log(getNameParam("Alfad Sabil", "Haq"));