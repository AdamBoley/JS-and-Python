let random = Math.random(); //declares a variable called random and assigns it a value of Math.random, a random number between 0 and 1
console.log(random);

let someInteger = Math.floor(25.65); //rounds down the value placed in the brackets
console.log(someInteger);  // 25

let anotherInteger = Math.ceil(25.65); //round up the value placed in the brackets
console.log(someInteger);  // 26

let numbers = []; //declares a new empty array called numbers
for (let i = 0; i < 10; i++) { //uses a for loop to loop 10 times
  numbers.push(Math.floor(Math.random() * 100)); //pushes the value of the calculation to the numbers array
  //The calculation generates a random decimal, multiplies by 100, then rounds it down with Math.floor. The multiplication constant, 100 in this case, can be thought of as the upper value of the random values
}
console.log(numbers); //logs the elements of the array called numbers

//This is fairly common practice for generating a set of random numbers between two values