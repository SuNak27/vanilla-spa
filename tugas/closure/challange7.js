// CHALLENGE 7
function rollCall(names) {
  let counter = 0;
  return function () {
    if (counter < names.length) {
      console.log(names[counter]);
      counter++;
    } else {
      console.log("Everyone accounted for");
    }
  };
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'