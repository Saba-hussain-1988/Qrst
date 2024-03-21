"use strict";
/*Seeing the World: Think of at least five places in the world you’d like to visit.


• Store the locations in a array. Make sure the array is not in alphabetical order.*/
let placesToVisit = ["Makkah", "Madina", "Gilgit", "China", "Dubai"];
//• Print your array in its original order.
console.log(`Original order:\n ${placesToVisit}`);
//• Print your array in alphabetical order without modifying the actual list.
console.log(`alphabetical order:\n ${[...placesToVisit].sort()}`);
//• Show that your array is still in its original order by printing it.
console.log(`Still in Original order:\n ${placesToVisit}`);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log(`Reverse alphabetical order: \n ${[...placesToVisit].sort().reverse()}`);
//• Show that your array is still in its original order by printing it again.
console.log(`Still in Original order:\n ${placesToVisit}`);
//• Reverse the order of your list.
placesToVisit.reverse();
// Print the array to show that its order has changed.
console.log(`Its order has changed:\n ${placesToVisit}`);
//• Reverse the order of your list again.
placesToVisit.reverse();
//Print the list to show it’s back to its original order.
console.log(`It has become in its original order again: \n ${placesToVisit}`);
//• Sort your array so it’s stored in alphabetical order.
placesToVisit.sort();
//Print the array to show that its order has been changed.
console.log(`Order changed into alphabetical oreder: \n ${placesToVisit}`);
//• Sort to change your array so it’s stored in reverse alphabetical order.
placesToVisit.sort().reverse();
//Print the list to show that its order has changed.
console.log(`Its order has changed into reverse order: \n ${placesToVisit}`);
