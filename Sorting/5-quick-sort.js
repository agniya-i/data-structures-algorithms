// TODO

// const test = [85, 47, 10, 2, 5, 55, 60, 140, 0];


// function quickSort(array, left, right) {
//     const length = array.length;
//     let pivot;
//     let partitionIndex;

//     if (left < right) {

//         pivot = right;

//         quickSort(array, left, partitionIndex - 1);
//         quickSort(array, partitionIndex), right;
//     }


//     return array;
// }

// function partition(array, pivot, left, right) {
//     let pivotValue = array[pivot];
//     let partitionIndex = left;

//     for (let i = left; i < right; i++) {
//         if (array[i] < pivot) {
//             swap(array, i, partitionIndex)
//             partitionIndex++;
//         }
//     }
//     swap(array, right, partitionIndex)
//     return partitionIndex;
// }