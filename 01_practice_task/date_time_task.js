/* 
- Get current date and time using new Date()
- Format output as:
- DD-MM-YYYY
- Month Day, Year
- HH:MM:SS
- Calculate:
- Day of the week
- Days remaining until December 31st

**************output like *************
Today is Tuesday, November 11, 2025
Formatted: 11-11-2025
Time: 10:43:00
Days left this year: 50
*/

let now = new Date();

let day = now.getDate();
let month = now.getMonth() + 1;
let year = now.getFullYear();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let weekdays =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let weekday =weekdays[now.getDay()];

let years=  ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    let FullYearName= years[now.getMonth()];




console.log(`Today is ${weekday}\n${FullYearName} ${day}, ${year} \nFormatted: ${day}-${month}-${year}\nTime: ${hours}:${minutes}:${seconds}.`)