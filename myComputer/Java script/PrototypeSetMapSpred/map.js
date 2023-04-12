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
map1.set('size', 9)
map1.set('9', 7);
map1.set("id", 101)
map1.set("name", "Vivek")
console.log(map1);
console.log(map1.get('name'));

// delete
map1.delete('9')
console.log(map1);
// has check the value
console.log(map1.has('8'));
// size
console.log(map1.size);
// array convert to string 
const arrr = [3,456,76]
console.log(arrr);
console.log(arrr.toString());
// clear
// map1.clear()
console.log(map1);
// entries  sab kuchh array me aa jata hai 
const check_ent = map1.entries();
for(const item of check_ent){
    console.log(item);
}


// new map keys pta krne ke lie 
const anotherMap = new Map()
anotherMap.set('name', 'Aashish').set('adress','Aamla')
console.log(anotherMap);
const keyValue = anotherMap.keys()
for(const keyname of keyValue){
    console.log(keyname);
}

// values pta krne ke lie 
const output_value = anotherMap.values()
for(const valuess of output_value){
    console.log(valuess);
}

