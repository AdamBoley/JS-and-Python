for (let i = 0; i <= 1000000; i++) {
    if (i === 5) {
      console.log('Breaking!');
      break; //This is a good example of a break statement within an IF check. 
      //In this case, the loop has been set to print the numbers 1 to 1,000,000 in the terminal - a challenging, perhaps impossible task. However, the IF check stops the loop after 5 iterations
    }
    console.log(i);
  }
  console.log('Loop has been broken')

for (let i = 0; i <= 10; i++) { //This loop prints the numbers 0 to 10 in the terminal
if (i % 2 !== 0) {
    continue; //this demonstrates the continue statement, and the IF check forces the loop to skip any iterations where the remainder of i / 2 would not equal 0
    //This effectively forces only even numbers to be printed, since odd numbers would leave a remainder of not 0
}
console.log(i);
}
console.log('Loop complete.');

//the loop below combines break and continue
for (i = 0; i <= 20; i++) { //sets up a loop that logs 0 to 20 inclusive
    
    if (i % 2 !== 0) { //uses a modulo to check if the value of i is odd (remainder is not equal to 0)
        continue; //if i is odd, skip the iteration
    }
    
    if (i === 10) { //uses a second IF statement to break out of the loop once i is strictly equal to 10
        break;
    }
    
    console.log(i)
}




//Below is a more complex example of a loop, with nested loops
let i = 0;
iLoop: //this is a label, which is used below for specifying which loop to break
  while (i <= 1000000) { //counts for 1 to 1,000,000
    let j = 0;
    jLoop: //This is another label, which is not used here but adds additional readability
      while (j <= 100) { //counts from 0 to 100
        if (j === 3) { //activates once j is strictly equal to 3
        console.log('Breaking the outer loop from the inner loop.');
        break iLoop; //breaks out of iLoop
        }
        console.log('j is', j);
        j++;
      }

    if (i === 5) {
      console.log('Breaking!');
      break;
    }

    console.log('i is', i);
    i++;
  }
console.log('Loop has been broken.');