// THE MAP CONCEPT

// SET and GET
const newMap = new Map();
newMap.set(9, 8)
console.log(newMap);
console.log(newMap.get(9));
newMap.set('Name', 'Aashish')
console.log(newMap);

// SAME
const map1 = new Map();
map1.set('8', 9)
map1.set('9', 7);
map1.set("id", 101)
map1.set("name", "Vivek")
console.log(map1);
console.log(map1.get('name'));

// delete
map1.delete('9')
console.log(map1);
// has
map1.has('8')