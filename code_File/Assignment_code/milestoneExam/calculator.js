const prompt = require("prompt-sync")();
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const operator = prompt("Enter Operator (+, -, *, /) ");

switch (operator) {
  case "+":
    const add = num1 + num2;
    console.log(`${num1} and ${num2} addition is `,add);
    break;

  case "-":
    const sub =num1 - num2;
    console.log(`${num1} and ${num2} subtraction is `,sub);
    break;

  case "*":
    const mul =num1 * num2;
    console.log(`${num1} and ${num2} multiplay is `,mul);
    break;

  case "/":
    const dev = num1 / num2;
    console.log(`${num1} and ${num2} devide is `,dev);
    break;

  default:
    console.log("case not match");
}
