
//let sum;
//let n = addTheFirstTwoElements();

function fibonacci(n) {

    //const n = 10;
    const fibonacci = [0, 1];

    for (let i = 2; i <= n; i++) {

        fibonacci [i] = fibonacci [i-1] + fibonacci [i-2];
    }

    document.getElementById("resultDisplay").value = fibonacci.join(', ');
}