"use strict";
/* Your Own Array: Think of your favorite mode of transportation,
such as a motorcycle or a car, and make a list that stores several examples.
Use your list to print a series of statements about these items,
 such as “I would like to own a Honda motorcycle.”*/
//make an array of tranportation
let transportation = ['Honda motorcycle', 'Suzuki APV', 'Toyota Hilux', 'Honda BRV'];
// PRINT A series statements, with loop
for (let i = 0; i < transportation.length; i++) {
    console.log(`${i + 1} "I would like to own a ${transportation[i]} ."`);
}
