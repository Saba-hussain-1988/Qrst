/**Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
 *  with a copy of the array of magicians’ names. Because the original array will be unchanged, 
 * return the new array and store it in a separate array. Call show_magicians() with each array to show that
 *  you have one array of the original names and one array with the Great added to each magician’s name.

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
    let newMagicians:string[]=[...magicians];
    for (let i = 0; i< magicians.length; i++){
        newMagicians[i] += ' the Great';
    }
    return newMagicians;
};


let greatMgicians:string[]=make_great(magicians.slice());
console.log('Original Array:');

show_magicians(magicians);

console.log('\nGreat Magicians');

show_magicians(greatMgicians);