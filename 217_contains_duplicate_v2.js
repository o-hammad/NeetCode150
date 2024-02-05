/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let hash = {};

    nums.forEach((num) => {
        hash[num] ? hash[num]++ : hash[num] = 1;
    })

    let repeating = Object.values(hash).filter(value => value >= 2);

    if (repeating.length) {
        return true
    } else {
        return false
    }
};