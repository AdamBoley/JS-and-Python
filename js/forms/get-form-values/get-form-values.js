function getFormDetails(event) {
    event.preventDefault(); //advanced concept, prevents form submission
    
    let name = document.getElementById('name'); //shorthand variable for the name input element
    let email = document.getElementById('email'); //shorthand variable for the email input element
    
    let nameResult = document.getElementById('name-result'); //shorthand variable for the name-result element, which is an empty p element
    let emailResult = document.getElementById('email-result'); //shorthand variable for the email-result element, which is an empty p element
    
    nameResult.innerHTML = name.value; //gets the user-inputted value of the name-result element and adds it to the empty p element defined above
    emailResult.innerHTML = email.value; //gets the user-inputted value of the email-result element and adds it to the empty p element defined above
    
}

let newsletterForm = document.getElementById("newsletter-signup"); //shorthand variable for the form

newsletterForm.addEventListener('submit', getFormDetails); //event listener for the submit event, calls getFormDetails function