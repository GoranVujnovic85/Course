
let sum = 0; // Globalna promenljiva za čuvanje sume

function addTheFirstTwoElements(array) {

    sum = array[0] + array[1];

    document.getElementById("resultDisplay").value = "Sum is: " + sum;

   // fibonacci(sum); 

    return sum;

}