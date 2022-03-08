let day; //declares variable called day but leave it undefined
let dayNumber = 2;

switch (dayNumber) { // tells the computer to check the VALUE of dayNumber
  case 0: // executes if dayNumber is 0
    day = 'Sunday';
    break;
  case 1: // executes if dayNumber is 1
    day = 'Monday';
    break;
  case 2: // executes if dayNumber is 2
    day = 'Tuesday';
    break;
  case 3: // executes if dayNumber is 3
    day = 'Wednesday';
    break;
  case 4: // executes if dayNumber is 4
    day = 'Thursday';
    break;
  case 5: // executes if dayNumber is 5
    day = 'Friday';
    break;
  case 6: // executes if dayNumber is 6
    day = 'Saturday';
    break;
  default: // executes if dayNumber is invalid
    day = 'Invalid day number';
}

console.log(day);  // prints the value of day, in this case Tuesday since dayNumber has been set to 2
// case is followed by any value - they aren't necessarily numerical and can be strings as well, as variables can have strings as values


//A switch case can also be used as a function:

function findDayOfWeek(dayNumber) {
    switch (dayNumber) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      default:
        return 'Invalid day number';
    }
  }
  day = findDayOfWeek(2); // day would normally be declared with let, but has already been declared above
  console.log(day);  // Tuesday

//Below is an example of a switch statement involving checking the value of variables with strings as values, in this case errorType, which has a string as a value
let result = ''; // declares the variable result, and leaves it as an empty string
let errorType = "page"; // declares an variable called errorType and gives it a string for a value

switch (errorType) { // tells the computer to check the value of the errorType variable
    case "username": // checks if the value of errorType is "username"
        result = "That username is incorrect, please try again."; // assigns a value to result
        break;
    
    case "password": // checks if the value of errorType is "password"
        result = "Incorrect password, please try again."// assigns a value to result
        break;
    
    case "page": // checks if the value of errorType is "page"
        result = "Sorry this page doesn't exist."// assigns a value to result
        break;
        
    default: // the default case, for when errorType has been given a value that doesn't match any of the above cases
        result = "Error message unknown"// assigns a value to result
}

console.log(result) //prints the value of result