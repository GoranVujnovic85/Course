function sortArray() {
            if (arrey.length === 0) {
                alert("Please generate the array first.");
                return;
            }
            const sortedArray = [...arrey].sort((a, b) => a - b);
            document.getElementById('resultDisplay').value = sortedArray.join(', ');
			
			
        }