

function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }

    return arr;
}

let test = [6, 2, 8, 10, 1, 4];

console.log(insertionSort(test));