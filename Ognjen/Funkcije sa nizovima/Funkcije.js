const numbers = [16, 23, 66, 87, 1, 43];

function bubbleSort() {
  let arr = [...numbers];
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
          }
      }
  }
  document.getElementById("resultDisplay").innerText = "Rezultat: " + arr.join(", ");
}

function calculateSum() {
  let sum = 0; // Inicijalizuj sumu
  for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i]; // Dodaj svaki broj u sumu
  }
  document.getElementById("resultDisplay").innerText = "Rezultat: " + sum;
}

function findMinimum() {
  const min = Math.min(...numbers);
  document.getElementById("resultDisplay").innerText = "Rezultat: " + min;
}

function findMaximum() {
  const max = Math.max(...numbers);
  document.getElementById("resultDisplay").innerText = "Rezultat: " + max;
}