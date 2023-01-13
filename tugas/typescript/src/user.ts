interface User {
  id: number;
  firstName: string;
  lastName: string;
  test: string;
};

var test: User = {
  id: 1,
  firstName: "Alfad",
  lastName: "Haq",
  admin: true,
  test: "test",
};

console.log("===== 07 - Array Type =====");
console.log(test);
