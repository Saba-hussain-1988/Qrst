"use strict";
/* Alien Colors #1: Imagine an alien was just shot down in a game.
 Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green.
 If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails.
(The version that fails will have no output.) */
let alien_color = "green";
//version that run
if (alien_color === "green") {
    console.log("the player just earned 5 points.");
}
// version that fail
if (alien_color === "red") {
    console.log("The player just earned 10 points.");
} // no output becouse condition is false
