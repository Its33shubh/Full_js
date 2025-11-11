// - Prompt the user for:
// - Full name
// - Birth year
// - Extract first and last name using string methods
// - Calculate age based on current year
// - Use Math methods to:
// - Round the square root of their age
// - Generate a random number between 1 and 100
// ********** output like***********'
/* Hello John Doe!
You are 25 years old.
Fun fact: √25 rounded is 5.
Here's a lucky number for you: 73*/



let fullName = 'shubham kaklotar'
let birthYear=  2005;

let currentYear=new Date().getFullYear()
let age=currentYear- birthYear;
let sqrtAge=Math.sqrt(age);
let roundAge =Math.round(sqrtAge);
let luckyNUmber = Math.floor((Math.random() * 100) + 1);

console.log(`Hello ${fullName}\nyou are ${age} years old.\nFun fact:√${age} rounded is ${roundAge}.\nHere's a lucky number for you:${luckyNUmber} `);
