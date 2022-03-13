let fruits = ['apples', 'pears', 'cherries', 'bananas', 'peaches', 'oranges']; //declares an array
let subset = fruits.slice(2, 4); // gets a subset or slice of the array, starting at index 2 and going up to but not including index 4
console.log(fruits);
console.log(subset);

fruits.sort(); //sorts the array. In this case alphabetically since the array elements are all strings
console.log(fruits); //logs the reordered array

let vegetables = ['carrots', 'peas', 'beans', 'lettuce'];//declares a new array
let healthyFoods = fruits.concat(vegetables); //joins the fruits and vegetables arrays together

console.log(fruits);
console.log(vegetables);
console.log(healthyFoods);