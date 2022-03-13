let title = "This is the Title of a Book"; //declares a variable called title, with a value of a string with some uppercase letters
let lowerTitle = title.toLowerCase();//declares a second variable with a value of a title and the toLowerCase method, which lowercases the string value of the title variable
console.log(lowerTitle);  // displays the value of the title variable in lowercase letters


// These variables will be sliced and concatinated
// to form the emailAddress variable:
let fullName = 'Andrew Martin';
let domainName = 'gmail';
let tld = 'com';
let emailAddress = fullName.toLowerCase().slice(0, 6) + '.' + fullName.toLowerCase().slice(7, 13) + '@' + domainName + '.' + tld
//The emailAddress variable includes two instances of the fullName variable, each cut off by the slice method so that Andrew and Martin can be separated by a dot
//both instances of fullName are also forced to lower case by the toLowerCase method as well
//The emailAddress variable concatenates both cut-off fullName variables with some other strings containing the dots and the @ symbol with the domainName and tld variables



// This will log the emailAddress variable to the console
console.log(emailAddress);//The final output here is the proper email address