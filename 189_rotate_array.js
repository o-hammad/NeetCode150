/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// while loop, while k > 0
// in while loop, nums.unshift(nums.pop());
// decrement k

// variable for complete rotations, k % nums.length
// nums = [-1,-100,3,99], k = 2
var rotate = function (nums, k) {
    let remainderRotations = k % nums.length; // 2
    let numberOfElements = nums.length - remainderRotations;
    let temporary = nums.splice(0, numberOfElements);

    nums.push(...temporary)
    // nums = nums.reverse(); // [99, 3, -100, -1]

    // reversePortion(nums, 0, remainderRotations - 1); // [3, 99, -100, -1]
    // reversePortion(nums, remainderRotations, nums.length - 1); // [3, 99, -1, -100]
};

var reversePortion = function (array, start, end) {
    while (start < end) {
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
    }
}