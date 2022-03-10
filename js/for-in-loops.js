//This is a For In Loop
let food = ['pizza', 'steak', 'pasta', 'fruit salad', 'stir fry'];
for (let i in food) { //the variable i corresponds to the indexes of the array
  console.log('index', i, 'is', food[i]); 
}


//A For In Loop for an Object
let gamerScores = { //declares a new Object
    john: 89,
    paul: 725,
    george: 553,
    robert: 9302,
    steve: 733,
};
// write your code here

for (let gamer in gamerScores) { //the variable gamer refers to the property names in the object, because gamer is declared as residing within the object. gamer could be anything, its just chosen for semantic reasons
    console.log(gamer, 'scored', gamerScores[gamer]) //logs each gamer's score, or the value of each property. gamerScores[gamer] refers to the values of each property
}