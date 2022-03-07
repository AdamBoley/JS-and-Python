let first = "42";
let second = "24.7";

let result = first + second;
console.log(result)
/*
The console.log above will log "4224.7" to the console, because 
it is concatinating/joining strings instead of adding the values together, because JS cannot see that the values are numbers
*/

let result2 = parseInt(first) + parseInt(second);
console.log(result2)
/* 
The console.log above will log 66 to the console, because both 
string values are converted to number types. However the second 
value has a decimal point, which means its value is rounded down to make a whole number because parseInt() was used, not parseFloat()
*/

let result3 = parseInt(first) + parseFloat(second)
console.log(result3)
/* 
The console.log above will log 66.7 to the console. because now 
the second value is parsed to a float which allows for the decimal
point. 
*/