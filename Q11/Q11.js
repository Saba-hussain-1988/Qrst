"use strict";
/* Names: Store the names of a few of your friends in a array called names.
 Print each person’s name by accessing each element in the list, one at a time.
*/
Object.defineProperty(exports, "__esModule", { value: true });
// import an array
const a11_js_1 = require("./a11.js");
//print the name of frndz, one at a time
//with loop
for (let i = 0; i < a11_js_1.friends.length; i++) {
    let j = i + 1;
    console.log("friend", j, ":", a11_js_1.friends[i]);
}
