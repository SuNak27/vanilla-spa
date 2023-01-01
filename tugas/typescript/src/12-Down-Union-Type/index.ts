const coerceAmount = (amount: number | { amount: number }) => {
  if (typeof amount === "number") {
    return amount;
  }

  return amount.amount;
};

console.log(coerceAmount(100));
console.log(coerceAmount({ amount: 100 }));