// CHALLENGE 2
function createFunctionPrinter(input) {
  function printInput() {
    console.log(input);
  }
  return printInput;
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');