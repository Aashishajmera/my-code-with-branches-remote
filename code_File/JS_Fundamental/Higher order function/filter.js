// filter use krne pr

const Heros = ["lokeshraj", "pawanraj", "ramraj", "Aashish", "vivek"];

const herosWithRaj = Heros.filter(function (element) {
  return element.endsWith("raj");
});
console.log(herosWithRaj);


// shoping cart
const cartbill = [23, 45, 76, 90];

let sumOfCartBill = cartbill.reduce((prev, curr) => prev + curr, 0);
console.log(sumOfCartBill);



// games score
const gameScore = [200, 190, 300, 120, 900];
// check if all value are number
const gameScoreCheck = gameScore.every((value) => typeof value === "number");
console.log("check:", gameScoreCheck);


// find the high score
const highScore = gameScore.find((score) => {
  return score > 200 ;    // ishme bhi vah 200 se jo pahla jyada score hai use hi print krega
});
console.log("High score is: ", highScore);


// assignment
/* findindex, some, sort */

// findindex 
const arr3 = [23, 12, -2, 65, -23]
const arr3_output = arr3.findIndex((element) => {
  return element < 0;
})
console.log("The index is: ", arr3_output);



// some    jo bhi condition de vo complete ho jae to value true ya false return kr deta hai 
const arr1 = [23, 34, 56, 77]
const arr1_output = arr1.some((element) => {
  return element > 20;
})
console.log("the value is: ",arr1_output);


// sort 
const arr_name = [3, 2, 4, 6]
console.log(arr_name);
arr_name.sort();
console.log(arr_name);



const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(element => element.length > 3);
console.log(result);



function isBigEnough(value) {
  return value <= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered);
// filtered is [12, 130, 44]




const CB = [23, 45, 76, 90];

let sumOfCB = CB.reduce((pe , k)=> {
  return pe + k;
})
console.log(sumOfCB);

// reduce prototype 
const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);