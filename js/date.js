let today = 1597673635658; //declares the date of today in UNIX time. This is a fixed date, and this would usually be Date.now() to generate a new date

let date = new Date(today); //converts the UNIX time value of the variable today into a semi-human-readable format - 2020-08-17T14:13:55.658Z. You can now do things with this date

console.log(date); // prints the value of date - 2020-08-17T14:13:55.658Z

let day = date.getDate(); //use the getDay method to extract out the date variable's day - the 17th

console.log(day); // prints 17

let month = date.getMonth(); //uses the getMonth method to extract out the date variable's month - the 7th

console.log(month); //prints 7, corresponding to august (the months to 0 to 11)

let year = date.getFullYear(); // uses the getYear method to extract out the date variable's year - 2020

console.log(year); //prints 2020






let newDay = Date.now(); //generates the exact UNIX time of today
let tomorrow = newDay + 86400000;  // 86400000 milliseconds in 1 day, so the time in 24hrs is the UNIX time + 86400000 seconds

console.log(newDay);  // prints the value of newDay in UNIX time
console.log(tomorrow);  // prints the value of tomorrow in UNIX time

let newDayDate = new Date(newDay); //declares a new variable called newDayDate which generates a new Date for the variable newDay. newDayDate is a semi-human-readable format - all components from the year down to the millisecond
let tomorrowDate = new Date(tomorrow); //declares a new variable called tomorrowDate which generates a new Date for the variable tomorrow. tomorrowDate is a semi-human-readable format - all components from the year down to the millisecond

console.log(newDayDate.toDateString());  // converts the value of newDatDate to a more human-readable format - Mon Aug 03 2020
console.log(tomorrowDate.toDateString());  // converts the value of tomorrowDate to a  more human-readable format - Tue Aug 04 2020