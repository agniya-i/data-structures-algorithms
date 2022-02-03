// factorial function

function findFactorialRecursive(number) {
    if (number > 1) {
        return number * findFactorialRecursive(number - 1);
    }
    return number;
}

function findFactorialIterative(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

// console.log(findFactorialIterative(5));

// fibonacci function 

function findFibonacciRecursive(n) {
    if (n < 2) return n;
    return findFibonacciRecursive(n - 1) + findFibonacciRecursive(n - 2);
}

function findFibonacciIterative(n) {
    let arr = [0, 1];
    for (let i = 0; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }

    return arr[n];
}

console.log(findFibonacciRecursive(10));