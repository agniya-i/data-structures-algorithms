

let data = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]
function diagonal(arr) {
    let left = 0;
    let right = 0;
    for (let i = 0; i < arr.length; i++) {
        left += arr[i][i];
        right += arr[i][arr.length - 1 - i]
    }

    return left - right;
}

console.log(diagonal(data))