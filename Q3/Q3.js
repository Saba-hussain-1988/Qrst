"use strict";
/* : Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase.
*/
//save a person name in a variable
let personName = "Mustafa";
//print the name in lowerCase
console.log("Print in Lower Case: ", personName.toLowerCase());
//print the name in upperCase
console.log("Print in Upper Case:", personName.toUpperCase());
//print the name in title Case
console.log("Print in Title Case:", personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
