let passport = true;
let ticket = true;
let weapons = false;
let a = 10;
let b = 5;

let either = (a > 10) || (b <= 5) // An OR logical operator, returns true if either a is greater than 10 OR if b is less than or equal to 5.
//b is less than or equal to 5, so returns true

let getOnFlight = passport && ticket &&!weapons // AND logical statement with a NOT - checks to see if passport is true, ticket is true and is weapons is false (note the NOT operator before weapons that inverts the boolean statement)

console.log(either) //returns as true
console.log(getOnFlight) // returns as true