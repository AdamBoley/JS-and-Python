
let operands = [// declares an array called operands, and gives it 4 mini-arrays as elements, each mini-array being 2 elements long
    [3, 5],
    [8, 6],
    [1, 2],
    [9, -2]
  ];
  
  
  function addTwo(num1, num2) {// Declares a function with parameters
    return num1 + num2; //adds the two parameters and returns the result
  }
  
 
  let sums = [];  // declare an array and leave it empty
  
  // Use a for loop to iterate the operands and call addTwo()
  for (let pair of operands) {//declare a new variable called pair as a sub-variable of the operands array, and uses a for loop to execute the function for each mini-array in the operands array
    let sum = addTwo(pair[0], pair[1]);  // declares a variable called sum to hold the result of the function, and accesses the two elements of each mini-array
    sums.push(sum);  // pushes the value of the variable called sum to the variable called sums, making each value of sum into an element of the sums array
  }
  
  
  console.log(sums);// Logs the elements of the sums array