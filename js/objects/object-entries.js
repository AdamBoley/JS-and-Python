//Demonstrates the object.entries() method
let petNames = { //creates an object
    dog: 'Fido',
    cat: 'Max',
    fish: 'Bubbles',
    python: 'Mr. Slithers',
  }
  
  let pairs = Object.entries(petNames); //declares a variable called pairs, and gives it an array generated from the object by the object.entries method
  //the array called pairs is an array, and each value within that array is another array. These sub-arrays consist of two elements - the original property and value 
  for (let pair of pairs){ //the variable pair refers to each sub-array within the generated pairs array
    console.log(pair[1], 'is a', pair[0]);//logs Fido is a dog, etc, because pair[1] accesses the second element of the pair sub-array, Fido, and pair[0] accesses the first element, dog
  }
  //pair is another variable, declared I think as a sub-variable of the pairs variable. Words are for semantic meaning. Perhaaps pair refers to each mini-array generated from a property / value pair?