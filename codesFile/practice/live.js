let arr = [3, 6, 2, 88];
let arr2 = [3, 55, 77];

// let arr3 = arr.concat(arr2)

// +++++++++ SPRED

let arr3 = [...arr, ...arr2];
console.log(arr3);

function check(arguments) {
  console.log(arguments);
  console.log(typeof arguments);
}
check([3, 4]);

// ===================================

function f2() {
  console.log(arguments);
  console.log([arguments]);
}
f2(3, 4, 5, 7);

// ===

let raj = new Array(3, 4);
console.log(raj);

// ==========

function multipulValues() {
  let convert = Array.from(arguments);
  let finalValue = convert.map((Element) => Element);
  console.log(finalValue);
}
multipulValues(4, 5);
multipulValues(3, 5, 7, 7, 9);


// =================================
// REST OPERATOR 

function multipulValues2(...arguments){
    let final = arguments.map(Element => Element)
    console.log(final);
}
multipulValues2(4, 25);
multipulValues2(3, 5, 27, 47, 9);

let raju = 'rajpal'
console.log(...raju);


// ====================
console.log("================================");

const array = "Aashish";
// let obj = (...array ) // { 0: 1, 1: 2, 2: 3 }
console.log([array]);


console.log("+++++");
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");




console.log("++++++++++++++++++++++");


function other(...arguments){
  // console.log(arguments);
  let value = arguments.map((Element) => Element)
  console.log(value);
}
other(3,5) 

function other1(){
  let convert = Array.from(arguments)
  let finalAns = convert.map((Element) => Element)
  console.log(finalAns);

}
other1(3,5) 


// =============================================SET

const set_name = new Set()
set_name.add(3)
set_name.add(9)
console.log(set_name);


