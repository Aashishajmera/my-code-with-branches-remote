// SET

const newSet = new Set();
// add value 
newSet.add(3)
newSet.add([9,8])
newSet.add("Aashish")
let obj1 = {name: "vivek", id: 12, village: "ganora"}
newSet.add(obj1)
console.log(newSet);
console.log(newSet.has(obj1));
// check size
console.log(newSet.size);
// check the value 
console.log(newSet.has(Array));

let newset2 = new Set();
newset2.add(8).add(88)
console.log(newset2);


const mySet = new Set();

mySet.add(1);
mySet.add(5).add("some text"); // chainable

console.log(mySet);
// Set [1, 5, "some text"]


// convert to string 
// console.log(mySet.toString());

// use clear
// mySet.clear();
// console.log(mySet);


// use delete
// mySet.delete('some text')
// console.log(mySet);

// use entries
const iterator1 = mySet.entries();
// for(const entr of iterator1){
//     console.log(entr);
// }
console.log("AAAAAA", iterator1.next().value);

// use has 
const newset3 = new Set();
newset3.add(8).add(6).add(5)
console.log(newset3);
console.log(newset3.has(8));

// use keys 
const output = newset3.keys();
for(const a of output){
    console.log(a);
}

// use values

const anotherSet = new Set();
const arr = [3,5,7,8,2]
anotherSet.add(arr).add("Aashish")
console.log(anotherSet);

const values_output = anotherSet.values()
// for(const ak of values_output){
//     console.log(ak);
// }

console.log(values_output.next().value);



const sset = new Set();
sset.add("foobar");
sset.add(1);
sset.add("baz");

const setIter = sset.entries();
for(const n of setIter){
    console.log(n);
}

// console.log(setIter.next().value); // ["foobar", "foobar"]
// console.log(setIter.next().value); // [1, 1]
// console.log(setIter.next().value);



// use keys and values

const check = new Set();

check.add(4).add(8).add({name: "Aashish", roll: 01})

console.log(check);

for(const item of check.values()){
    console.log(item);
}
