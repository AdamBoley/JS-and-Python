let a = 10;
let b = 20;
let result; //declares the variable result, but leaves it undefined

// Write your if statement here:

if (a < b) { // this is the conditional checker, with the bit in the brackets the condition being tested, and essentially means ((a < b) === true), but the === true is unnecesary, as it is baked into the statement
    result = "a is smaller" //reassigns the value of result 
}
else { // this is the second, optional part of the statement, and executes if (a < b) returns as false
    result = "a is not smaller" 
}

console.log(result); // logs the result 
