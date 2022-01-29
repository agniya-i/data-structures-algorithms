
const nums = [2, 7, 11, 15];
const target = 13;

// brute force way;
function twoSum(nums, target) {
    if (!nums.length || !target) return;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] + nums[i] === target) {
                return [i, j];
            }
        }
    }
    return undefined;
}


// using hashMap
function twoSum2(nums, target) {
    if (!nums.length || !target) return;

    let map = {}

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.hasOwnProperty(complement)) {
            return [i, map[complement]];
        }
    }
    return undefined;
}

twoSum(nums, target);