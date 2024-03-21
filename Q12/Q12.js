"use strict";
/* Greetings: Start with the array you used in Exercise 11,
but instead of just printing each person’s name, print a message to them.
The text of each message should be the same,
 but each message should be personalized with the person’s name.*/
Object.defineProperty(exports, "__esModule", { value: true });
//start with the array of ex11
const a11_js_1 = require("../Q11/a11.js");
//print the personalized message to them
//with the help of loop
for (let k = 0; k < a11_js_1.friends.length; k++) {
    console.log(`Hello ${a11_js_1.friends[k]}! \nWhere are you vanished nowAdays, I\`m really missing you.`);
}
