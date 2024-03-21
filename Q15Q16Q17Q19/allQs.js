"use strict";
//Q15
/* Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
 You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
Object.defineProperty(exports, "__esModule", { value: true });
//start program with exercise 15
const z_js_1 = require("../Q14/z.js");
// assume that Kanwal cannot make the dinner
let whoCantMakeIt = z_js_1.guestList[1];
// replace the name of guest
z_js_1.guestList[1] = 'Hina';
//print the second set of invitation messages
console.log('Invitation:');
for (let i = 0; i < z_js_1.guestList.length; i++) {
    console.log(`\nDear ${z_js_1.guestList[i]}!\nYou are cordially invited to dinner. It would be an honor to have you join us.\n\nSincerely, \nS.R.Chohan`);
}
//Add a print statement at the end of your program
console.log(`\n ${whoCantMakeIt}, can not make the dinner.`);
//Q16
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages,
 one for each person in your list.*/
let new_guestList = ['Zunaira', 'Faryal', 'Aiman'];
//add one guest in beginning
z_js_1.guestList.unshift(new_guestList[0]);
//add one guest in the end of array
z_js_1.guestList.push(new_guestList[1]);
//add one guest in middle of the array
let guest_list = z_js_1.guestList.splice(Math.floor(z_js_1.guestList.length / 2), 0, new_guestList[2]);
console.log('New invitations for bigger dinner:');
for (let i = 0; i < z_js_1.guestList.length; i++) {
    console.log(`\nDear ${z_js_1.guestList[i]}!\nYou are cordially invited to dinner. It would be an honor to have you join us.\n\nSincerely, \nS.R.Chohan`);
}
//print statement in the end of your program  informing people that we found a bigger dinner table.
console.log('Great news! We found a bigger dinner table.');
//Q17
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name
from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
actually have an empty list at the end of your program.*/
//shrinking guest list and send to them a message
while (z_js_1.guestList.length > 2) {
    let removedGuest = z_js_1.guestList.pop();
    console.log(`Sorry! ${removedGuest},\n I can not invite you to the dinner.\n sincerely\nS.R.Chohan\n\n`);
}
//print message to them who are still invited
for (let i = 0; i < z_js_1.guestList.length; i++) {
    console.log(`Dear ${z_js_1.guestList[i]}! \nYou are still invited to the dinner.\nSincerely\nS.R.Chohan\n\n `);
}
//remove all two
z_js_1.guestList.pop();
z_js_1.guestList.pop();
//print the aray to confirm the array is empty
console.log('The array is empty:\n', z_js_1.guestList);
