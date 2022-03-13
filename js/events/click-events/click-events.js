function changeCards() {
    
    let changeCard = document.getElementsByClassName('card'); //gets all instances of the card class and generates an array of them
    
    let cardArray = changeCard.length; //declares a variable with the number of instances of the above array
    
    for (let i = 0; i < cardArray; i++) {//sets up a loop to loop over the array
        changeCard.item(i).style.backgroundColor = "red"; //loops over the array to change the color of the divs of class card
    }
    
}