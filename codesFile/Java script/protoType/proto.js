let arr1 = ["Aashish", "Rohit", "Vivek"]
let obj1 = {
    address: "Khategaon  ", 
    id: 1
}

console.log(arr1);
console.log(obj1);

// add new method in all code
Object.prototype.anotherArray = function(){
    let arr3 = ["Shubham"]
    console.log(arr3);
}

// print in arr1
console.log(arr1.anotherArray());
// print in obj1
console.log(obj1.anotherArray());

// add new method in arr 
Array.prototype.sayHi = function (){
    console.log("Hii guy's");
}

// print in arr1
console.log(arr1.sayHi());
// print in obj1 but it's not will be print on obj1 because sayHi add only ArrayPrototype
// console.log(obj1.sayHi());


// _____________________________________>>>_____________________________________________>>>___________________________

const mentor = {name: "anurag sanket hitesh" }
const friend = {namee: "Rohit Vivek Pawan Shubham"}

// kisi bhi object ki property ko kisi or object me add krna ho to 

Object.setPrototypeOf(mentor, friend)   // mentor me friend ki property di 
console.log(mentor.namee);



// _________________________________>__________________________________________>__________________________________________

// without space

// console.log(names.length);  // 11
// method add krne pr 
String.prototype.removeSpacePrintLength = function(){
    let result = this.trim().length
    return result
}


// without space length print 
let names = "Aashish    "
console.log(names.removeSpacePrintLength());

console.log("raja  ".removeSpacePrintLength());


