let cocktails = ["Daiquari", "Dry Martini", "Margatrita", "Manhattan", "Mojito", "Mai Tai"]; //declares an array of cocktails

let list = document.createElement('ul'); //declares a variable that creates an unordered list

let listItems = ""; //declares a variable that has an empty string

for (let cocktail in cocktails) { //loops over the cocktails array. cocktail refers to each array element
    listItems += `<li>${cocktails[cocktail]}</li>` //generates list item elements using template literals from the cocktails array, 
    //then uses += which works like string concatenation to add each array element as a string to the listItems variable. Works similar to the array .push method
    //effectively the listItems variable, once fully generated, would look like a long line of <li></li> elements 
}

list.innerHTML += listItems; //adds the value of the listItems variable as the inner value of the unordered list

document.body.appendChild(list); //adds the fully generated list to the HTML document, which generates the list