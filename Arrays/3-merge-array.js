const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];

//cleanest way
function mergeSortedArray(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

//lightest way 

function mergeSortedArray2(arr1, arr2) {
    let mergedArray = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];

    let i = 0;
    let j = 0;

    while (arr1Item || arr2Item) {
        if (arr2Item === undefined || arr1Item < arr2Item) {
            mergedArray.push(arr1Item);
            i++;
            arr1Item = arr1[i];
        } else {
            mergedArray.push(arr2Item);
            j++;
            arr2Item = arr2[j];
        }

    }

    return mergedArray;
}


console.log(mergeSortedArray2(arr1, arr2)); 
