// location = "https://https://developer.mozilla.org/en-US/";
// console.log(location);

console.log("it worked!");

const myName = "V";
console.log("My name is " + myName);

const num = 12;
console.log("num");

const object1 = {};

Object.defineProperties(object1, {
    property1: {
      value: 42,
      writable: true
    },
    property2: {}
  });
  console.log(object1.property1);
// expected output: 42

const num1 = 2;
const num2 = 6;
console.log(num1 === num2);
console.log(num1 + 10 === num);

let nine = '9';
typeof nine; // string

// with number constructor
typeof Number(nine); // number
// shorthand with +
typeof + nine; // number
console.log(nine);

let anInteger = 9000;
let floatingPointNumber = 2.71828;
console.log(anInteger);
console.log(floatingPointNumber);

console.log(Number.isInteger('15'));
console.log(Number.isInteger(1.234));
console.log(Number.isInteger(15));
console.log(Number.parseInt('15'));
console.log(Number.parseInt(3.14));
console.log(Number.parseFloat('4.65xyz'));

var numero = 8;
console.log(`I have ` + numero.toString()+ ` bucks to spare.`);
console.log(typeof num.toString() );

console.log(typeof object1.property1)

