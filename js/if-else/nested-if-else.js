let user = true;
let emailVerified = false;

if (user) { //This is a nested IF statement
    
    if (emailVerified) { 
        console.log("Welcome to our web-site") //This only executes if both user and emailVerified return as true
    }
    else {
        console.log("Please verify your email") //This executes if user returns as true and emailVerified returns as false
    }
}
else { //additional nesting can occur in the else condition as well
    console.log("You need to be a user to visit this page") //this executes if user returns as false
}