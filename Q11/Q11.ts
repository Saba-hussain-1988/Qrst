/* Names: Store the names of a few of your friends in a array called names.
 Print each person’s name by accessing each element in the list, one at a time.
*/


// import an array
import { friends } from "./a11.js";

//print the name of frndz, one at a time
//with loop
for (let i= 0; i <friends.length; i++) {
    let j =i+1;
    console.log("friend",j , ":", friends[i]);
}

