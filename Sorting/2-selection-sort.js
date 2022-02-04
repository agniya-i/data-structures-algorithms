
function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        // minimal - current index
        let min = i;
        let temp = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                // update minimum
                min = j;
            }
        }
        arr[i] = arr[min];
        arr[min] = temp;

    }

    return arr;
}

let test = [6, 2, 8, 10, 1, 4];

console.log(selectionSort(test));