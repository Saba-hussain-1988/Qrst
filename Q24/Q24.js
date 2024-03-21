"use strict";
/* More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests. Have at least one True and one
 False result for each of the following:*/
//• Tests for equality and inequality with strings
let aLine = 'Peace Upon You.'; //in title case
let bLine = 'peace upon you.'; // in lower case
console.log(`If aLine = ${aLine} and \n bLine = ${bLine} \n then\n`);
console.log('Is aLine === bLine? I predict false.');
console.log(aLine === bLine);
console.log('Is aLine !== bLine ? I predict true.');
console.log(aLine !== bLine);
console.log('Is aLine.length === bLine.length? I predict true.');
console.log(aLine.length === bLine.length);
console.log("IsaLine.indexOf('e') === aLine.lastIndexOf('e') ? I predict false.");
console.log(aLine.indexOf('e') === aLine.lastIndexOf('e'));
console.log('Is bLine.charAt(0) === aLine.charAt(0)? I predict false.');
console.log(bLine.charAt(0) === aLine.charAt(0));
console.log('Is bLine.indexOf("n") === aLine.lastIndexOf("n")? I predict true.');
console.log(bLine.indexOf("n") === aLine.lastIndexOf("n"));
//• Tests using the lower case function
console.log('Is aLine.toLowerCase() === bLine? I predict true.');
console.log(aLine.toLowerCase() === bLine);
console.log('Is bLine.toLowerCase() === aLine? I predict false.');
console.log(bLine.toLowerCase() === aLine);
//• Numerical tests involving equality and inequality,  
let num1 = 25;
let num2 = 10;
let age = 11;
let aNum = 23;
console.log(`if \n num1 = ${num1}\n num2 = ${num2} \n age = ${age} and \n aNum = ${aNum} /n then:`);
console.log('Is num1 === num2 + age? I predict false.');
console.log(num1 === num2 + age);
console.log('Is num2 !== num1? I predict true.');
console.log(num2 !== num1);
console.log('Is num2 === age? I predict false.');
console.log(num2 === age);
console.log('Is num2 === ++age? I predict true.');
console.log(num2 === --age);
console.log('Is num2 === age? I predict true.');
console.log(num2 === age);
console.log('Is num1 === aNum + 2? I predict true.');
console.log(num1 === aNum + 2);
console.log('Is (num1 %5 === 1)? I predict false.');
console.log(num1 % 5 === 1);
console.log('Is num2 %4 === 0? I predict false.');
console.log(num2 % 4 === 0);
//greater than and less than,
console.log('Is num1 > ++aNum? I predict true.');
console.log(num1 > ++aNum);
console.log('Is num2 < aNum? I predict true.');
console.log(num2 < aNum);
console.log('Is age < num2? I predict false.');
console.log(age < num2);
console.log('Is age > num2? I predict false.');
console.log(age > num2);
//greater than or equal to, and less than or equal to
console.log('Is age <= num2? I predict true.');
console.log(age <= num2);
console.log('Is aNum >= num2? I predict true.');
console.log(aNum >= num2);
console.log('Is num1 >= aNum? I predict true.');
console.log(num1 >= aNum);
console.log('Is age <= num1? I predict true.');
console.log(age <= num1);
console.log('Is age >= aNum? I predict false.');
console.log(age >= aNum);
console.log('Is aNum <= num2? I predict false.');
console.log(aNum <= num2);
//• Tests using "and" and "or" operators
console.log('Is (num2 !== num1 && num1 === aNum ) ? I predict false.');
console.log(num2 !== num1 && num1 === aNum); // for true && takes all values true,
// if it find one value false it breaks the evaluation and returns false
// result is false
console.log('Is num2 !== num1 || num1 === aNum? I predict true.');
console.log(num2 !== num1 || num1 === aNum); // for false || takes all values false,
// if it find one value true it breaks the evaluation and returns true
// result is true
console.log('Is num2 %4 === 2 && num2 === age && age <= num1? I predict true.');
console.log(num2 % 4 === 2 && num2 === age && age <= num1);
console.log('Is num1 <= ++aNum && num2 %4 === 2 && num2 === age && age <= num1? I predict false.');
console.log(num1 <= aNum && num2 % 4 === 2 && num2 === age && age <= num1);
//• Test whether an item is in an array
//• Test whether an item is not in an array 
let item = ['pin', 'pen', 'pot', 'hit', 'het', 'hot'];
let count = [1, 3, 5, 6, 7, 9];
console.log('if \n', item, '\n', count, 'then:\n');
console.log('Is item.includes("put")? I predict false.');
console.log(item.includes("put"));
console.log('Is count.includes(6)? I predict true.');
console.log(count.includes(6));
console.log('Is item.includes("hot")? I predict true.');
console.log(item.includes("hot"));
console.log('Is count.includes(10)? I predict false.');
console.log(count.includes(10));
