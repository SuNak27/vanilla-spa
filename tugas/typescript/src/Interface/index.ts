/**
 * Reference:
 * https://pawelgrzybek.com/typescript-interface-vs-type/
 * https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases
 */

interface Base {
  id: number;
}

export interface Person {
  name: string;
  age: number;
  address: string;
};

export interface User extends Base {
  firstName: string;
  lastName: string;
  isAdmin?: boolean;
  role?: Role;
  posts?: Array<Post>;
}

export interface Post extends Base {
  id: number;
  title: string;
  body?: string;
}

export interface Komen extends Base {
  comment: string;
}

export interface LukeSkywalker {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export type FocusListener = (isFocused: boolean) => void;
export type MyType = Omit<User, "id">;
export type Role = "admin" | "user" | "super-admin";