// SET

const newSet = new Set()
// add value 
newSet.add(3).add(78).add("Aashish").add(['vivek', 'rohit']).add({name: "Deepak", addres: "Aamla"})
console.log(newSet);
// check value
console.log(newSet.has(78));
// delete value
console.log(newSet.delete(3));
console.log(newSet);
// check value 
// const check = newSet.every(Element => typeof Element === "number" )
// console.log(check);

// key
const key = newSet.keys()
console.log(key.next().value);


// map

const newMap = new Map();
newMap.set('Name', 'Aashish',).set('address', "Aamla")
console.log(newMap);
// particular keys ke lie 
console.log(newMap.get('Name'));




