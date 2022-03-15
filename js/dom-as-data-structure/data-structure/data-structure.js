let ol = document.getElementsByTagName('ol')[0]; //declares a variable called ol, which accesses the unordered list elements of the document. 
//Even though there is only 1 ol element, the .getElementsByTagName method still returns an array, even though it is an array of 1. To specify the exact instance, use array indexing, as used here with [0]

let listItems = ol.children; //returns an array of the unordered list's children

let first = listItems[0].textContent; //accesses the first element of the array generated above and returns the text content

console.log(first); //logs the text content

let fourth = listItems[3].textContent;//accesses the fourth element of the array generated above and returns the text content

console.log(fourth); //logs the text content