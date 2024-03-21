/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//[0,1,0,3,12] // [1, 0, 0, 3, 12] // [1, 3, 0, 0, 12] // [1, 3, 12, 0, 0]
var moveZeroes = function (nums) {
    let zero = 0;

    for (let i = 0; i < nums.length; i++) { // 4 // zero = 2
        if (nums[zero] === 0 && nums[i] !== 0) {
            let temp = nums[zero];
            nums[zero] = nums[i];
            nums[i] = temp;
        }
        if (nums[zero] !== 0) {
            zero++;
        }
    }
};

// use two pointers
// if nums[i] == 0, then swap
// let left pointer start at 0
// let right pointer starts at 0
// when left pointer find a 0, store index
// when right pointer comes across non-zero, swap // iterates through the for loop