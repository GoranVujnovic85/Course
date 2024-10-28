
let arrey = [];

function appendRandomNumbers() {
    
    arrey = [];
	// Clear the display input before sorting
        document.getElementById('display').value = '';
	
	// Generate random numbers
    for (let i = 0; i < 10; i++) {
        const randomNum = Math.floor(Math.random() * 100) + 1; 
        arrey.push(randomNum); 
    }
	
	// Display each number one by one
            arrey.forEach((num, index) => {
                setTimeout(() => {
                    document.getElementById('display').value += (index > 0 ? ', ' : '') + num; // Append number to the input
                }, index * 200); // Delay each number by 200 milisecond
            });
	
    
}
