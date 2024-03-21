/* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */

//array of user names

let user_Names:string[] = ['admin', 'Hina', 'Sana', 'Sara', 'Reena', 'Farha'];

//add if statement to check the array is empty or not

if (user_Names.length === 0) {
    console.log('We need to find some users!');
} else {
    for (let i=0;i < user_Names.length; i++) {
        if (user_Names[i] === 'admin') {
        console.log('Hello Admin, would you like to see a status report?');
        } else {
            console.log(`Hello ${user_Names[i]}, thank you for logging in again.`);
        }
    }
}

//remove all users from the array

user_Names = [];

// print the if statement for empty array
if (user_Names.length === 0) {
    console.log('We need to find some users!');
} else {
    for (let i=0;i < user_Names.length; i++) {
        if (user_Names[i] === 'admin') {
        console.log('Hello Admin, would you like to see a status report?');
        } else {
            console.log(`Hello ${user_Names[i]}, thank you for logging in again.`);
        }
    }
}