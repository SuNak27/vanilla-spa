// CHALLENGE 5
function after(count, func) {
  let counter = 0;
  return function () {
    counter++;
    if (counter >= count) {
      func();
    }
  };
}

// /*** Uncomment these to check your work! ***/
const called = function () { console.log('hello') };
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed