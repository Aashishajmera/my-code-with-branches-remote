// lOOPS ITRESION AND ITRETOR

// FOR LOOP
for(let i = 0; i <= 5; i++){
    console.log(i);
}

// FOR LOOP
let array = [23, 5, 454, 6];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

// FOR OF
let arrr = [3, 4, 5, 6, 8];
for (let item of arrr) {
  console.log(item);
}

// FOR IN
for (const index in arrr) {
  const element = arrr[index];
  console.log(index, element);
}

// FOR IN
let obj2 = { name: "Aashish", surname: "Ajmera" };
for (const key in obj2) {
  const element = obj2[key];
  console.log(key, ":", element);
}

// WHILE LOOP
let i= 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// DO WHILE 
let j = 1;
do {
  j += 1;
  console.log(j);
} while (j <= 20);

// BREAK
console.log("BREAK: ");
for(let i = 0; i <= 5; i++){
    if(i === 3){
        break;
    }
    console.log(i);
}

// CONTINUE
console.log("CONTINUE: ");
for(let i = 0; i <= 5; i++){
    if(i === 3){
        continue;
    }
    console.log(i);
}
