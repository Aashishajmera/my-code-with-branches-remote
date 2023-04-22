const prompt = require("prompt-sync")();

let password = prompt("Enter password: ")
let matchPassword = prompt("Conform password: ")

if(password === matchPassword){
    console.log("Password Matched. Password validation Successful ");
} else {
    console.log("Password didn't match. Password validation Unsuccessful");
}