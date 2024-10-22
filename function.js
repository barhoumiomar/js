function insertionSort(arr) {
    // Parcourt le tableau à partir du deuxième élément
    for (let i = 1; i < arr.length; i++) {
        // L'élément à insérer
        let key = arr[i];
        // L'index de l'élément précédent
        let j = i - 1;

        // Déplace les éléments du tableau trié qui sont plus grands que key
        // vers une position à droite
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        // Insère l'élément key à sa position correcte
        arr[j + 1] = key;
    }
    return arr;
}

// Exemple d'utilisation
const array = [5, 2, 9, 1, 5, 6];
const sortedArray = insertionSort(array);
console.log(sortedArray); // Sortie: [1, 2, 5, 5, 6, 9]
