let prop = "name"; //declares a variable for later use in the object below
let person = {[prop]: "john"};

console.log(person.name); //will still log "john" to the terminal, even though there is no explicitly defined property called name

console.log(person[prop]); //this does the same thing

let person2 = {
    [prop]: "john", 
    lastName: "smith",
    ["full" + prop]: "john smith" //creates a property that can be accessed with fullname
};

console.log(person.fullname)//even though there is no explictly defined fullname property, it can still be logged thanks to the computed property declared above