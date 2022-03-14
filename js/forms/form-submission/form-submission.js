let test; //declare an empty variable for later use inside the function

let form = document.getElementById('contact-form'); //shorthand variable for the form

form.addEventListener('submit', handleSubmit); //event listener, note that lack of brackets in the name of the function to be called

function handleSubmit(event) {
    
    event.preventDefault(); //this method prevents the default behaviour of the form, which is to submit the data
    
    console.log('submitting form...'); //logs to the console
    
    let message = document.getElementById('message'); //shorthand variable for the message textarea element
    
    test = message.value; // reassigns the value of the variable called test 
    
    console.log(test); //logs the value of test, which would the value entered into the message text area field by the user
    
    form.submit(); //resumes form submission
    
    console.log('form submitted'); //logs to the console
}