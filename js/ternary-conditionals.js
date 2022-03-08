
let memberType = 'basic';
let price;

if (memberType === 'basic') { //This is a basic IF statement
  price = 5;
} else {
  price = 10;
}

price = memberType === 'basic' ? 5 : 10; // This is the ternary conditional form of the IF Statment above. 
//The true value is to the left of the colon, and the false value is to the right of the colon
//Ordinarily, the variable called price would be declared with a let, but this has been removed for the sake of removing errors, since price has already been declared above

