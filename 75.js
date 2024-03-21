/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// [2,0,1] [0, 1, 2]
var sortColors = function (nums) {
    let counter = {};

    for (let num of nums) {
        counter[num] = counter[num] + 1 || 1;
    }

    // {2:1, 0:1, 1:1}

    let red = counter[0]; // 0
    let white = counter[1]; // 0
    let blue = counter[2];  // 0

    for (let i in nums) {
        if (red > 0) {
            nums[i] = 0;
            red--;
        } else if (white > 0) {
            nums[i] = 1;
            white--;
        } else {
            nums[i] = 2;
            blue--;
        }
    }
};

var sortColors = function (nums) {

};

// use a hash counter to count the occurrences
// iterate through the hash, and construct the array using the key and counter