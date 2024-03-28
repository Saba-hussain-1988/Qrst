"use strict";
/* Checking Usernames: Do the following to create a program that simulates how websites ensure that
 everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are
 also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a
 message that the person will need to enter a new username. If a username has not been used, print a message
 saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.  */
//list of current users
let current_users = ['Saba Chohan', 'FaRyal KHan', 'Qirat Malik', 'hira hayat', 'sundal Khz', 'SundaS'];
//list of new users
let new_users = ['Anam khan', 'Hira Hayat', 'fiza malik', 'SUNDAS', 'Maha Ali'];
// Loop through the new_users list to see if each new username has already been used or not.
for (let i = 0; i < new_users.length; i++) {
    let isAvailable = true;
    for (let j = 0; j < current_users.length; j++) {
        //comparison is case insensitive
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            //if it has been used print ' is not available, you will need to enter a new username.
            console.log(`'${new_users[i]}' is not available, you will need to enter a new username.`);
            isAvailable = false;
        }
    }
    // If a username has not been used, print a message saying that the username is available.
    if (isAvailable) {
        console.log(`'${new_users[i]}' is available.`);
    }
}
;
