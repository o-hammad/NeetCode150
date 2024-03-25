/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let ans = [];
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        const x = Math.abs(nums[i]);
        if (nums[x - 1] < 0) {
            ans.push(x)
        }
        nums[x - 1] *= -1;
    }

    return ans;
};

// iterate from 1 to n and mark the index as negative if visited
// 