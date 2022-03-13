function addSquare() {
    let add = document.createElement("div");
    
    add.setAttribute("class", "square");
    
    document.getElementById("squares-wrapper").appendChild(add);
}

function removeSquare() {
    let remove = document.getElementsByClassName("square")[0];
    
    remove.remove();
}