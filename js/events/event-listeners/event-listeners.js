let box = document.getElementById("box"); //declares variable called box

function changeBorder() {
    box.style.borderColor = "grey";
}

function changeBackground() {
    box.style.backgroundColor = "pink";
}

function revertBack() {
    box.style.borderColor = "white";
    box.style.backgroundColor = "lightblue";
}

box.addEventListener('click', changeBorder); //an event listener that invokes the changeBorder function. Note the lack of brackets
box.addEventListener('mouseover', changeBackground); //an event listener that invokes the changeBackground function. Note the lack of brackets
box.addEventListener('mouseleave', revertBack); //an event listener that invokes the revertBack function. Note the lack of brackets