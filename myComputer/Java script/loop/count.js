const prompt = require("prompt-sync")();
const number = prompt("Enter a number: ")

// for loop se
for(let i=1; i<=number; i++){
    console.log(i);
}

console.log("while loop start");

// while loop se 
let i = 1;
while(i <= 12){
    console.log(i);
    i++;
}

console.log("do while loop se ");

// do while se 
let n = 1;
do{
    console.log(n);
    n++
}while(n>8)

