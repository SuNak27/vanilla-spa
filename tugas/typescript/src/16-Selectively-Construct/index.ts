interface User {
  id: string;
  firstName: string;
  lastName: string;
}

type MyType = Omit<User, "id">;

export const user: MyType = {
  firstName: "Alfad",
  lastName: "Haq",
};

console.log(user);