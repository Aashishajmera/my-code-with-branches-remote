const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter a number: "));

// if(num < 0){
//     console.log(`${num} is Negative`);
// }else if(num > 0){
//     console.log(`${num} is Positive`);
// }else{
//     console.log(`Zero`);
// }

num < 0
  ? console.log("Negative")
  : num > 0
  ? console.log("Positive")
  : console.log("zero");
