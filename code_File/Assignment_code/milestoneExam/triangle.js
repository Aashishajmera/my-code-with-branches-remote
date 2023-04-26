const prompt = require("prompt-sync")();
let num = prompt("Enter number: ")

for(let row = num; row >= 1; row--){
    for(let col = 1; col <= row; col++){
        console.log("*");
    }
    console.log("\n");
}


// ******
// *****
// ****
// ***
// **
// *