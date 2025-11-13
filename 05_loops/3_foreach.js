/*
 What is `forEach`
- `forEach` is an array method used to execute a callback function on each element.
- It does not return a new array and cannot be broken with `break` or `continue`.
- Syntax: array.forEach((element, index, array) => { ... })
*/

const myArray = [2, 5, 3, 7, 8];

// Basic usage: log each element
myArray.forEach((item) => {
    console.log(`Item: ${item}`);
});
// Output: 2, 5, 3, 7, 8

// Accessing index and array
myArray.forEach((item, index, arr) => {
    console.log(`Index ${index} has value ${item}`);
});
// Output: Index 0 has value 2, etc.

/*
Notes:
- `forEach` is ideal for side effects (e.g., logging, updating DOM).
- It does not support early exit (`break` or `return`).
- For transformations, use `map`, `filter`, or `reduce` instead.
*/