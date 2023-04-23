const prompt = require("prompt-sync")();
let color = prompt("Enter first color: ");
color = prompt("Enter Second color: ");
switch (color) {
  case "red":
  case "blue":
    console.log("Purple: ");
    break;

  case "red":
  case "yellow":
    console.log("Orange: ");
    break;

  case "blue":
  case "yellow":
    console.log("Green: ");
    break;

  default:
    console.log("Invalid color combination: ");
}
