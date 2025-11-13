/*
 1. for...of Loop
- Used to iterate over **iterable objects** like arrays, strings, maps, sets, etc.
- Returns the **values** of the iterable.

Best for: Arrays, Strings, Sets, Maps
*/

const arr = [10, 20, 30];

for (const value of arr) {
    console.log(`for...of value: ${value}`);
}
// Output: 10, 20, 30

const str = "JS";

for (const char of str) {
    console.log(`for...of char: ${char}`);
}
// Output: J, S

/*
 2. for...in Loop
- Used to iterate over **enumerable properties** of an object.
- Returns the **keys** (property names).

Best for: Objects
*/

const user = {
    name: "shubh",
    age: 25,
    isAdmin: true
};

for (const key in user) {
    console.log(`for...in key: ${key}`);
    console.log(`for...in value: ${user[key]}`);
}
// Output:
// key: name → value: Hitesh
// key: age → value: 25
// key: isAdmin → value: true

/*
 Note:
- `for...in` can also be used on arrays, but it's not recommended because it iterates over keys (indexes), not values.
- `for...of` cannot be used directly on plain objects unless you convert them to iterable forms (e.g., Object.entries).
*/