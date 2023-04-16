class product {
  // properties (data member)(variables)
  // name;
  // address;
  // id;

  // behaviours (function) (member function)
  display() {
    console.log("I am function");
  }

  // create Constructor
  constructor(n, p, r) {
    console.log("i am constuctor");
    this.name = n;
    this.price = p;
    this.rating = r;
  }
}
const obj1 = new product("iphone", 120000, 5); // new => new plain empty object
// product() => in the above piece of code we are colling the constuctor
console.log(obj1);

// class ke andar ke function ko print krana hai to
obj1.display();


 // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  WITHOUT CLASS 
function productt(n, p, r){
    this.name = n;
    this.price = p;
    this.rating = r;    

}
const pObj = new productt("apple", 120000, 4.6)
console.log(pObj);


// ================================================================================================

// ANONYMOUS FUNCTION EXPRESION

const newVarFun = function(n, p, r){
    this.name = n;
    this.price = p;
    this.rating = r;
}

const obj = new newVarFun("Samsung", 180000, 5)
console.log(obj);


// _______________________________________>__________________________________________>_________________

// PRACTICE CODE OTHER WAY

class namee{
    constructor(n, p, r){
console.log(n, p, r);
        this.name  = n;
        this.price = p;
        this.rating = r;
    }
    myName(){
        console.log("function ");
    }
}

const objName = new namee("ipad", 120058, 3.5);
console.log(objName);
objName.myName();

// Practice simple object
const newObj = new Object()
newObj.name = "Aashish"
console.log(newObj);


// ______________________________>____________________________________>_______________________________

// this keyword is not allow to arrow function 

// const fun = (n, p, r) => {
//     this.name = n;
//     this.price = p;
//     this.rating = r;
// }
// const newObjj = new fun()
// console.log(newObjj);


// ______________________________>>>____________________________________>>>________________________________>>>_____________

let objt = {
    x: 10,
    fun(){
        y = {
             gun: () => {
                console.log(this.x);
            }
        }
        y.gun()
    }
}

objt.fun()
