/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) { // [11,13,15,17]
    let l = 0
    let r = nums.length - 1

    while (l < r) {
        const mid = l + Math.floor((r - l) / 2) // 0
        if (nums[mid] > nums[r]) {
            l = mid + 1
        } else {
            r = mid // 0
        }
    }

    return nums[l]
};

// binary search: mid, hi, lo
// 