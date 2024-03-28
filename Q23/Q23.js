"use strict";
/* Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/
let x = 'Hello';
let y = 10;
let z = 8;
let a = 100n;
let b = true;
console.log(`If  x= ${x} \n y= ${y} \nz= ${z} \n a=${a}\n and \n b=${b} then`);
// case sensitive
console.log(`Is x == 'hello'? I predict false.`);
console.log(x === "hello");
console.log(`Is x == 'Hello' ? I predict true.`);
console.log(x === 'Hello');
console.log(`Is y-2 === z? I predict true.`);
console.log(y - 2 === z); //10 -2 = 8
console.log(`Is a === 50n * 2n? I predict true.`);
console.log(a === (50n * 2n)); //50n * 2n = 100n
console.log(`Is a === 50n + 2n? I predict false.`);
console.log(a === (50n + 2n)); //50n + 2n = 52n !== 100n
console.log(`Is z === y? I predict false.`);
console.log(z === y); //8 != 10
console.log(`Is z !== y? I predict true.`);
console.log(z !== y); //true
console.log(`Is( a === (50n * 2n)) === b? I predict true.`);
console.log((a === (50n * 2n)) === b); // 100n = 50n * 2n === true,  true = true
console.log(`Is (z === y) === b? I predict false.`);
console.log((z === y) === b); // false 
console.log(`Is x !== 'World'? I predict true.`);
console.log(x !== 'World'); //true
console.log(`Is z <= y? I predict true.`);
console.log(z <= y); //true
console.log(`Is y >= 15? I predict false.`);
console.log(y >= 15); //false
console.log(`Is x.toLowerCase() ==='hello'? I predict true.`);
console.log(x.toLowerCase() === 'hello'); //true
console.log(`Is b !== (a === 100n)? I predict false.`);
console.log(b !== (a === 100n)); //false
console.log(`Is (2 * 5) < y ? I predict false.`);
console.log((2 * 5) < y);
console.log(`Is z <= y? I predict true`);
console.log(z <= y);
