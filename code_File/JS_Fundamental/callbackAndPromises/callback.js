function callback(x, printName){
    console.log(x**2);
    printName()
}

callback(9, printName)
function printName(){
    console.log("Aashish: ");
}

setTimeout(() => {
    console.log("2 second: ");
}, 4000);

for(let i = 0; i <= 1000; i++){
    console.log(i);
}

setTimeout(() => {
    console.log("1 ");
}, 1);


console.log("end: ");