const prompt = require("prompt-sync")();
let num = parseInt(prompt("Enter a number: "))

for(let i = 1; i <= num; i++){
    if(i % 2 == 0 ){
        console.log(i);
    }
}