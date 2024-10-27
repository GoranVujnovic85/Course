
//const array = [34, 12, 5, 67, 23, 89, 1, 45, 32, 78];

function shellSort(arr) {
    let n = arr.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i += 1) {
            let temp = arr[i];
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
        }
    }

    return arr; // Vraćamo sortirani niz
}

// Funkcija pokazuje reyultat
function sortAndDisplay() {
    const sortedArray = shellSort(array); // Deklaracija promenjive 
    document.getElementById("resultDisplay").value = sortedArray.join(", "); 
    //console.log("Sortirani niz:", sortedArray); // Daj mi na konzoli
}

// Pozivam sortAndDisplay funkciju da sortira i prikaže rezultat
//sortAndDisplay();
