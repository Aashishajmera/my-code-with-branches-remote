const prompt = require("prompt-sync")();
const quires = prompt(
  "Enter your quires addition, subtraction, multiplay, devide "
);

switch (quires) {
  case "addition":
    const a = prompt("Enter frist number: ");
    const b = prompt("Enter second number: ");
    const add = a + b;
    console.log(add);
    break;

  case "subtraction":
    const c = prompt("Enter frist number: ");
    const d = prompt("Enter second number: ");
    const sub = c + d;
    console.log(sub);
    break;

  case "multiplay":
    const e = prompt("Enter frist number: ");
    const f = prompt("Enter second number: ");
    const mul = e + f;
    console.log(mul);
    break;

  case "devide":
    const g = prompt("Enter frist number: ");
    const h = prompt("Enter second number: ");
    const dev = g + h;
    console.log(dev);
    break;

  default:
    console.log("case not match");

}
