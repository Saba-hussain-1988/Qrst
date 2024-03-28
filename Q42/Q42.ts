/**Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
 * that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
 * show_magicians() to see that the list has actually been modified.

 */
//start with a copy of program 41
let magicians:string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

function show_magicians(magicians:string[]){
    for (let i = 0; i< magicians.length; i++){
        console.log(magicians[i]);
    }
};

// write a function called make_great()
function make_great(magicians:string[]){
    for (let i = 0; i< magicians.length; i++){
        console.log(magicians[i]+ ' the great');
    }
};

make_great(magicians);

show_magicians(magicians);