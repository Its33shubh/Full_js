// #region 1. map()
/*
  map() creates a new array by applying a function to each element of the original array.
  - Does NOT modify the original array.
  Syntax: arr.map(callback)
*/

let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubled); // Output: [2, 4, 6, 8, 10]
// #endregion

// #region 25. filter()
/*
  filter() creates a new array with all elements that pass the test implemented by the provided function.
  - Does NOT modify the original array.
  Syntax: arr.filter(callback)
*/

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // Output: [2, 4]
// #endregion

// #region 26. reduce()
/*
  reduce() executes a reducer function on each element of the array, resulting in a single output value.
  - You can provide an initial value as the second argument.
  Syntax: arr.reduce(callback, initialValue)
*/

let sum = numbers.reduce((accumlator, value) => accumlator + value, 0);
console.log("Sum of numbers:", sum); // Output: 15

let product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log("Product of numbers:", product); // Output: 120
// #endregion