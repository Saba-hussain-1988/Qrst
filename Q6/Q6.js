"use strict";
/* Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
 Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed.
 Then print the name after stripping the white spaces.
*/
//store a name with white space
let person_Name = "\t \n Ahmed \n \t";
//print wiht white spaces
console.log("Print the name with white space: ", person_Name);
//print without white spaces
console.log("Print the name without spaces:", person_Name.trim());
