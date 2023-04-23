const prompt = require("prompt-sync")();
let num = prompt("Enter number: ")

for(let i = num; i >= 1; i--){
    for(let j = 1; j <= i; j++){
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