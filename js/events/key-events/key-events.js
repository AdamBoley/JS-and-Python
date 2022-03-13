function keyPressed(event) {
    
    let key = document.getElementById('key-info');
        
    key.innerHTML = event.key; //modifies the content of the span with id key-info with the key that was pressed
}
