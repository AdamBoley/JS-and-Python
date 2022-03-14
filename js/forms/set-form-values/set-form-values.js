let fname = document.getElementById('first-name'); //shorthand variable for the first-name text input element

fname.value = "Indiana"; //sets the value of the first-name input element with "Indiana". 
//This is pre-population. Note the lack of function and event listener, which allows the interpreter to add the pre-population values immediately upon page load
//also note the fname.value on the LHS of the command
//all others below are the same
let lname= document.getElementById('last-name');

lname.value = "Jones";

let headline = document.getElementById('headline');

headline.value = 
"If you want to be a good Archaeologist, you gotta get out of the library.";

let position = document.getElementById('position');

position.value = "Archaeologist at Marshall College"