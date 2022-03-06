// Create your variables here.
const pi = 3.14; //creates a const variable called pi and assigns a value of 3.14

pi = 3.1415 //This isn't allowed and stands as example. It would throw an error, since a const var cannot be reassigned

let radius = 12; // Creates a let variable called radius and assigns a value of 12

radius = 14 // This reassigns the value of the variable called radius to a value of 14

var circumference = pi * 2 * radius; // creates a var variable called circumference with a value of a calculation

console.log(pi); // logs the value of pi, in this case 3.14, since pi cannot be reassigned
console.log(radius); //logs the current value of radius, in this case 14, since radius is reassigned
console.log(circumference); //logs the current value of circumference, which would use a radius value of 14
