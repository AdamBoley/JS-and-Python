if (memberType === 'basic') {
price = 5;
} else if (memberType === 'pro') {
price = 10;
} else if (memberType === 'elite') {
price = 20;
} else {
price = 0;
}
console.log(price);  // 20
//This is an example of an IF statement with an additional ELSE IF condition that allows for more options

let memberType = 'elite'; //This is a more complex ternary condtional with more condtitions - it is more equivalent to an IF statement with an additional ELSE IF part
let price = memberType === 'basic' ? 5
          : memberType === 'pro' ? 10
          : membertype === 'elite' ? 20
          : 0;
//This is the ternary conditional version of the above 3-term IF statement

