
function findLargestNumber(array) {
   
    let largest = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
        }
    }

    document.getElementById("resultDisplay").value = "The largest element is: " + largest;
}