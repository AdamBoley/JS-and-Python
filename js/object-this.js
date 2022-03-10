//an exploration of the This keyword

//start, drive, park, refuel and stop are all custom methods which exist as properties. Their values are functions that modify the values of other properties with defined values
//These custom properties are all owned by the car object, which is what allows use of the this keyword
let car = {
    location: 'garage',
    ignition: 'off',
    fueled: true,
    start: function() {
      this.ignition = 'on'; //the This keyword tells the function to look within the car object for the property to modify
    },
    drive: function() {
      this.location = 'street';
    },
    park: function() {
      this.location = 'garage';
    },
    refuel: function() {
      this.location = 'gas station';
      this.fueled = true;
    },
    stop: function() {
      this.ignition = 'off';
    },
  };

  // Now we can "use" the car:
car.start();
console.log(car.ignition); //returns on, since the start property has been accessed and the ignition has been turned to pm
car.drive();
console.log(car.location);// returns on, returns street

// Ran out of gas!
car.fueled = false; //sets fueled to false
car.refuel(); // executes refuel property
console.log(car.location); //returns gas station
console.log(car.fueled); //returns true

// Let's go home
car.drive();
console.log(car.location);
car.park();
console.log(car.location);
car.stop();
console.log(car);
  


//Another object that is manipulated by custom methods
let classroom = {
    numOfStudents: 0,
    schoolHours: false,
    playtime: false,
    openSchool: function() {
        this.schoolHours = true;
        this.numOfStudents = 20;
    },
    breakTime: function() {
        if (this.schoolHours) {
            this.playtime = true;
        }
    },
};

classroom.openSchool();

console.log(classroom.numOfStudents);

classroom.breakTime();

console.log(classroom.playtime);
