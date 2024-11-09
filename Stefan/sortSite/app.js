const numbers = [2, 5, 37, 42, 23, 11, 56, 9];

function bubbleSort() {
  let arr = [...numbers];
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
          }
      }
  }
  document.getElementById("resultDisplay").innerText = "Result: " + arr.join(", ");
}
function arrayMin() {
  const min = Math.min(...numbers);
  document.getElementById("resultDisplay").innerText = "Result: " + min;
}
function arrayMax() {
  const min = Math.max(...numbers);
  document.getElementById("resultDisplay").innerText = "Result: " + min;
}
function Sum() {
  let sum = 0; 
  for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
  }
  document.getElementById("resultDisplay").innerText = "Result: " + sum;
}