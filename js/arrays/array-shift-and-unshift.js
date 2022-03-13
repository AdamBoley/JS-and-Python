let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges']; //declares a new array
let firstItem = fruits.shift(); //declares a new variable and uses the shift method to remove the first item, in this case apples

//NOTE THAT VARIABLES ARE NOT NECESSARY TO EXECUTE THE METHOD ON THE ARRAY - fruits.shift on a new line would be sufficient
//It is just that we want to do something with the shifted element, as below:

console.log(firstItem); //logs the removed first item, in this case apples
console.log(fruits);// logs the array, minus apples

let newLength = fruits.unshift('mangoes'); //declares a variable and uses the unshift method to add a new element, in this case mangoes
console.log(newLength); //logs the length of the new array, in this case 6
console.log(fruits); // logs all of the array's elements, including mangoes as the first element