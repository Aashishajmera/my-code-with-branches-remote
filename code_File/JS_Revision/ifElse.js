// IF ELSE 
const prompt = require("prompt-sync")();
let star = parseInt(prompt("Enter rating: "));
if (star >= 5) {
  console.log("Excellent service: ");
} else if (star === 4) {
  console.log("Good service: ");
} else if (star === 3) {
  console.log("Average service: ");
} else {
  console.log("Poor: ");
}

// Conditional
function testNum(a) {
  let result;
  if (a > 0) {
    result = "positive";
  } else {
    result = "NOT positive";
  }
  return result;
}
let input = prompt("Enter a number: ");
console.log(testNum(input));

// Ternary
const age = prompt("Enter your age: ");
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage);

// OR
let login = true;
login ? console.log("logout") : console.log("login");

// OR
2 == 2 ? console.log("yes") : console.log("no");