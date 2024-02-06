/**
 * @param {number[]} nums
 * @return {number[]}
 */

// create a prefix array and a suffix array
// iterate through nums forwards to get prefix
// iterate backwards through nums to get suffix

// nums = [-1,1,0,-3,3]

var productExceptSelf = function (nums) {
    let prefix = [];
    let prefixProduct = 1;

    for (let i = 0; i < nums.length; i++) { // i = 0: prefix[0] = 1: prefixProduct = -1
        prefix[i] = prefixProduct;          // i = 1: prefix[1] = -1: prefixProduct = 1
        prefixProduct *= nums[i];
    };

    let suffix = [];
    let suffixProduct = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        suffix[i] = suffixProduct;
        suffixProduct *= nums[i];
    }

    let result = [];

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix[i] * suffix[i];
    }

    return result;
};

let nums = [-1, 1, 0, -3, 3];
productExceptSelf(nums);