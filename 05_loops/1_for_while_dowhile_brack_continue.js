/*
 1. For Loop
- Used when the number of iterations is known.
- Syntax: for(initialization; condition; increment) { ... }
*/

for (let i = 0; i < 5; i++) {
    console.log(`For Loop iteration: ${i}`);
}
// Output: 0 to 4

/*
 2. While Loop
- Used when the number of iterations is unknown and depends on a condition.
- Syntax: while(condition) { ... }
*/

let j = 0;
while (j < 5) {
    console.log(`While Loop iteration: ${j}`);
    j++;
}
// Output: 0 to 4

/*
 3. Do...While Loop
- Similar to while loop, but guarantees at least one execution.
- Syntax: do { ... } while(condition);
*/

let k = 0;
do {
    console.log(`Do...While Loop iteration: ${k}`);
    k++;
} while (k < 5);
// Output: 0 to 4

/*
 Break Statement
- Immediately exits the loop when encountered.
*/

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit loop when i is 5
    }
    console.log(`Break example: ${i}`);
}
// Output: 0 to 4

/*
 Continue Statement
- Skips the current iteration and moves to the next.
*/

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skip iteration when i is 2
    }
    console.log(`Continue example: ${i}`);
}
// Output: 0, 1, 3, 4