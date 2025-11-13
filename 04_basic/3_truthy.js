/*
🔍 Truthy vs Falsy in JavaScript

- Falsy values: These evaluate to false in a boolean context.
  false, 0, -0, BigInt 0n, "", null, undefined, NaN

- Truthy values: Everything else, including:
  "0", "false", " ", [], {}, function(){}

🧪 Example: Checking truthiness of an empty array
*/
const userEmail = [];

if (userEmail) {
    console.log("Got user email"); // ✅ Runs because [] is truthy
} else {
    console.log("Don't have user email");
}

// 🧪 More accurate check for empty array
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

/*
📦 Checking for empty object
- Object.keys(obj).length === 0 is a common way to check if an object has no properties
*/
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty"); // ✅ Runs because object has no keys
}

/*
❓ Nullish Coalescing Operator (??)
- Returns the right-hand value only if the left-hand value is null or undefined
- Useful for setting default values
*/
let val1;

// val1 = 5 ?? 10;           // 5
// val1 = null ?? 10;        // 10
// val1 = undefined ?? 15;   // 15
val1 = null ?? 10 ?? 20;     // 10 (first non-null/undefined value)

console.log(val1); // Output: 10

/*
🔀 Ternary Operator
- Shorthand for if-else
- Syntax: condition ? expressionIfTrue : expressionIfFalse
*/
const iceTeaPrice = 100;

iceTeaPrice <= 80
    ? console.log("less than 80")
    : console.log("more than 80"); // ✅ Runs this branch