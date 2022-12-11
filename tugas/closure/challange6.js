// CHALLENGE 6
function delay(func, wait) {
  return function () {
    setTimeout(func, wait);
  };
}

// /*** Uncomment these to check your work! ***/
const delayedFunc = delay(
  () => console.log('Hi!'), 1000);
delayedFunc(); // should log (after 1 second): 'Hi!'
