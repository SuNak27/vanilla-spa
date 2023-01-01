interface User2 {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Array<Post>;
}

interface Post {
  id: number;
  title: string;
}

/**
 * How do we ensure that makeUser ALWAYS
 * returns a user?
 */
const makeUser = (): User2 => {
  return {
    id: 1,
    firstName: "Matt",
    lastName: "Pocock",
    role: "admin",
    posts: [
      {
        id: 1,
        title: "Why I love TypeScript",
      },
    ],
  };
};

const user = makeUser();

console.log(user.id);