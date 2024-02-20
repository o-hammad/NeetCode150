/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// employ binary search
// 

var searchInsert = function (nums, target) {
    let lo = 0; hi = nums.length - 1;

    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    if (target < nums[lo]) {
        return lo;
    } else {
        return hi + 1;
    }
};