/*
--What is an IIFE?
- IIFE stands for Immediately Invoked Function Expression.
- It is a function that runs as soon as it is defined.
- Commonly used to create a private scope and avoid polluting the global namespace.
*/

//  Named IIFE using function declaration
(function chai() {
    // This function is named 'chai' and runs immediately
    console.log(`DB CONNECTED`);
})();
// Output: DB CONNECTED

/*
 Key Syntax Notes:
- The function is wrapped in parentheses to convert it into an expression.
- The trailing () invokes the function immediately.
*/

// 🔁 IIFE using arrow function with parameter
((name) => {
    // This arrow function is anonymous and accepts a parameter
    console.log(`DB CONNECTED TWO ${name}`);
})('shubham');
// Output: DB CONNECTED TWO shubham