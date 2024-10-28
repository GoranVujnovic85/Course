
function findMin() {
            if (arrey.length === 0) {
                alert("Please generate the array first.");
                return;
            }
            const minElement = Math.min(...arrey);
            document.getElementById('resultDisplay').value = `Minimum element is: ${minElement}`;
        }