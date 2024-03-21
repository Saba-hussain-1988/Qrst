/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
 If the fruit is in your array, the if block should print a statement, such as You really like bananas!  */

 let favorite_fruits:string[] = ['watermelon', 'mango', 'orange'];

 // statement 1
 if (favorite_fruits.includes('watermelon')) {
    console.log("You really like Watermelons! ");
 }

 // statement 2
 if (favorite_fruits.includes('apple')) {
    console.log("You really like Apples!");
 }

 // statement 3
 if (favorite_fruits.includes('mango')) {
    console.log("You really like Mangoes!" );
 }

 // statement 4
 if (favorite_fruits.includes('pear')) {
    console.log("You really like Pears!");
 }

 // statement 5
 if (favorite_fruits.includes('orange')) {
    console.log("You really like Oranges!");
 }
 
 


