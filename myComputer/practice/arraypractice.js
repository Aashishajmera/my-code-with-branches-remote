// ARRAY

// every element ko check krta hai 
function isBigEnough(element, index, array) {
    return element >= 10;
  }
  const check = [12, 5, 8, 130, 44].every(isBigEnough); // false
  const check2 = [12, 54, 18, 130, 44].every(isBigEnough); // true
  console.log(check);
  console.log(check2);
  
//  

function subset(arr1, arr2){
    arr1.map((element) => {
       const outpt = arr2.includes(element)
       console.log(outpt);
    })
} 

const arr1 = [1,2,3,4,5,6]
const arr2 = [6,7,8,9]
  
// subset(arr1, arr2)

console.log([1, , 3].every((x) => x !== undefined)); // true
console.log([2, , 2].every((x) => x === 2)); // true


const words = ['sprkujyay', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.every(word => {
    const  a =  word.length > 6
    console.log(a);
});

console.log(result);
// Expected output: 



































// let Friend_name = new Array("Rohit", "Vivek", "Ritesh", "Pawan");
// console.log(Friend_name);
// console.log(Friend_name[3]);

// Friend_name[2] = "Vivu";
// console.log(Friend_name);

// //loop practice
// // asdldfksdisajdjafkldsakfjdsklajfa
// // sfklasdjfkalsdjfas
// // dfoasdjkfkasdjfasdf

// console.log("######");

// let names = "raja ju"
// for( word of names){
//     console.log(word);
// }