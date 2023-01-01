/**
 * Reference:
 * https://pawelgrzybek.com/typescript-interface-vs-type/
 * https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases
 */

interface Base {
  id: number;
}

interface Person {
  name: string;
  age: number;
  address: string;
};

interface User extends Base {
  firstName: string;
  lastName: string;
  isAdmin?: boolean;
  role?: Role;
  posts?: Array<Post>;
}

interface Post extends Base {
  id: number;
  title: string;
  body?: string;
}

interface Komen extends Base {
  comment: string;
}

interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

type FocusListener = (isFocused: boolean) => void;
type MyType = Omit<User, "id">;
type Role = "admin" | "user" | "super-admin";