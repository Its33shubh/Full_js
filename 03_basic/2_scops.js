//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "shubham"

    function two(){
        const website = "shubhamcodefectory"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}


/* 
- Global Scope – Variables declared outside any function are accessible everywhere.
- Function Scope – Variables declared inside a function are accessible only within that function.
- Block Scope – Variables declared with let or const inside {} are limited to that block.
-Lexical Scope
   - Functions are executed using the scope in which they were defined, not where they are called.
   - Inner functions have access to variables of their outer (parent) functions.
*/
/*
// Global Scope
let globalVar = "I'm global";
console.log(globalVar); // Accessible anywhere

// Function Scope
function greet() {
  let message = "Hello";
  console.log(message); // Accessible only inside greet()
}
greet();
// console.log(message); // ❌ Error: message is not defined

// Block Scope
if (true) {
  let blockVar = "I'm block scoped";
  console.log(blockVar); // Accessible inside this block
}
// console.log(blockVar); // ❌ Error: blockVar is not defined
function outer() {
    const outerVar = "I'm from outer";
  
    function inner() {
      console.log(outerVar); // ✅ Has access to outerVar due to lexical scope
    }
  
    inner();
  }
  outer();
  */
