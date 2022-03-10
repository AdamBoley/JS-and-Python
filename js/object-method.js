let car = { //create a new object
    location: 'garage',
    ignition: 'off',
    fueled: true,
  };
  //The three below are static methods
  console.log(Object.keys(car)); //returns properties
  // returns ["location", "ignition", "fueled"]
  
  console.log(Object.values(car)); //returns values
  // returns ["garage", "off", true]
  
  console.log(Object.entries(car));  
  // returns [Array(2), Array(2), Array(2)]
  // Expanded view of the three arrays:
  // 0: (2) ["location", "garage"]
  // 1: (2) ["ignition", "off"]
  // 2: (2) ["fueled", true]


// these are instance methods
console.log(car.hasOwnProperty('ignition'));  // returns true
console.log(car.hasOwnProperty('drive'));  // returns false
console.log(car.toString()); //returns a string

let car2 = {
    location: 'garage',
    ignition: 'off',
    fueled: true,
    start: function() { //start is a property that initiates a custom method, which is a function that modifies the value of ignition to on, "starting" the car
      this.ignition = 'on'; //this is the code contained within the function, which executes when the custom 'start' method is called 
    }
  };
  
  console.log(car.ignition); //returns off
  car.start(); //accesses the start property, which activates the function, changing the value of ignition from 'off' to 'on'
  console.log(car.ignition); //returns on, as the function attached to the start property has completed, modifying the value of ignition