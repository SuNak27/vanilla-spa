interface UserValue {
  id: number;
  firstName: string;
  lastName: string;
  /**
   * How do we ensure that role is only one of:
   * - 'admin'
   * - 'user'
   * - 'super-admin'
   */
  role: Role;
}

type Role = "admin" | "user" | "super-admin";

const defaultUserValue: UserValue = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: "admin",
};

console.log(defaultUserValue);
