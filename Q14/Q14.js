"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people you’d like
to invite to dinner. Then use your list to print a message to each person,
inviting them to dinner.
*/
// I`ld like to invite them
const z_js_1 = require("./z.js");
// print inviting message to them with loop
for (let i = 0; i < z_js_1.guestList.length; i++) {
    let message;
    message = "\n\nYou are cordially invited to dinner. It would be an honor to have you join us.\n\nSincerely, \n S.R.Chohan\n";
    console.log(`Dear ${z_js_1.guestList[i]}, ${message}`);
}
