// SPRED

// combine two array without using concat mathod 

let arr = [3,5,6,7,9]
let arr2 = [33,44,66]

function combine(...arguments){
    let finalValue = arguments.map((Element) => {
        return Element;
    })
    console.log(finalValue);

}

combine(arr, arr2)