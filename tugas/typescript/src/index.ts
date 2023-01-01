// Playground
var person: Person = {
  name: "Alfad Sabil Haq",
  age: 20,
  address: "Paiton",
};
console.log("Person: ", person);

// 01 - Any
var addTwoNumbers = (a: number, b: number) => {
  return a + b;
};
console.log("===== 01 - Any =====");
console.log(addTwoNumbers(1, 2));

// 02 - Object Parameter
var count = (params: { first: number, second: number }) => {
  return params.first + params.second;
};
console.log("===== 02 - Object Parameter =====");
console.log(count({ first: 1, second: 2 }));

// 03 - Optional Property
var getName = (params: { first: string; last?: string }) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};
console.log("===== 03 - Optional Property =====");
console.log(getName({ first: "Alfad Sabil", last: "Haq" }));
console.log(getName({ first: "Alfad Sabil" }));


// 04 - Optional Parameter
var getNameParam = (first?: string, last?: string) => {
  if (last) {
    return `${first} ${last}`;
  }
  return first;
};
console.log("===== 04 - Optional Parameter =====");
console.log(getNameParam("Alfad Sabil", "Haq"));
console.log(getNameParam("Alfad Sabil"));

// 05 - Type To Variable
var defaultUser: User = {
  id: 1,
  firstName: "Alfad",
  lastName: "Haq",
  isAdmin: true,
}

var getUserId = (user: User) => {
  return user.id;
};
console.log("===== 05 - Type To Variable =====");
console.log(getUserId(defaultUser));

// 06 - Value Type
var defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: "admin",
};
console.log("===== 06 - Value Type =====");
console.log(defaultUser);

// 07 - Array Type
var defaultUser: User = {
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
console.log("===== 07 - Array Type =====");
console.log(defaultUser.posts[0]);

// 08 - Function Type


/**
 * How do we ensure that makeUser ALWAYS
 * returns a user?
 */
var makeUser = (): User => {
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

var user = makeUser();
console.log("===== 08 - Function Type =====");
console.log(user.id);
console.log(user.posts[0].title);

// 09 - Typing Promise
var fetchLukeSkywalker = async () => {
  var data: LukeSkywalker = await fetch("https://swapi.dev/api/people/1").then((res) => {
    return res.json();
  });

  return data;
};

fetchLukeSkywalker().then((data) => {
  console.log("===== 09 - Typing Promise =====");
  console.log(data);
});

// 10 - Type Argument
var guitarists = new Set<string>();

guitarists.add("Jimi Hendrix");
guitarists.add("Eric Clapton");

console.log("===== 10 - Type Argument =====");
console.log(guitarists);

// 11 - Dynamic Key
const createCache = () => {
  const cache: Record<string, string> = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

const cache = createCache();

cache.add("1", "Alfad");
cache.cache["1"] = "Haq";
console.log("===== 11 - Dynamic Key =====");
console.log(cache.cache["1"]);

// 12 - Down Union Type
const coerceAmount = (amount: number | { amount: number }) => {
  if (typeof amount === "number") {
    return amount;
  }

  return amount.amount;
};

console.log("===== 12 - Down Union Type =====");
console.log(coerceAmount(100));
console.log(coerceAmount({ amount: 100 }));

// 13 - Typing Error
const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    } else {
      return "Success!";
    }
  } catch (e) {
    if (e instanceof Error) {
      return e.message;
    }
  }
};

console.log("===== 13 - Typing Error =====");
console.log(tryCatchDemo("succeed"));
console.log(tryCatchDemo("fail"));

// 14 - Inherit Interface
var user: User = {
  id: 1,
  firstName: "Alfad",
  lastName: "Haq",
  isAdmin: false
};

const post: Post = {
  id: 2,
  title: "Why I love TypeScript",
  body: "Because it's awesome",
};

const komentar: Komen = {
  id: 2,
  comment: "I agree",
};

console.log("===== 14 - Inherit Interface =====");
console.log(user.id);
console.log(post.id);
console.log(komentar.id);

// 15 - Combine Interface
const getDefaultUserAndPosts = (): User & { posts: Post[] } => {
  return {
    id: 1,
    firstName: "Alfad",
    lastName: "Haq",
    posts: [
      {
        id: 1,
        title: "How I eat so much cheese",
        body: "It's pretty edam difficult",
      },
    ],
  };
};

const userAndPosts = getDefaultUserAndPosts();
console.log("===== 15 - Combine Interface =====");
console.log(userAndPosts.posts[0]);

// 16 - Selective Construct
var newUser: MyType = {
  firstName: "Alfad",
  lastName: "Haq",
};

console.log("===== 16 - Selective Construct =====");
console.log(newUser);

// 17 - Typing Function
const addListener = (onFocusChange: FocusListener) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

console.log("===== 17 - Typing Function =====");
addListener((isFocused) => {
  console.log({ isFocused });
  if (isFocused) {
    console.log("Window is focused");
  } else {
    console.log("Window is not focused");
  }
});

// 18 - Typing Async Function
const createThenGetUser = async (
  createUser: () => Promise<number>,
  getUser: (id: number) => Promise<User>,
): Promise<User> => {
  const userId: number = await createUser();

  const user = await getUser(userId);

  return user;
};


var userData = createThenGetUser(
  async () => 1,
  async (id: number) => {
    return {
      id,
      firstName: "Alfad",
      lastName: "Haq",
    };
  },
);

console.log("===== 18 - Typing Async Function =====");
userData.then((user) => {
  console.log("===== 18 - Typing Async Function =====");
  console.log(user);
});