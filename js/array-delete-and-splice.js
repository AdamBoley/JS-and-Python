let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges']; //declares a new array
fruits.splice(2, 1);  // Remove one item starting at index 2
console.log(fruits); //logs all of the elements of the array, minus cherries, which has been spliced out

fruits.delete(3); //deletes the data for the fourth element, replacing it with undefined
console.log(fruits); //logs all of the elements in the array, with undefined replacing the fourth element

fruits.splice(2, 1, 'pineapples', 'mangoes'); //uses splice to add elements. This begins at the third element, remove that element and adds two more elements at that point
console.log(fruits);