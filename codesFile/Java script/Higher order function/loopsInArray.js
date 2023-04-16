// practice for loop

// ese array print krte the but ab
const arr_name = [34, 56, 22, 90];
console.log(arr_name);

for (let i = 0; i <= arr_name.length - 1; i++) {
  console.log(i);
}

// map se
const arr_name1 = [34, 56, 22, 90];
arr_name1.map((element, index, array) => {
  console.log(element, index, array);
});

// foreach loop se
const arr_name2 = ["Aashish", "Vivek", "Rohit"];
arr_name2.forEach(function (element, index, array) {
  console.log(element, index, array);
});

// element word change krne pr map se 
arr_name2.map((element) => {
  console.log(element.toUpperCase());
});


// foreach loop se uppercase krne pr 
const arr_name3 = ["Aashish", "Vivek", "Rohit"];
arr_name3.forEach(function (element) {
  console.log(element.toUpperCase());
});