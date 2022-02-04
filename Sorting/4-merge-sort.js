

function mergeSort(array) {

    if (array.length === 1) {
        return array;
    }

    let left = array.slice(Math.floor(array.length / 2), array.length);
    let right = array.slice(0, Math.floor(array.length / 2));


    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}


function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const test = [6, 5, 12, 10, 9, 1]
const answer = mergeSort(test);
console.log(answer);

