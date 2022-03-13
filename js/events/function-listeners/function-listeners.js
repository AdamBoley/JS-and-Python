let box = document.getElementsByClassName("box"); //generates an array of the instances of the class box

let boxArray = box.length; //returns the number of instances in the above array, which is necessary for the event listener loop below

function boxClicked() { //calls the function designated in the HTML
    
    //Note extensive use of the "this" keyword, which tells the function to target the specific element that is clicked

    if(this.style.backgroundColor === "green") { //checks if the color is green

        this.style.backgroundColor = "orange"; //if so, switch color to orange
    }
    
    else if(this.style.backgroundColor === "orange") {

        this.style.backgroundColor = "green";
        
    }
    //Note lack of else statement - perhaps these are not strictly necessary?
}

for (let a = 0; a < boxArray; a++) {
    box[a].addEventListener('click', boxClicked);
}

//array indexing would also work here, with separate addEventListener statements for each of the 6 instances of box
//However, a for loop is cleaner, and effectively generates these 6 statements