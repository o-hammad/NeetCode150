/**
 * @param {number[]} nums
 * @return {number}
 */

// sort the array
// create a variable with the sum of the entire array
// iterate through the sorted array backwards
// at each step, subtract nums[i] from sum and see if nums[i] < sum
// if it is, add nums[i] back to sum and return perimeter
// if not, keep iterating

var largestPerimeter = function (nums) {
    let numsSorted = nums.sort((a, b) => a - b);
    let sum = 0;

    numsSorted.forEach((num) => {
        sum += num;
    })

    for (let i = numsSorted.length - 1; i >= 0; i--) {
        sum -= numsSorted[i];
        if (numsSorted[i] < sum) {
            sum += numsSorted[i];
            return sum;
        }
    }

    return -1;
};