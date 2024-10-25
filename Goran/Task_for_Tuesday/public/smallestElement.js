
function findSmallestNumber(arrey) {
   
    //const arrey = [34, 12, 5, 67, 23, 89, 1, 45, 32, 78];
    
    let smallest = arrey[0];

    for (let i = 1; i < arrey.length; i++) {
        if (arrey[i] < smallest) {
            smallest = arrey[i];
        }
    }

    document.getElementById("resultDisplay").value = "The smallest element is: " + smallest;
}