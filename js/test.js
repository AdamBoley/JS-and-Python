// function isFourtyTwo(number) {
//     if (number = 42) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// let test = isFourtyTwo(39)
// console.log(test)

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // must reverse, and can only use length method

// let arrayLength = array.length
// let newArray = []

// for(let i = 0; i <= (arrayLength - 1) / 2; i++) {
//     let el = array[i];
//     array[i] = array[arrayLength - 1 - i];
//     array[arrayLength - 1 - i] = el;
// }

// for (let i = array.length; i >= 0; i--) {
//     [array[array.length - 1], array[i]] = [array[i], array[array.length - 1]]
// }

// for(let i in array) {
    
// }

// console.log(array)
// console.log(typeof array)
// console.log(arrayLength)
// console.log(newArray)

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function reverseArray(array) {
    for(let i = 0; i <= (array.length - 1) / 2; i++) {
        let el = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = el;
    }
    return array
}


array = reverseArray(array)
console.log(array)


// const thing = "hello"
// console.log(thing)
// thing = "world"
// console.log(thing)