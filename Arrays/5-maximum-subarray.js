

// https://leetcode.com/problems/maximum-subarray/description/
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.


// Input : 
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// Output: [4,-1,2,1] has the largest sum = 6.

// brute force
function maximumSubarray(arr) { // O(n^2)
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let currentSum = 0;
        for (let j = i + 1; j < arr.length; j++) {
            currentSum += arr[j];
            if (currentSum > max) {
                max = currentSum;
            }
        }
    }

    return max;
}

// Kadane's algorithm

function maximumSubarray2(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        arr[i] = Math.max(arr[i], arr[i] + arr[i - 1]);
        max = Math.max(arr[i], max);
    }

    return max;
}


console.log(maximumSubarray(nums));