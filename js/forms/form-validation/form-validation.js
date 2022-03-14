let usernames = ["Harry", "Daisy", "Michael", "Sarah", "Sally"]; //declares an array of active usernames. Realworld application could be similar to a database of nicknames, handles or display names, which must be unique

let form = document.getElementById('registration-form'); //shorthand variable for the form

form.addEventListener('submit', handleSubmit); //event listener for the form, listens for the submit event and calls the function

let errorMsg = document.getElementById('errors'); //declares a variable for the error message text element

function handleSubmit(event) {
    
    event.preventDefault(); //prevents default submission
    
    let username = form.elements['username'].value; //this is similar to a get method, but since it is inside a function tied to a form, this syntax is permissible
    //Gets the value of the username input
    
    if(usernames.includes(username)) { //conditional checker to see if the active usernames array includes the supplied username
            
        errorMsg.innerHTML = `Sorry, the username ${username} is already in use. Please choose another username.`; //uses a template literal to call and display the username in an error message, which is posted to the error message text element
    }
        
    else {//activates if the supplied user name is not in the array of active usernames
        usernames.push(username); //gets the supplied username and pushes it / adds it the end of the active usernames array
        
        form.submit(); //resumes form submission
        
        console.log(usernames);//logs the array of active usernames plus the added username
    }
}