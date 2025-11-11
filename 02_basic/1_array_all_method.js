let arr = [1,2,3,4,5];
// #region 1. push()
/*
  push() adds an element to the end of the array.
  Syntax: arr.push(item)
*/
// arr.push(6);
// console.log(arr);
// #endregion

// #region 2. unshift()
/*
  unshift() adds an element to the beginning of the array.
  Syntax: arr.unshift(item)
*/
// arr.unshift(0);
// console.log(arr);
// #endregion

// #region 3. pop()
/*
  pop() removes the last element from the array.
  Syntax: arr.pop()
*/
// arr.pop();
// console.log(arr);
// #endregion
 
// #region 4. shift()
/*
  shift() removes the first element from the array.
  Syntax: arr.shift()
*/
// arr.shift();
// console.log(arr);
// #endregion

// #region 5. reverse()
/*
  reverse() reverses the array in place.
  Syntax: arr.reverse()
*/
arr.reverse(); // reverse the array
arr.reverse(); // re-reverse to original
console.log(arr);
// #endregion
  
// #region 6. splice()
/*
  splice() is used to add, remove, or replace elements in an array.
  Syntax: splice(start, deleteCount, item1, item2, ...)
  - start: index to begin
  - deleteCount: number of elements to remove
  - items: elements to insert
*/
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.splice(2, 2, 6, 7);
// console.log(arr);     // [1, 2, 6, 7, 5]
// console.log(newArr);  // [3, 4]
// #endregion

// #region 7. slice()
/*
  slice() extracts a portion of the array into a new array.
  Syntax: arr.slice(start, end)
  - start: inclusive index (means that element include in arr)
  - end: exclusive index (means that element not include in arr eni pela na batha)
*/
//let slicedArr = arr.slice(0, 4);
//console.log(arr);        // original array remains unchanged
//console.log(slicedArr);  // [1, 2, 6, 7]
// #endregion

// #region 8. sort()
/*
  sort() is used to sort the elements of an array.
  - By default, it sorts elements as strings in ascending order.
  - For numbers, you need to provide a compare function: (a, b) => a - b
  - It modifies the original array.
*/

// Default sort (as strings)
// arr.sort();
// console.log("Default sort (as strings):", arr); // Output: [1, 2, 5, 7, 9] — may be incorrect for numbers

// // Numeric ascending sort
// arr = [5, 2, 9, 1, 7];
// arr.sort((a, b) => a - b);
// console.log("Numeric ascending:", arr); // Output: [1, 2, 5, 7, 9]

// // Numeric descending sort
// arr = [5, 2, 9, 1, 7];
// arr.sort((a, b) => b - a);
// console.log("Numeric descending:", arr); // Output: [9, 7, 5, 2, 1]
// #endregion

// #region 9. find()
/*
  find() returns the first element in the array that satisfies the provided testing function.
  - If no element matches, it returns undefined.
  - It does NOT modify the original array.
  Syntax: arr.find(callback)
*/

let numbers = [10, 25, 30, 45, 60];
let found = numbers.find(num => num > 30);
console.log("First number > 30:", found); // Output: 45
// #endregion

// #region 10. some()
/*
  some() checks if at least one element in the array passes the test implemented by the provided function.
  - Returns true if any element passes, otherwise false.
  - It does NOT modify the original array.
  Syntax: arr.some(callback)
*/

let hasLargeNumber = numbers.some(num => num > 50);
console.log("Any number > 50:", hasLargeNumber); // Output: true
// #endregion

// #region 11. every()
/*
  every() checks if all elements in the array pass the test implemented by the provided function.
  - Returns true only if ALL elements pass, otherwise false.
  - It does NOT modify the original array.
  Syntax: arr.every(callback)
*/

let allAboveTen = numbers.every(num => num > 10);
console.log("All numbers > 10:", allAboveTen); // Output: false
// #endregion

// #region 12. indexOf()
/*
  indexOf() returns the first index at which a given element can be found in the array.
  - Returns -1 if the element is not found.
  - Case-sensitive for strings.
  Syntax: arr.indexOf(value)
*/

let fruits = ["apple", "banana", "cherry", "banana"];
let firstBanana = fruits.indexOf("banana");
console.log("First index of 'banana':", firstBanana); // Output: 1
// #endregion

// #region 13. lastIndexOf()
/*
  lastIndexOf() returns the last index at which a given element can be found in the array.
  - Returns -1 if the element is not found.
  Syntax: arr.lastIndexOf(value)
*/

let lastBanana = fruits.lastIndexOf("banana");
console.log("Last index of 'banana':", lastBanana); // Output: 3
// #endregion

// #region 14. includes()
/*
  includes() checks if an array contains a certain value.
  - Returns true or false.
  Syntax: arr.includes(value)
*/

let hasCherry = fruits.includes("cherry");
console.log("Contains 'cherry':", hasCherry); // Output: true
// #endregion

// #region 15. join()
/*
  join() joins all elements of an array into a string.
  - You can specify a separator.
  Syntax: arr.join(separator)
*/

let fruitString = fruits.join(", ");
console.log("Joined string:", fruitString); // Output: "apple, banana, cherry, banana"
// #endregion

// #region 16. toString()
/*
  toString() converts the array into a comma-separated string.
  - Similar to join() with default separator.
  Syntax: arr.toString()
*/

let stringVersion = fruits.toString();
console.log("Array to string:", stringVersion); // Output: "apple,banana,cherry,banana"
// #endregion

// #region 17. flat()
/*
  flat() creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
  Syntax: arr.flat(depth)
*/

let nestedArr = [1, 2, [3, 4], [5, [6, 7]]];
let flatArr = nestedArr.flat(2);
console.log("Flattened array:", flatArr); // Output: [1, 2, 3, 4, 5, 6, 7]
// #endregion

// #region 18. flatMap()
/*
  flatMap() first maps each element using a mapping function, then flattens the result into a new array.
  - It only flattens one level deep.
  Syntax: arr.flatMap(callback)
*/

let nums = [1, 2, 3];
let doubledAndFlattened = nums.flatMap(n => [n, n * 2]);
console.log("flatMap result:", doubledAndFlattened); // Output: [1, 2, 2, 4, 3, 6]
// #endregion

// #region 19. findIndex()
/*
  findIndex() returns the index of the first element that satisfies the provided testing function.
  - Returns -1 if no element matches.
  Syntax: arr.findIndex(callback)
*/

let ages = [12, 17, 19, 21];
let adultIndex = ages.findIndex(age => age >= 18);
console.log("Index of first adult:", adultIndex); // Output: 2
// #endregion

// #region 20. fill()
/*
  fill() fills all the elements in an array with a static value.
  - You can specify start and end index.
  Syntax: arr.fill(value, start, end)
*/

let filledArr = new Array(5).fill(0);
console.log("Filled with 0s:", filledArr); // Output: [0, 0, 0, 0, 0]

let partialFill = [1, 2, 3, 4, 5].fill(9, 1, 4);
console.log("Partially filled:", partialFill); // Output: [1, 9, 9, 9, 5]
// #endregion

// #region 21. Array.from()
/*
  Array.from() creates a new array from an iterable or array-like object.
  - You can also apply a map function as the second argument.
  Syntax: Array.from(arrayLike, mapFn)
*/

let str = "hello";
let charArray = Array.from(str);
console.log("Array from string:", charArray); // Output: ['h', 'e', 'l', 'l', 'o']

let squares = Array.from([1, 2, 3], x => x * x);
console.log("Squares:", squares); // Output: [1, 4, 9]
// #endregion

// #region 22. Array.isArray()
/*
  Array.isArray() checks whether the given value is an array.
  - Returns true or false.
  Syntax: Array.isArray(value)
*/

console.log("Is array:", Array.isArray([1, 2, 3])); // true
console.log("Is array:", Array.isArray("hello"));   // false
// #endregion

// #region 23. keys(), values(), entries()
/*
  These methods return iterators for array indices, values, or [index, value] pairs.
  - keys(): returns index iterator
  - values(): returns value iterator
  - entries(): returns [index, value] iterator
*/

let colors = ["red", "green", "blue"];

console.log("Keys:");
for (let key of colors.keys()) {
  console.log(key); // 0, 1, 2
}

console.log("Values:");
for (let value of colors.values()) {
  console.log(value); // red, green, blue
}

console.log("Entries:");
for (let [index, value] of colors.entries()) {
  console.log(index, value); // 0 red, 1 green, 2 blue
}
// #endregion



