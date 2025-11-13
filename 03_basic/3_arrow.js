// Object with Method Using `this`

const user = {
    username: "hitesh",
    price: 999,

    // Method using `this` to refer to the object context
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // ✅ Refers to user.username
        console.log(this); // Logs the entire user object
    }
};

// user.welcomeMessage(); // Outputs: hitesh , welcome to website
// user.username = "sam"; // Updates username
// user.welcomeMessage(); // Outputs: sam , welcome to website

//  Global `this` in Node.js or strict mode
// console.log(this); // In global scope, `this` refers to empty object in Node.js

//  Regular Function and `this` Behavior

// function chai(){
//     let username = "hitesh";
//     console.log(this.username); // ❌ `this` does not refer to function scope
// }
// chai();

// const chai = function () {
//     let username = "hitesh";
//     console.log(this.username); // ❌ Still undefined
// };

//  Arrow Function and Lexical `this`

const chai = () => {
    let username = "shubham";
    console.log(this); // Arrow functions inherit `this` from their lexical scope
};

// chai(); // Logs global or enclosing scope object

//  Arrow Function Variants

// Explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// };

// Implicit return (single expression)
//const addTwo = (num1, num2) => num1 + num2;

// Implicit return with parentheses
// const addTwo = (num1, num2) => (num1 + num2);

// Returning an object (must wrap in parentheses)
const addTwo = (num1, num2) => ({ username: "shubham" });

console.log(addTwo(3, 4)); // Outputs: { username: 'hitesh' }

//  Array Iteration Placeholder

// const myArray = [2, 5, 3, 7, 8];
// myArray.forEach(); // Method to iterate over array elements