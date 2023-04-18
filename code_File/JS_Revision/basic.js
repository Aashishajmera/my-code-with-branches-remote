// ______________________________________>>______________________________________>>____________________________________________
// Revision class 1st
// ______________________________________>>______________________________________>>____________________________________________

// PRIMITIVE DATA TYPE (Number, String, Boolean, Null, Undefined)

// VALUES => DATA TYPE

const number = 12; //12.2, 12.454
console.log(number);

const string = `Aashish`;
console.log(string);

const boolean = true;
console.log(boolean);

const Null = null;
console.log(Null);

let undefined;
console.log(undefined);

//  _____________________________>_______________________________________>_____________________________________
// NON-PRIMITIVE DATA TYPE (Array, Object)

// ARRAY
const arr1 = [11, 12, 13, 14, 15];
console.log(arr1);
// print one value
console.log(arr1[2]);

// OBJECT
const obj1 = { name: "Aashish", surname: "Ajmera" };
console.log(obj1);
// print one value
console.log(obj1.name);
// change the value of given obj1
obj1.name = "Deepak";
console.log(obj1.name);

// ___________________________________________>______________________________>_______________________________
// VARIABLES => PLACE HOLDER FOR VALUE

let name = "Aashish";
const surname = "Ajmera";
var address = "Aamla";

// _____________________________________>_____________________________________>___________________________________
// OPERATORS (Unary and Binary)
// Single operand is unary operator
// i++;
// multiple operand is binary operator
// a + b;
// Assignment Operator (=)
// Arithmetic Operator (+, -, *, /, %, **)
// Increment and Decrement (pre increment (++i), post increment (i++))
// Comparison Operator ( > greater than, < less than, == value compare, === value with data type compare)
// logical and or (|| or, && and)


// ______________________________________>>______________________________________>>____________________________________________
// Revision class 2nd
// ______________________________________>>______________________________________>>____________________________________________

// Conditional 
const prompt = require("prompt-sync")();
function testNum(a) {
    let result;
    if (a > 0) {
      result = 'positive';
    } else {
      result = 'NOT positive';
    }
    return result;
  }
  let input = prompt("Enter a number: ")
  console.log(testNum(input));

// _____________________________________>_____________________________________>___________________________________
// Ternary
const age = prompt("Enter your age: ");
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); 

// OR 
let login = true;
login ? console.log("logout") : console.log("login");

// OR 
(2 == 2) ? console.log("yes") : console.log("no");

// _____________________________________>_____________________________________>___________________________________
// SWITCH



// _____________________________________>_____________________________________>___________________________________
// lOOPS ITRESION AND ITRETOR


