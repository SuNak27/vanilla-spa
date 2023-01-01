interface UserObject {
  id: number;
  firstName: string;
  lastName: string;
  role: "admin" | "user" | "super-admin";
  posts: Array<PostArray>;
}

interface PostArray {
  id: number;
  title: string;
}

const defaultUserObject: UserObject = {
  id: 1,
  firstName: "Alfad",
  lastName: "Haq",
  role: "admin",
  posts: [
    {
      id: 1,
      title: "Why I love TypeScript",
    },
    {
      id: 2,
      title: "Why I don't eat more vegetables",
    },
  ],
};