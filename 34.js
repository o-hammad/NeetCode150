// Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].


// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]

// Read the problem
// Rephrase the problem to the interviewer.
// Ask clarifying questions
// Whiteboard/ think of a solution
// Pseudo code
// Jump into code

// iterate through sorted array forwards to find first occurrence
// iterate through sorted array backwards to find last occurrence
// return [-1, -1] if not found

// var searchRange = function(nums, target) {
//     let result = [-1, -1];

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             result[0] = i;
//             break;
//         }
//     }

//     for (let j = nums.length - 1; j >= 0; j--) {
//         if (nums[j] === target) {
//             result[1] = j;
//             break;
//         }
//     }

//     return result;
// }

// set start variable = 0; set end variable = nums.length - 1; set mid by subtracting hi - lo / 2
// if target is found, keep searching but store indicies in variable
// [ 1,3,5,5,5,8,9 ] , 5
//      RL       
//.        V

var searchRange = function (nums, target) {
    let l = 0, r = nums.length - 1;
    let leftTarget = -1, rightTarget = -1;
    let l2 = 0, r2 = nums.length - 1


    while (l <= r) {
        // let mid = l + Math.floor((r - l + 1) / 2) 
        let mid = Math.floor((l + r) / 2) // l+r>>1

        if (nums[mid] === target) {
            leftTarget = mid;
            r = mid - 1;
        } else if (nums[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    while (l2 <= r2) {
        // let mid = Math.floor((r - l + 1) / 2) 
        let mid = Math.floor((l2 + r2) / 2) // l+r>>1

        if (nums[mid] === target) {
            rightTarget = mid;
            l2 = mid + 1;
        } else if (nums[mid] > target) {
            r2 = mid - 1;
        } else {
            l2 = mid + 1;
        }
    }


    return [leftTarget, rightTarget];
}

const arr1 = [5, 7, 7, 8, 8, 10]
const arr2 = []
console.log(searchRange(arr1, 8))
console.log(searchRange(arr1, 6))
console.log(searchRange(arr2, 6))