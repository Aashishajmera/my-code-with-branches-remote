const prompt = require("prompt-sync")();
const number = prompt("Enter a number: ")
for(let i = 1; i <= number; i++){
   for(let j = 1; j <= number; j++){
        console.log("*");
   }
}