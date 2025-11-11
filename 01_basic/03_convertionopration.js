let age = null;

console.log(typeof age);
let valueOfAge = Number(age);
console.log(valueOfAge);
/* 
        "33" => 33
        "33abc" => NaNF
         true => 1; false => 0
*/


let name = 145;
console.log(name);

let valueOfName = String(name);


console.log(valueOfName);

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true


// *************************opration********************


let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);


// more over study about postfix and perfix
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
