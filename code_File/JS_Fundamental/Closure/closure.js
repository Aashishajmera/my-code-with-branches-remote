// Global scope 👇
let score = 12;

function fun(){
    let score = 2;
    console.log(score);
}
fun()
console.log(score);

// _________________>______________________>_________________________________>_________________________

// CLOUSER (inner function ke pass access hai outer memories  ka )

let Myname = "Aashish"
function printName (){
    console.log(Myname);
}
printName()

// _____________________>_________________________>__________________________________>__________________

// NESTED FUNCTION 

const defaultValue = "I am default"
function firstFun() {
    let val1 = 1
    console.log(val1, defaultValue);
    function secondFun(){
        let val2 = 2
        console.log(val1, val2, defaultValue);
        function therdFun(){
            let val3 = 3
            console.log(val1, val2, val3, defaultValue);
        }
        therdFun()
    }
    secondFun()
}
firstFun()
