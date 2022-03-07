// javascript code
let num100 = 100
let str100 = "100"

console.log(num100 == str100) //loose equality check, converts str100 to a numerical value of 100, compares the two and returns true

console.log(num100 === str100) //strict equality check, does not convert, and a number is not equal to a string, so returns as false

console.log(num100 + str100) //addition operation, converts num100 to a string, performs the addition and produces 100100, which is the concatenation of 100 and 100

console.log(num100 + Number(str100)) //Number() converts the str100 value to the number value of 100, and performs the addition operation, producing 200



let varA = '10';
let varB = 10;

let varC = "";
let varD = 0;
let varE = 1;

console.log(varA == varB) // loose equality, returns as true as varA is converted to a numerical value of 10

console.log(varA === varB) //strict equality, returns as false, as varA is a string and varB is a number

console.log(varC == varD) //loose equality, returns as true, as varC is an empty string and is hence converted to 0

console.log(varC === varD) //strict equality, returns as false since varC is a string and varD is a number

console.log(varC == varE) //loose equality, but still returns as false since varC is an empty string and is hence converted to 0, while varE has a value of 1 and 1 is not equal to 0