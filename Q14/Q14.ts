/* Guest List: If you could invite anyone, living or deceased, to dinner, 
who would you invite? Make a list that includes at least three people you’d like 
to invite to dinner. Then use your list to print a message to each person, 
inviting them to dinner.
*/
// I`ld like to invite them
import { guestList } from "./z.js";

// print inviting message to them with loop
for (let i=0; i<guestList.length; i++) {
    let message:string;
    message ="\n\nYou are cordially invited to dinner. It would be an honor to have you join us.\n\nSincerely, \n S.R.Chohan\n";
    console.log (`Dear ${guestList[i]}, ${message}`);
}
