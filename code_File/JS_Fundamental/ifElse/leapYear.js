const prompt = require("prompt-sync")();
const year = parseInt(prompt("Enter a year: "));
if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
    console.log("given year ", year, "is leap year");
} else {
    console.log("given year ", year , "is not leap year");
}

