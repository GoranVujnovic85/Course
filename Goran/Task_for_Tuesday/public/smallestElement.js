
function findSmallestNumber(array) {
   
    //const array = [34, 12, 5, 67, 23, 89, 1, 45, 32, 78];
    
    let smallest = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
        }
    }

    document.getElementById("resultDisplay").value = "The smallest element is: " + smallest;
}