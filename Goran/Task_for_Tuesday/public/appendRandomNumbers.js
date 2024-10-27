/* global variable */
let array = [];

function appendRandomNumbers() {
    
    array = [];

    for (let i = 0; i < 10; i++) {
        const randomNum = Math.floor(Math.random() * 100) + 1; 
        array.push(randomNum); 
    }

    document.getElementById('display').value = array.join(', '); 

    
}