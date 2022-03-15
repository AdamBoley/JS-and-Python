function buildTableData() { //declares a function
    
    let tableBody = document.getElementsByTagName('tbody')[0]; //finds the first tbody element, the table body
    
    let tableRows = tableBody.children; //generates an array of the table body elements' children - the tables rows
    
    let reviews = []; //empty array that is filled in the loop below. When done, it will hold an array of objects
    
    for (let tableRow of tableRows) { //tableRow is a variable that represents the array elements of the tableRows variable
        
        let productReview = {}; //empty object
        
        let tableDetails = tableRow.children; //accesses the table rows and generates an array of the table details
        
        productReview.name = tableDetails[0].textContent; //creates properties for the productReview object and sets the values to the text content of the array generated above, which correspond to each cell of the table
        productReview.rating = tableDetails[1].textContent;
        productReview.review = tableDetails[2].textContent;
        
        reviews.push(productReview); //pushes each completed object to the empty array
        
        
    }
    return reviews; //returns the filled array of objects for later use outside the function
}

let data = buildTableData(); //this is how a returned value from a function is accessed. The variable data is given the name of the function, including the returned value, so it can be accessed outside the function

console.log(data); //logs the generated array