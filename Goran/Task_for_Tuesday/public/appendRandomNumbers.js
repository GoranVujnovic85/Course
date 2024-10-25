/* global variable */
let arrey = [];

function appendRandomNumbers() {
    
    arrey = [];

    for (let i = 0; i < 10; i++) {
        const randomNum = Math.floor(Math.random() * 100) + 1; 
        arrey.push(randomNum); 
    }

    document.getElementById('display').value = arrey.join(', '); 
}