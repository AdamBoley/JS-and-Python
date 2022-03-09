let i = 10;
do { //the do code always executes at least once, regardless of the value of i
  console.log('checking i...');
  console.log('i is', i);
} while (i < 10); // in a standard while loop, this wouldn't execute, since i is hard-set to 10
console.log('Loop complete')


let attemptedUploads = 0
do {
    console.log("Attempting upload...")
    attemptedUploads++ //the incrementor statement doesn't need to be i or x or n, it can be any variable
} while (attemptedUploads < 5)

console.log("Upload attempts exceeded maximum")