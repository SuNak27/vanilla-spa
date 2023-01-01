/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */

interface Base {
  id: number;
}

interface User extends Base {
  firstName: string;
  lastName: string;
}

interface Post extends Base {
  title: string;
  body: string;
}

interface CommentI extends Base {
  comment: string;
}


var user: User = {
  id: 1,
  firstName: "Alfad",
  lastName: "Haq",
  isAdmin: false
};

const post: Post = {
  id: 1,
  title: "Why I love TypeScript",
  body: "Because it's awesome",
};

const commentVar: CommentI = {
  id: 1,
  comment: "I agree",
};

console.log(user.id);
console.log(post.id);
console.log(commentVar.id);



