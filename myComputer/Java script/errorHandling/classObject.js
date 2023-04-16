class product {
    // properties (data member)(variables)  
    // name;
    // address;
    // id;

    // behaviours (function) (member function)
    display(){
        console.log("I am aashish");
    }

    // create Constructor
    constructor(n, p, r){
        console.log("i am constuctor");
        this.name = n;
        this.price = p;
        this.rating = r;
    }

}

const obj1 = new product("iphone", 120000, 5)   // new => new plain empty object  
// product() => in the above piece of code we are colling the constuctor 
console.log(obj1);

// class ke andar ke function ko print krana hai to 
// obj1.display();


class namee{
    constructor(n, p, r){
        // console.log(n, p, r);
        this.name  = n;
        this.price = p;
        this.rating = r;
    }
    myName(){
        console.log("Aashish, Aashish ajmera");
    }
}

const objName = new namee("ipad", 120058, 3.5);
console.log(objName);
objName.myName();
