let person = { //a simple Object with data about a person
    firstName: 'John',
    lastName: 'Smith',
    age: 30,
    location: 'USA'
  };
  console.log(person['firstName']);  // square bracket notation, logs John
  console.log(person.lastName);  // dot notation, logs Smith

person['bestFriend'] = 'Mike'; //since the bestFriend property doesn't exist, declaring it like this adds it to the specified Object 
console.log(person['bestFriend']);  // bestFriend now exists in the Object and can be logged

person.wife = 'Mary'; //the same addition method, just using dot notation
console.log(person.wife);  // 'Mary'

console.log(person); //logs the properties and values of the Object, including the added bestFriend and wife properties

person['age'] = 31; //since age has already been declared, declaring age like this with a new value overwrites the extant values
console.log(person['age']);  // logs 31, since the value of age has been updated

person.location = 'Spain'; //as above, but with dot notation
console.log(person.location);  // 'Spain'

delete person['lastName']; //deletes the lastName property and assigned value
delete person.age; //deletes the age property
console.log(person); //logs the properties of person, discluding the lastName and age properties, since these have been deleted

