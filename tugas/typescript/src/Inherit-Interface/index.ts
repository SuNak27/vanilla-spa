/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */

interface Base {
  id: number;
}

interface UserInterface extends Base {
  firstName: string;
  lastName: string;
}

interface PostInterface extends Base {
  title: string;
  body: string;
}

interface CommentInterface extends Base {
  comment: string;
}


const userVar: UserInterface = {
  id: 1,
  firstName: "Alfad",
  lastName: "Haq",
};

const postVar: PostInterface = {
  id: 1,
  title: "Why I love TypeScript",
  body: "Because it's awesome",
};

const commentVar: CommentInterface = {
  id: 1,
  comment: "I agree",
};

console.log(userVar.id);
console.log(postVar.id);
console.log(commentVar.id);



