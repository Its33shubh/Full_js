
//Object.create
// Object.create allows creation of objects with a specific prototype.
// We'll focus on object literals for this example.

// 🧾 Object Literal with Symbol and Dynamic Properties

// Creating a unique Symbol to use as a property key
const mySym = Symbol("key1");

/*
  Defining a user object with various types of keys:
  - Standard string keys
  - Multi-word string key ("full name")
  - Symbol key (mySym)
  - Array as a value
*/
const JsUser = {
    name: "shubham",                      // Regular key-value pair
    "full name": "shubhamkaklotar",    // Key with space, must be accessed via bracket notation
    [mySym]: "mykey1",                  // Symbol key, ensures uniqueness
    age: 18,
    location: "bhavnagar",
    email: "shub@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"] // Array value
};

// 🧪 Accessing properties using dot and bracket notation
// console.log(JsUser.email);           // Dot notation
// console.log(JsUser["email"]);        // Bracket notation
// console.log(JsUser["full name"]);    // Required for multi-word keys
// console.log(JsUser[mySym]);          // Accessing symbol-keyed property

// ✏️ Updating object properties
JsUser.email = "shubham@gmail.com";    // Email updated

// Freezing the object to prevent further modifications
// Object.freeze(JsUser);              // Uncomment to make object immutable

JsUser.email = "shubh@microsoft.com";  // Will not update if frozen

// Adding methods to the object

// Method without using 'this'
JsUser.greeting = function() {
    console.log("Hello JS user");
};

// Method using 'this' to access object properties
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
};

//  Invoking methods
console.log(JsUser.greeting());     // Outputs: Hello JS user
console.log(JsUser.greetingTwo());  // Outputs: Hello JS user, 


//  Object Creation

// Using object literal syntax (preferred for simplicity)
const tinderUser = {};

// Adding properties dynamically
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); // View the object

// Nested Object Structure

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "shubham",
//             lastname: "kaklotar"
//         }
//     }
// };

// Accessing deeply nested properties
// console.log(regularUser.fullname.userfullname.firstname);

// 🧩 Object Merging Techniques

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// Merging using spread operator (preferred modern syntax)
const obj3 = {...obj1, ...obj2};
// console.log(obj3);

// Alternative: Object.assign (older syntax)
// const obj3 = Object.assign({}, obj1, obj2, obj4);

// 👥 Array of Objects

const users = [
    { id: 1, email: "h@gmail.com" },
    { id: 1, email: "h@gmail.com" },
    { id: 1, email: "h@gmail.com" }
];

// Accessing properties in array of objects
users[1].email;

// 🧰 Object Utility Methods

// console.log(Object.keys(tinderUser));     // Returns array of keys
// console.log(Object.values(tinderUser));   // Returns array of values
// console.log(Object.entries(tinderUser));  // Returns array of [key, value] pairs
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Checks for property existence

// 🧪 Object Destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
};

// Renaming while destructuring
const {courseInstructor: instructor} = course;

// console.log(courseInstructor); // Would throw error (not defined)
// console.log(instructor);       // Correct usage

// 🧾 JSON-like structure (commented example)
/*
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}
*/

// 📁 Placeholder for array of empty objects
[
    {},
    {},
    {}
]



/* ****************summary************

📦 Object Creation
- Object literal syntax: const obj = {}
- Object constructor (commented): const obj = new Object()

🔑 Property Access
- Dot notation: obj.key
- Bracket notation: obj["key"]
- Symbol-keyed property: obj[Symbol("key")]

🧠 Property Update and Mutation
- Direct assignment: obj.key = value
- Object.freeze(): makes object immutable (commented out)

🧩 Nested Objects
- Accessing deeply nested properties: obj.a.b.c

🧬 Object Merging
- Spread operator: {...obj1, ...obj2}
- Object.assign(): Object.assign({}, obj1, obj2, obj3) (commented)

👥 Arrays of Objects
- Array of user objects with shared structure
- Accessing properties via index: users[1].email

📚 Object Utility Methods
- Object.keys(obj): returns array of keys
- Object.values(obj): returns array of values
- Object.entries(obj): returns array of [key, value] pairs
- obj.hasOwnProperty("key"): checks if key exists

🧪 Destructuring
- Extracting and renaming properties: const {courseInstructor: instructor} = course

🧠 Dynamic Keys
- Using Symbols as keys: [mySym]: "value"
- Multi-word keys: "full name": "value"

🧠 Method Definitions Inside Objects
- Function as property: obj.method = function() { ... }
- Using `this` to access object context

🧾 JSON-like Structure
- Sample object structure shown in comment (for reference or API-like format)

📁 Empty Object Array
- Array of empty objects: [{}, {}, {}] (placeholder or initialization)
*/