let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges']; //declares an array
let lastItem = fruits.pop(); //uses a variable called lastItem to execute the pop method on the array, knocking off the last item

//NOTE THAT VARIABLES ARE NOT NECESSARY TO EXECUTE THE METHOD ON THE ARRAY - fruits.pop on a new line would be sufficient
//It is just that we want to do something with the popped element, as below:

console.log(lastItem); //logs the last item that has been knocked off, in this case oranges
console.log(fruits); //logs the elements of the array, minus oranges, which has been knocked off

let newLength = fruits.push('mangoes'); //uses a variable to add a new element to the end of the array, in this case mangoes
console.log(newLength); //logs the new length of the array, in this case 6
console.log(fruits); //logs the elements of the new array, as above except with mangoes on the end