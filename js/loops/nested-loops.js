//This is a nested loop
//For each iteration of the outer loop (x), the inner loop (y) completes all of its iterations
//x then increases and loop x executes again, with loop y completing all of its iterations again, and so on until the end condition for the outer loop is achieved 
for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      let point = [x, y]; //in this case, the loops produce values of x and y which are logged as coordinates on x and y axes
      console.log(point);
    }
  }


for (let x = 0; x <= 3; x++) { //this is slightly simplified version of the above nested loop, where the values of x and y are simply logged to the terminal in a string
    for (let y = 200; y <= 203; y++) {
        console.log("Outer loop x: " + x + " " + "Inner loop y: " + y)
    }
}