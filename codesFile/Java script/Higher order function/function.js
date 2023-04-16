const squrefunction = (n) => {
  return n ** 2;
};

function cubefunction(squrefunction, n) {
  return squrefunction(n) * n;
}

// print the function
// console.log(cubefunction(squrefunction, 4));

function say() {
  return () => {
    console.log("Hello bachho");
  };
}

// type 1st print krane ka
// console.log(say());

// second type
let say_ouput = say();
console.log(say_ouput);

say_ouput();

// learn to  Difficult higher function

const HigherOrderFunction = (a) => {
  const frist = (b, d) => {
    const second = (c) => {
      return a + b * d + c;
    };
    return second;
  };
  return frist;
};

// nested function ko ese call krte hai
console.log(HigherOrderFunction(3)(4, 7)(8));

// example for function
const array_value = [3, 8, 9, 2];
const arrfun = (arr) => {
  let total = 0;
  arr.forEach(element => {
    total += element ;
  });
  return total;
};

console.log(arrfun(array_value));


// second example set interval function me

setInterval(() => {
    console.log("I am a web developer");
}, 1000);

// second tarike se time interval
function countinuesly () {
  console.log("hie", Math.random());
}
setInterval(countinuesly, 100)


// only one time print setTimeout me 
setTimeout(() => {
  console.log("o na ji na ");
}, 100);
