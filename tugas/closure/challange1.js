// CHALLENGE 1
function createFunction() {
  const text = "hello";

  function hello(text) {
    console.log(text);
  }

  hello(text);
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1; // => should console.log('hello');