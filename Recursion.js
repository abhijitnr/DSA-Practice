// Recursion : When function call itself
// Otherwise it will get called for initial state
// If a function call itself then there must be an end point

// Demo of recursion

let count = 1;
let number = 10;

const demo = (number) => {
  if (count > number) {
    return;
  }
  console.log("My name is Abhijit" + " " + count);
  count++;
  demo(number);
};
demo(number);
