// ARRAY

// Way to declare array and We can give any kind of value in array

let arr1 = [2, 5, 7, 8, "Aashu", 4.6, { address: "Khategaon" }];
// OR
let arr2 = new Array("raja ji");
// ADD VALUE
arr2.push(3, 5, 88, "anurag"); // last
arr2.unshift(99, 12, "Vivek"); // starting
arr2.pop(); // Remove from the last
arr2.shift(); // Remove from the beginning
console.log(arr1);
console.log(arr2);
arr2[1] = "Rohit"; // edit value
console.log(arr2);
console.log("The index is ", arr2.indexOf("Rohit")); // What is the index of this value ?
console.log("The value is ", arr2.at(1)); // What is the value of this index ?

// CHANGING THE VALUE WITH THE HELP OF A LOOP
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] == "Aashu") {
    arr1[i] = "Rohit";
  }
}
console.log(arr1);
arr1.splice(3, 1, 3); // splice method array ko change kr deta hai
console.log(arr1);
arr1.slice(2, 4); // slice method se array ko koi fark nhi pdta
console.log(arr1.slice(2, 4));
console.log(arr1);
console.log(arr1.reverse()); // reverse
console.log(arr1.sort()); // sort