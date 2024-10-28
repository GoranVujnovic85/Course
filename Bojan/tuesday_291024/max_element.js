
function findMax() {
            if (arrey.length === 0) {
                alert("Please generate the array first.");
                return;
            }
            const maxElement = Math.max(...arrey);
            document.getElementById('resultDisplay').value = `Maximum element is: ${maxElement}`;
        }