function clearResult() {
  document.getElementById('result').value = '';
}

function appendToResult(value) {
  document.getElementById('result').value += value;
}

function calculateResult() {
  const resultField = document.getElementById('result');
  const expression = resultField.value;

  if (expression) {
    try {
      resultField.value = eval(expression);
    } catch {
      resultField.value = 'Error';
    }
  }
}
