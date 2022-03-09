let fruits = ['apples', 'oranges', 'bananas', 'cherries']; //creates a variable called fruits and gives it a value of an array of fruits
let numberOfFruits = fruits.length; // creates a variable and gives it a value of fruits variable's array length

for (let i = 0; i < numberOfFruits; i++) { //this is a basic for loop - i = 0 is the initializing expression, i <numberOfFruits is the condition, i++ is the incrementing expression, which increases the value of i by 1
  console.log(fruits[i] + ' are delicious!'); //prints the name of each fruit to the terminal along with "are delicious!"
}

console.log('I love fruit!'); //this only executes when the loop has finished executing



let numbers = [42, 65, 0, 9, 73, 10, 11, 44];
let numberLength = numbers.length // for loops that work with arrays (may?) need a second variable that accesses the length of the array

for (let i = 0; i < numberLength; i++) {
    console.log(numbers[i] + 10); //gets the values of the array and adds 10, so the terminal prints 52 75 10 19 83 20 21 54
}