// javascript code
let notANumber = isNaN("number") // value is a string, so will return as true
console.log(notANumber)

let isANumber = isNaN(5)// value is a number, so will return as false
console.log(isANumber)

let finiteNumber = isFinite(5000) //value is a finite number, so will return as true, since 5000 is finite
console.log(finiteNumber)

let notAFiniteNumber = isFinite(1.9e308); //value is above the threshold at which numbers are considered infinite, so will return as false
console.log(notAFiniteNumber)

//Each of these will also work if the method is used in the console.log function as well

