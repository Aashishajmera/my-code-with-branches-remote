class names {
  // private key ko declare krna pdta hai
  #id;
  // constructor
  constructor() {
    // public key value
    this.name = "aashish";
    // private key value ko # ke sath add kiya jata hai
    this.#id = 1;
  }
  // simple function
  print() {
    console.log("I am simple function", this.#id, this.name);  // class se access krke hi private key ko print kra sakte hai 
  }
  //   static function
  static print2() {
    console.log("I am static function");
  }
}

// class se object name
const ObjName = new names();
console.log(ObjName);
// call simple function
ObjName.print(); // simple function object se call hote hai 
// call static function
names.print2(); // static function class se call hote hai
