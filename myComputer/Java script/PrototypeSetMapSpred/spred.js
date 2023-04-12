// SPRED

// combine two array without using concat mathod 

let arr = [3,5,6,7,9]
let arr2 = [33,44,66]

const arr3 = [...arr, ...arr2]
console.log(arr3);

// another example

const arr5 = [4,6,7,8]
console.log({...arr5});




// REST 


function combine(...arguments){
    let finalValue = arguments.map((Element) => {
        return Element;
    })
    console.log(finalValue);
}
combine(arr, arr2)

